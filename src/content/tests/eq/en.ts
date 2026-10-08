import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Emotional intelligence",
  "desc": "See how you notice and handle your own emotions and other people's emotions in everyday life.",
  "intro": "This questionnaire looks at four areas of emotional intelligence: self-awareness, self-control, empathy, and social skills. There are 24 statements about everyday situations. For each one, indicate how well it describes how you usually act, not how you think you should act. There are no right answers: the more honest your responses, the more useful your result will be.",
  "scale": [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree"
  ],
  "items": [
    "I can name what I'm feeling, even when it's a mix of emotions.",
    "When I get angry, I can wait a moment before responding.",
    "I notice when someone is upset, even if they don't say anything.",
    "I can settle disagreements without the conversation turning into a fight.",
    "I often only realize what I felt after the situation is over.",
    "In arguments, I end up saying things I regret later.",
    "Before judging someone, I try to understand what they're going through.",
    "I avoid difficult conversations, even when they're necessary.",
    "I notice when my mood is influencing my decisions.",
    "After a bad day, I can calm down without taking it out on others.",
    "I find it hard to understand why some people react so strongly.",
    "I can turn down a request firmly and politely.",
    "I know which situations tend to make me lose my temper.",
    "When I receive criticism, I listen all the way through before defending myself.",
    "When someone tells me about a problem, I listen closely instead of already thinking about what I'm going to say.",
    "When I work in a group, I help people reach an agreement.",
    "I have trouble explaining what I'm feeling.",
    "When something goes wrong, it takes me a long time to stop thinking about it.",
    "I usually sense the mood of a room as soon as I walk in.",
    "In new places, I find it hard to approach people.",
    "I notice signals in my body, like tension or tiredness, when something is affecting me.",
    "I can focus on what I need to do even on an emotionally difficult day.",
    "When someone sees things differently from me, I have little patience for hearing their reasons.",
    "I can point out a problem in someone's work without making them feel attacked."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Self-awareness",
      "desc": "Noticing and naming what you feel, understanding where those emotions come from, and seeing how they affect what you do.",
      "high": "You usually notice what you're feeling and why, often before you react. This helps you make more conscious decisions and explain your needs to other people. The thing to watch is overanalyzing every emotion instead of moving on.",
      "low": "You tend to focus more on what needs to be done than on what you're feeling, which helps you act in a practical way. The thing to watch is noticing your emotions only after the situation is over, when they've already influenced what you did.",
      "tips": [
        "A few times a day, pause for a few seconds and ask yourself: what am I feeling right now?",
        "Instead of just saying you feel \"bad\", try to pin down whether it's tiredness, frustration, sadness, or anxiety.",
        "Write down situations that stirred you up and what happened right before them."
      ]
    },
    "selfRegulation": {
      "label": "Self-control",
      "desc": "Handling strong emotions without acting on impulse, regaining your calm, and staying focused even on hard days.",
      "high": "You can feel anger, frustration, or anxiety without letting them take over your actions. This inspires confidence and avoids unnecessary conflict. The thing to watch is holding in emotions that need to be expressed, which can build up tension.",
      "low": "You react quickly and intensely, and people usually know exactly how you feel. This spontaneity can be honest and full of energy. The thing to watch is reacting in the heat of the moment, which sometimes leads to regret or strains relationships.",
      "tips": [
        "When you feel the emotion rising, take a short pause, breathe deeply, and only then respond.",
        "Avoid making decisions or sending important messages when you're very angry.",
        "Have a regular outlet, like exercise, a walk, or a talk with someone you trust."
      ]
    },
    "empathy": {
      "label": "Empathy",
      "desc": "Noticing what other people are feeling and understanding their point of view, even when it differs from yours.",
      "high": "You easily pick up on the mood of a room and on what people feel, even without words. This makes people feel understood around you. The thing to watch is absorbing other people's emotions to the point of exhaustion.",
      "low": "You tend to focus on the facts and the problem itself more than on the emotions involved. This helps you stay objective in delicate situations. The thing to watch is missing signs that someone needs support or seeming distant without meaning to.",
      "tips": [
        "In important conversations, repeat in your own words what you understood before responding.",
        "Ask \"how are you feeling about this?\" before jumping straight to solutions.",
        "Pay attention to facial expressions, tone of voice, and silences, not just to what's said."
      ]
    },
    "social": {
      "label": "Social skills",
      "desc": "Communicating clearly, resolving conflicts, cooperating, and building good relationships at work and in your personal life.",
      "high": "You handle difficult conversations well, know how to take a stand, and help groups reach agreements. That's why people tend to come to you when something needs to be sorted out. The thing to watch is taking on the job of solving every conflict yourself, which can leave you overloaded.",
      "low": "You prefer to avoid friction and feel more comfortable with people you already know well. This usually means calm relationships and few arguments. The thing to watch is putting off necessary conversations and letting problems grow or your needs go unmet.",
      "tips": [
        "When giving difficult feedback, talk about the behavior and its impact, not about the person.",
        "Practice saying no with a short, polite sentence, without long explanations.",
        "In new settings, ask a simple question to start a conversation: people like to talk about what they do."
      ]
    }
  },
  "resultTitle": "Your emotional intelligence profile",
  "resultIntro": "See how you scored in each area. These skills develop with practice, so use your result as a starting point, not as a label.",
  "note": "This questionnaire is a self-discovery tool based on your own perception. It is not a validated psychological test and does not replace an assessment by a professional."
};

export default t;
