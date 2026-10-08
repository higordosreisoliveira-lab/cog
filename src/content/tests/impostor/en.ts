// impostor — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Impostor syndrome",
  desc: "See how often you doubt your own achievements, fear that people will notice your shortcomings, and push yourself too hard at work and in your studies.",
  intro:
    "Impostor syndrome is the feeling that you don't deserve what you've achieved and that, sooner or later, someone will notice. It's a very common experience, even among competent and successful people, and it is neither a diagnosis nor a mental disorder. This questionnaire looks at three ways it tends to show up: attributing success to luck, being afraid of being \"found out\", and demanding perfection of yourself. There are 15 situations from work and study. Think about the last few months and indicate how often each one happens to you. If a situation isn't part of your routine, answer based on something similar you've experienced. There are no right or wrong answers.",
  scale: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  items: [
    "When I pass a difficult exam, I think I got lucky and the questions happened to be the ones I knew.",
    "In a meeting or class, I hold back from asking a question so that nobody notices what I don't know yet.",
    "I reread a simple email several times before sending it, afraid of letting some mistake slip through.",
    "When I get a position, a scholarship, or a promotion, I think it was because there were few candidates or because someone helped me.",
    "In the first few weeks at a new job or course, I have the feeling that they'll soon realize they chose the wrong person.",
    "After a presentation that went well, I spend hours thinking about the one part where I stumbled.",
    "When a project I worked on succeeds, I explain the result by the team's effort or good timing, not by what I did.",
    "When my boss or teacher asks to talk to me in private, my first thought is that they've realized I can't handle the work.",
    "I hold on to finished work longer than necessary because I feel it isn't good enough to show yet.",
    "When I get a high grade or a good performance review, I think the person who evaluated me was being generous that day.",
    "Before presenting my work, I imagine someone asking a question that will show I know less than people think.",
    "When I get a good grade but not the top one, I keep dwelling on the points I lost instead of celebrating the result.",
    "When I solve a problem that was holding the team back, I think I got it right by chance, not because I knew what I was doing.",
    "When someone introduces me as an expert on a subject, I feel uncomfortable, as if I were fooling people.",
    "When I make a small mistake, like forgetting an attachment or typing a wrong number, I criticize myself harshly for the rest of the day.",
  ],
  dims: {
    luck: {
      label: "Success attributed to luck",
      desc: "Measures how much you explain your achievements through external factors, such as luck, help from other people, or favorable circumstances, instead of recognizing your effort and ability.",
      high: "When something goes well, you tend to credit the result to luck, timing, or other people. This can look like modesty, but over time it keeps you from seeing your own skills and makes each new achievement feel like a fluke. Recognizing your part isn't arrogance: it's a more accurate reading of what happened.",
      low: "You usually recognize the role your effort and ability play in your achievements, without ignoring the help you received. This helps you build confidence based on facts and approach new challenges with more assurance. Keep paying attention to what worked and why.",
      tips: [
        "Keep an achievements file: write down results, compliments, and problems you solved, with dates and details, and reread it when doubt creeps in.",
        "After a good result, list what you did to get there, such as hours of study, decisions, and skills used, before thinking about luck.",
        "When you receive a compliment, try simply saying thank you, without downplaying what you did or shifting the credit to someone else.",
      ],
    },
    fear: {
      label: "Fear of being found out",
      desc: "Measures how worried you are that people will realize you're not as capable as you seem, and how much this fear influences what you do or avoid doing.",
      high: "You often feel that you're fooling people and that, at any moment, someone will notice. This fear can lead you to avoid asking questions, turn down opportunities, or overwork so that no one notices your doubts. It's worth remembering that nobody knows everything, and that admitting a doubt usually builds more trust than suspicion.",
      low: "You feel comfortable in the position you hold and don't live with the feeling that someone will discover a hidden flaw. This makes it easier to ask questions, ask for help, and take on new challenges. This sense of security also helps colleagues who are just starting out feel more at ease.",
      tips: [
        "Talk about it with colleagues you trust: you'll often find that many of them feel the same, including people you admire.",
        "In meetings or classes, ask at least one question a week and observe how people actually react.",
        "When the fear shows up, ask yourself what concrete evidence there is that you're not capable, and compare it with the evidence to the contrary.",
      ],
    },
    perfection: {
      label: "Perfectionism and self-criticism",
      desc: "Measures how hard you push yourself not to make mistakes, how much you over-review things, and how harshly you criticize yourself when something isn't perfect.",
      high: "You tend to set very high standards and criticize yourself harshly when you don't meet them, even over small details. This care can produce high-quality work, but also fatigue, delays, and the feeling that nothing is ever good enough. Having standards is healthy; the challenge is separating them from the demand for perfection.",
      low: "You care about the quality of what you do, but you accept that mistakes and imperfections are part of the process. This helps you deliver on time, learn from setbacks, and keep your energy up over time. Just make sure that being relaxed doesn't turn into carelessness on tasks that call for more attention.",
      tips: [
        "Before starting a task, define what \"done\" means for it and stop reviewing when you get there.",
        "Separate standards from perfection: ask yourself whether the detail that bothers you would make a real difference to the person receiving the work.",
        "When you make a mistake, talk to yourself the way you would talk to a colleague in the same situation: acknowledge the mistake, see what can be fixed, and move on.",
      ],
    },
  },
  bands: {
    few: {
      label: "Few signs",
      text: "Your answers show few signs of impostor syndrome. You seem to recognize your achievements and handle mistakes without being too hard on yourself. Even so, it's normal for this feeling to appear in times of change, such as a new job, a promotion, or the start of a course.",
    },
    some: {
      label: "Some signs",
      text: "Your answers show that the impostor feeling appears in some situations, which is very common. It tends to grow stronger when you're in the spotlight or facing new challenges. Look at which of the three areas had the highest score and start with its suggestions.",
    },
    strong: {
      label: "Strong signs",
      text: "Your answers show that the impostor feeling is very present in your work or study routine. Doubting your own achievements, fearing that people will notice your shortcomings, and pushing yourself all the time is exhausting, and none of it says how capable you really are. Try the practical suggestions and, if this feeling is causing you distress, consider talking with a professional.",
    },
  },
  resultTitle: "How impostor syndrome shows up for you",
  resultIntro:
    "The result adds up the three areas and shows how present the impostor feeling is in your work or studies right now. It doesn't measure your competence: many highly capable people have high scores. See below how each area showed up in your answers.",
  note: "This test is a self-discovery tool based on your own answers. Impostor syndrome is not a medical diagnosis or a mental disorder, and this result does not replace an assessment by a psychologist. The impostor feeling also changes over time, with context, and with practice.",
  help: "If the impostor feeling causes you frequent distress, anxiety, or burnout, or if it's making you turn down opportunities, avoid challenges, or get stuck in your career or studies, talking with a psychologist can help. Therapy offers tools for dealing with self-criticism and building more realistic confidence.",
};

export default t;
