import Acorn from "./Acorn";

// Capacity shown as acorns: filled = taken, outlined = open.
export default function AcornSpots({
  total,
  filled,
  color = "#7DC3EE",
  size = 18,
}) {
  return (
    <span className='acorns-now inline-flex flex-wrap gap-1' aria-hidden='true'>
      {[...Array(total)].map((_, i) => {
        const open = i >= filled;
        return (
          <span key={i} className='acorn-dot' style={{ "--i": i }}>
            <Acorn
              size={size}
              fill={open ? color : "#D7E3EE"}
              cap={open ? "#2B3A55" : "#AEBFD0"}
            />
          </span>
        );
      })}
    </span>
  );
}
