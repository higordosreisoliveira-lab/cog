// burnout — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Burnout level",
  desc: "See whether work has been leaving you drained, detached from what you do, or feeling that your effort isn't paying off.",
  intro:
    "Burnout is work-related wear and tear that usually shows up on three fronts: exhaustion, detachment from work, and a loss of the sense of accomplishment. There are 15 statements about the last three months. For each one, indicate how often it happened to you during that time. If you don't have a formal job, think about your main activity, such as your studies, your own business, or caring for someone. Some statements describe positive situations: answer them the same way, thinking only about how often they happened. This is a self-assessment based on your answers, not a diagnosis.",
  scale: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  items: [
    "After work, I only had enough energy to lie on the couch or scroll on my phone.",
    "I did only the bare minimum at work, without really engaging with my tasks.",
    "I ended the workday feeling that my effort had produced some result.",
    "The day before going back to work, I felt a weight just thinking about what lay ahead.",
    "I treated coworkers, clients, or the people I serve more coldly or impatiently than I would have liked.",
    "When facing a problem at work, I trusted my ability to find a way out.",
    "Even after time off or a vacation, the tiredness came back within the first few days of work.",
    "I felt it didn't matter whether I did my job well or badly.",
    "I learned something new or got better at some part of my job.",
    "It took a huge effort just to make it to the end of the workday.",
    "I counted the hours until the workday was over.",
    "I noticed that my work helped someone, whether a coworker, a client, or the team.",
    "I set aside friends, family, or activities I enjoy because work left me with no energy.",
    "I avoided work messages, meetings, or conversations whenever I could.",
    "I felt proud of something I did at work.",
  ],
  dims: {
    exhaustion: {
      label: "Exhaustion",
      desc: "Measures the physical and mental tiredness linked to work, the kind that doesn't go away with a night's sleep or a restful weekend.",
      high: "Work has been using up more energy than you can replenish. The tiredness doesn't stay at work: it follows you home, into your time off, and into your relationships. This is usually the first sign that your current pace isn't sustainable.",
      low: "You've been able to recover your energy from one workday to the next. Tiredness shows up, as it does in any routine, but it doesn't seem to build up. Keep protecting your time to rest.",
      tips: [
        "Set a time to end your workday and create a small wind-down ritual, like closing your computer and going for a short walk.",
        "Protect your sleep and set aside time to move, even if it's just short walks.",
        "Use your time off to truly rest, without checking work messages.",
      ],
    },
    detachment: {
      label: "Detachment from work",
      desc: "Measures how much you have been pulling away from work and the people connected to it, with less engagement, more coldness, or a feeling that nothing matters.",
      high: "You've been feeling the urge to pull away from work and the people connected to it, doing the bare minimum and losing interest in what used to matter. This detachment is often a way of protecting yourself from wear and tear, not a lack of character or commitment. It's worth understanding what led to it and what could change.",
      low: "You're still engaged with your work and with the people connected to it. Even on hard days, it seems to keep some meaning for you. This connection helps protect you against burnout.",
      tips: [
        "Remember what led you to choose this work and look for tasks that bring you closer to it.",
        "Talk to your manager or coworkers about what has been draining the meaning from your work, such as unrealistic targets or a lack of autonomy.",
        "Build supportive relationships at work: an honest conversation with a coworker you trust can be a real relief.",
      ],
    },
    efficacy: {
      label: "Low accomplishment",
      desc: "Measures how much you lack the feeling that your work produces results, that you are capable, and that you are growing. The statements in this part are positive, so the score goes up when they happened rarely.",
      high: "It has been rare to feel that your effort pays off, that you are capable, or that your work makes a difference. This feeling can come from the tiredness itself, which distorts the way you see your performance, or from an environment with little recognition. It does not measure your worth as a professional.",
      low: "You still notice that your work produces results, that you are able to solve problems, and that you are learning. This sense of accomplishment helps you stay motivated even during the toughest periods.",
      tips: [
        "At the end of the week, write down three things you finished or solved, however small.",
        "Ask someone you trust for feedback on your work, to get a more balanced view of your performance.",
        "Look for a small challenge or learning opportunity that brings back the feeling of progress.",
      ],
    },
  },
  bands: {
    low: {
      label: "Few signs of burnout",
      text: "Your answers suggest few signs of burnout. You seem to keep your energy, engagement, and sense of accomplishment at work, even with the normal difficulties of your routine. Keep looking after the limits and habits that help you maintain this balance.",
    },
    moderate: {
      label: "Moderate signs of burnout",
      text: "Your answers suggest some signs of work-related wear and tear. This is a good time to act, before the tiredness builds up. Notice what has been weighing on you most, try the suggestions below and, if possible, talk to your manager about adjustments to your routine.",
    },
    high: {
      label: "Strong signs of burnout",
      text: "Your answers suggest strong signs of burnout, such as deep tiredness, detachment from work, and little sense of accomplishment. This kind of wear and tear usually calls for real changes in your routine, not just more willpower. Reach out to a professional, such as a psychologist or a doctor, to assess how you are doing and which paths make sense in your case.",
    },
  },
  resultTitle: "Your burnout level",
  resultIntro: "The result adds up your answers about the last three months. For the statements about accomplishment, the scoring is reversed: the less accomplishment you felt, the higher the result. Below, you can see which range you fall into and how you scored in each part.",
  note: "This questionnaire is a self-discovery tool based on your own perception. Burnout is work-related wear and tear and is not, in itself, a medical diagnosis. Similar signs also appear with depression, anxiety, and physical health problems, and only a qualified professional can make that assessment.",
  help: "If work is affecting your health, reach out to a psychologist or your family doctor. Your local health services can offer care and refer you to specialized mental health support when needed. If your employer has an occupational health service or an employee assistance program, it can also help. If you are in intense distress, a crisis or emotional-support line in your country can offer confidential support. In an emergency, call your local emergency number.",
};

export default t;
