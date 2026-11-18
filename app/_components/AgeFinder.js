"use client";
import Link from "next/link";
import { useState } from "react";
import { programs } from "../_lib/data";
import { formatAge, roomForMonths, spotsFor } from "../_lib/utils";
import RoomIcon from "./RoomIcon";

const MAX = 66;
const pct = (m) => `${(m / MAX) * 100}%`;
const SEGS = [
  { id: "infant", from: 0, to: 12 },
  { id: "toddler", from: 12, to: 24 },
  { id: "between", from: 24, to: 30 },
  { id: "preschool", from: 30, to: 48 },
  { id: "prek", from: 48, to: 60 },
  { id: "school", from: 60, to: MAX },
];

export default function AgeFinder() {
  const [m, setM] = useState(18);
  const r = roomForMonths(m);
  const room = r?.room;
  const spots = room ? spotsFor(room.id) : 0;
  const col = (id) => programs.find((p) => p.id === id);

  return (
    <div className='rounded-[32px] bg-white p-6 shadow-[0_14px_40px_-22px_rgba(43,58,85,.5)] sm:p-10'>
      <label
        htmlFor='age'
        className='font-display text-2xl text-navy sm:text-3xl'
      >
        How old is your child?
      </label>
      <p className='mt-1 font-body text-sm text-navy/60'>
        Slide to find the room. Children move up when they are ready, so the
        edges overlap.
      </p>

      <div className='relative mt-8'>
        <div
          className='flex h-5 overflow-hidden rounded-full'
          aria-hidden='true'
        >
          {SEGS.map((s) => {
            const p = col(s.id);
            return (
              <div
                key={s.id}
                style={{
                  width: `${((s.to - s.from) / MAX) * 100}%`,
                  background: p
                    ? p.color
                    : s.id === "between"
                      ? "repeating-linear-gradient(45deg,#CFE6F7 0 6px,#B7A6EE 6px 12px)"
                      : "#E3ECF4",
                }}
              />
            );
          })}
        </div>
        <div
          className='pointer-events-none absolute -top-3 transition-[left] duration-200'
          style={{ left: pct(m), transform: "translateX(-50%)" }}
          aria-hidden='true'
        >
          <div className='h-11 w-1.5 rounded-full bg-navy' />
        </div>
        <input
          id='age'
          type='range'
          min={1}
          max={MAX}
          step={1}
          value={m}
          onChange={(e) => setM(Number(e.target.value))}
          aria-valuetext={formatAge(m)}
          className='absolute inset-x-0 -top-3 h-11 w-full cursor-pointer opacity-0'
        />
        <div
          className='mt-3 flex justify-between font-body text-xs text-navy/50'
          aria-hidden='true'
        >
          <span>Newborn</span>
          <span>1 yr</span>
          <span>2 yrs</span>
          <span>3 yrs</span>
          <span>4 yrs</span>
          <span>5 yrs</span>
        </div>
      </div>

      <div
        key={room?.id || r?.kind}
        className='step-in mt-6 rounded-3xl p-5 sm:p-6'
        style={{ background: room ? `${room.color}33` : "#E8EFF6" }}
        aria-live='polite'
      >
        <p className='font-body text-sm font-semibold text-navy/60'>
          {formatAge(m)} old
        </p>
        {room ? (
          <div className='mt-2 flex flex-wrap items-center gap-5'>
            <span
              className='flex h-14 w-14 items-center justify-center rounded-2xl'
              style={{ background: room.deep }}
            >
              <RoomIcon id={room.id} size={32} />
            </span>
            <div className='min-w-0 flex-1'>
              <p className='font-display text-2xl text-navy'>{room.room}</p>
              <p className='font-body text-sm text-navy/70'>
                {room.ageRange} · {room.ratio}
              </p>
              {r.note ? (
                <p className='mt-1 font-body text-sm text-navy/70'>
                  {r.note}
                  {r.next ? ` The ${r.next.room} is next.` : ""}
                </p>
              ) : null}
            </div>
            <Link
              href={`/enroll?room=${room.id}`}
              className='rounded-full bg-bluebell-deep px-6 py-3 font-display text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-navy'
            >
              {spots === 0
                ? "Join the waitlist"
                : `${spots} spot${spots === 1 ? "" : "s"} open — join`}
            </Link>
          </div>
        ) : (
          <p className='mt-2 font-body text-navy/80'>{r?.note}</p>
        )}
      </div>
    </div>
  );
}
