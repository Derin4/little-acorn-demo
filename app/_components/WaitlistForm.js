"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { programs, capacity } from "../_lib/data";
import {
  demoPosition,
  formatAge,
  formatDate,
  monthsOld,
  roomForMonths,
  spotsFor,
  todayISO,
  waitlistCode,
} from "../_lib/utils";
import AcornSpots from "./AcornSpots";
import RoomIcon from "./RoomIcon";

const field =
  "w-full rounded-2xl border-2 border-divider bg-white px-4 py-3 font-body text-[15px] outline-none transition-colors focus:border-bluebell";
const EMPTY = {
  parent: "",
  child: "",
  dob: "",
  email: "",
  phone: "",
  start: "",
};

export default function WaitlistForm() {
  const sp = useSearchParams();
  const qRoom = sp.get("room");
  const [roomId, setRoomId] = useState("");
  const [f, setF] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [today, setToday] = useState("");
  const [hint, setHint] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const top = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setToday(todayISO());
      if (qRoom && programs.some((p) => p.id === qRoom)) setRoomId(qRoom);
    });
    return () => cancelAnimationFrame(raf);
  }, [qRoom]);

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const onDob = (e) => {
    const v = e.target.value;
    setF((p) => ({ ...p, dob: v }));
    const m = monthsOld(v);
    setHint(m != null && m >= 0 ? { m, r: roomForMonths(m) } : null);
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!roomId) er.room = "Choose a classroom.";
    if (!f.parent.trim()) er.parent = "Tell us your name.";
    if (!f.child.trim()) er.child = "Tell us your child's name.";
    if (!f.dob) er.dob = "Add your child's date of birth.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email.";
    if (f.phone.replace(/\D/g, "").length < 7)
      er.phone = "Enter a phone number.";
    if (!f.start) er.start = "Pick a requested start date.";
    setErrs(er);
    if (Object.keys(er).length) return;
    const room = programs.find((p) => p.id === roomId);
    setConfirmed({
      code: waitlistCode(),
      room: room.room,
      childName: f.child.trim(),
      startDate: f.start,
      position: spotsFor(roomId) === 0 ? demoPosition() : null,
    });
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (confirmed) {
    return (
      <div
        ref={top}
        className='pop-in max-w-lg scroll-mt-28 rounded-[32px] bg-white p-8 shadow-[0_18px_44px_-24px_rgba(43,58,85,.6)]'
      >
        <div className='mb-3 flex gap-2' aria-hidden='true'>
          {["#7FCDB4", "#7DC3EE", "#B7A6EE", "#7FA2F7"].map((c, k) => (
            <span
              key={c}
              className='bob h-3 w-3 rounded-full'
              style={{ background: c, "--d": `${k * 0.3}s` }}
            />
          ))}
        </div>
        <p className='mb-2 font-display text-3xl text-navy'>
          You&apos;re on the list
        </p>
        <p className='mb-6 font-body text-navy/60'>
          Reference code:{" "}
          <span className='font-semibold text-navy'>{confirmed.code}</span>
        </p>
        <div className='mb-6 space-y-1 border-l-4 border-sky-deep pl-5 font-body text-sm text-navy/80'>
          <p>
            {confirmed.childName} — {confirmed.room}
          </p>
          <p>Requested start: {formatDate(confirmed.startDate)}</p>
          {confirmed.position ? (
            <p>Place in line (demo): #{confirmed.position}</p>
          ) : null}
        </div>
        <p className='font-body text-xs text-navy/50'>
          This is a demo confirmation — no waitlist entry has actually been
          created.
        </p>
        <button
          type='button'
          onClick={() => {
            setConfirmed(null);
            setF(EMPTY);
            setRoomId("");
            setHint(null);
          }}
          className='mt-5 font-body text-sm font-semibold text-bluebell-deep underline underline-offset-4'
        >
          Add another child
        </button>
      </div>
    );
  }

  const err = (k) =>
    errs[k] ? (
      <p
        className='mt-1.5 font-body text-sm font-semibold text-[#B4432B]'
        role='alert'
      >
        {errs[k]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={submit}
      noValidate
      className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px]'
    >
      <div className='min-w-0 max-w-2xl'>
        <fieldset>
          <legend className='mb-3 font-body text-sm font-semibold text-navy'>
            Choose a classroom{" "}
            <span className='font-normal text-navy/50'>
              (spots remaining out of capacity)
            </span>
          </legend>
          <div
            className='grid gap-3 sm:grid-cols-2'
            role='radiogroup'
            aria-label='Classroom'
          >
            {programs.map((p) => {
              const spots = spotsFor(p.id);
              const c = capacity[p.id];
              const on = roomId === p.id;
              return (
                <button
                  type='button'
                  key={p.id}
                  role='radio'
                  aria-checked={on}
                  onClick={() => setRoomId(p.id)}
                  className={`bouncy rounded-3xl border-2 p-4 text-left ${on ? "bg-white shadow-md" : "border-divider bg-white/60 hover:border-navy/25"}`}
                  style={on ? { borderColor: p.deep } : undefined}
                >
                  <span className='flex items-center gap-3'>
                    <span
                      className='flex h-10 w-10 items-center justify-center rounded-xl'
                      style={{ background: p.deep }}
                    >
                      <RoomIcon id={p.id} size={24} />
                    </span>
                    <span>
                      <span className='block font-display text-base text-navy'>
                        {p.room}
                      </span>
                      <span className='block font-body text-xs text-navy/55'>
                        {p.ageRange}
                      </span>
                    </span>
                  </span>
                  <span className='mt-3 block'>
                    <AcornSpots
                      total={Math.min(c.total, 12)}
                      filled={
                        c.total <= 12
                          ? c.filled
                          : Math.round((c.filled / c.total) * 12)
                      }
                      color={p.color}
                      size={14}
                    />
                  </span>
                  <span
                    className='mt-2 block font-body text-xs font-semibold'
                    style={{ color: spots === 0 ? "#6A55C8" : p.deep }}
                  >
                    {spots === 0
                      ? "Full — waitlist only"
                      : `${spots} spot${spots === 1 ? "" : "s"} left`}
                  </span>
                </button>
              );
            })}
          </div>
          <p className='mt-3 font-body text-xs text-navy/55'>
            Bright acorns are open spots. Grey acorns are taken.
          </p>
          {err("room")}
        </fieldset>

        <div className='mt-10 grid gap-5 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='w-parent'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Parent / guardian name
            </label>
            <input
              id='w-parent'
              className={field}
              value={f.parent}
              onChange={set("parent")}
              autoComplete='name'
              aria-invalid={!!errs.parent}
            />
            {err("parent")}
          </div>
          <div>
            <label
              htmlFor='w-child'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Child&apos;s name
            </label>
            <input
              id='w-child'
              className={field}
              value={f.child}
              onChange={set("child")}
              aria-invalid={!!errs.child}
            />
            {err("child")}
          </div>
          <div>
            <label
              htmlFor='w-dob'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Child&apos;s date of birth
            </label>
            <input
              id='w-dob'
              type='date'
              max={today || undefined}
              className={field}
              value={f.dob}
              onChange={onDob}
              aria-invalid={!!errs.dob}
            />
            {err("dob")}
          </div>
          <div>
            <label
              htmlFor='w-start'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Requested start date
            </label>
            <input
              id='w-start'
              type='date'
              min={today || undefined}
              className={field}
              value={f.start}
              onChange={set("start")}
              aria-invalid={!!errs.start}
            />
            {err("start")}
          </div>
        </div>

        {hint ? (
          <div
            key={hint.r?.room?.id || hint.r?.kind}
            className='step-in mt-5 rounded-3xl bg-sky/60 p-4 font-body text-sm'
            aria-live='polite'
          >
            {hint.r?.room ? (
              <p>
                At {formatAge(hint.m)}, the <strong>{hint.r.room.room}</strong>{" "}
                looks like the best fit. {hint.r.note ? `${hint.r.note} ` : ""}
                {roomId !== hint.r.room.id ? (
                  <button
                    type='button'
                    onClick={() => setRoomId(hint.r.room.id)}
                    className='font-semibold text-bluebell-deep underline underline-offset-4'
                  >
                    Choose it
                  </button>
                ) : (
                  <span className='font-semibold text-mint-deep'>
                    Selected.
                  </span>
                )}
              </p>
            ) : (
              <p>{hint.r?.note}</p>
            )}
          </div>
        ) : null}

        <div className='mt-5 grid gap-5 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='w-email'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Email
            </label>
            <input
              id='w-email'
              type='email'
              className={field}
              value={f.email}
              onChange={set("email")}
              autoComplete='email'
              aria-invalid={!!errs.email}
            />
            {err("email")}
          </div>
          <div>
            <label
              htmlFor='w-phone'
              className='mb-1.5 block font-body text-sm font-semibold'
            >
              Phone
            </label>
            <input
              id='w-phone'
              type='tel'
              className={field}
              value={f.phone}
              onChange={set("phone")}
              autoComplete='tel'
              aria-invalid={!!errs.phone}
            />
            {err("phone")}
          </div>
        </div>

        <button
          type='submit'
          className='mt-8 w-full rounded-full bg-bluebell-deep px-8 py-4 font-display text-base text-white transition-all hover:-translate-y-0.5 hover:bg-navy sm:w-auto'
        >
          Join waitlist (demo)
        </button>
      </div>

      <aside className='lg:sticky lg:top-28 lg:self-start'>
        <div className='rounded-[28px] bg-sky/60 p-6'>
          <h2 className='font-display text-xl'>What happens next</h2>
          <ol className='mt-4 space-y-4 font-body text-sm text-navy/80'>
            {[
              "We hold your place in line, free of charge.",
              "When a spot opens in your room, the director calls you first.",
              "Come for a tour and a morning visit before you decide.",
            ].map((t, i) => (
              <li key={t} className='flex gap-3'>
                <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white font-display text-sm text-bluebell-deep'>
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>
          <p className='mt-5 border-t border-navy/10 pt-4 font-body text-xs text-navy/55'>
            Demo form. Nothing you type is stored or sent.
          </p>
        </div>
      </aside>
    </form>
  );
}
