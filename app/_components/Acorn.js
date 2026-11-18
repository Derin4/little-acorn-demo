export default function Acorn({
  size = 28,
  fill = "#7DC3EE",
  cap = "#2B3A55",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      aria-hidden='true'
      className={className}
    >
      <path
        d='M16 29c-5.5-2.2-8.5-6.7-8.5-11.5h17c0 4.8-3 9.3-8.5 11.5z'
        fill={fill}
      />
      <path
        d='M5.5 17.5c0-5.2 4.5-9.3 10.5-9.3s10.5 4.1 10.5 9.3z'
        fill={cap}
      />
      <path
        d='M16 8.2V4.5'
        stroke={cap}
        strokeWidth='2.4'
        strokeLinecap='round'
      />
    </svg>
  );
}
