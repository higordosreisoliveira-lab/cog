// adhd — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "ADHD traits in adults",
  desc: "See how often situations related to attention, organization, restlessness, and impulsivity show up in your adult life.",
  intro:
    "ADHD (attention-deficit/hyperactivity disorder) isn't just a childhood thing: many people reach adulthood with these traits, sometimes without ever having been assessed. This questionnaire looks at two groups of traits in everyday life: attention and organization, and restlessness and impulsivity. There are 18 common situations from adult life, at work, at home, and in relationships. Think about the last 6 months and indicate how often each one happened to you. Answer honestly, based on what actually happens, not on what you would like to happen. Keep in mind that this is a self-assessment that looks at traits, not a diagnosis. Everyone gets distracted or rushed now and then; what matters here is how often.",
  scale: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  items: [
    "I read a page of a book or a report all the way to the end and realize I couldn't say what it said, because my mind was somewhere else.",
    "In a meeting, class, or talk, I notice I'm jiggling my leg, tapping my pen on the table, or shifting in my chair the whole time.",
    "Right at the front door, I spend a few minutes looking for my keys, phone, or wallet, which I left somewhere I can't remember.",
    "In a group conversation, an idea pops into my head and I say it right away, talking over someone who hadn't finished yet, because I'm afraid I'll forget what I wanted to say.",
    "I pick up my phone or open my computer to do one specific thing, like paying a bill, and end up doing three other things without getting the first one done.",
    "I see a sale or something that catches my eye and buy it on the spot, without comparing prices or thinking about my monthly budget.",
    "While someone is calmly explaining something to me, I realize I've missed part of what they said and have to ask them to repeat it, or I pretend I followed along.",
    "In a checkout line or a traffic jam, I feel impatience building up fast: I keep looking around, huffing, or searching for another way.",
    "A simple, boring task, like booking an appointment or sending a document, sits on my list for weeks, even though I know it would only take a few minutes.",
    "On a day off with no plans, instead of resting, I feel restless and quickly come up with something to do, because spending time doing nothing bothers me.",
    "I send an email, an assignment, or a spreadsheet and only afterward notice a detail that slipped by, like a forgotten attachment, a wrong date, or a mixed-up name.",
    "I reply to a message or a comment in the heat of the moment and, shortly after, regret my tone or what I wrote.",
    "I start tidying a room, find something that takes me to another part of the house, and by the end of the day there are several half-finished tidying jobs.",
    "I go to bed with a tired body, but my mind keeps racing, jumping from one thought to another for quite a while.",
    "I make plans with someone and only remember them when the person texts to ask if I'm still coming.",
    "After getting together with friends or coworkers, I realize I talked much more than the others or jumped from one topic to the next without giving the conversation room to breathe.",
    "I think I still have plenty of time before leaving and, when I look at the clock, I should already be on my way.",
    "Carried away by excitement, I say yes on the spot to an invitation, a new project, or a change of plans, and only later realize it didn't fit into my routine.",
  ],
  dims: {
    inattention: {
      label: "Attention and organization",
      desc: "Measures how often your attention slips in the middle of reading, a task, or a conversation, and how you handle deadlines, commitments, everyday objects, and tasks that don't interest you much.",
      high: "Staying focused on uninteresting tasks, remembering commitments, and taking care of details seem to take more effort for you than for many people. This has nothing to do with laziness or a lack of intelligence: many people with this profile have quick, creative minds full of connections, and can concentrate intensely on whatever sparks their interest. What usually helps is taking organization out of your head and putting it into your surroundings, with reminders, lists, and simple routines.",
      low: "You usually keep your attention on what you're doing, remember your commitments, and manage to see tasks through to the end, even the less interesting ones. This makes you reliable and brings peace of mind at work and at home. Occasional distractions are normal, especially during periods of tiredness, stress, or poor sleep.",
      tips: [
        "Use alarms and reminders on your phone for appointments and bills, instead of relying on memory alone.",
        "Keep a fixed spot for your keys, wallet, and documents, like a bowl or a hook near the door.",
        "When facing a boring task, commit to just the first five minutes: getting started is usually the hardest part.",
      ],
    },
    hyperactivity: {
      label: "Restlessness and impulsivity",
      desc: "Measures restlessness of body and mind, difficulty waiting, and the tendency to speak, decide, or act on the impulse of the moment.",
      high: "You have plenty of energy and tend to act fast: you speak, decide, and react at the pace your ideas come, and waiting or staying still for a long time is usually uncomfortable. This energy can be a great ally, bringing enthusiasm, initiative, creativity, and the courage to start new things. The thing to watch is words and decisions made in the heat of the moment, which sometimes lead to regret or friction, and the fatigue of a mind that takes a long time to slow down.",
      low: "You usually wait calmly, think before you act, and are able to relax when you have free time. This helps you make thoughtful decisions and keep conversations balanced. Occasional moments of impatience or agitation are normal, especially during stressful periods.",
      tips: [
        "Before buying something, replying to a message that annoyed you, or taking on a new commitment, build in a pause: wait a few minutes or until the next day.",
        "Give your body's energy an outlet, with regular physical activity, short walks during breaks, or a discreet object to fidget with during meetings.",
        "If your mind races at bedtime, write down what's on your mind on a piece of paper before going to bed and leave it to sort out the next day.",
      ],
    },
  },
  bands: {
    few: {
      label: "Few traits",
      text: "Your answers suggest that situations related to inattention, restlessness, and impulsivity rarely show up in your daily life. Some distractions and moments of impatience are normal for anyone. The ranges in this test are only a guide and have not been clinically validated.",
    },
    some: {
      label: "Some traits",
      text: "Your answers suggest that some traits of inattention or restlessness show up fairly often in your routine. This is common and can have many causes, such as tiredness, stress, poor sleep, or too many demands. Notice in which situations they weigh on you most and try the tips for each area, keeping in mind that the ranges are only a guide, without clinical validation.",
    },
    many: {
      label: "Many traits",
      text: "Your answers suggest that many traits related to attention, restlessness, and impulsivity show up often in your daily life. This does not mean you have ADHD: other conditions and stages of life can bring similar signs, and the ranges in this test are only a guide, without clinical validation. If these traits have been with you for a long time, perhaps since childhood, and get in the way of your work, studies, or relationships, it's worth talking to a psychiatrist, neurologist, or psychologist for a proper assessment.",
    },
  },
  resultTitle: "Your ADHD traits",
  resultIntro:
    "The result adds up your answers to the 18 situations and shows how often traits of inattention, restlessness, and impulsivity show up in your daily life. Also look at the two areas separately: they help you understand where these traits weigh on you most and where your strengths lie.",
  note: "This test is a self-discovery tool based on your own answers. It is not a diagnosis of ADHD or any other condition, and the result ranges have not been clinically validated. Only a qualified professional, such as a psychiatrist, neurologist, or psychologist, can carry out a full assessment that considers your history since childhood and other possible causes, such as anxiety, depression, or sleep problems.",
  help: "If you want to look into these traits, reach out to a psychiatrist, neurologist, or psychologist, ideally one with experience in adult ADHD. Your doctor or your local health services are a good first step: they can give you guidance and refer you for an assessment, and if you are going through a lot of distress, they can also point you to mental health support. University clinics and teaching hospitals sometimes offer specialized services, and support organizations for people with ADHD can often recommend trustworthy professionals and materials.",
};

export default t;
