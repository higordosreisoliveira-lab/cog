// depression — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Signs of low mood",
  desc: "See how often signs like feeling down, loss of interest, and lack of energy have shown up over the last two weeks.",
  intro:
    "This questionnaire looks at two groups of signs linked to depressed mood: changes in mood and in interest in things, and changes in energy, sleep, appetite, and concentration. There are 10 statements about the last two weeks. For each one, indicate how often it happened to you during that time. Some statements touch on sensitive topics: answer at your own pace and honestly. This is a self-assessment based on your answers, not a diagnosis.",
  scale: ["Never", "Some days", "More than half the days", "Nearly every day"],
  items: [
    "Things that used to give me pleasure, like a hobby or seeing friends, lost their appeal.",
    "I lacked energy even for simple tasks, like taking a shower or answering a message.",
    "I spent a good part of the day with a sadness or emptiness that was hard to explain.",
    "My sleep changed: I took a long time to fall asleep, woke up several times during the night, or slept much more than usual.",
    "My appetite changed: I ate much less or much more than I usually do.",
    "I looked at the coming months without any hope that things would get better.",
    "I lost track of conversations or simple tasks because I couldn't concentrate.",
    "I caught myself thinking that I'm worthless or that everything I do goes wrong.",
    "Small decisions, like what to eat or what to wear, felt far too hard.",
    "Thoughts that life isn't worth living, or of hurting myself, crossed my mind.",
  ],
  dims: {
    mood: {
      label: "Mood and interest",
      desc: "Measures signs such as persistent sadness, loss of pleasure in things, hopelessness, and very negative thoughts about yourself.",
      high: "Over the last two weeks, sadness, a lack of interest, or harsh thoughts about yourself have shown up often. This is not a lack of willpower: depressed mood changes the way we see ourselves and the future. Talking about it with a professional is an important step, and you don't need to wait until things get worse to seek help.",
      low: "Your mood and your interest in things seem to have stayed steady over the last two weeks. Sad days happen to everyone, but they don't seem to have taken over your routine. Keep looking after what does you good.",
      tips: [
        "Plan small, enjoyable activities throughout the week, even if you don't feel like it: motivation often comes after you start, not before.",
        "Stay in touch with people you trust, even if it's just a message or a short conversation.",
        "If the sadness or lack of interest lasts more than two weeks, reach out to a psychologist or a doctor to talk about it.",
      ],
    },
    energy: {
      label: "Energy, sleep, appetite, and concentration",
      desc: "Measures changes in the body and in everyday functioning that often come with depressed mood, such as tiredness, changes in sleep and appetite, and difficulty concentrating.",
      high: "Your body and mind have shown signs of wear over the last two weeks: less energy, changes in sleep or appetite, and difficulty concentrating. These signs can come with depressed mood, but they can also have other causes, such as stress, poor sleep, or physical health issues. It's worth talking to a doctor, especially if they continue.",
      low: "Your energy, sleep, appetite, and concentration seem to be working steadily. This foundation usually helps a lot in getting through harder days. Keep looking after it.",
      tips: [
        "Try to keep regular times for sleeping, waking up, and eating, even on days when you don't feel like it.",
        "Get outside for a bit and move your body, even if it's just a short walk: daylight and movement help regulate sleep and energy.",
        "Break tasks into small parts and acknowledge each one you complete, without expecting yourself to keep your old pace.",
      ],
    },
  },
  bands: {
    minimal: {
      label: "Few signs",
      text: "Your answers suggest few or no signs of low mood over the last two weeks. Moments of sadness or tiredness are part of life and, in your case, don't seem to be taking over your routine. Keep looking after your sleep, movement, and relationships.",
    },
    mild: {
      label: "Mild signs",
      text: "Your answers suggest some signs of low mood on some of the days. This can happen during periods of tiredness, loss, or change. Notice how you feel over the next few weeks and, if the signs continue or increase, talk to a professional.",
    },
    moderate: {
      label: "Moderate signs",
      text: "Your answers suggest signs of low mood on many of the days, which may be weighing on your daily life. This deserves attention and care, and it isn't something you have to deal with on your own. Reach out to a professional, such as a psychologist or a doctor, to talk about what you've been feeling.",
    },
    high: {
      label: "Intense signs",
      text: "Your answers suggest frequent and intense signs of low mood over the last two weeks. This can make everything harder, but treatment exists, and people get better with the right support. Reach out to a professional, such as a psychologist or a doctor, as soon as you can, and tell someone you trust how you're doing.",
    },
  },
  resultTitle: "Your mood signs",
  resultIntro: "The result adds up your answers about the last two weeks. Below, you can see which range you fall into and how you scored on mood and interest and on energy, sleep, appetite, and concentration.",
  note: "This questionnaire is a self-discovery and screening tool based on your own answers. It is not a diagnosis of depression: only a qualified professional, such as a psychologist or a doctor, can make that assessment. Tiredness and changes in sleep and appetite can also have other causes, including physical ones.",
  help: "To talk about what you're feeling, reach out to a psychologist or your family doctor. Your local health services can offer care and refer you to specialized mental health support when needed. If you are in distress, a crisis or emotional-support line in your country can offer confidential support. In an emergency, call your local emergency number.",
  alert:
    "You shared that, over the last two weeks, you've had thoughts that life isn't worth living or of hurting yourself. It's good that you answered honestly. These thoughts deserve care right now, and you don't have to go through this without someone by your side. If you are in danger or feel you might hurt yourself, call your local emergency number now. To talk to someone at any time, reach out to a crisis or emotional-support line in your country. If you can, also tell someone you trust how you're feeling.",
};

export default t;
