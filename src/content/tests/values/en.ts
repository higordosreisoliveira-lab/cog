// values — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Work values",
  desc: "Understand what matters most to you when choosing a job, a career, or a project.",
  intro:
    "This questionnaire helps you identify what you value most at work, among eight values such as purpose, autonomy, stability, and pay. There are 24 statements. For each one, indicate how much you agree that it is important to you at work. Some statements involve choosing between two good things: answer based on what would weigh more in practice. There are no right answers, and your values may change depending on your stage of life.",
  scale: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
  items: [
    "I want my work to help other people or society in some way.",
    "I need to feel that I'm learning new things at work.",
    "I like deciding for myself how I'll carry out my tasks.",
    "I'd rather have a secure job than a more interesting but uncertain one.",
    "It's important to me that my results are noticed by the people I work with.",
    "I want a job that leaves time and energy for my personal life.",
    "I like working in a team, sharing ideas with other people.",
    "A good salary is one of the factors that weighs most when I choose a job.",
    "I need to believe in the mission of the organization I work for.",
    "I value jobs that offer challenges and chances to take on new responsibilities.",
    "I work better when nobody is monitoring my every step.",
    "Knowing that I'll have work and income for the next few years gives me peace of mind.",
    "Sincere praise from my manager motivates me to do even better.",
    "I would accept earning a little less to have flexible hours or more free time.",
    "A good relationship with my colleagues is as important to me as the task itself.",
    "I look for jobs where I can earn more based on the results I deliver.",
    "A well-paid job that has no meaning for me wouldn't be enough.",
    "I would leave a comfortable job if it didn't offer me more opportunities to grow.",
    "Having the freedom to choose my hours or where I work is important to me.",
    "I like having a predictable routine and clear rules at work.",
    "I like holding positions with prestige and visibility.",
    "I avoid jobs that require being available outside working hours.",
    "I prefer environments where people help each other to ones where everyone works for themselves.",
    "I would change jobs for much higher pay, even if I liked my current one.",
  ],
  dims: {
    purpose: {
      label: "Purpose",
      desc: "How much you need to feel that your work is meaningful and contributes to something bigger.",
      high: "For you, a good job isn't enough: you need to believe in what you do and see its impact on people or the world. This brings deep motivation and helps you get through difficult days. The thing to watch is accepting poor conditions just because the cause is important.",
      low: "You tend to see work in a more practical way, as a means of reaching other goals in your life. This gives you flexibility in choosing opportunities. The thing to watch is losing motivation over time if nothing about your work feels meaningful.",
      tips: [
        "Ask yourself who benefits from your work, even indirectly.",
        "Before accepting a position, research the organization's mission and practices.",
        "If your current job doesn't give you this sense of meaning, look for it in side projects or volunteering.",
      ],
      examples: ["Nonprofit organizations", "Healthcare", "Education", "Companies with a social or environmental impact"],
    },
    growth: {
      label: "Growth",
      desc: "How much you value learning, developing, and taking on ever bigger challenges.",
      high: "You need to feel that you're evolving, learning, and moving forward in your career. This keeps you developing and broadens your career options. The thing to watch is constant dissatisfaction: not every phase needs to bring a promotion or a new challenge.",
      low: "You value the peace of doing well what you've already mastered more than the constant pursuit of new challenges. This brings consistency and less pressure. The thing to watch is letting your skills become outdated over time.",
      tips: [
        "Agree on a development goal for the coming months with your manager.",
        "Set aside a few hours a month to learn something useful for your field.",
        "In job interviews, ask how promotions and training work.",
      ],
      examples: ["Growing companies", "Graduate trainee programs", "Consulting firms", "Companies with a structured career path"],
    },
    autonomy: {
      label: "Autonomy",
      desc: "How much you value having the freedom to decide how, when, and where you work.",
      high: "You perform best when you have the freedom to organize your work your own way. This encourages initiative and ownership of results. The thing to watch is struggling in tightly controlled environments or with tasks that require following rigid processes.",
      low: "You feel comfortable with clear guidance and with someone who helps set priorities. This makes it easier to work in a team and follow quality standards. The thing to watch is relying too much on direction and missing opportunities to show initiative.",
      tips: [
        "Negotiate clear goals with your manager in exchange for more freedom over how to achieve them.",
        "In interviews, ask how decisions are made in the team's day-to-day work.",
        "When you have more freedom, create your own routine and set a deadline for each stage.",
      ],
      examples: ["Freelance work", "Entrepreneurship", "Research", "Remote teams with clear goals"],
    },
    stability: {
      label: "Stability",
      desc: "How much you value security, predictability, and continuity in your work and income.",
      high: "You feel better when you know what to expect: a guaranteed income, clear rules, and a predictable routine. This gives you peace of mind to plan your personal life. The thing to watch is letting interesting opportunities pass you by out of fear of change.",
      low: "You handle uncertainty well and feel comfortable making a change when something interesting comes along. This makes it easier to seize new opportunities. The thing to watch is taking financial risks without a safety net to fall back on in difficult times.",
      tips: [
        "Keep an emergency fund covering a few months of expenses: it brings security in any scenario.",
        "Before turning down a change, assess the real risk and what you could gain from it.",
        "Also look for stability in skills that are valued in the job market, not just in your current job.",
      ],
      examples: ["Public sector jobs", "Large, established companies", "Banks and insurance companies", "Essential services, such as energy and water"],
    },
    recognition: {
      label: "Recognition",
      desc: "How important it is to you that your effort and results are seen and valued.",
      high: "You're motivated when your work is noticed and valued by the people around you. This drives you to pursue high-quality results. The thing to watch is depending too much on other people's opinions to feel you've done a good job.",
      low: "You're satisfied with a job well done, even when no one comments on it. This brings independence and self-motivation. The thing to watch is keeping your achievements invisible and missing opportunities because you don't show them.",
      tips: [
        "Keep a record of your achievements throughout the year so you can present them in performance reviews.",
        "Ask for feedback directly when you feel you're missing it.",
        "Recognize your colleagues' work too: this creates a culture of appreciation.",
      ],
      examples: ["Sales with targets and rewards", "Communications and media", "Law and consulting", "Sports and the arts"],
    },
    balance: {
      label: "Work-life balance",
      desc: "How much you value having time and energy for your personal life, family, health, and rest.",
      high: "For you, work has to fit into life, not the other way around. This protects your health, your relationships, and your energy in the long run. The thing to watch is turning down more intense phases that could help you grow, even when they would only be temporary.",
      low: "You're willing to commit intensely to work when you believe it's worth it. This can speed up your career and your projects. The thing to watch is burnout: without breaks, fatigue ends up affecting your health, your relationships, and your performance itself.",
      tips: [
        "Set a time to finish work and let the people you work with know.",
        "In interviews, ask about the actual working hours, overtime, and remote work policy.",
        "Put your personal commitments in your calendar and treat them as seriously as your work ones.",
      ],
      examples: ["Companies with flexible hours", "Remote or hybrid work", "Roles with well-defined hours", "Project-based or part-time work"],
    },
    collaboration: {
      label: "Collaboration",
      desc: "How much you value working in a team, having good relationships with colleagues, and an environment of mutual support.",
      high: "You perform best when you share ideas and work together with other people. A good team atmosphere is as important to you as the task itself. The thing to watch is struggling with more solitary work or in highly competitive environments.",
      low: "You feel comfortable working independently, with well-defined responsibilities. This supports concentration and autonomy. The thing to watch is isolating yourself and missing contributions that only come from exchanging ideas with others.",
      tips: [
        "During hiring processes, ask to meet the team or ask how it works day to day.",
        "If you prefer to work independently, agree on short check-ins with your team.",
        "Offer help to a colleague and ask for help when you need it: both build trust.",
      ],
      examples: ["Multidisciplinary teams", "Companies with flatter hierarchies", "Hospitals and healthcare teams", "Creative agencies and studios"],
    },
    pay: {
      label: "Pay",
      desc: "How much salary, benefits, and the chance to earn more weigh in your career choices.",
      high: "For you, being well paid is a clear priority, whether for security, freedom, or achieving personal goals. This helps you negotiate firmly and seek out well-valued roles. The thing to watch is staying in jobs that wear you down just because of the salary.",
      low: "You value other aspects of work more than money itself. This gives you the freedom to choose opportunities for what they offer that interests you. The thing to watch is accepting pay below what your work is worth because you don't negotiate.",
      tips: [
        "Research the salary range for your role before negotiating a raise or an offer.",
        "Consider the whole package: benefits, bonuses, flexibility, and commuting costs.",
        "Work out the minimum amount you need to live well and use it as a reference in negotiations.",
      ],
      examples: ["Finance", "Commission-based sales", "Technology", "Management positions"],
    },
  },
  resultTitle: "What matters most to you at work",
  resultIntro:
    "We've highlighted the three values with the highest scores. When a job respects these values, you'll tend to feel more motivated and satisfied. When they're pushed aside for a long time, dissatisfaction usually sets in, even if everything else seems fine.",
  note: "This result is a self-discovery tool based on your own answers. It is not a validated psychological test and does not replace career guidance from a professional.",
};

export default t;
