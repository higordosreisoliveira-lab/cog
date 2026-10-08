// love — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Love style",
  desc: "Find out which ways of loving show up most in you, based on the six love styles described by sociologist John Alan Lee.",
  intro: "This questionnaire shows how six love styles show up in the way you relate to others: passion, lightness and fun, friendship and companionship, practical choice, intensity and insecurity, and care and devotion. The styles come from the theory of sociologist John Alan Lee, who compared ways of loving to colors that blend together: each person has their own combination. The 24 statements describe concrete situations. Think about your relationships in general, whether past, current, or the ones you imagine having, and indicate how well each statement fits you. If a situation has never happened to you, answer the way you think you would act. There are no right or wrong answers, and no style is better than another.",
  scale: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
  items: [
    "A conversation that runs into the early hours without anyone noticing is, for me, a great sign at the start of a relationship.",
    "I enjoy the flirting stage, with playful messages and no-strings dates, more than quickly defining what we have.",
    "A quiet Sunday cooking together and talking about the week is one of my favorite things to do in a relationship.",
    "Before getting seriously involved, I try to find out whether the person wants similar things from life as I do, like where to live and what kind of routine to have.",
    "When I'm with someone and they take a while to reply to a message, I quickly start imagining that something has changed between us.",
    "When someone I love gets sick, I make a point of taking care of them and keeping them company, even if I have to cancel other plans.",
    "I like planning romantic surprises, like a special dinner or a short trip, to keep the flame alive.",
    "For me, dating is, above all, a way to have fun and meet new people.",
    "The person I'm with needs to be, above all, someone I can laugh with about nothing and talk to about anything.",
    "If I notice someone has habits very different from mine, like their schedule or the way they handle money, I think twice before moving forward.",
    "I need to hear often that the other person likes me in order to feel at peace in the relationship.",
    "I feel joy in taking care of small details that make life easier for the people I love, even if no one notices.",
    "For me, feeling desire and admiration for the other person is just as important as getting along in everyday life.",
    "When a relationship starts getting serious too fast, I feel like keeping things lighter.",
    "I trust a feeling that grew little by little, through spending time together, more than a passion that appears out of nowhere.",
    "I see choosing who to share my life with like other important decisions: it's worth weighing the pros and cons calmly.",
    "I get jealous easily when I see someone I like having a lively conversation with another person.",
    "If the person I love got an amazing offer in another city, I would consider changing my plans to support that dream.",
    "I can usually tell within the first few dates whether there's a spark, and that's what makes me want to keep going.",
    "I don't see a problem with getting to know more than one person at a time before deciding who I want something more serious with.",
    "I value everyday partnership, like being present in the routine and keeping each other company in the little things, more than grand romantic declarations.",
    "I'd rather be with someone who is easy and steady to live with than with someone who takes my breath away but complicates my life.",
    "My mood tends to soar or plummet depending on whether things are going well or badly in the relationship.",
    "For me, loving means continuing to offer support even when, at that moment, I'm not getting the same in return.",
  ],
  dims: {
    eros: {
      label: "Passion",
      desc: "Measures how much attraction, romance, and emotional intensity guide your relationships. In Lee's theory, this style is called eros.",
      high: "You value the spark, desire, and the feeling of living something special. This brings enthusiasm, romance, and a willingness to truly give yourself. The thing to watch is expecting the intensity of the beginning to last forever and feeling disappointed when the relationship enters a calmer phase.",
      low: "Intense attraction and romantic gestures aren't at the center of the way you love. This helps you avoid getting carried away by first impressions alone and build something more calmly. The thing to watch is setting romance aside for too long and leaving the other person missing signs of interest.",
      tips: [
        "Nurture romance in your routine too: a sincere compliment or a different kind of outing renews the connection.",
        "Remember that intensity changes over time, and that doesn't mean love is over.",
        "Before deciding based on the spark alone, also notice whether you're a good match in everyday things.",
      ],
      examples: [
        "Planning a special date to celebrate an important occasion.",
        "Wanting to be close to someone after just a few dates.",
        "Often telling the other person what you admire about them.",
      ],
    },
    ludus: {
      label: "Lightness and fun",
      desc: "Measures how much you experience love as something light, fun, and free of demands, with plenty of room for independence. In Lee's theory, this style is called ludus.",
      high: "You enjoy relaxed relationships, with good humor, freedom, and little pressure. This keeps dates light and helps you avoid turning every relationship into a drama. The thing to watch is avoiding conversations about commitment and leaving the other person unsure of what to expect from you.",
      low: "You tend to take relationships seriously and don't usually treat them as a pastime. This inspires trust and shows that you commit to what you're experiencing. The thing to watch is putting too much weight on each relationship and forgetting that love can also be playful and light.",
      tips: [
        "Make clear what you're looking for, even if it's something casual, so the other person can choose freely.",
        "If you tend to take everything very seriously, set aside moments just to have fun together.",
        "Notice whether the wish to keep things light is actually putting off an important conversation.",
      ],
      examples: [
        "Preferring spontaneous dates to plans made far in advance.",
        "Using humor to defuse a tense moment.",
        "Making a point of keeping your own hobbies and friendships during a relationship.",
      ],
    },
    storge: {
      label: "Friendship and companionship",
      desc: "Measures how much, for you, love grows out of spending time together, trust, and the pleasure of sharing life with someone. In Lee's theory, this style is called storge.",
      high: "For you, love grows little by little and rests on friendship, trust, and the pleasure of being together. This creates stable relationships, with a lot of partnership and little pretense. The thing to watch is letting romance and desire cool off, as if the relationship were just a good friendship.",
      low: "You don't need love to grow out of a long time spent together, and you can get involved even with someone you've only known for a short while. This leaves room for enchantment and for relationships that start with more momentum. The thing to watch is placing less value on everyday partnership, which is what sustains a relationship once the novelty wears off.",
      tips: [
        "Set aside time for unhurried conversations, the way you would in a good friendship.",
        "Beyond partnership, also nurture romance with gestures of affection and desire.",
        "If you tend to get involved quickly, give yourself time to get to know the person outside the excitement of courtship too.",
      ],
      examples: [
        "A relationship that started in a circle of friends or a study group.",
        "Spending an evening at home watching a movie and talking about life.",
        "Wanting to tell the person you're with first when you have good or bad news.",
      ],
    },
    pragma: {
      label: "Practical choice",
      desc: "Measures how much you use reason and compatibility of plans, values, and routine to choose who to be with. In Lee's theory, this style is called pragma.",
      high: "You think about the future and look for someone with whom a shared life would be workable and calm. This avoids a lot of frustration and helps build solid, well-matched relationships. The thing to watch is evaluating so much that emotion gets pushed aside, or ruling out people who could surprise you.",
      low: "You don't usually choose your relationships based on lists or calculations and prefer to follow what you feel. This leaves room for spontaneity and unexpected encounters. The thing to watch is discovering important differences in plans, values, or routine too late.",
      tips: [
        "Talk early about the topics that matter most to you, such as money, housing, or life plans.",
        "Leave room for emotion: no one will tick every box on a list.",
        "If you tend to follow only your heart, also ask yourself whether you want similar things for the future.",
      ],
      examples: [
        "Talking about how you each handle money before sharing bills.",
        "Considering whether your work schedules fit together before making a commitment.",
        "Assessing whether your values and life plans are similar before moving in together.",
      ],
    },
    mania: {
      label: "Intensity and insecurity",
      desc: "Measures how much love stirs up strong emotions, jealousy, and a need for reassurance in you, with highs and lows. In Lee's theory, this style is called mania.",
      high: "You experience love with great devotion and feel every detail of the relationship intensely. This shows how much you care and how important connections are in your life. The thing to watch is the toll it takes: jealousy, worry, and a constant need for reassurance can cause suffering for you and for the other person.",
      low: "You usually feel secure in relationships and don't depend on frequent reassurance to feel at peace. This brings calm, trust, and respect for the other person's space. The thing to watch is seeming distant or not noticing when the other person needs more attention and affection.",
      tips: [
        "When insecurity shows up, notice what you're feeling before acting or sending a message.",
        "Talk about your needs calmly, instead of testing the other person or demanding proof of love.",
        "Look after your life outside the relationship, like friendships, hobbies, and projects, and reach out to a professional if jealousy or anxiety is making you suffer.",
      ],
      examples: [
        "Checking several times whether the person has seen or replied to a message.",
        "Feeling a small argument affect your whole day.",
        "Needing a lot of signs of affection before you can relax.",
      ],
    },
    agape: {
      label: "Care and devotion",
      desc: "Measures how much you love generously, putting the other person's well-being at the center and offering support without expecting anything in return. In Lee's theory, this style is called agape.",
      high: "You show love by caring, supporting, and dedicating yourself to the well-being of the people you love. This creates relationships of trust, in which the other person feels welcomed and valued. The thing to watch is forgetting about yourself and accepting imbalances, giving much more than you receive for too long.",
      low: "You care for the people you love without neglecting your own needs and limits. This helps keep relationships more balanced, with both people contributing. The thing to watch is that, in difficult times, the other person may miss more dedication and presence from you.",
      tips: [
        "Keep caring, but also ask yourself what you need and say it clearly.",
        "Notice whether the relationship is reciprocal: loving generously doesn't mean accepting anything.",
        "If caring about the little things isn't your strong suit, try one simple gesture a week, like asking how someone's day went and listening closely.",
      ],
      examples: [
        "Changing your own plans to go with someone to a medical appointment.",
        "Supporting the other person's dream even when it takes effort.",
        "Keeping someone company in silence on a hard day, without needing to fix anything.",
      ],
    },
  },
  resultTitle: "Your love styles",
  resultIntro: "We highlight the three styles that show up most in your answers. Almost everyone combines more than one style, and your mix says a lot about what you look for and offer in a relationship. Use the result as a starting point for reflection and, if you like, for conversations with the people you're in relationships with.",
  note: "This result is a self-discovery tool based on your own answers. It is not a diagnosis and does not replace guidance from a psychologist. Love styles change throughout life and can differ from one relationship to another.",
};

export default t;
