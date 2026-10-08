import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Personality profile",
  "desc": "See where you stand on the Big Five personality traits, one of the most widely studied models in psychology.",
  "intro": "This questionnaire measures five broad personality traits: openness to experience, conscientiousness, extraversion, agreeableness, and emotional stability. The 50 statements were adapted from the IPIP, a public-domain item pool used in research. For each statement, indicate how well it describes who you are today, not who you'd like to be. There are no right or wrong answers, and no trait is better than another. Answer honestly and without overthinking: your first impression is usually the most accurate.",
  "scale": [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree"
  ],
  "items": [
    "I'm the life of the party.",
    "I'm not very concerned about other people.",
    "I always prepare ahead of time.",
    "I get stressed easily.",
    "I have a wide vocabulary.",
    "I don't talk much.",
    "I take an interest in people.",
    "I leave my things scattered around.",
    "Most of the time, I stay calm.",
    "I find it hard to understand abstract ideas.",
    "I feel at ease around other people.",
    "I make comments that offend people.",
    "I pay attention to details.",
    "I tend to worry about things.",
    "I have a vivid imagination.",
    "I prefer to stay in the background.",
    "I care about what other people feel.",
    "I tend to leave things in a mess.",
    "I rarely feel down.",
    "Abstract ideas don't interest me.",
    "I'm usually the one who starts conversations.",
    "Other people's problems don't interest me.",
    "I get my tasks done right away instead of putting them off.",
    "I get rattled easily.",
    "I have excellent ideas.",
    "I usually have little to say.",
    "I'm soft-hearted.",
    "I often forget to put things back where they belong.",
    "I get upset easily.",
    "I don't have much imagination.",
    "At parties, I talk with lots of different people.",
    "Deep down, I'm not very interested in other people.",
    "I like things to be in order.",
    "My mood changes a lot.",
    "I understand things quickly.",
    "I don't like drawing attention to myself.",
    "I make time to help others.",
    "I avoid my obligations.",
    "I often have ups and downs in my mood.",
    "I use sophisticated words.",
    "I don't mind being the center of attention.",
    "I feel other people's emotions.",
    "I follow a planned routine.",
    "I get irritated easily.",
    "I spend time reflecting on things.",
    "I don't say much around people I don't know.",
    "I make people feel at ease.",
    "I'm demanding about the quality of my work.",
    "I often feel down.",
    "My mind is always full of ideas."
  ],
  "dims": {
    "openness": {
      "label": "Openness to experience",
      "desc": "Measures curiosity, imagination, and interest in ideas that are new, abstract, or different from the usual.",
      "high": "You enjoy exploring ideas, learning different things, and imagining possibilities. This helps you come up with original solutions and adapt to change. The thing to watch is spreading yourself across too many interests and leaving projects half-finished.",
      "low": "You prefer what is concrete, familiar, and proven in practice. This brings focus, common sense, and efficiency to everyday tasks. The thing to watch is dismissing new ideas too early, before you understand what they could offer.",
      "tips": [
        "Try something new from time to time, like a book from a different genre or a different route home.",
        "When you come across an unfamiliar idea, ask \"what's useful here?\" before deciding.",
        "If you have many interests, pick one at a time and see it through."
      ]
    },
    "conscientiousness": {
      "label": "Conscientiousness",
      "desc": "Measures how much you plan, keep your commitments, and take care of details; in other words, your discipline and sense of responsibility.",
      "high": "You tend to plan, meet deadlines, and take care of details, and people know they can count on you. The thing to watch is being too demanding: perfectionism and trouble dealing with the unexpected can wear you out.",
      "low": "You handle tasks in a flexible, spontaneous way, without getting tied to rigid plans. This helps you improvise and adapt when something changes. The thing to watch is leaving important things to the last minute or losing track of deadlines.",
      "tips": [
        "Break big tasks into small steps and give each one a deadline.",
        "Use a simple list or planner and review it at the start of the day.",
        "Decide what \"good enough\" means before you start, so perfectionism doesn't stall you."
      ]
    },
    "extraversion": {
      "label": "Extraversion",
      "desc": "Measures how much you seek out other people, conversation, and lively settings, and how much they recharge your energy.",
      "high": "You gain energy from being with people, start conversations easily, and feel good in busy settings. This helps you build connections and speak up in public. The thing to watch is talking more than listening or struggling with tasks that call for time alone.",
      "low": "You prefer small groups, deeper conversations, and quiet moments to recharge. This supports concentration, listening, and reflecting before you act. The thing to watch is holding back your ideas and your work because you don't want to draw attention.",
      "tips": [
        "Notice what recharges you, being with people or having time alone, and set aside time for it.",
        "In meetings, if you talk a lot, ask a question before giving your opinion; if you talk little, try to share at least one idea.",
        "Being reserved isn't the same as being shy: you can enjoy quiet and still communicate very well."
      ]
    },
    "agreeableness": {
      "label": "Agreeableness",
      "desc": "Measures how much you care about others, trust people, and prefer cooperating to competing.",
      "high": "You're considerate, warm, and willing to help. This builds trusting relationships and a good atmosphere wherever you go. The thing to watch is always putting other people's needs ahead of your own and finding it hard to say no.",
      "low": "You tend to be direct, objective, and critical, and you're not afraid to disagree. This helps you negotiate, defend your positions, and make tough decisions. The thing to watch is sounding harsh without meaning to and pushing away people who could work with you.",
      "tips": [
        "Before disagreeing, show that you've understood the other person's point of view.",
        "Practice kindly turning down requests that get in the way of your priorities.",
        "Remember that being kind and being firm can go together."
      ]
    },
    "stability": {
      "label": "Emotional stability",
      "desc": "Measures how well you stay calm in the face of pressure, worries, and frustrations. A high score means more composure; a low score, more sensitivity to stress.",
      "high": "You usually stay calm under pressure and bounce back quickly from setbacks. This gives people a sense of security and helps you think clearly in hard moments. The thing to watch is downplaying real problems or not noticing when someone close to you is struggling.",
      "low": "You feel emotions intensely and notice risks and problems before many others do. This sensitivity helps you prepare and take things seriously. The thing to watch is the toll it takes: frequent worry and stress are tiring, and it's worth having strategies to handle them.",
      "tips": [
        "Take care of the basics: sleep, food, and physical activity make a difference to your mood.",
        "When worry shows up, write down what you're thinking and what a possible next step would be.",
        "If stress or sadness is getting in the way of your daily life, talk to a mental health professional."
      ]
    }
  },
  "resultTitle": "Your personality profile",
  "resultIntro": "Each bar shows where you landed between the two ends of a trait. High or low scores are neither good nor bad: each side has its strengths and things to watch.",
  "note": "This result is a self-discovery tool based on your own answers. It is not a diagnosis and does not replace an assessment by a psychologist. Personality also changes over the course of life and depending on the context."
};

export default t;
