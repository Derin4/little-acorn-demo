import Link from "next/link";
import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import Timeline from "../_components/Timeline";
import { staff, VALUES } from "../_lib/data";

export const metadata = { title: "About — Little Acorn" };

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <div className='mb-16 grid items-center gap-10 sm:grid-cols-[1.1fr_1fr]'>
        <div className='max-w-2xl'>
          <h1 className='mb-6 text-4xl text-navy sm:text-5xl'>
            About Little Acorn
          </h1>
          <p className='mb-4 font-body leading-relaxed text-navy/75'>
            Little Acorn opened twelve years ago with a single infant room and
            six children. We&apos;ve grown slowly and deliberately since then —
            every expansion happened because a waitlist told us to, never ahead
            of it.
          </p>
          <p className='font-body leading-relaxed text-navy/75'>
            All lead teachers hold early childhood education credentials, and
            our staff-to-child ratios exceed the state minimum in every room.
          </p>
        </div>
        <Photo
          id='about'
          label='Little Acorn'
          tone={["#9AE0CB", "#5BA9E4"]}
          sizes='(min-width:640px) 45vw, 100vw'
          className='blob aspect-[8/5] w-full'
        />
      </div>

      <section className='mb-24'>
        <h2 className='mb-10 text-3xl'>Twelve years, one room at a time</h2>
        <Timeline />
      </section>

      <h2 className='mb-8 text-2xl text-navy sm:text-3xl'>Meet the Team</h2>
      <div className='grid gap-8 sm:grid-cols-3'>
        {staff.map((s, i) => (
          <Reveal key={s.id} delay={i * 100}>
            <div className='bouncy rounded-[28px] bg-white p-3 shadow-[0_10px_30px_-20px_rgba(43,58,85,.5)]'>
              <Photo
                id={s.pic}
                label={s.name}
                tone={s.gradient}
                sizes='(min-width:640px) 30vw, 100vw'
                className='aspect-square w-full rounded-[22px]'
              />
              <div className='px-2 pb-3 pt-4'>
                <p className='font-display text-xl text-navy'>{s.name}</p>
                <p className='font-body text-sm font-semibold text-bluebell-deep'>
                  {s.role}
                </p>
                <p className='mt-2 font-body text-sm text-navy/70'>{s.bio}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <section className='mt-24 grid gap-6 sm:grid-cols-3'>
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 100}>
            <div className='h-full rounded-[28px] bg-sky/60 p-6'>
              <h3 className='font-display text-xl'>{v.title}</h3>
              <p className='mt-2 font-body text-sm text-navy/75'>{v.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <div className='mt-20 rounded-[32px] bg-bluebell-deep p-10 text-center text-white'>
        <p className='font-display text-3xl'>Come and meet us.</p>
        <Link
          href='/enroll'
          className='mt-5 inline-block rounded-full bg-white px-7 py-3.5 font-display text-bluebell-deep transition-all hover:-translate-y-0.5 hover:bg-sun hover:text-navy'
        >
          Join the waitlist
        </Link>
      </div>
    </div>
  );
}
