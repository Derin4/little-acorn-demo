// Fictitious data for the Little Acorn Learning Center demo.
// Nothing here is a real daycare, real staff, or real capacity.

export const SCHOOL = {
  name: "Little Acorn",
  full: "Little Acorn Learning Center",
  hours: "Monday–Friday, 7:00 AM–6:00 PM",
  street: "27 Hollowbrook Rd",
  town: "Ashford",
};

export const programs = [
  {
    id: "infant",
    room: "Infant Room",
    short: "Infants",
    ageRange: "6 weeks – 12 months",
    ratio: "1:4 teacher-to-child ratio",
    ratioShort: "1:4",
    from: 1.5,
    to: 12,
    tone: ["#9AE0CB", "#4FB398"],
    color: "#7FCDB4",
    deep: "#2F8F77",
    pic: "room-infant",
    blurb:
      "Quiet, cosy and unhurried, with one teacher who knows every baby's rhythm.",
    learn: [
      "Daily tummy time and gross motor development",
      "Responsive, individualized feeding and nap schedules",
      "Early language exposure through songs and read-alouds",
      "Sensory play with soft textures, sounds, and light",
    ],
  },
  {
    id: "toddler",
    room: "Toddler Room",
    short: "Toddlers",
    ageRange: "12 – 24 months",
    ratio: "1:5 teacher-to-child ratio",
    ratioShort: "1:5",
    from: 12,
    to: 24,
    tone: ["#A9DBF8", "#5BA9E4"],
    color: "#7DC3EE",
    deep: "#2D7FC0",
    pic: "room-toddler",
    blurb:
      "First words, first steps, first friends, with room to climb and plenty to touch.",
    learn: [
      "First words and simple sign language for communication",
      "Independent walking, climbing, and coordination play",
      "Beginning self-help skills — feeding, washing hands",
      "Parallel play alongside peers, guided sharing",
    ],
  },
  {
    id: "preschool",
    room: "Preschool Room",
    short: "Preschool",
    ageRange: "2.5 – 4 years",
    ratio: "1:8 teacher-to-child ratio",
    ratioShort: "1:8",
    from: 30,
    to: 48,
    tone: ["#CFC2F7", "#8F7BE0"],
    color: "#B7A6EE",
    deep: "#6A55C8",
    pic: "room-preschool",
    blurb:
      "Curious, chatty and busy: letters, numbers, glue sticks and big imaginations.",
    learn: [
      "Letter and number recognition through hands-on play",
      "Cooperative games and early conflict resolution",
      "Fine motor skills — cutting, drawing, building",
      "Weekly nature walks and outdoor exploration",
    ],
  },
  {
    id: "prek",
    room: "Pre-K Room",
    short: "Pre-K",
    ageRange: "4 – 5 years",
    ratio: "1:10 teacher-to-child ratio",
    ratioShort: "1:10",
    from: 48,
    to: 60,
    tone: ["#93B1FA", "#4A6FE0"],
    color: "#7FA2F7",
    deep: "#3558C8",
    pic: "room-prek",
    blurb:
      "Confident, independent and ready for the big school door ahead of them.",
    learn: [
      "Kindergarten-readiness literacy and early math",
      "Independent task completion and classroom routines",
      "Group projects, presentations, and turn-taking",
      "Introductory science experiments and journaling",
    ],
  },
];

export const facilities = [
  {
    id: "yard",
    name: "Outdoor Play Yard",
    desc: "Fenced, age-separated play areas with soft-fall surfacing and a shaded reading nook.",
    tone: ["#9AE0CB", "#4FB398"],
    pic: "fac-yard",
  },
  {
    id: "reading",
    name: "Reading Corner",
    desc: "A dedicated quiet room in every classroom, rotated weekly with new books chosen by the children.",
    tone: ["#CFC2F7", "#8F7BE0"],
    pic: "fac-reading",
  },
  {
    id: "art",
    name: "Sensory & Art Studio",
    desc: "A washable, low-mess studio space for painting, water play, and seasonal craft projects.",
    tone: ["#A9DBF8", "#5BA9E4"],
    pic: "fac-art",
  },
  {
    id: "nap",
    name: "Nap & Rest Room",
    desc: "Separate rest spaces for infants and toddlers, with individual cots and a dedicated overnight staff monitor.",
    tone: ["#93B1FA", "#4A6FE0"],
    pic: "fac-nap",
  },
  {
    id: "entry",
    name: "Secure Entry",
    desc: "Keypad and photo-ID pickup verification at every entrance, with sign-in logs available to parents on request.",
    tone: ["#7DC3EE", "#2D7FC0"],
    pic: "fac-entry",
  },
  {
    id: "kitchen",
    name: "On-Site Kitchen",
    desc: "Meals and snacks prepared fresh daily on-site, with allergy accommodations coordinated per child.",
    tone: ["#B9E8DA", "#5FBFA6"],
    pic: "fac-kitchen",
  },
];

// Fictitious classroom capacity for the waitlist page.
export const capacity = {
  infant: { total: 8, filled: 8 },
  toddler: { total: 12, filled: 10 },
  preschool: { total: 20, filled: 14 },
  prek: { total: 20, filled: 17 },
};

