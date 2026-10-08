// procrastination — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Procrastination",
  desc: "Find out what usually leads you to put off tasks and discover practical strategies for each reason.",
  intro:
    "Almost everyone puts off tasks now and then, but the reasons vary from person to person. This questionnaire looks at four common reasons: avoiding discomfort, fear of not doing things perfectly, distraction, and lack of clarity in planning. There are 16 statements. Think about the last few weeks and indicate how often each situation happens to you. There are no right answers: the goal is to understand what weighs most in your case so you can choose the right strategies.",
  scale: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  items: [
    "I put off tasks that make me anxious, even though I know they're important.",
    "I take a long time to get started because I feel everything has to come out perfect from the start.",
    "I pick up my phone to check something quickly and end up spending much more time than I meant to.",
    "I put off a task because I don't know exactly where to start.",
    "I put off calls, messages, or conversations that might be difficult.",
    "I keep reviewing and tweaking a piece of work for so long that I end up delivering it late.",
    "In the middle of a task, I switch to something else as soon as something more interesting comes along.",
    "I have so many things to do that I don't know which one to do first.",
    "I avoid opening emails, bills, or messages because I'm worried about what I might find.",
    "I'd rather not start than risk doing something below what I expect of myself.",
    "Notifications, conversations, or noise around me easily pull me away from what I'm doing.",
    "I misjudge how long a task will take and end up with less time than I needed.",
    "When a task seems boring or unpleasant to me, I look for something more enjoyable to do.",
    "I wait for the ideal moment, with plenty of time and energy, to start important tasks.",
    "I do whatever I feel like doing at the moment, even though I know I should be doing something else.",
    "When a task is big or vague, I find it hard to turn it into concrete steps.",
  ],
  dims: {
    avoidance: {
      label: "Avoiding discomfort",
      desc: "Putting off tasks because they bring boredom, anxiety, fear, or other unpleasant feelings.",
      high: "A good part of your procrastination seems to come from wanting to escape unpleasant feelings, such as anxiety, boredom, or fear of a bad response. This suggests that you feel emotions intensely, which also helps you notice what matters. The thing to watch is that the relief of putting things off doesn't last long, and the task usually feels even heavier afterwards.",
      low: "The discomfort of a task rarely stops you from starting it. This ability to face what is boring or difficult is a big advantage. The thing to watch is forcing yourself to keep going even when fatigue or overload are telling you to take a break.",
      tips: [
        "Start with just two minutes: open the file or write the first sentence. After that, you can stop if you want. Getting started is usually the hardest part.",
        "Name what you're feeling, such as \"I'm afraid of being criticized\". Acknowledging the emotion usually weakens its hold.",
        "Do the most unpleasant task first thing in the day, before opening your email or social media.",
      ],
    },
    perfectionism: {
      label: "Perfectionism",
      desc: "Putting off tasks out of fear of not doing them well enough or while waiting for the ideal moment to start.",
      high: "You seem to put things off because you want them to be perfect or because you're waiting to have the ideal amount of time and energy to start. This care shows that you take your work seriously and have high standards. The thing to watch is that the ideal moment rarely comes, and the fear of making mistakes can delay or prevent important deliveries.",
      low: "You usually start even when things aren't perfect and are willing to make adjustments along the way. This brings agility and helps you learn through practice. The thing to watch is delivering something with less care than the situation called for, especially on important tasks.",
      tips: [
        "Before you start, write down what \"good enough\" means for that task.",
        "Do a quick first version, knowing it will be improved later.",
        "Set a time limit for revisions and hand the work in when it runs out.",
      ],
    },
    distraction: {
      label: "Distraction and impulse",
      desc: "Putting off tasks because your attention is drawn to more immediate stimuli, such as your phone, conversations, or more enjoyable activities.",
      high: "Your attention seems to be easily drawn to notifications, conversations, or activities that are more interesting than the task at hand. This sensitivity to new stimuli can also bring agility and creativity. The thing to watch is that small interruptions add up and eat away hours of your day without you noticing.",
      low: "You can stay focused even with distractions around you and do a good job of resisting the urge to swap a task for something more enjoyable. This is a big advantage in work that requires concentration. The thing to watch is shutting yourself off in the task so much that you miss important requests or changes around you.",
      tips: [
        "Leave your phone in another room or on silent while you work on something important.",
        "Work in 25-minute blocks, with 5-minute breaks between them.",
        "Jot down the ideas and urges that come up during the task so you can deal with them later, instead of interrupting what you're doing.",
      ],
    },
    planning: {
      label: "Lack of clarity and planning",
      desc: "Putting off tasks because it isn't clear where to start, what to do first, or how long each thing will take.",
      high: "You often put things off not for lack of willingness, but because the task seems big, vague, or confusing. This shows that you notice how complex things are. The thing to watch is that, without concrete steps, even simple tasks seem difficult and end up being left for later.",
      low: "You usually know where to start and can turn big tasks into practical steps. This makes it easier to keep up the pace and meet deadlines. The thing to watch is planning so precisely that it becomes hard to adapt when something changes.",
      tips: [
        "Break each big task into steps of no more than 30 minutes and write down which one comes first.",
        "Decide in advance when and where you'll do the task, for example: \"On Tuesday at 9 a.m., at my desk, I'll write the introduction to the report\".",
        "Estimate how long each task will take and add a margin of at least 50%.",
      ],
    },
  },
  resultTitle: "Why you put things off",
  resultIntro:
    "Each bar shows how much a reason shows up in your answers. The higher the score, the more that factor contributes to your procrastination. Start with the strategies for the reason with the highest score.",
  note: "This questionnaire is a self-discovery tool, not a diagnosis. If difficulty starting or finishing tasks is constant and is getting in the way of your studies, your work, or your personal life, it's worth talking to a health professional, as it may be linked to issues such as anxiety, depression, or ADHD.",
};

export default t;
