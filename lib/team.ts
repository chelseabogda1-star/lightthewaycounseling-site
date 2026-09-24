export type Therapist = {
  slug: string;
  name: string;
  credentials: string;
  role?: string;
  photo: string;
  phone?: string;
  email?: string;
  ages: string;
  specialties: string[];
  approaches: string[];
  bio: string[];
  acceptingNew?: boolean;
  note?: string;
};

// NOTE: `photo` currently points at the existing Wix CDN so the site looks
// right on day one. Drop the original image files into /public/team/ and change
// each path to e.g. "/team/chelsea-bogda.jpg" when you have them.
export const team: Therapist[] = [
  {
    slug: "chelsea-bogda",
    name: "Chelsea Bogda",
    credentials: "LCPC, ADHD-CCSP",
    role: "Co-Owner",
    photo:
      "https://static.wixstatic.com/media/7807b1_e60f25e9363a4f5d90f8ebccb8975d9b~mv2.png/v1/crop/x_0,y_0,w_1064,h_1277/fill/w_600,h_720,al_c,q_90,enc_auto/HeadShot_edited.png",
    phone: "(630) 549-5575",
    email: "chelsea@lightthewaycounselingpllc.com",
    ages: "Adults",
    specialties: ["ADHD", "Anxiety", "Life transitions"],
    approaches: ["CBT", "DBT", "Client-centered", "Mindfulness-based", "Creative & music interventions"],
    bio: [
      "While therapy can seem frightening or uncomfortable, sometimes we need someone to help navigate through life's difficulties. When working with a therapist that aligns with our needs, it can often improve the therapeutic experience.",
      "As a Licensed Clinical Professional Counselor, I aim to provide a safe, nonjudgmental, and empathic environment and am passionate about working with adults struggling with ADHD, anxiety, and life transitions. I utilize strategies from approaches such as CBT and DBT, tailoring my strategies and interventions to the presenting individual. I often incorporate a combination of music and other creative interventions with modalities, including client-centered and mindfulness-based interventions.",
      "Overall, I value the importance of an individualized approach, adjusting the therapeutic experience to meet the needs and interests of the client.",
    ],
  },
  {
    slug: "caitlin-reisel",
    name: "Caitlin Reisel",
    credentials: "LCPC",
    role: "Co-Owner",
    photo:
      "https://static.wixstatic.com/media/7807b1_fdbda2a88f664ae58f2b9d26fabc8434~mv2.jpg/v1/crop/x_213,y_359,w_1638,h_1966/fill/w_600,h_720,al_c,q_90,enc_auto/IMG_4350_edited_edited.jpg",
    phone: "(630) 415-7325",
    email: "caitlin@lightthewaycounselingpllc.com",
    ages: "Older children, adolescents, and adults",
    specialties: [
      "Anxiety",
      "Depression",
      "ADHD",
      "Relationship difficulties",
      "Life transitions",
      "LGBTQ+",
      "New parenthood & infertility",
    ],
    approaches: ["Client-Centered Therapy", "CBT", "DBT"],
    bio: [
      "Hi! My name is Caitlin and I am a counselor who works with older children, adolescents, and adults navigating a variety of struggles. My therapeutic approach is simple: I believe in walking alongside my clients during the therapy process, problem-solving and processing together.",
      "I enjoy working with individuals struggling with anxiety, depression, ADHD, relationship difficulties, life transitions, LGBTQ+ difficulties, and more. As a new mom, I also have a newfound passion for working with new parents as they navigate the transition into parenthood, including infertility struggles. I am trained in Client-Centered Therapy, which involves listening without judgement, providing empathy, and being one's genuine self with clients. I pair this approach with Cognitive Behavioral (CBT), Dialectical Behavior (DBT), and other therapeutic approaches in order to provide a client with tools they can take with them outside of our sessions.",
      "As Carl Rogers, the founder of Client-Centered Therapy said, “The good life is a process, not a state of being. It is a direction, not a destination.” If you're ready to start that process, I'd love to join you on your journey.",
    ],
  },
  {
    slug: "heather-anderson",
    name: "Heather Anderson",
    credentials: "LCPC, ADHD-CCSP, ASDCS",
    photo:
      "https://static.wixstatic.com/media/7807b1_62b7ba9a65624489a55b59def71166e0~mv2.png/v1/crop/x_86,y_100,w_898,h_1077/fill/w_600,h_720,al_c,q_90,enc_auto/Heather.png",
    phone: "(331) 801-1529",
    email: "heather@lightthewaycounselingpllc.com",
    ages: "Children, adolescents, and adults",
    specialties: [
      "Life transitions",
      "Stress",
      "Anxiety",
      "Depression",
      "ADHD",
      "Autism spectrum disorder",
    ],
    approaches: ["Client-centered", "ACT", "CBT", "DBT"],
    bio: [
      "I want to be honest — admitting that you or a loved one may need help can be scary! You've probably thought about reaching out for support many times before looking up your options on the internet and ending up here, reading my bio. I am proud of you for taking these first steps towards getting the help you need. However, you may still have some reservations about taking the next step and setting up an appointment, and that's okay! I hope that I can ease some of your concerns by sharing a little more about who I am and what I do.",
      "Hello! My name is Heather Anderson, my pronouns are she/her, and I am a Licensed Clinical Professional Counselor. I have experience working with children, adolescents, and adults who are dealing with life transitions, stress, and symptoms of anxiety, depression, or neurodevelopmental disorders like ADHD and autism spectrum disorder. I utilize a client-centered counseling approach to foster a genuine and empathetic relationship with every client and incorporate other therapeutic approaches like ACT, CBT, and DBT depending on each client's goals for counseling.",
      "If you or a loved one is interested in learning more about me and my approach to counseling, or if you think I may be the right fit for your counseling needs and are ready to schedule an appointment, please reach out. As Fred Rogers, aka Mister Rogers, once said, “Discovering the truth about ourselves is a lifetime's work, but it's worth the effort.”",
    ],
  },
  {
    slug: "john-kuzelka",
    name: "John Kuzelka",
    credentials: "LPC",
    photo:
      "https://static.wixstatic.com/media/7807b1_622d1e7f06b8407da952e102ad23a2cd~mv2.jpg/v1/crop/x_200,y_277,w_2101,h_2524/fill/w_600,h_720,al_c,q_90,enc_auto/IMG_0232_JPG.jpg",
    phone: "(630) 384-9261",
    email: "john@lightthewaycounselingpllc.com",
    ages: "Children, adolescents, and young adults",
    specialties: [
      "Anger management",
      "Behavioral difficulties",
      "Autism",
      "Life transitions",
    ],
    approaches: ["Client-centered", "Acceptance-based methods", "CBT", "Mindfulness"],
    bio: [
      "I recognize that seeking help for mental health concerns can be a difficult step. Therapy is a very personal journey, and my approach is tailored to meet each individual's unique needs.",
      "As a Licensed Professional Counselor (LPC) with specialized training in Anger Management, I offer personalized support to help you understand and manage anger effectively. My approach combines acceptance-based methods with evidence-based strategies, providing practical tools for daily life. My goal is to empower you to develop healthier responses and gain a greater sense of control.",
      "My experience includes working with children and adolescents facing behavioral and emotional challenges, as well as individuals with Autism. I also assist young adults as they navigate the transitions and obstacles of life. I primarily use a client-centered approach, which puts you in the driver's seat while I act as a supportive facilitator. I listen without judgment and provide a safe space for you to explore your experiences. Additionally, I integrate principles of CBT and mindfulness, adapting my methods to best fit your specific experiences, needs, and values. In this collaborative process, you will always have a voice in your care.",
    ],
  },
  {
    slug: "stephanie-martinez",
    name: "Stephanie Martinez",
    credentials: "LSW, CGP",
    photo:
      "https://static.wixstatic.com/media/7807b1_f7c5b8590da94d3ab6530a8a24c58c82~mv2.jpg/v1/crop/x_223,y_484,w_1702,h_2044/fill/w_600,h_720,al_c,q_90,enc_auto/Stephanie%20Martinez_edited.jpg",
    phone: "(630) 551-8125",
    email: "stephanie@lightthewaycounselingpllc.com",
    ages: "Children, adolescents, and adults",
    specialties: [
      "Anxiety",
      "Depression",
      "Grief",
      "Life transitions",
      "Emotion regulation",
    ],
    approaches: ["CBT", "DBT", "Solution-Focused Therapy", "Play Therapy"],
    bio: [
      "Imagine feeling less overwhelmed, more confident, and more in control — therapy can help you get there, and I'll guide you every step of the way. I'm a Licensed Social Worker with experience supporting children, adolescents, and adults facing anxiety, depression, grief, and major life changes, and I am also a Certified Grief Informed Professional (CGP), with additional training to support clients navigating loss.",
      "My approach is laidback yet focused, blending real conversations with evidence-based practices like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Solution-Focused Therapy, and Play Therapy. I believe therapy works best when it feels genuine, comfortable, and tailored to you, not one-size-fits-all.",
      "I'm inspired by the words of Selena Quintanilla: “All I need to do is try and do the best that I can do.” I bring that mindset to every session, helping clients embrace progress over perfection and build resilience along the way.",
      "If you're ready to take the first step toward feeling better, I invite you to reach out — we can figure it out together.",
    ],
  },
  {
    slug: "nicole-bennett",
    name: "Nicole Bennett",
    credentials: "Masters Level Intern",
    photo:
      "https://static.wixstatic.com/media/7807b1_b6c72242f28444dd8c240c291e40239d~mv2.jpg/v1/crop/x_130,y_0,w_1654,h_1986/fill/w_600,h_720,al_c,q_90,enc_auto/Nicole%20Headshot_edited_edited_edited_edited.jpg",
    phone: "(630) 448-2392",
    email: "nicole@lightthewaycounselingpllc.com",
    ages: "Children, adolescents, and adults",
    specialties: ["Trauma-informed care", "Crisis intervention", "Behavioral support"],
    approaches: ["Client-centered", "Strengths-based", "Trauma-informed"],
    bio: [
      "As a Master of Social Work intern, I am passionate about helping individuals feel supported, understood, and empowered through their healing journey.",
      "My professional experience includes work as a behaviorist in education, where I collaborated with children and multidisciplinary teams while building expertise in crisis intervention, trauma-informed care, and de-escalation techniques.",
      "I believe therapy is most effective when clients feel safe, accepted, and heard. My goal is to create a collaborative, compassionate space where clients can explore challenges, build on their strengths, and develop practical tools for lasting growth.",
    ],
  },
];

export function getTherapist(slug: string) {
  return team.find((t) => t.slug === slug);
}
