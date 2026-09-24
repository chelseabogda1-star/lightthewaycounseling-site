export type Location = {
  slug: string;
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  gettingHere: string;
  localContext: string[];
  focus: { slug: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
};

// Each page is written to stand on its own — Google penalizes near-duplicate
// "doorway" location pages. If you add a city, give it genuinely different copy.
export const locations: Location[] = [
  {
    slug: "batavia",
    city: "Batavia",
    title: "Counseling in Batavia, Illinois",
    metaTitle: "Therapist in Batavia, IL | Light The Way Counseling",
    metaDescription:
      "Counseling for children, teens, and adults in downtown Batavia, IL. ADHD, anxiety, autism, depression, grief, and life transitions — in person or by telehealth.",
    lede: "Our office is in downtown Batavia, and most of the families we see live within a few miles of it.",
    gettingHere:
      "We're on South Shumway Avenue, a block off the river and a short walk from the shops on Wilson Street. There's street parking and a lot nearby, so you're rarely circling. If you're coming from Route 31 or Route 25, it's a couple of turns off either.",
    localContext: [
      "We see a steady number of Batavia students, and we're used to coordinating with school teams on 504 plans, IEPs, and school-avoidance plans when a family wants us involved.",
      "Because we're local, families often pair an in-person session for a child with telehealth sessions for a parent — same practice, no second commute.",
      "Evening slots in Batavia fill first. Daytime and late-morning appointments are usually available much sooner.",
    ],
    focus: [
      { slug: "adhd", label: "ADHD", note: "Two of our clinicians hold the ADHD-CCSP certification." },
      { slug: "anxiety", label: "Anxiety", note: "Children, teens, and adults." },
      { slug: "autism", label: "Autism", note: "Affirming support across ages, including adults diagnosed late." },
      { slug: "school-refusal", label: "School refusal", note: "Graded return plans, with the school looped in." },
      { slug: "grief", label: "Grief & loss", note: "Including a Certified Grief Informed Professional on staff." },
    ],
    faqs: [
      {
        q: "Where exactly is your Batavia office?",
        a: "30 S. Shumway Avenue, 1W, Batavia, IL 60510 — in downtown Batavia, just off Wilson Street.",
      },
      {
        q: "How soon can I get an appointment in Batavia?",
        a: "It depends on the clinician and the time of day you need. Weekday daytime and late-morning slots are typically available within a week or two; evenings take longer. Call the office and we'll tell you honestly what's open.",
      },
      {
        q: "Do you see children and teenagers?",
        a: "Yes. Several of our clinicians work with children and adolescents, including play therapy for younger children and school-based concerns for older students.",
      },
    ],
  },
  {
    slug: "geneva",
    city: "Geneva",
    title: "Counseling for Geneva, Illinois",
    metaTitle: "Therapist Serving Geneva, IL | Light The Way Counseling",
    metaDescription:
      "Counseling for Geneva, IL families — children, teens, and adults. ADHD, anxiety, autism, grief, and life transitions, in person in nearby Batavia or by telehealth.",
    lede: "Geneva sits directly north of us, so the drive is short enough that a midday appointment doesn't eat your afternoon.",
    gettingHere:
      "From Geneva, Route 31 or Route 25 brings you straight down the river into Batavia — a few minutes either way. Our office is on South Shumway Avenue with parking close by.",
    localContext: [
      "A good share of our caseload is Geneva students and their parents, so we're familiar with how the district handles accommodations and what a useful school meeting looks like.",
      "Geneva families often come to us for ADHD and anxiety in high-achieving students — the kind of pressure that doesn't look like a problem from the outside until it does.",
      "If the drive doesn't work on a given week, the same clinician can see you by secure video. Many clients alternate.",
    ],
    focus: [
      { slug: "adhd", label: "ADHD", note: "Including adults recognizing it in themselves after a child's diagnosis." },
      { slug: "anxiety", label: "Anxiety", note: "Test anxiety, social anxiety, and performance pressure." },
      { slug: "executive-functioning", label: "Executive functioning", note: "Planning, starting, and finishing — for students and adults." },
      { slug: "life-transitions", label: "Life transitions", note: "Moves, divorce, launching, and empty nest." },
      { slug: "lgbtq", label: "LGBTQ+", note: "Affirming work with teens and adults." },
    ],
    faqs: [
      {
        q: "How far is your office from Geneva?",
        a: "Just a few minutes south on Route 31 or Route 25. Our office is in downtown Batavia at 30 S. Shumway Avenue, 1W.",
      },
      {
        q: "Can I see a therapist from Geneva without driving?",
        a: "Yes. All of our clinicians offer secure video sessions to clients anywhere in Illinois, and you can mix video and in-person visits with the same therapist.",
      },
      {
        q: "Do you work with Geneva high school students?",
        a: "Yes, we regularly see high school students for anxiety, ADHD, executive functioning, and the pressure that comes with a heavy course load.",
      },
    ],
  },
  {
    slug: "st-charles",
    city: "St. Charles",
    title: "Counseling for St. Charles, Illinois",
    metaTitle: "Therapist Serving St. Charles, IL | Light The Way Counseling",
    metaDescription:
      "Counseling for St. Charles, IL — children, adolescents, and adults. ADHD, anxiety, depression, grief, OCD, and life transitions. In person nearby or by telehealth.",
    lede: "St. Charles has plenty of counseling options, so it's worth being clear about what we are: a small practice where you see the same clinician every week.",
    gettingHere:
      "It's a straight run south on Route 31 or Route 25 from St. Charles to our office in downtown Batavia, generally ten to fifteen minutes depending on where you start and the time of day.",
    localContext: [
      "People often come to us from St. Charles after a larger group practice rotated them between clinicians. Our team is six people; continuity is the point.",
      "We see a mix of adults working on anxiety, depression, and life transitions, and families navigating a child's ADHD or autism diagnosis.",
      "If the commute only works some weeks, telehealth covers the rest — same therapist either way.",
    ],
    focus: [
      { slug: "depression", label: "Depression", note: "Low mood, loss of interest, and the flatness that comes with it." },
      { slug: "ocd", label: "OCD", note: "Evidence-based treatment for obsessions and compulsions." },
      { slug: "grief", label: "Grief & loss", note: "Loss of a person, a relationship, health, or a role." },
      { slug: "boundaries", label: "Boundaries", note: "Family, work, and the people who don't take no well." },
      { slug: "emotion-regulation", label: "Emotion regulation", note: "DBT-informed skills for adults and teens." },
    ],
    faqs: [
      {
        q: "Do I have to drive to Batavia?",
        a: "No. Every clinician here sees clients by secure video anywhere in Illinois. Some St. Charles clients never come to the office at all.",
      },
      {
        q: "How is a small practice different from a large group?",
        a: "Practically: you see the same clinician each week, the person answering the phone knows your name, and we tell you directly if we're not the right fit rather than moving you around internally.",
      },
      {
        q: "What ages do you work with?",
        a: "Children, adolescents, and adults. Which clinician fits depends on the age and what you're working on — we'll help you sort that out when you call.",
      },
    ],
  },
  {
    slug: "aurora",
    city: "Aurora",
    title: "Counseling for Aurora, Illinois",
    metaTitle: "Therapist Serving Aurora, IL | Light The Way Counseling",
    metaDescription:
      "Counseling for Aurora, IL residents — ADHD, anxiety, depression, trauma, anger, and behavioral difficulties for children, teens, and adults. In person or telehealth.",
    lede: "Aurora is a short drive north, and for a lot of our Aurora clients the bigger obstacle isn't distance — it's finding an appointment that fits around work.",
    gettingHere:
      "Randall Road or Route 31 north brings you to Batavia in roughly fifteen minutes from most of Aurora. Our office is downtown on South Shumway Avenue, with parking nearby.",
    localContext: [
      "We hold weekday daytime slots that tend to go unclaimed, which makes them realistic for shift workers and people who can step away midday.",
      "Several of our clinicians work with children and adolescents on behavioral difficulties, anger, and school-related anxiety — often alongside parent coaching.",
      "Telehealth means an Aurora client can keep the same therapist through a job change, a move, or a semester away at school, as long as they're in Illinois.",
    ],
    focus: [
      { slug: "anger", label: "Anger", note: "One of our clinicians has specialized anger management training." },
      { slug: "behavioral-difficulties", label: "Behavioral difficulties", note: "Children and teens, with parent involvement." },
      { slug: "ptsd", label: "PTSD & trauma", note: "Trauma-informed care at a pace you set." },
      { slug: "anxiety", label: "Anxiety", note: "Panic, worry, and avoidance." },
      { slug: "self-esteem", label: "Self-esteem", note: "Rebuilding confidence after a long stretch of not having it." },
    ],
    faqs: [
      {
        q: "Do you have appointments outside of business hours?",
        a: "Some evening availability exists but fills quickly. Weekday daytime is where we have the most room, and telehealth makes a midday session workable for many people.",
      },
      {
        q: "How long does it take to get from Aurora to your office?",
        a: "Usually around fifteen minutes via Randall Road or Route 31, depending on where in Aurora you're starting.",
      },
      {
        q: "Do you offer parent coaching as well as child therapy?",
        a: "Yes. For younger clients especially, work with parents is often part of the plan rather than an add-on.",
      },
    ],
  },
  {
    slug: "north-aurora",
    city: "North Aurora",
    title: "Counseling for North Aurora, Illinois",
    metaTitle: "Therapist Serving North Aurora, IL | Light The Way Counseling",
    metaDescription:
      "Counseling for North Aurora, IL — children, teens, and adults. ADHD, anxiety, autism, emotion regulation, and life transitions. Nearby Batavia office or telehealth.",
    lede: "North Aurora is close enough that a session doesn't have to be a whole evening's plan.",
    gettingHere:
      "It's a few minutes north on Route 31 to our downtown Batavia office at 30 S. Shumway Avenue, 1W. Parking is on the street or in the nearby lot.",
    localContext: [
      "Proximity makes a real difference for families bringing a child weekly — a short drive is the difference between a routine that holds and one that quietly stops.",
      "We see North Aurora clients across the range: young children in play therapy, teenagers working on anxiety and emotion regulation, and adults sorting through a transition.",
      "Same-clinician telehealth is there for weeks when a drive isn't possible.",
    ],
    focus: [
      { slug: "adhd", label: "ADHD", note: "Children through adults." },
      { slug: "emotion-regulation", label: "Emotion regulation", note: "Skills for big feelings that arrive faster than words." },
      { slug: "autism", label: "Autism", note: "Support that adapts to sensory and communication needs." },
      { slug: "life-transitions", label: "Life transitions", note: "New jobs, new roles, and endings." },
      { slug: "anxiety", label: "Anxiety", note: "Worry that has started shrinking the week." },
    ],
    faqs: [
      {
        q: "Is your office close to North Aurora?",
        a: "Yes — a few minutes north on Route 31 to downtown Batavia.",
      },
      {
        q: "Do you work with young children?",
        a: "Yes. Play therapy is part of how several of our clinicians work with younger children, alongside guidance for parents.",
      },
      {
        q: "Can sessions be virtual?",
        a: "Yes, with any of our clinicians, anywhere in Illinois. Many clients mix in-person and video week to week.",
      },
    ],
  },
  {
    slug: "elburn-sugar-grove",
    city: "Elburn & Sugar Grove",
    title: "Counseling for Elburn & Sugar Grove, Illinois",
    metaTitle: "Therapist Serving Elburn & Sugar Grove, IL | Light The Way",
    metaDescription:
      "Counseling for Elburn and Sugar Grove, IL. ADHD, anxiety, school refusal, grief, and life transitions for children, teens, and adults — telehealth or in-person in Batavia.",
    lede: "Out here the practical question is usually the drive, which is exactly what telehealth solves.",
    gettingHere:
      "Route 38 or Route 56 east brings you toward Batavia, generally fifteen to twenty minutes. Plenty of Elburn and Sugar Grove clients do a first session in the office and then move to video.",
    localContext: [
      "Families in the Kaneland area often ask about school refusal and anxiety around the school day — a graded-return plan works the same whether we meet in person or on video.",
      "For a parent working in town with a child in school, a midday video session is frequently the only slot that realistically holds week to week.",
      "We can coordinate with school staff when a family asks us to, regardless of how we're meeting.",
    ],
    focus: [
      { slug: "school-refusal", label: "School refusal", note: "Graded return plans built with the family and school." },
      { slug: "anxiety", label: "Anxiety", note: "Children, teens, and adults." },
      { slug: "adhd", label: "ADHD", note: "Assessment questions, skills, and the shame that rides along." },
      { slug: "grief", label: "Grief & loss", note: "At your own pace, with no timeline attached." },
      { slug: "life-transitions", label: "Life transitions", note: "Change that didn't come with instructions." },
    ],
    faqs: [
      {
        q: "Is telehealth as effective as coming in?",
        a: "For most of what we treat, research finds virtual therapy performs comparably to in-person. Some work — young children in play therapy especially — goes better in the room, and we'll say so if that's the case for you.",
      },
      {
        q: "How far is the office?",
        a: "Generally fifteen to twenty minutes east via Route 38 or Route 56, depending on where you start.",
      },
      {
        q: "Can we start virtually and switch later?",
        a: "Yes, in either direction, with the same clinician.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
