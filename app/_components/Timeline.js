import { MILESTONES } from "../_lib/data";
import Reveal from "./Reveal";

const COLORS = ["#7FCDB4", "#7DC3EE", "#B7A6EE", "#7FA2F7", "#2B3A55"];

export default function Timeline() {
  return (
    <ol className='relative grid gap-8 sm:grid-cols-5 sm:gap-4'>
      <span
        aria-hidden='true'
        className='absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-[3px] rounded bg-sky max-sm:block'
      />
      <span
        aria-hidden='true'
        className='absolute left-[10%] right-[10%] top-[19px] hidden h-[3px] rounded bg-sky sm:block'
      />
      {MILESTONES.map((m, i) => (
        <Reveal
          as='li'
          key={m.year}
          delay={i * 110}
          className='relative pl-14 sm:pl-0 sm:text-center'
        >
          <span
            className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm text-white ring-4 ring-skywhite sm:static sm:mx-auto'
            style={{ background: COLORS[i] }}
          >
            {i + 1}
          </span>
          <p className='mt-0 font-body text-xs font-bold uppercase tracking-wider text-bluebell-deep sm:mt-3'>
            {m.year}
          </p>
          <p className='font-display text-lg'>{m.title}</p>
          <p className='font-body text-sm text-navy/65'>{m.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
