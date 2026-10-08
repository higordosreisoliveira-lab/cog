// time — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Time management",
  desc: "See how you set priorities, plan, protect your focus, and balance work and rest.",
  intro:
    "This questionnaire looks at four habits linked to time management: setting priorities, planning, staying focused, and respecting boundaries and time for rest. There are 16 statements. For each one, indicate how well it describes your current routine, whether at work, in your studies, or at home. There are no right answers: the goal is to find the areas that could most improve your day-to-day life.",
  scale: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
  items: [
    "I know which tasks are the most important in my week.",
    "I set aside a few minutes to plan my day or my week.",
    "I can work on a task for a good while without interrupting myself.",
    "I can turn down requests when they get in the way of what I've already committed to.",
    "I can tell the difference between what's urgent and what's truly important.",
    "I often find out only at the last minute that I have something important to hand in.",
    "I silence notifications when I need to concentrate.",
    "I take breaks throughout the day to rest, even when there's a lot of work.",
    "I spend a good part of the day dealing with small requests and set aside what matters most.",
    "I write down deadlines and appointments as soon as I hear about them.",
    "I do one thing at a time instead of trying to do several at once.",
    "I answer work or study messages in the evening, on weekends, or on vacation.",
    "Before taking on a new task, I consider whether it's more important than what I'm already doing.",
    "When I make plans, I leave some extra time for the unexpected.",
    "I stop what I'm doing every time a message or a request comes in.",
    "I have a set time to stop working and I usually stick to it.",
  ],
  dims: {
    priorities: {
      label: "Priorities",
      desc: "Knowing what matters most and giving your time to it before what is merely urgent or easy.",
      high: "You usually know what really matters and give your best time to those tasks. This means your effort produces results that make a difference. The thing to watch is rigidity: sometimes an unexpected request deserves attention, even if it's not in the plan.",
      low: "You tend to respond to whatever comes up first and make yourself available for different requests. This brings flexibility and makes you someone others can count on. The thing to watch is reaching the end of the day with a lot of work done and little progress on what matters most.",
      tips: [
        "At the start of each day, choose your three most important tasks and begin with one of them.",
        "Before taking on a new request, ask yourself whether it's more important than what you're already doing.",
        "Save the time of day when you have the most energy for the day's most important task.",
      ],
    },
    planning: {
      label: "Planning",
      desc: "Organizing your day and week in advance, keeping track of deadlines, and estimating how long each task will take.",
      high: "You usually plan ahead, write down commitments, and estimate how long things will take. This reduces surprises and brings peace of mind. The thing to watch is spending too much time planning or getting frustrated when the day doesn't go as expected.",
      low: "You tend to decide what to do as the day unfolds, which brings spontaneity and an ability to improvise. The thing to watch is surprises: deadlines discovered late and tasks that take longer than you expected.",
      tips: [
        "Set aside ten minutes at the start of each week to plan the days ahead.",
        "Write every deadline or appointment in your calendar as soon as you hear about it.",
        "When planning your day, leave about a third of your time free for the unexpected.",
      ],
    },
    focus: {
      label: "Focus",
      desc: "Concentrating on one task at a time and protecting your time from interruptions.",
      high: "You can concentrate on a task for a long time and protect your work from interruptions. This improves the quality and speed of what you do. The thing to watch is going too long without replying and holding up people who are waiting for a response from you.",
      low: "You respond quickly to messages and requests and keep track of several things at once. This makes you an approachable and responsive person. The thing to watch is that constantly switching between tasks is tiring and makes each one take longer than it would with your full attention.",
      tips: [
        "Block out periods of 60 to 90 minutes in your calendar for focused work.",
        "Silence notifications and set two or three times a day to check messages.",
        "Finish a task, or a well-defined part of it, before starting another.",
      ],
    },
    boundaries: {
      label: "Boundaries and rest",
      desc: "Saying no when necessary, taking breaks, and separating work time from rest time.",
      high: "You can turn down requests that compromise your priorities, and you protect your breaks. This preserves your energy and your health in the long run. The thing to watch is seeming unavailable at times when the group really needs an extra effort.",
      low: "You're usually available and rarely say no, which means people rely on you a great deal. The thing to watch is accumulated fatigue: without breaks and boundaries, your energy and the quality of your work decline over time.",
      tips: [
        "Set a time to stop working and turn off notifications after it.",
        "Take a short break every hour or two to get up, drink some water, and rest your eyes.",
        "To turn down a request, use a simple sentence, like \"I can't right now, but I can help on Thursday\".",
      ],
    },
  },
  resultTitle: "Your time management profile",
  resultIntro:
    "See how you scored on each habit. Higher scores indicate more established practices, but even those have things to watch. Choose one or two habits to work on at a time.",
  note: "This result is a self-discovery tool based on your own answers and is not a professional assessment. If fatigue or overload happen often, it's worth talking to your manager or a health professional.",
};

export default t;
