type SitemarkIconProps = {
  className?: string;
};

export default function SitemarkIcon({ className }: SitemarkIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" />
      <path
        d="M10 20.5L13.5 11.5H15.8L19.3 20.5H17.2L14.7 13.8L12.1 20.5H10Z"
        fill="white"
      />
      <path d="M20.4 11.5H22.3V20.5H20.4V11.5Z" fill="white" />
    </svg>
  );
}
