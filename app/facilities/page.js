import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import SafePickup from "../_components/SafePickup";
import { facilities } from "../_lib/data";

export const metadata = { title: "Facilities — Little Acorn" };

export default function FacilitiesPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <h1 className='mb-3 text-4xl text-navy sm:text-5xl'>Our Facilities</h1>
      <p className='mb-14 max-w-prose font-body text-navy/70'>
        Every space is designed around a single question: would we be
        comfortable leaving our own child here all day? The honest answer shaped
        most of what you&apos;ll see below.
      </p>

      <div className='grid gap-10 sm:grid-cols-2'>
        {facilities.map((f, i) => (
          <Reveal key={f.id} delay={(i % 2) * 100}>
            <div className='bouncy'>
              <Photo
                id={f.pic}
                label={f.name}
                tone={f.tone}
                sizes='(min-width:640px) 50vw, 100vw'
                className='aspect-[4/3] w-full rounded-[32px]'
              />
              <p className='mb-1 mt-4 font-display text-2xl text-navy'>
                {f.name}
              </p>
              <p className='font-body text-sm text-navy/70'>{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <section className='mt-24'>
        <h2 className='mb-2 text-3xl'>Safe pickup, every time</h2>
        <p className='mb-8 max-w-prose font-body text-navy/70'>
          Secure Entry is more than a keypad. This is what happens at every
          door, every day.
        </p>
        <SafePickup />
      </section>
    </div>
  );
}
