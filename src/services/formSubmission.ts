export type InquiryPayload = {
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  month?: string;
  message?: string;
};

const endpoint = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

const fieldAliases: Record<string, string[]> = {
  formType: ["formType", "form_type", "type"],
  name: ["name", "full_name"],
  email: ["email", "email_address"],
  phone: ["phone", "phone_number", "whatsapp"],
  course: ["course", "course_name"],
  month: ["month", "preferred_month"],
  message: ["message", "notes"],
};

export async function submitInquiry(payload: InquiryPayload) {
  if (!endpoint) {
    return { ok: false, reason: "missing-endpoint" } as const;
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    if (!value) {
      return;
    }

    const aliases = fieldAliases[key] ?? [key];
    aliases.forEach((alias) => body.append(alias, value));
  });
  body.append("source", "yogaswc-webapp");
  body.append("submitted_at", new Date().toISOString());

  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    // Apps Script + no-cors does not expose response body/status.
    return { ok: true } as const;
  } catch {
    return { ok: false, reason: "network" } as const;
  }
}
