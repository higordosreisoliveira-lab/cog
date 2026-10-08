// dopamine — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Dopamine test",
  desc: "See how your habits linked to the brain's reward system are doing: quick stimulation, boredom, screens, and long-term goals.",
  intro:
    "This questionnaire looks at everyday habits linked to the brain's reward system. Dopamine is a substance the brain uses to transmit signals, and it is linked to motivation and the pursuit of rewards. Important: despite the popular name, this test does not measure the dopamine in your body. No questionnaire can do that, and the medical tests able to assess dopamine are specialized and rarely used for this purpose. What the test assesses are four areas of habits: seeking quick rewards, difficulty with boredom, motivation for long-term goals, and screen habits. There are 16 statements. Think about the last 2 weeks and indicate how often each situation happened to you. Answer honestly and without overthinking: there are no right or wrong answers.",
  scale: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  items: [
    "I spend more time than I meant to watching short videos or scrolling through social media.",
    "When I'm waiting, like in a line or on public transportation, I find it hard to do nothing.",
    "I can stick with a goal for weeks, even when the results haven't shown up yet.",
    "I pick up my phone within the first few minutes after waking up.",
    "I buy things on impulse, especially online, and later realize I didn't need them.",
    "I lose patience with slow or repetitive tasks and stop before finishing.",
    "I can give up an immediate pleasure when it gets in the way of something important for my future.",
    "I stay on my phone in bed and end up falling asleep later than I meant to.",
    "When I feel tired or low, I look for something that gives me instant pleasure, like a sweet, a snack, or a video.",
    "I find it hard to read a long text or watch a whole movie without getting distracted by something else.",
    "I start important tasks at the time I planned, without putting them off to do something more fun.",
    "I unlock my phone for no clear reason, just out of habit.",
    "When a notification comes in, I stop what I'm doing to see what it is.",
    "Simple activities, like cooking or walking, seem dull to me if there isn't something to watch or listen to at the same time.",
    "I feel satisfied with the progress I make on long projects, like studying, training, or saving money.",
    "I use more than one screen at a time, like watching a series while checking my phone.",
  ],
  dims: {
    quickRewards: {
      label: "Quick rewards",
      desc: "Measures how much you turn to instant pleasures, such as social media, short videos, notifications, impulse purchases, and snacks.",
      high: "You often turn to quick stimulation, frequently to unwind or shift your mood. This is common and not a flaw: many of these stimuli are designed precisely to grab your attention. The thing to watch is when they take up time meant for things that matter more to you, or leave you feeling you've wasted time.",
      low: "You rarely turn to instant pleasures and usually choose intentionally how to spend your free time. This helps you stay focused and make better use of your downtime. It's worth keeping an eye on tiring days, when the urge for quick stimulation tends to grow.",
      tips: [
        "Turn off notifications that aren't essential and keep only those from people and services that really matter.",
        "Before opening an app, decide what you want to do in it and for how long.",
        "For online purchases you hadn't planned, wait 24 hours before placing the order.",
      ],
    },
    boredom: {
      label: "Difficulty with boredom",
      desc: "Measures how hard it is for you to go without stimulation, to wait, or to concentrate on slow, repetitive tasks.",
      high: "Waiting and slow tasks tend to feel uncomfortable for you, and the urge to look for something more interesting comes on fast. This is very common in a routine full of stimulation. Tolerance for boredom can be trained little by little, like any other habit.",
      low: "You handle waiting, pauses, and tasks that call for patience well. This helps you concentrate for longer and finish what you start. Moments without stimulation also give your mind room to rest and come up with new ideas.",
      tips: [
        "Practice a few minutes a day without stimulation, like waiting in line or making a short trip without picking up your phone.",
        "For long tasks, work in blocks of 20 to 25 minutes, with short breaks in between.",
        "Every now and then, do one thing at a time, like eating without a screen or walking without headphones.",
      ],
    },
    longTerm: {
      label: "Long-term goals",
      desc: "Measures your motivation for goals that take a while to pay off, such as studying, training, or saving money. Here, a high score means more difficulty keeping up this kind of goal; a low score, more ease.",
      high: "Staying motivated toward goals that take time has been hard for you, especially when quicker, more pleasant options are close at hand. This doesn't mean you lack ability: long-term goals bring few rewards at the start, and the brain tends to prefer what is immediate. Breaking the path into smaller steps usually helps a lot.",
      low: "You can keep up the effort on goals that take a while to pay off, and you value progress made little by little. This ability helps you build lasting achievements in your studies, work, and health. The thing to watch is not neglecting rest and leisure along the way.",
      tips: [
        "Break each big goal into small steps and mark each completed step with a simple reward.",
        "Track your progress on a calendar or in an app so you can see how far you've come.",
        "Do important tasks at the time of day when you usually have the most energy, before opening social media or other apps.",
      ],
    },
    screens: {
      label: "Screen habits",
      desc: "Measures how your phone and other screens show up in your routine: when you wake up, before bed, checking your phone for no reason, and using several screens at once.",
      high: "Screens are present at many moments of your day, including right after waking up and at bedtime. This is common nowadays, but using them at night can delay and disrupt your sleep, and checking your phone all the time splits your attention. Small changes to your surroundings usually work better than relying on willpower alone.",
      low: "You use screens more intentionally and keep some moments of the day free of them, like early morning and bedtime. This supports your sleep, concentration, and rest. It's worth keeping these limits, especially during busier periods.",
      tips: [
        "Leave your phone outside the bedroom at night and use a regular alarm clock.",
        "Avoid screens for 30 to 60 minutes before bed and try to keep regular sleep times.",
        "During breaks in your day, swap your phone for a bit of movement, like a short walk or some stretching.",
      ],
    },
  },
  bands: {
    balanced: {
      label: "Balanced",
      text: "Your answers suggest a balanced relationship with quick stimulation and screens. You seem to handle boredom well and stay motivated toward goals that take time. Keep looking after the habits that help you, like regular sleep and time away from screens.",
    },
    attention: {
      label: "Worth watching",
      text: "Your answers suggest that some quick-stimulation habits already take up a significant place in your routine. This is very common and no cause for alarm. Look at which areas had the highest scores and choose one or two small changes to try over the next few weeks.",
    },
    overloaded: {
      label: "Stimulation overload",
      text: "Your answers suggest that quick stimulation and screens are very present in your day, and that waiting, concentrating, or keeping up long-term goals may be getting harder. This is increasingly common and can change with gradual habit adjustments, without drastic cuts. Start by reducing excess stimulation at one or two moments of the day, like when you wake up and before bed, and notice how you feel.",
    },
  },
  resultTitle: "Your reward habits",
  resultIntro:
    "The result adds up the four areas and shows how much your current habits rely on quick stimulation. Remember: it does not measure the dopamine in your body, but patterns of behavior that can change over time and with practice.",
  note: "This test is a self-discovery tool based on your own answers. It does not measure dopamine or any other substance in the body, it is not a medical test, and it cannot be used for diagnosis. Reducing excess stimulation can help as a habit change, but it is not a medical treatment. If a habit feels out of your control or is causing harm in your life, talk to a health professional.",
  help: "If you feel you can't control your use of your phone, video games, gambling, or shopping, or if it is affecting your sleep, work, finances, or relationships, reach out to a psychologist or a doctor. For compulsive gaming, gambling, or shopping, there are also specialized services and support groups that can help.",
};

export default t;
