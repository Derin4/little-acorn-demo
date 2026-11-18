"use client";
import { useEffect, useRef, useState } from "react";
import { DAY } from "../_lib/data";
import Waves from "./Waves";

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => {
  const A = hex(a),
    B = hex(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`;
};
const DAWN = "#E6DEFA",
  NOON = "#BFE3FA",
  DUSK = "#C9D2F8";

export default function DayDial() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => setAuto(e.isIntersecting), {
      threshold: 0.4,
    });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setI((v) => (v + 1) % DAY.length), 3200);
    return () => clearInterval(id);
  }, [auto]);

  const pick = (n) => {
    setAuto(false);
    setI(n);
  };

  const cur = DAY[i];
  const t = (cur.at - 7) / 11;
  const ang = Math.PI * (1 - t);
  const sx = 200 + 170 * Math.cos(ang);
  const sy = 190 - 170 * Math.sin(ang);
  const bg = t < 0.5 ? mix(DAWN, NOON, t * 2) : mix(NOON, DUSK, (t - 0.5) * 2);

  return (
    <div ref={box} className='mx-auto max-w-4xl'>
      <div
        className='relative overflow-hidden rounded-[32px] shadow-[0_18px_44px_-24px_rgba(43,58,85,.6)] transition-colors duration-700'
        style={{ background: bg }}
      >
        <svg
          viewBox='0 0 400 200'
          className='block w-full'
          role='img'
          aria-label={`The sun at ${cur.time}`}
        >
          <path
            d='M30 190A170 170 0 0 1 370 190'
            fill='none'
            stroke='#fff'
            strokeOpacity='0.7'
            strokeWidth='3'
            strokeDasharray='2 9'
            strokeLinecap='round'
          />
          <g
            style={{
              transform: `translate(${sx}px, ${sy}px)`,
              transition: "transform .9s cubic-bezier(.3,1.2,.5,1)",
            }}
          >
            <g className='sun-glow'>
              {[...Array(10)].map((_, k) => (
                <line
                  key={k}
                  x1='0'
                  y1='-20'
                  x2='0'
                  y2='-27'
                  stroke='#FFD36B'
                  strokeWidth='3.5'
                  strokeLinecap='round'
                  transform={`rotate(${k * 36})`}
                />
              ))}
              <circle r='15' fill='#FFD36B' />
            </g>
          </g>
          <path
            d='M0 190C60 176 120 178 200 188s160 4 200-8v20H0z'
            fill='#fff'
            fillOpacity='0.55'
          />
        </svg>
        <div
          className='grid items-center gap-4 bg-white/70 p-6 backdrop-blur sm:grid-cols-[110px_1fr] sm:p-8'
          aria-live='polite'
        >
          <p className='font-display text-3xl text-bluebell-deep'>{cur.time}</p>
          <div key={i} className='step-in'>
            <h3 className='font-display text-2xl text-navy'>{cur.title}</h3>
            <p className='mt-1 font-body text-navy/75'>{cur.text}</p>
          </div>
        </div>
      </div>

      <div className='mt-5 px-1'>
        <label htmlFor='day-range' className='sr-only'>
          Time of day
        </label>
        <input
          id='day-range'
          type='range'
          min={0}
          max={DAY.length - 1}
          step={1}
          value={i}
          onChange={(e) => pick(Number(e.target.value))}
          aria-valuetext={`${cur.time}, ${cur.title}`}
          className='h-2 w-full cursor-pointer accent-[#3A63D6]'
        />
      </div>
      <div
        className='no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-2'
        role='group'
        aria-label='Moments in the day'
      >
        {DAY.map((d, n) => (
          <button
            key={d.time}
            type='button'
            aria-pressed={n === i}
            onClick={() => pick(n)}
            className={`shrink-0 rounded-full px-4 py-2 font-body text-sm font-semibold transition-all ${n === i ? "scale-105 bg-bluebell-deep text-white" : "bg-white text-navy/70 hover:bg-sky"}`}
          >
            {d.time.replace(":00", "")}
          </button>
        ))}
      </div>
    </div>
  );
}
