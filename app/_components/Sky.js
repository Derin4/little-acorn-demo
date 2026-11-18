// Drifting clouds and twinkling stars behind the hero. Pure decoration.
function Cloud({ w = 160, className = "", style }) {
  return (
    <svg
      width={w}
      height={w * 0.5}
      viewBox='0 0 160 80'
      aria-hidden='true'
      className={className}
      style={style}
    >
      <path
        d='M40 70a26 26 0 0 1-2-52 34 34 0 0 1 64-6 28 28 0 0 1 24 58z'
        fill='#fff'
        opacity='0.85'
      />
    </svg>
  );
}
function Star({ s = 18, className = "", style }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      style={style}
    >
      <path d='M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3z' fill='#FFD36B' />
    </svg>
  );
}

export default function Sky() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            "linear-gradient(180deg,#CFE6F7 0%,#E5F1FA 55%,#F1F7FC 100%)",
        }}
      />
      <Cloud
        w={200}
        className='drift absolute top-[8%] left-0'
        style={{ "--dur": "90s", "--d": "-20s" }}
      />
      <Cloud
        w={130}
        className='drift absolute top-[34%] left-0'
        style={{ "--dur": "70s", "--d": "-50s" }}
      />
      <Cloud
        w={170}
        className='drift absolute top-[58%] left-0 hidden sm:block'
        style={{ "--dur": "110s", "--d": "-80s" }}
      />
      <Star
        className='twinkle absolute left-[8%] top-[18%]'
        style={{ "--d": "0s" }}
      />
      <Star
        s={12}
        className='twinkle absolute left-[46%] top-[9%]'
        style={{ "--d": "0.8s" }}
      />
      <Star
        s={14}
        className='twinkle absolute right-[8%] top-[14%]'
        style={{ "--d": "1.5s" }}
      />
      <Star
        s={10}
        className='twinkle absolute left-[30%] top-[62%]'
        style={{ "--d": "0.4s" }}
      />
    </div>
  );
}
