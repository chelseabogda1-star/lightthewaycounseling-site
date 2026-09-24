export default function Logo({ className = "brand__mark" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* handle */}
      <path
        d="M14.5 6.5a5.5 5.5 0 0 1 11 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* top cap */}
      <path
        d="M12 9.5h16l-2 3H14l-2-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* glass body */}
      <path
        d="M14 12.5h12l2 16.5H12l2-16.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* base */}
      <path
        d="M10.5 29h19v3.5h-19V29Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* flame */}
      <path
        d="M20 17.2c1.9 1.6 2.8 3 2.8 4.5a2.8 2.8 0 1 1-5.6 0c0-1.5.9-2.9 2.8-4.5Z"
        fill="#b5813c"
      />
    </svg>
  );
}
