// Four simple room icons drawn inline: moon & rattle, blocks, pencil, backpack.
export default function RoomIcon({ id, size = 40, color = "#fff" }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: color,
    strokeWidth: 2.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (id === "infant")
    return (
      <svg {...p}>
        <path d='M27 8a12 12 0 1 0 5 20 10 10 0 0 1-5-20z' />
        <circle cx='30' cy='10' r='1.2' fill={color} />
        <circle cx='12' cy='31' r='0.1' />
      </svg>
    );
  if (id === "toddler")
    return (
      <svg {...p}>
        <rect x='6' y='22' width='12' height='12' rx='2' />
        <rect x='20' y='22' width='12' height='12' rx='2' />
        <rect
          x='13'
          y='8'
          width='12'
          height='12'
          rx='2'
          transform='rotate(-8 19 14)'
        />
      </svg>
    );
  if (id === "preschool")
    return (
      <svg {...p}>
        <path d='M8 32l2-7L28 7l5 5-18 18z' />
        <path d='M25 10l5 5M8 32l7-2' />
      </svg>
    );
  return (
    <svg {...p}>
      <path d='M12 14a8 8 0 0 1 16 0v18a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z' />
      <path d='M16 21h8M16 8V5h8v3M12 26h16' />
    </svg>
  );
}
