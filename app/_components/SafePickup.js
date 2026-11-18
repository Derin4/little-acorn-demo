import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Keypad entry",
    text: "Every door needs a family code, and the code changes when anyone asks.",
  },
  {
    n: "2",
    title: "Photo-ID check",
    text: "Whoever collects your child is checked against the approved pickup list.",
  },
  {
    n: "3",
    title: "Signed out",
    text: "The sign-out log is time-stamped and available to parents on request.",
  },
];

export default function SafePickup() {
  return (
    <div className='grid gap-5 sm:grid-cols-3'>
      {STEPS.map((s, i) => (
        <Reveal key={s.n} delay={i * 110}>
          <div className='h-full rounded-[28px] bg-white p-6 shadow-[0_10px_30px_-20px_rgba(43,58,85,.5)]'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-bluebell-deep font-display text-lg text-white'>
              {s.n}
            </span>
            <h3 className='mt-4 font-display text-xl'>{s.title}</h3>
            <p className='mt-1 font-body text-sm text-navy/70'>{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
