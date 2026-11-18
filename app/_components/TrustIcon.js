export default function TrustIcon({ name, size = 28 }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "cap":
      return (
        <svg {...p}>
          <path d='M2 12l14-7 14 7-14 7z' />
          <path d='M8 15.5V22c0 2 4 4 8 4s8-2 8-4v-6.5' />
        </svg>
      );
    case "heart":
      return (
        <svg {...p}>
          <path d='M16 27S4 20 4 12a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 8-12 15-12 15z' />
        </svg>
      );
    case "apple":
      return (
        <svg {...p}>
          <path d='M16 9c-3-3-10-1-10 7 0 6 4 11 7 11 1.2 0 2-.6 3-.6s1.800.6 3 .6c3 0 7-5 7-11 0-8-7-10-10-7z' />
          <path d='M16 9c0-3 1-5 4-6' />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <rect x='6' y='14' width='20' height='14' rx='3' />
          <path d='M10 14V10a6 6 0 0 1 12 0v4' />
          <circle cx='16' cy='21' r='1.6' fill='currentColor' />
        </svg>
      );
  }
}
