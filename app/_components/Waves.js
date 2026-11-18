// Soft wave divider. `fill` is the colour of the section the wave belongs to.
export default function Waves({
  fill = "#F1F7FC",
  flip = false,
  className = "",
}) {
  return (
    <svg
      viewBox='0 0 1440 80'
      preserveAspectRatio='none'
      aria-hidden='true'
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d='M0 40C120 8 240 8 360 32s240 40 360 20 240-44 360-28 240 40 360 20V80H0z'
        fill={fill}
      />
    </svg>
  );
}
