import Link from "next/link";
import { programs } from "../_lib/data";
import { spotsFor } from "../_lib/utils";
import { capacity } from "../_lib/data";
import AcornSpots from "./AcornSpots";
import Photo from "./Photo";
import Reveal from "./Reveal";
import RoomIcon from "./RoomIcon";

export default function RoomCards() {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {programs.map((p, i) => {
        const spots = spotsFor(p.id);
        const c = capacity[p.id];
        return (
          <Reveal key={p.id} delay={i * 90}>
            <Link
              href={`/programs#${p.id}`}
              className='bouncy group block rounded-[28px] bg-white p-3 shadow-[0_10px_30px_-18px_rgba(43,58,85,.45)]'
            >
              <div className='relative'>
                <Photo
                  id={p.pic}
                  label={p.room}
                  tone={p.tone}
                  sizes='(min-width:1024px) 25vw, 50vw'
                  className='aspect-square w-full rounded-[22px]'
                />
                <span
                  className='absolute -bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl shadow-md'
                  style={{ background: p.deep }}
                >
                  <RoomIcon id={p.id} size={28} />
                </span>
              </div>
              <div className='px-2 pb-3 pt-7'>
                <p className='font-display text-lg text-navy'>{p.room}</p>
                <p className='font-body text-sm text-navy/60'>{p.ageRange}</p>
                <div className='mt-3'>
                  <AcornSpots
                    total={c.total <= 12 ? c.total : 12}
                    filled={
                      c.total <= 12
                        ? c.filled
                        : Math.round((c.filled / c.total) * 12)
                    }
                    color={p.color}
                    size={14}
                  />
                </div>
                <p
                  className='mt-2 font-body text-xs font-semibold'
                  style={{ color: spots === 0 ? "#6A55C8" : p.deep }}
                >
                  {spots === 0
                    ? "Full — join the waitlist"
                    : `${spots} spot${spots === 1 ? "" : "s"} open`}
                </p>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
