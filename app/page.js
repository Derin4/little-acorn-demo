import Link from "next/link";
import CountUp from "./_components/CountUp";
import DayDial from "./_components/DayDial";
import Photo from "./_components/Photo";
import Reveal from "./_components/Reveal";
import RoomCards from "./_components/RoomCards";
import Sky from "./_components/Sky";
import Testimonials from "./_components/Testimonials";
import TrustIcon from "./_components/TrustIcon";
import Waves from "./_components/Waves";
import { facilities, TRUST } from "./_lib/data";
import { totalSpots } from "./_lib/utils";

export default function HomePage() {
  const spotsLeft = totalSpots();

  return (
    <>
      {/* HERO */}
      <section className='relative isolate'>
        <Sky />
        <div className='mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 sm:grid-cols-[1.1fr_1fr] sm:pt-16'>
          <div>
            <div
              className='pop-in mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-body text-xs font-bold text-navy shadow-sm'
              style={{ "--d": "50ms" }}
            >
              <span className='bob inline-block h-2.5 w-2.5 rounded-full bg-mint' />
              {spotsLeft} spots open across all rooms this fall
            </div>
            <h1
              className='pop-in mb-6 text-5xl leading-[1.08] text-navy sm:text-6xl'
              style={{ "--d": "150ms" }}
            >
              Where your child&apos;s day is more than{" "}
              <span className='relative inline-block text-bluebell-deep'>
                childcare.
                <svg
                  aria-hidden='true'
                  viewBox='0 0 200 14'
                  preserveAspectRatio='none'
                  className='absolute -bottom-1 left-0 h-3 w-full'
                >
                  <path
                    d='M2 9c30-8 60 4 96-1s60-6 100 1'
                    fill='none'
                    stroke='#FFD36B'
                    strokeWidth='5'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </h1>
            <p
              className='fade-up mb-8 max-w-prose font-body text-lg text-navy/70'
              style={{ "--d": "350ms" }}
            >
              Infant care through Pre-K, with a curriculum built around each age
              group&apos;s real developmental stage — not just a room full of
              toys.
            </p>
            <div
              className='fade-up flex flex-wrap items-center gap-x-6 gap-y-4'
              style={{ "--d": "500ms" }}
            >
              <Link
                href='/enroll'
                className='inline-block rounded-full bg-bluebell-deep px-8 py-4 font-display text-base text-white shadow-[0_10px_24px_-10px_rgba(58,99,214,.8)] transition-all hover:-translate-y-1 hover:bg-navy'
              >
                Join the waitlist
              </Link>
              <Link
                href='/programs'
                className='border-b-2 border-navy/30 pb-1 font-body text-sm font-semibold text-navy transition-colors hover:border-navy'
              >
                See our programs
              </Link>
            </div>
          </div>
          <div
            className='pop-in relative mx-auto w-full max-w-md'
            style={{ "--d": "300ms" }}
          >
            <Photo
              id='hero'
              label='Hero photo'
              tone={["#9AE0CB", "#5BA9E4"]}
              sizes='(min-width:640px) 45vw, 90vw'
              priority
              className='blob aspect-[4/5] w-full shadow-[0_30px_60px_-30px_rgba(43,58,85,.6)]'
            />
            <div
              className='bob absolute -left-3 top-10 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8'
              style={{ "--r": "-3deg", "--dur": "4.5s" }}
            >
              <p className='font-display text-2xl leading-none text-mint-deep'>
                1:4
              </p>
              <p className='font-body text-[11px] font-semibold text-navy/60'>
                infant ratio
              </p>
            </div>
            <div
              className='bob absolute -right-2 bottom-16 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-6'
              style={{ "--r": "3deg", "--d": "1s", "--dur": "5s" }}
            >
              <p className='font-display text-lg leading-none text-lilac-deep'>
                Fresh meals
              </p>
              <p className='font-body text-[11px] font-semibold text-navy/60'>
                made on site daily
              </p>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0'>
          <Waves fill='#FFFFFF' />
        </div>
      </section>

      {/* TRUST */}
      <section className='bg-white pb-6'>
        <div className='mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4'>
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className='flex gap-4'>
                <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-bluebell-deep'>
                  <TrustIcon name={t.icon} />
                </span>
                <div>
                  <p className='font-display text-base'>{t.title}</p>
                  <p className='font-body text-sm text-navy/65'>{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className='bg-white'>
        <div className='mx-auto max-w-6xl px-6 py-16'>
          <div className='mb-10 flex items-baseline justify-between'>
            <h2 className='text-3xl text-navy'>Our Programs</h2>
            <Link
              href='/programs'
              className='font-body text-sm font-semibold text-navy/60 hover:text-navy'
            >
              See all programs
            </Link>
          </div>
          <RoomCards />
          <p className='mt-8 font-body text-sm text-navy/60'>
            Not sure which room?{" "}
            <Link
              href='/programs'
              className='font-semibold text-bluebell-deep underline underline-offset-4'
            >
              Try the age finder
            </Link>
            .
          </p>
        </div>
      </section>

      {/* DAY */}
      <section className='bg-sky/50'>
        <Waves fill='#FFFFFF' flip />
        <div className='mx-auto max-w-6xl px-6 pb-8 pt-4'>
          <Reveal className='mb-10 text-center'>
            <p className='font-body text-sm font-bold uppercase tracking-widest text-bluebell-deep'>
              A day at Little Acorn
            </p>
            <h2 className='mt-2 text-4xl text-navy sm:text-5xl'>
              From the first hello to the last story.
            </h2>
            <p className='mx-auto mt-3 max-w-xl font-body text-navy/70'>
              Follow the sun through a typical day. Drag the slider or tap a
              time.
            </p>
          </Reveal>
          <DayDial />
        </div>
        <Waves fill='#F1F7FC' />
      </section>

      {/* NUMBERS + FACILITIES */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='grid gap-8 sm:grid-cols-3'>
          {[
            { to: 12, label: "years growing slowly", suffix: "" },
            { to: 4, label: "age-specific rooms", suffix: "" },
            { to: 60, label: "children across the centre", suffix: "" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className='rounded-[28px] bg-white p-7 text-center shadow-[0_10px_30px_-20px_rgba(43,58,85,.5)]'>
                <p className='font-display text-6xl text-bluebell-deep'>
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className='mt-1 font-body text-sm font-semibold text-navy/60'>
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className='mt-20 flex items-baseline justify-between'>
          <h2 className='text-3xl'>Places they&apos;ll love</h2>
          <Link
            href='/facilities'
            className='font-body text-sm font-semibold text-navy/60 hover:text-navy'
          >
            All facilities
          </Link>
        </div>
        <div className='mt-8 grid gap-5 sm:grid-cols-3'>
          {facilities.slice(0, 3).map((f, i) => (
            <Reveal key={f.id} delay={i * 90}>
              <Link href='/facilities' className='bouncy group block'>
                <Photo
                  id={f.pic}
                  label={f.name}
                  tone={f.tone}
                  sizes='(min-width:640px) 33vw, 100vw'
                  className='aspect-[4/3] w-full rounded-[28px]'
                />
                <p className='mt-3 font-display text-lg'>{f.name}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='bg-navy text-skywhite'>
        <Waves fill='#F1F7FC' flip />
        <div className='mx-auto max-w-6xl px-6 pb-20 pt-6'>
          <h2 className='mb-12 text-3xl'>What Parents Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section className='relative overflow-hidden bg-bluebell-deep text-white'>
        <div
          aria-hidden='true'
          className='bob absolute -left-10 top-6 h-32 w-32 rounded-full bg-white/10'
        />
        <div
          aria-hidden='true'
          className='bob absolute -right-6 bottom-4 h-44 w-44 rounded-full bg-white/10'
          style={{ "--d": "1.2s" }}
        />
        <div className='relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center'>
          <h2 className='text-4xl sm:text-5xl'>
            Your child&apos;s spot is waiting.
          </h2>
          <p className='max-w-xl font-body text-white/85'>
            Spots move throughout the year as children age up between rooms.
            Joining the waitlist costs nothing and holds your place in line.
          </p>
          <Link
            href='/enroll'
            className='rounded-full bg-white px-8 py-4 font-display text-base text-bluebell-deep transition-all hover:-translate-y-1 hover:bg-sun hover:text-navy'
          >
            Join the waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
