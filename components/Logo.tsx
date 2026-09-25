/* eslint-disable @next/next/no-img-element */
export default function Logo({
  variant = "dark",
  height = 44,
}: {
  /** "dark" = black wordmark for light backgrounds, "light" = cream wordmark for dark ones */
  variant?: "dark" | "light";
  height?: number;
}) {
  return (
    <img
      className="brand__logo"
      src={variant === "light" ? "/logo-light.png" : "/logo.png"}
      alt="Light The Way Counseling, PLLC"
      style={{ height, width: "auto" }}
      width={1289}
      height={799}
    />
  );
}
