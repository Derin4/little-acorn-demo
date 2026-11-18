import { programs, capacity } from "./data";

export const spotsFor = (id) => {
  const c = capacity[id];
  return c ? Math.max(0, c.total - c.filled) : 0;
};

export const totalSpots = () =>
  Object.keys(capacity).reduce((s, id) => s + spotsFor(id), 0);

// Months old from an ISO date string (YYYY-MM-DD). Called from event handlers.
export function monthsOld(iso, now = new Date()) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y) return null;
  let months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  if (now.getDate() < d) months -= 1;
  return months;
}

export function formatAge(m) {
  if (m < 12) return `${m} month${m === 1 ? "" : "s"}`;
  const y = Math.floor(m / 12);
  const r = m % 12;
  return `${y} yr${y === 1 ? "" : "s"}${r ? ` ${r} mo` : ""}`;
}

// Which room fits an age in months. Rooms overlap by design: children move when ready.
export function roomForMonths(m) {
  const by = (id) => programs.find((p) => p.id === id);
  if (m == null) return null;
  if (m < 1.5)
    return { kind: "young", note: "Our infant care starts at 6 weeks." };
  if (m < 12) return { kind: "fit", room: by("infant") };
  if (m < 24) return { kind: "fit", room: by("toddler") };
  if (m < 30)
    return {
      kind: "between",
      room: by("toddler"),
      next: by("preschool"),
      note: "Between rooms: your child moves up when they are ready, not on a birthday.",
    };
  if (m < 48) return { kind: "fit", room: by("preschool") };
  if (m < 60) return { kind: "fit", room: by("prek") };
  return {
    kind: "old",
    note: "Pre-K runs to age 5. Ask us about transition visits to your local school.",
  };
}

// Demo reference code like LA-4821. Lives outside any component so the
// React Compiler purity lint does not flag Math.random in a render scope.
export function waitlistCode() {
  return `LA-${Math.floor(1000 + Math.random() * 9000)}`;
}

// Demo place in line for a full room.
export function demoPosition() {
  return 2 + Math.floor(Math.random() * 5);
}

export const todayISO = (now = new Date()) =>
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
