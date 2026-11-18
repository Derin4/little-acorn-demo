import Link from "next/link";
import Acorn from "./Acorn";
import Waves from "./Waves";

export default function Footer() {
  return (
    <footer>
      <div className='mt-20 bg-skywhite'>
        <Waves fill='#2B3A55' />
      </div>
      <div className='bg-navy text-skywhite'>
        <div className='mx-auto grid max-w-6xl gap-8 px-6 pb-12 pt-4 font-body text-sm text-skywhite/70 sm:grid-cols-4'>
          <div className='sm:col-span-1'>
            <p className='mb-2 flex items-center gap-2 font-display text-xl text-skywhite'>
              <Acorn size={26} fill='#7DC3EE' cap='#CFE6F7' />
              Little Acorn
            </p>
            <p>Infant care through Pre-K, Monday–Friday, 7:00 AM–6:00 PM.</p>
          </div>
          <div>
            <p className='mb-2 font-semibold text-skywhite'>Visit</p>
            <p>
              27 Hollowbrook Rd
              <br />
              Ashford
            </p>
          </div>
          <div>
            <p className='mb-2 font-semibold text-skywhite'>Explore</p>
            <nav className='flex flex-col gap-1.5' aria-label='Footer'>
              <Link href='/programs' className='hover:text-white'>
                Programs
              </Link>
              <Link href='/facilities' className='hover:text-white'>
                Facilities
              </Link>
              <Link href='/about' className='hover:text-white'>
                About
              </Link>
              <Link href='/enroll' className='hover:text-white'>
                Join the waitlist
              </Link>
            </nav>
          </div>
          <div>
            <p className='mb-2 font-semibold text-skywhite'>Notes</p>
            <p>
              This is a demo site built for the MyClickAid gallery. Capacity,
              programs, and testimonials shown here are illustrative only.
            </p>
          </div>
        </div>
        <div className='border-t border-skywhite/10 px-6 py-4 text-center font-body text-xs text-skywhite/50'>
          &copy; {new Date().getFullYear()} Little Acorn Learning Center — demo
          site
        </div>
      </div>
    </footer>
  );
}
