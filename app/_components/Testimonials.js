import { testimonials } from "../_lib/data";
import Reveal from "./Reveal";

const COLORS = ["#7FCDB4", "#7DC3EE", "#B7A6EE", "#7FA2F7"];

export default function Testimonials() {
  return (
    <div className='grid gap-x-10 gap-y-12 sm:grid-cols-2'>
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={(i % 2) * 120}>
          <figure>
            <blockquote className="relative rounded-[28px] bg-skywhite/10 p-6 font-body leading-relaxed text-skywhite/90 ring-1 ring-skywhite/15 after:absolute after:-bottom-3 after:left-10 after:h-6 after:w-6 after:rotate-45 after:rounded-sm after:bg-[#34456a] after:ring-1 after:ring-skywhite/15 after:content-[''] after:[clip-path:polygon(100%_0,100%_100%,0_100%)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className='mt-6 flex items-center gap-3 pl-4'>
              <span
                className='flex h-11 w-11 items-center justify-center rounded-full font-display text-lg text-navy'
                style={{ background: COLORS[i % 4] }}
                aria-hidden='true'
              >
                {t.name[0]}
              </span>
              <span>
                <span className='block font-body text-sm font-semibold text-sky'>
                  {t.name}
                </span>
                <span className='block font-body text-xs text-skywhite/60'>
                  {t.child}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
