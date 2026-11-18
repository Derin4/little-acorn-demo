"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Acorn from "./Acorn";

const NAV = [
  { href: "/programs", label: "Programs" },
  { href: "/facilities", label: "Facilities" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tick = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tick.current) return;
      tick.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        tick.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 ${scrolled || open ? "bg-skywhite/95 shadow-[0_6px_24px_-12px_rgba(43,58,85,.35)]" : "bg-skywhite/70"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}
      >
        <Link
          href='/'
          onClick={close}
          className='group flex items-center gap-2'
          aria-label='Little Acorn home'
        >
          <span className='wiggle inline-block'>
            <Acorn size={34} fill='#7DC3EE' />
          </span>
          <span className='font-display text-2xl font-semibold text-navy'>
            Little Acorn
          </span>
        </Link>
        <nav
          className='hidden items-center gap-2 font-body text-sm font-semibold sm:flex'
          aria-label='Main'
        >
          {NAV.map((n) => {
            const active = path === n.href || path.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-4 py-2 transition-colors ${active ? "bg-sky text-navy" : "text-navy/70 hover:bg-sky/60 hover:text-navy"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href='/enroll'
          className='hidden rounded-full bg-bluebell-deep px-5 py-2.5 font-display text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-navy sm:inline-block'
        >
          Join Waitlist
        </Link>
        <button
          type='button'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-sky sm:hidden'
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((v) => !v)}
        >
          <span className='relative block h-3.5 w-5' aria-hidden='true'>
            <span
              className={`absolute left-0 top-0 h-[2.5px] w-5 rounded bg-navy transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2.5px] w-5 rounded bg-navy transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2.5px] w-5 rounded bg-navy transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      <div
        id='mobile-menu'
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[65px] bg-skywhite transition-all duration-300 sm:hidden ${open ? "opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
      >
        <nav className='flex flex-col gap-3 px-6 pt-8' aria-label='Mobile'>
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={close}
              tabIndex={open ? 0 : -1}
              className='rounded-3xl bg-sky/70 px-6 py-5 font-display text-3xl text-navy'
              style={{
                transition:
                  "transform .5s cubic-bezier(.3,1.5,.5,1), opacity .4s",
                transitionDelay: `${i * 70}ms`,
                transform: open ? "none" : "translateY(20px) scale(.95)",
                opacity: open ? 1 : 0,
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href='/enroll'
            onClick={close}
            tabIndex={open ? 0 : -1}
            className='mt-3 rounded-full bg-bluebell-deep px-6 py-4 text-center font-display text-xl text-white'
          >
            Join Waitlist
          </Link>
          <p className='mt-4 text-center font-body text-sm text-navy/60'>
            Monday–Friday, 7:00 AM–6:00 PM
          </p>
        </nav>
      </div>
    </header>
  );
}
