import type { TestText } from '../../schema';

// confidence — English translation of pt.ts
const t: TestText = {
  "title": "Self-confidence",
  "desc": "Find out where your self-confidence stands in four areas: self-esteem, confidence in your abilities, bouncing back from mistakes, and assertiveness.",
  "intro": "This questionnaire shows how you usually feel and act in everyday situations that call for self-confidence. There are 16 statements describing common scenes, such as receiving a compliment, taking on a new task, or saying no to a request. For each one, indicate how well it describes you today, thinking about the last few months, rather than how you would like to be. If you've never been in exactly that situation, answer based on how you usually react in similar cases. There are no right or wrong answers.",
  "scale": [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree"
  ],
  "items": [
    "When someone compliments something I did, I can thank them without downplaying my own merit.",
    "When I'm given a task I've never done before, I believe I'll be able to learn as I go.",
    "After receiving harsh criticism at work or school, I get back to focusing on what I need to do fairly quickly.",
    "When the wrong dish arrives at a restaurant, I calmly ask them to replace it.",
    "After seeing the achievements of people I know on social media, I'm left feeling that I'm worth less than they are.",
    "When I face a practical problem at home, like an appliance that stopped working, I trust that I can figure out a solution.",
    "When a plan goes wrong, like a job interview that didn't work out, I can take a lesson from it and try again.",
    "When someone asks me for a favor at a time when I'm short on time, I end up saying yes even though I want to say no.",
    "On a day when I couldn't get almost anything I planned done, I still treat myself with respect and kindness.",
    "Before a presentation or exam, I usually think I won't be able to handle it, even when I've prepared.",
    "When I get a no to an important request, like a proposal or an invitation, I can pull myself together fairly quickly.",
    "In a meeting or group conversation, I say when I disagree, even if most people think differently.",
    "When I look in the mirror in the morning, I usually accept myself as I am, strengths and flaws included.",
    "When I need to make an important decision, like changing jobs or moving to another city, I trust my own judgment.",
    "When I forget an appointment or let someone down, I keep going over it for several days.",
    "If someone cuts in front of me in line, I politely point it out to them."
  ],
  "dims": {
    "selfWorth": {
      "label": "Self-esteem",
      "desc": "Measures how much you value and respect yourself, regardless of results, compliments, or comparisons with other people.",
      "high": "You tend to treat yourself with respect and recognize your own worth, even on bad days or when faced with other people's achievements. This brings stability and makes you less dependent on others' approval. The thing to watch is that a very positive self-image can hide blind spots, so it's worth continuing to listen openly to the people around you.",
      "low": "You tend to measure your worth by results, by other people's opinions, or by comparisons, and this weighs more heavily on difficult days. This critical eye often comes with humility and a desire to improve. The thing to watch is the toll it takes: being hard on yourself all the time is exhausting and makes you overlook what you already do well.",
      "tips": [
        "At the end of the day, write down one thing you did well, however small.",
        "When you receive a compliment, simply say thank you, without justifying yourself or downplaying what you did.",
        "Notice when you compare yourself to others on social media and remember that it only shows part of people's lives."
      ]
    },
    "capability": {
      "label": "Confidence in your abilities",
      "desc": "Measures how much you believe you can learn, solve problems, and handle new challenges.",
      "high": "You tend to approach new tasks and difficult decisions with the feeling that you'll find a way. This helps you take the initiative and not freeze in the face of the unknown. The thing to watch is overestimating what you can do without support or within the deadline, and failing to ask for help or listen to people with more experience in the matter.",
      "low": "You tend to doubt your abilities, even when you've already prepared or have experience in the matter. This caution can lead to careful preparation and fewer impulsive decisions. The thing to watch is not trying things you could handle and missing opportunities because you think it isn't the right time yet.",
      "tips": [
        "Before a challenge, recall two or three similar situations in which you did well.",
        "Break a new task into small steps and take note of each one you complete.",
        "Ask someone you trust for their opinion on your plans: this helps calibrate both too much and too little confidence."
      ]
    },
    "resilience": {
      "label": "Bouncing back from mistakes",
      "desc": "Measures how quickly and in what way you recover after failures, criticism, and rejections.",
      "high": "You usually recover quickly after a mistake, criticism, or a rejection, and get back into action without dwelling on what happened. This lets you take more risks and learn from experience. The thing to watch is turning the page too quickly, without stopping to understand what led to the mistake or how it affected other people.",
      "low": "Mistakes and criticism tend to stay with you for quite a while, and it's common for you to replay in your mind what went wrong. This shows that you take things seriously and care about the consequences. The thing to watch is when dwelling on the mistake takes the place of fixing it and makes you avoid trying again.",
      "tips": [
        "After a mistake, write one sentence about what happened and another about what you would do differently, and then close the subject.",
        "Talk to yourself the way you would talk to someone you care about who made the same mistake.",
        "Give your frustration a time limit, such as the rest of the day, and then move on to the next task."
      ]
    },
    "assertiveness": {
      "label": "Assertiveness",
      "desc": "Measures how much you express opinions, needs, and boundaries clearly and respectfully.",
      "high": "You tend to say what you think, ask for what you need, and set boundaries without beating around the bush. This avoids misunderstandings and makes it clear to people what they can expect from you. The thing to watch is speaking too forcefully and leaving little room for other opinions, especially when you've already made up your mind.",
      "low": "You tend to avoid conflict, agree to requests even when you don't want to, and keep your opinions to yourself to keep the peace. This shows care for others and makes it easier to get along. The thing to watch is letting frustrations pile up and always putting your own needs in the background.",
      "tips": [
        "Start with small situations, like asking for a wrong order to be replaced or saying which restaurant you prefer.",
        "Use sentences that start with \"I\", like \"I'd prefer\" or \"I can't right now\", instead of accusing or over-explaining.",
        "After stating your position, ask what the other person thinks: firmness and listening work best together."
      ]
    }
  },
  "resultTitle": "Your self-confidence profile",
  "resultIntro": "Each bar shows how you scored in one of the four areas of self-confidence. Higher scores indicate more confidence in that area, but high confidence doesn't mean being right: what helps most in everyday life is a balance between believing in yourself and continuing to listen to other opinions.",
  "note": "This result is a self-discovery tool based on your own answers. It is not a professional assessment and does not replace a conversation with a psychologist. Self-confidence changes with time, experience, and context, and it can be developed with practice."
};

export default t;
