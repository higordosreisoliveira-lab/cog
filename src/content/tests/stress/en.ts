// stress — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Stress level",
  desc: "See how heavily overload has weighed on you over the last month and how your ability to catch your breath is doing.",
  intro:
    "This questionnaire looks at stress from two sides: the overload and pressure you felt, and the sense of control and recovery that helps balance that weight. There are 12 statements about the last month. For each one, indicate how often it happened to you during that time. Some statements describe positive situations: answer them the same way, thinking only about how often they happened. This is a self-assessment based on your answers and does not replace an assessment by a professional.",
  scale: ["Never", "Almost never", "Sometimes", "Often", "Very often"],
  items: [
    "My tasks and responsibilities seemed bigger than the hours in the day.",
    "I managed to set aside time to rest, without feeling guilty.",
    "I reached the end of the day feeling that my to-do list just kept growing.",
    "When a problem came up, I was able to stop and think calmly about what to do.",
    "I felt strong pressure, from other people or from myself, to keep up with everything.",
    "I felt I could organize my day the way I needed to.",
    "I lost my patience over things that normally wouldn't bother me.",
    "After a hard day, a good night's sleep or some time doing something I enjoy was enough for me to recover.",
    "I kept thinking about my unfinished tasks even at times that were supposed to be for resting.",
    "I had someone to turn to when I needed to vent or ask for help.",
    "I felt physical signs of tension, like headaches, a clenched jaw, or tiredness that wouldn't go away.",
    "I was able to say no or postpone requests when I already had too much on my plate.",
  ],
  dims: {
    load: {
      label: "Overload and pressure",
      desc: "Measures how much you felt overwhelmed by tasks, demands, and tension, and how much this stayed with you even during your downtime.",
      high: "Over the last month, the feeling of overload was frequent: lots to do, demands, and little breathing room for your mind. Body and mind can handle this pace for a while, but it takes its toll when it goes on for too long. It's worth looking at what can be reduced, shared, or postponed.",
      low: "Over the last month, pressure showed up rarely or stayed at a level you could manage. This doesn't mean there were no challenges, but they don't seem to have piled up. Notice what has been working to keep this balance.",
      tips: [
        "List the week's tasks and separate what is truly urgent, what can wait, and what can be shared with other people.",
        "Take short breaks throughout the day, away from screens, even if they're only five minutes long.",
        "Set clear limits, such as a time after which you no longer answer work messages.",
      ],
    },
    coping: {
      label: "Low control and recovery",
      desc: "Measures a lack of the resources that balance stress, such as feeling that your routine is in your hands, resting, having support, and setting limits. The statements in this part are positive, so the score goes up when they happened rarely.",
      high: "Over the last month, moments of rest, support, and a sense of control were rare. Without these breaks, even an ordinary routine feels heavier, because there's no room left to catch your breath. Gradually strengthening these resources is one of the most effective ways to reduce stress.",
      low: "You've been able to rest, ask for help, and feel that your routine is largely in your hands. These resources work as a buffer: they help you get through hard times without burning out. Keep protecting these moments, especially when your routine gets tight.",
      tips: [
        "Protect your sleep: try to go to bed and wake up at similar times, including on weekends.",
        "Put at least one activity a week that brings you enjoyment or rest on your calendar, and treat that time as an appointment.",
        "Tell someone you trust how you're doing: sharing the weight already helps lighten it.",
      ],
    },
  },
  bands: {
    low: {
      label: "Low stress",
      text: "Your answers suggest a low level of stress over the last month. You seem to strike a good balance between the demands of your routine and moments of recovery. Keep looking after the habits that support this balance.",
    },
    moderate: {
      label: "Moderate stress",
      text: "Your answers suggest a moderate level of stress, which is common during periods with lots of demands. The thing to watch is when this state becomes the norm, with no periods of relief. Try the suggestions below and, if stress starts to affect your sleep, health, or relationships, talk to a professional.",
    },
    high: {
      label: "High stress",
      text: "Your answers suggest a high level of stress over the last month, with a lot of pressure and little room to recover. When this situation goes on for a long time, it can affect your sleep, mood, and physical health. It's worth seeking help from a professional, such as a psychologist or a doctor, to understand what is weighing on you and find ways to lighten the load.",
    },
  },
  resultTitle: "Your stress level",
  resultIntro: "The result adds up your answers about the last month. For the statements about control and recovery, the scoring is reversed: the less these resources showed up, the higher the result. Below, you can see which range you fall into and how you scored in each part.",
  note: "This questionnaire is a self-discovery tool based on your own perception of the last month. It is not a diagnosis and does not replace an assessment by a qualified professional. Stress levels also vary a lot from one stage of life to another.",
  help: "If stress is affecting your health, sleep, or relationships, reach out to a psychologist or your family doctor. Your local health services can offer care and refer you to specialized mental health support when needed. If you are in intense distress, a crisis or emotional-support line in your country can offer confidential support. In an emergency, call your local emergency number.",
};

export default t;
