// anxiety — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Anxiety level",
  desc: "See how often worry and tension in your body have shown up in your routine over the last two weeks.",
  intro:
    "This questionnaire looks at two sides of anxiety: worry, which fills your thoughts, and tension, which shows up in your body and behavior. There are 10 statements about the last two weeks. For each one, indicate how often it happened to you during that time, not how you usually are in general. There are no right or wrong answers. This is a self-assessment based on your answers: it helps you notice how you're doing, but it is not a diagnosis.",
  scale: ["Never", "Some days", "More than half the days", "Nearly every day"],
  items: [
    "I spent a good part of the day with my mind full of worries, one leading to the next.",
    "My body felt tense, especially in my shoulders, neck, or jaw.",
    "I tried to think about something else, but the same worrying thoughts kept coming back.",
    "I noticed my heart racing or my breathing getting short without having done any physical effort.",
    "At bedtime, my mind kept going over problems and unfinished business.",
    "I found it hard to keep still, jiggling my legs, fidgeting with my hands, or pacing back and forth.",
    "Faced with something simple, like an unanswered message, I immediately thought the worst.",
    "Small unexpected things, like a noise or a delay, set me off more than usual.",
    "I put off decisions or avoided situations out of fear that something would go wrong.",
    "Even during my time off, my body stayed on alert and I couldn't slow down.",
  ],
  dims: {
    worry: {
      label: "Worry",
      desc: "Measures how much worrying thoughts filled your mind, came back even when you tried to distract yourself, and influenced your decisions.",
      high: "Over the last few weeks, worry has taken up a lot of space in your thoughts, often anticipating problems that haven't happened yet. This is tiring and takes your focus away from what is within your reach right now. It's worth learning ways to put a limit on these thoughts and seeking support if they are getting in the way of your routine.",
      low: "Worry showed up rarely or only briefly over the last few weeks. You seem able to think about problems without letting them take over your day. Keep looking after the habits that help you maintain this balance.",
      tips: [
        "Set aside 15 minutes a day to write down your worries and, next to each one, note a possible next step or whether it is outside your control.",
        "When you notice you're imagining the worst, ask yourself: what is most likely to actually happen?",
        "Cut down on time spent with the news and social media, especially before bed.",
      ],
    },
    tension: {
      label: "Physical tension and restlessness",
      desc: "Measures physical and behavioral signs linked to anxiety, such as tense muscles, a racing heart, restlessness, and irritation over small things.",
      high: "Your body has given many warning signs over the last few weeks, such as tension, restlessness, or strong reactions to small unexpected events. This is how the body responds to pressure, but when it lasts a long time, it wears you out and gets in the way of rest. Practices that calm the body usually help, and it's worth talking to a professional if the signs are intense or frequent.",
      low: "Your body showed few signs of tension over the last few weeks, and you were able to slow down when it was time to rest. This suggests that everyday pressure isn't building up in your body.",
      tips: [
        "Try breathing slowly for a few minutes, letting the air out for longer than it takes to breathe in.",
        "Move your body regularly: a 20- to 30-minute walk already helps release tension.",
        "If you often feel your heart racing, shortness of breath, or chest pain, see a doctor to check for other possible causes.",
      ],
    },
  },
  bands: {
    minimal: {
      label: "Minimal anxiety",
      text: "Your answers suggest few signs of anxiety over the last two weeks. Worries and moments of tension are part of life and, in your case, don't seem to be weighing on your routine. Keep looking after your sleep, movement, and relationships.",
    },
    mild: {
      label: "Mild anxiety",
      text: "Your answers suggest some signs of anxiety, present on some of the days. This is common during busier times or periods of change. It's worth noticing what has been causing you worry and trying the suggestions below; if the signs increase or last a long time, talk to a professional.",
    },
    moderate: {
      label: "Moderate anxiety",
      text: "Your answers suggest that worry and tension were present on many of the days. This can be tiring and affect your sleep, concentration, and relationships. Talking to a professional, such as a psychologist or a doctor, can help you understand what's going on and find ways to cope with it.",
    },
    high: {
      label: "High anxiety",
      text: "Your answers suggest intense signs of anxiety on nearly every day of the last two weeks. This doesn't define who you are, but it shows you are carrying a heavy load, and there are effective ways to take care of it. Reach out to a professional, such as a psychologist or a doctor, for an assessment and to work out the next steps together.",
    },
  },
  resultTitle: "Your anxiety level",
  resultIntro: "The result is based on the total of your answers about the last two weeks. Below, you can see which range you fall into and how you scored on worry and on physical tension.",
  note: "This questionnaire is a self-discovery and screening tool based on your own answers. It is not a diagnosis: only a qualified professional, such as a psychologist or a doctor, can fully assess anxiety. Some physical signs, such as palpitations and shortness of breath, can also have other causes.",
  help: "If anxiety is getting in the way of your daily life, reach out to a psychologist or your family doctor. Your local health services can offer care and refer you to specialized mental health support when needed. If you are in intense distress, a crisis or emotional-support line in your country can offer confidential support. In an emergency, call your local emergency number.",
};

export default t;