export const testimonials = [
  {
    name: "Renata & James O.",
    child: "Parents of a Toddler Room student",
    quote:
      "Our son cried every drop-off for the first two weeks. By week three he was walking in without looking back — which we are told is a good sign, even though it stung a little.",
  },
  {
    name: "Daniela F.",
    child: "Parent of a Pre-K student",
    quote:
      "The daily report app tells me more about her day than she does at pickup. I know what she ate, what she learned, and who she played with, every single day.",
  },
  {
    name: "Priyanka & Sam T.",
    child: "Parents of an Infant Room student",
    quote:
      "We toured four centres. Here, the teacher asked about our daughter's naps before she asked about our paperwork. That settled it.",
  },
  {
    name: "Marcus L.",
    child: "Parent of a Preschool Room student",
    quote:
      "She came home explaining why the leaves change colour. I did not know she knew what a leaf was.",
  },
];

export const staff = [
  {
    id: "marisol",
    name: "Marisol Vega",
    role: "Director, 14 years in early childhood education",
    tone: "#2B3A55",
    gradient: ["#6F86B5", "#2B3A55"],
    pic: "staff-marisol",
    bio: "Marisol opened the first room twelve years ago and still does the Monday morning greeting at the door.",
  },
  {
    id: "theo",
    name: "Theo Bramwell",
    role: "Lead Toddler Teacher",
    tone: "#8FB9A8",
    gradient: ["#9AE0CB", "#4FB398"],
    pic: "staff-theo",
    bio: "Theo teaches first signs, first songs and the fine art of putting on your own shoes.",
  },
  {
    id: "amara",
    name: "Amara Diallo",
    role: "Lead Pre-K Teacher",
    tone: "#E8905A",
    gradient: ["#93B1FA", "#4A6FE0"],
    pic: "staff-amara",
    bio: "Amara runs the Pre-K science table, where every experiment ends with a journal entry and a few giggles.",
  },
];

// The typical day, illustrative. `at` is the hour as a decimal.
export const DAY = [
  {
    at: 7,
    time: "7:00 AM",
    title: "Arrival & free play",
    text: "A warm hello at the door, then quiet play while everyone arrives.",
  },
  {
    at: 8.5,
    time: "8:30 AM",
    title: "Breakfast",
    text: "Fresh from the on-site kitchen, with allergy plans followed per child.",
  },
  {
    at: 9.25,
    time: "9:15 AM",
    title: "Circle time",
    text: "Songs, stories and the weather helper's big announcement.",
  },
  {
    at: 10,
    time: "10:00 AM",
    title: "Learning centres",
    text: "Hands-on play at each age's own level: blocks, books, sensory bins.",
  },
  {
    at: 11,
    time: "11:00 AM",
    title: "Outdoor play",
    text: "The fenced yard, whatever the weather lets us do.",
  },
  {
    at: 12,
    time: "12:00 PM",
    title: "Lunch",
    text: "Sit-down family-style lunch. Everyone helps set the table.",
  },
  {
    at: 12.75,
    time: "12:45 PM",
    title: "Nap & quiet time",
    text: "Cots, soft music and dim lights. Quiet books for non-nappers.",
  },
  {
    at: 14.75,
    time: "2:45 PM",
    title: "Afternoon snack",
    text: "Fruit, something crunchy and a good long drink of water.",
  },
  {
    at: 15.5,
    time: "3:30 PM",
    title: "Art & sensory studio",
    text: "Painting, water play and seasonal projects, the messy kind.",
  },
  {
    at: 16.5,
    time: "4:30 PM",
    title: "Reading corner",
    text: "Books the children picked themselves, read aloud and read alone.",
  },
  {
    at: 17.25,
    time: "5:15 PM",
    title: "Calm play & pickup",
    text: "Daily report in hand, a story to share on the way home.",
  },
  {
    at: 18,
    time: "6:00 PM",
    title: "Goodnight",
    text: "Doors close until tomorrow at 7:00 AM.",
  },
];

export const TRUST = [
  {
    icon: "cap",
    title: "Credentialed teachers",
    text: "Every lead teacher holds an early childhood education credential.",
  },
  {
    icon: "heart",
    title: "Ratios above the minimum",
    text: "Staff-to-child ratios exceed the state minimum in every room.",
  },
  {
    icon: "apple",
    title: "Fresh meals, made here",
    text: "Breakfast, lunch and snacks prepared daily in our own kitchen.",
  },
  {
    icon: "lock",
    title: "Secure entry",
    text: "Keypad doors and photo-ID pickup verification.",
  },
];

export const MILESTONES = [
  {
    year: "Year 1",
    title: "One infant room",
    text: "Six children and a lot of lullabies.",
  },
  {
    year: "Year 4",
    title: "The Toddler Room",
    text: "Opened because the infant waitlist said so.",
  },
  {
    year: "Year 7",
    title: "Preschool joins in",
    text: "A second building wing, a bigger yard.",
  },
  {
    year: "Year 10",
    title: "Pre-K opens",
    text: "So children could stay until the big school door.",
  },
  {
    year: "Today",
    title: "Four rooms, 60 children",
    text: "Still growing slowly, still on purpose.",
  },
];

export const VALUES = [
  {
    title: "Slow, deliberate growth",
    text: "Every expansion happened because a waitlist told us to, never ahead of it.",
  },
  {
    title: "Move when ready",
    text: "Children change rooms as they are ready, not on a fixed birthday.",
  },
  {
    title: "Parents in the loop",
    text: "A daily report, open sign-in logs and a director who answers the phone.",
  },
];
