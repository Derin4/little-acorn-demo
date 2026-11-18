import { Suspense } from "react";
import WaitlistForm from "../_components/WaitlistForm";

export const metadata = { title: "Join the Waitlist — Little Acorn" };

export default function EnrollPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <h1 className='mb-3 text-4xl text-navy sm:text-5xl'>Join the Waitlist</h1>
      <p className='mb-12 max-w-prose font-body text-navy/70'>
        Spots move throughout the year as children age up between rooms. Joining
        the waitlist costs nothing and holds your place in line.
      </p>
      <Suspense
        fallback={<div className='h-96 animate-pulse rounded-3xl bg-sky/40' />}
      >
        <WaitlistForm />
      </Suspense>
    </div>
  );
}
