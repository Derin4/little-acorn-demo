import Image from "next/image";
import { PICTURES } from "../_lib/pictures";

// Real photo when one is registered, else a soft gradient placeholder with a label.
export default function Photo({
  id,
  label,
  tone = ["#A9DBF8", "#5BA9E4"],
  sizes = "(min-width:1024px) 33vw, 100vw",
  className = "",
  priority = false,
  style,
}) {
  const src = PICTURES[id];
  return (
    <div
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(155deg, ${tone[0]} 0%, ${tone[1]} 100%)`,
        ...style,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          sizes={sizes}
          priority={priority}
          className='object-cover'
        />
      ) : (
        <>
          <span
            aria-hidden='true'
            className='absolute left-[12%] top-[14%] h-10 w-10 rounded-full bg-white/25'
          />
          <span
            aria-hidden='true'
            className='absolute right-[10%] bottom-[22%] h-16 w-16 rounded-full bg-white/15'
          />
          {label ? (
            <span className='absolute inset-x-0 bottom-4 px-3 text-center font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80'>
              {label}
            </span>
          ) : null}
        </>
      )}
    </div>
  );
}
