import Link from "next/link";
import AcornSpots from "../_components/AcornSpots";
import AgeFinder from "../_components/AgeFinder";
import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import RoomIcon from "../_components/RoomIcon";
import { capacity, programs } from "../_lib/data";
import { spotsFor } from "../_lib/utils";

export const metadata = { title: "Programs — Little Acorn" };

export default function ProgramsPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <h1 className='mb-3 text-4xl text-navy sm:text-5xl'>Our Programs</h1>
      <p className='mb-12 max-w-prose font-body text-navy/70'>
        Every room follows a curriculum built for that specific developmental
        stage — children move between rooms as they&apos;re ready, not on a
        fixed birthday.
      </p>

      <AgeFinder />

      <div
        className='no-scrollbar -mx-6 mt-12 flex gap-2 overflow-x-auto px-6'
        aria-label='Jump to a room'
      >
        {programs.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className='shrink-0 rounded-full px-5 py-2 font-body text-sm font-bold text-navy transition-transform hover:-translate-y-0.5'
            style={{ background: `${p.color}55` }}
          >
            {p.short}
          </a>
        ))}
      </div>

      <div className='mt-12 space-y-20'>
        {programs.map((p, i) => {
          const spots = spotsFor(p.id);
          const c = capacity[p.id];
          return (
            <Reveal key={p.id}>
              <section
                id={p.id}
                className={`grid scroll-mt-28 gap-10 ${i % 2 ? "sm:grid-cols-[1fr_300px]" : "sm:grid-cols-[300px_1fr]"}`}
              >
                <div className={i % 2 ? "sm:order-2" : ""}>
                  <Photo
                    id={p.pic}
                    label={p.room}
                    tone={p.tone}
                    sizes='(min-width:640px) 300px, 100vw'
                    className='aspect-square w-full rounded-[32px]'
                  />
                </div>
                <div className={i % 2 ? "sm:order-1" : ""}>
                  <div className='flex items-center gap-3'>
                    <span
                      className='flex h-12 w-12 items-center justify-center rounded-2xl'
                      style={{ background: p.deep }}
                    >
                      <RoomIcon id={p.id} size={30} />
                    </span>
                    <h2 className='text-3xl text-navy'>{p.room}</h2>
                  </div>
                  <p className='mt-3 font-body text-sm font-semibold text-navy/60'>
                    {p.ageRange}
                  </p>
                  <p
                    className='mb-2 font-body text-sm font-bold'
                    style={{ color: p.deep }}
                  >
                    {p.ratio}
                  </p>
                  <p className='mb-5 font-body text-navy/75'>{p.blurb}</p>
                  <p className='mb-3 font-body text-sm font-bold text-navy'>
                    What they&apos;ll learn
                  </p>
                  <ul className='space-y-2 font-body text-sm text-navy/75'>
                    {p.learn.map((l) => (
                      <li key={l} className='flex gap-3'>
                        <span
                          className='mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full'
                          style={{ background: p.color }}
                        />
                        {l}
                      </li>
                    ))}
                  </ul>
                  <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-3'>
                    <AcornSpots
                      total={Math.min(c.total, 12)}
                      filled={
                        c.total <= 12
                          ? c.filled
                          : Math.round((c.filled / c.total) * 12)
                      }
                      color={p.color}
                      size={18}
                    />
                    <span
                      className='font-body text-sm font-bold'
                      style={{ color: spots === 0 ? "#6A55C8" : p.deep }}
                    >
                      {spots === 0
                        ? "Full — waitlist only"
                        : `${spots} of ${c.total} spots open`}
                    </span>
                  </div>
                  <Link
                    href={`/enroll?room=${p.id}`}
                    className='mt-5 inline-block rounded-full bg-bluebell-deep px-6 py-3 font-display text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-navy'
                  >
                    Join the waitlist for this room
                  </Link>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
