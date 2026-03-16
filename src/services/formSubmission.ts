export type InquiryPayload = {
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  month?: string;
  message?: string;
  country?: string;
  roomPreference?: string;
  experience?: string;
};

const endpoint = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

const fieldAliases: Record<string, string[]> = {
  formType: ["formType", "form_type", "type"],
  name: ["name", "full_name", "et_pb_contact_name_0"],
  email: ["email", "email_address", "et_pb_contact_email_0"],
  phone: ["phone", "phone_number", "whatsapp", "et_pb_contact_mobile_0"],
  course: ["course", "course_name", "et_pb_contact_course_name_0"],
  month: [
    "month",
    "preferred_month",
    "et_pb_contact_course_joining_month_0",
  ],
  message: ["message", "notes", "et_pb_contact_message_0"],
  country: ["country", "et_pb_contact_country_0"],
  roomPreference: ["roomPreference", "et_pb_contact_room_preference_0"],
  experience: ["experience", "et_pb_contact_yoga_experience_0"],
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
