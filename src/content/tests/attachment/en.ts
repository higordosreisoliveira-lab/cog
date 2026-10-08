import type { TestText } from '../../schema';

// attachment — English translation of pt.ts
const t: TestText = {
  "title": "Attachment style",
  "desc": "Find out how you tend to feel and act when someone becomes close to you, whether in a romantic relationship, a friendship, or with family.",
  "intro": "This questionnaire looks at two tendencies that show up in close relationships: attachment anxiety, which is how much you worry about losing people's affection or attention, and how much you avoid closeness, preferring to keep a certain emotional distance. The 18 statements describe common situations in close relationships in general, with partners, friends, and family. For each one, indicate how well it matches what you usually feel or do, thinking about your relationships in general rather than one particular person or phase. If a situation has never happened to you, answer based on how you would probably react. There are no right or wrong answers.",
  "scale": [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree"
  ],
  "items": [
    "When someone important to me takes a while to reply to a message, I start thinking I did something wrong.",
    "When someone starts telling me very personal things, I feel like changing the subject.",
    "If friends make plans and don't invite me, I spend hours thinking about what that says about our relationship.",
    "I can cry or show that I'm sad in front of the people I trust.",
    "When someone close to me travels or has no time for me for a few days, I go on with my routine without worrying about the relationship.",
    "When a new friendship starts getting closer, with frequent conversations and invitations, I feel like cooling things down.",
    "After an argument with someone close to me, I'm afraid they'll pull away for good.",
    "Even when I'm struggling, I'd rather handle everything on my own than ask someone close to me for help.",
    "When someone I care about seems quieter or more distant, I quickly assume I'm the problem.",
    "When someone close to me says plainly how much they care about me, I feel comfortable with it.",
    "If someone close to me says they need some time to themselves, I understand without taking it personally.",
    "When someone I'm close to asks us to spend more time together, I feel like I'm losing my space.",
    "After a date or an important conversation, I keep rereading the messages to make sure the other person is still fine with me.",
    "When the conversation turns to feelings, I usually respond with something practical or a joke instead of saying what I feel.",
    "When a friend cancels plans at the last minute, I accept the explanation and don't dwell on it.",
    "I feel uncomfortable when someone starts relying on me to deal with their emotions.",
    "When I see someone I love very much excited about spending time with someone else, I feel a pang, as if I'm about to be pushed into the background.",
    "When something important happens in my life, good or bad, I immediately want to tell someone close to me."
  ],
  "dims": {
    "anxiety": {
      "label": "Attachment anxiety",
      "desc": "Measures how much you worry about the stability of your close relationships and about the possibility of losing people's affection or attention.",
      "high": "You tend to pay close attention to signs of distance and may feel insecure when someone takes a while to reply or seems different. This sensitivity shows how much your relationships matter to you and helps you notice changes in them. The thing to watch is the toll it takes: reading neutral signals as rejection can cause distress and lead to demands that end up pushing people away.",
      "low": "You tend to trust that your relationships remain solid even when there is silence, distance, or minor disagreements. This brings peace of mind and gives each person room to live their own life. The thing to watch is making sure you still notice when something has really changed and deserves a conversation.",
      "tips": [
        "When insecurity hits, separate the fact (they didn't reply) from the interpretation (they're upset with me) before you act.",
        "Instead of seeking reassurance indirectly, calmly say what you're feeling and what you need.",
        "Cultivate a range of interests and friendships, so your peace of mind doesn't depend on a single relationship."
      ]
    },
    "avoidance": {
      "label": "Avoiding closeness",
      "desc": "Measures how much you prefer to keep emotional distance rather than open up, ask for support, and let people count on you.",
      "high": "You value your independence and tend to handle things on your own, keeping some of what you feel to yourself. This gives you autonomy and the ability to stay calm in difficult situations. The thing to watch is that the people close to you may feel they can't get near you, and you may end up without support exactly when you need it most.",
      "low": "You feel comfortable opening up, asking for help, and welcoming people who come closer. This supports trusting relationships in which both sides feel seen and supported. The thing to watch is remembering that not everyone opens up at the same pace and respecting those who need more space.",
      "tips": [
        "Try telling someone you trust something small about how you're doing and notice how they react.",
        "When you feel like pulling away, try to pin down what exactly bothered you instead of simply disappearing.",
        "If you need space, let the other person know instead of withdrawing in silence: this protects both the relationship and your time."
      ]
    }
  },
  "bands": {
    "secure": {
      "label": "Secure",
      "text": "You tend to feel comfortable with closeness and, at the same time, trust that your relationships hold up even through distance or disagreements. This usually makes it easier to have honest conversations, ask for support, and resolve conflicts without excessive fear. Having this style doesn't mean you never feel insecure, and it can also vary depending on the stage of life and the relationship."
    },
    "anxious": {
      "label": "Anxious",
      "text": "You place great value on your relationships and usually notice any sign of distance quickly, which can bring worry about losing people's affection. This sensitivity also shows dedication and an ability to become truly involved in your relationships. Over time, clear conversations and relationships in which you find security can make this unease much lighter."
    },
    "avoidant": {
      "label": "Avoidant",
      "text": "You tend to value independence and feel more comfortable handling things on your own than sharing what you feel. This brings autonomy and calm in many situations, but it can leave the people close to you feeling that they can't get near you. This way of being usually exists for good reasons, and relationships that respect your pace can gradually make closeness more comfortable."
    },
    "fearful": {
      "label": "Anxious-avoidant",
      "text": "You may strongly want closeness and, at the same time, be wary of it, alternating between reaching out to people and keeping your distance. This pattern is often an understandable way of protecting yourself from disappointment, and it shows how much relationships matter to you. Over time, stable and caring relationships help you get close with less fear, and talking with a professional can also help along the way."
    }
  },
  "resultTitle": "Your attachment style",
  "resultIntro": "Your result combines two dimensions: attachment anxiety and how much you avoid closeness. Together, they point to the style that shows up most in your close relationships right now. No style is better or worse than another, and all of them can change over time and through the experience of secure relationships.",
  "note": "This result is a self-discovery tool based on your own answers. It is not a diagnosis and does not replace an assessment by a psychologist. The way you bond with others can vary from one relationship to another and usually changes over the course of your life.",
  "help": "If your relationship patterns have been causing you distress, such as a constant fear of losing people or difficulty getting close to those you care about, talking with a psychologist can help. Therapy is a safe space to understand where these patterns come from and to gradually try out new ways of relating to others."
};

export default t;
