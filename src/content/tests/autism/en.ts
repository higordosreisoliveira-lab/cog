// autism — English translation of pt.ts

import type { TestText } from '../../schema';

const t: TestText = {
  title: "Autism spectrum traits in adults",
  desc: "See how some traits linked to the autism spectrum show up in your adult life: communication, friendships, routines, senses, and interests.",
  intro:
    "This questionnaire brings together 25 everyday situations linked to five areas in which autistic people often have their own way of functioning: communication, interaction and friendships, routines and change, sensory sensitivity, and details and intense interests. It was designed for adult life. For each statement, indicate how well it describes how you usually are most of the time, not just during one phase or on one particular day. It is a respectful self-assessment of traits, not a diagnosis: the result shows tendencies, without labels. Many adults were never assessed as children and have learned over the years to mask or compensate for their traits in order to fit in. If that's your case, try to answer based on how you really are when you're not making an effort to seem different. There are no right or wrong answers.",
  scale: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
  items: [
    "When someone says goodbye with \"come over sometime\", I'm not sure whether it's a real invitation or just a polite way to end the conversation.",
    "After a birthday party or a family lunch, even when I enjoyed it, I get home drained and need hours of quiet to recover.",
    "If Saturday's plans change at the last minute, from the movies to a bar, for example, I adapt without any discomfort.",
    "In crowded restaurants, the noise of cutlery, conversations, and music all at once keeps me from following what the person in front of me is saying.",
    "When a subject grabs me, like a period of history, a TV series, or a type of plant, I spend hours researching it and lose track of time.",
    "In a group conversation, I effortlessly sense the right moment to speak and when to let someone else talk.",
    "I'd rather meet friends to do something together, like playing a game, cooking, or building something, than just to sit and talk.",
    "When roadwork forces me to change my usual route to work or home, I'm left with a feeling of discomfort that lasts the rest of the day.",
    "I wear new clothes straight from the store without worrying about tags, seams, or the texture of the fabric.",
    "I notice right away when a picture is crooked, a number doesn't add up in a bill, or a word is misspelled on a sign.",
    "In a face-to-face conversation, looking the person in the eye tires me out or breaks my concentration, and I usually look somewhere else while I listen.",
    "Making friends with new coworkers or classmates happens naturally for me, without my having to think through every step.",
    "At a restaurant or a café, I usually order the same dish every time, because that way I know exactly what I'll get.",
    "The harsh white lighting in some supermarkets and offices tires me out or gives me a headache, while the people around me don't even seem to notice it.",
    "When I buy a new device, I read only what I need to get it working and I'm not curious about the rest of the manual.",
    "When someone close to me vents without asking for advice, I can tell from their tone of voice that they want to be heard more than they want solutions.",
    "At work or in new groups, I watch and copy other people's way of speaking, gestures, and expressions to seem more at ease than I really am.",
    "Traveling without an itinerary, deciding what to do each morning, seems relaxing and even fun to me.",
    "Smells like strong perfume on the bus or cleaning products in the elevator bother me so much that I need to move away or hold my breath.",
    "I keep lists, collections, or detailed notes about a topic I like, with information most people wouldn't even think to look up.",
    "When I'm talking about a subject I really like, I only notice the other person has lost interest when they change the subject or pick up their phone.",
    "At a barbecue or a party where I know few people, I can fit in and move between groups of people chatting without much effort.",
    "Before going somewhere new, like a clinic or an office, I look up photos, the map, and even the building's entrance online so I know what to expect.",
    "I can work or study with conversation in the background, the TV on, or construction noise next door without losing my concentration.",
    "When someone recommends a series to me, I watch it out of curiosity, but I don't feel like learning everything about the behind-the-scenes, the actors, or the fan theories.",
  ],
  dims: {
    social: {
      label: "Communication",
      desc: "Looks at how you use and interpret language in everyday life: phrases with double meanings, eye contact, tone of voice, and the rhythm of a conversation.",
      high: "You tend to communicate directly and to take words at face value, and indirect signals, like irony, hints, or changes in tone of voice, may take more effort. This way of communicating has clear strengths: honesty, clarity, and little room for deliberate misunderstandings. Difficulties usually arise when other people expect you to read between the lines.",
      low: "You usually pick up easily on the implicit signals in a conversation, such as tone of voice, pauses, and what's left unsaid. This helps you adjust what you say to each person and situation. Even so, there may be times, such as in new settings or on tiring days, when communication takes more out of you.",
      tips: [
        "When something seems ambiguous, ask calmly, for example: \"Was that an invitation or just a figure of speech?\". Asking is a legitimate way to communicate.",
        "Agree with the people close to you that you can be direct with each other, without having to guess intentions.",
        "If holding eye contact is tiring, you don't need to force yourself: nodding or repeating part of what you heard also shows you're paying attention.",
      ],
    },
    interaction: {
      label: "Interaction and friendships",
      desc: "Looks at how you approach people, make and keep friendships, and how much energy social gatherings take.",
      high: "Social situations tend to take a lot of energy from you, even when they're enjoyable, and building connections may call for more strategy than spontaneity. Many people with this profile prefer a few deep, loyal friendships, often built around shared interests or activities. Copying other people's ways to fit in is common and can become very tiring over time.",
      low: "You usually approach people and move between groups naturally. This makes it easier to make new contacts at work and in your personal life. Still, it's worth respecting your limits of social energy, which can change with different stages of life.",
      tips: [
        "Set aside time to rest after social events, just as you would rest after physical exertion.",
        "Look for friendships in places connected to your interests, like gaming groups, courses, book clubs, or volunteer work.",
        "Notice which settings let you feel comfortable being yourself, without having to copy anyone, and try to spend more time in them.",
      ],
    },
    routine: {
      label: "Routines and change",
      desc: "Looks at how much predictability comforts you and how you handle the unexpected, changes of plan, and new situations.",
      high: "Routines and predictability seem to give you a sense of security and calm, and unexpected changes can cause discomfort or fatigue. This has real advantages: consistency, reliability, and a good ability to plan. Difficulties usually arise when your environment changes without warning.",
      low: "You tend to handle the unexpected and changes of plan with flexibility. This helps when traveling, in fast-moving jobs, and in new situations. Even so, having a few supportive routines can be useful during busier periods.",
      tips: [
        "Before new situations, find out what you can: the address, photos of the place, who will be there, and how long it's likely to last.",
        "When possible, ask the people close to you to let you know about changes of plan in advance.",
        "Create small routine anchors that work anywhere, like a coffee at the same time each day or a familiar playlist.",
      ],
    },
    sensory: {
      label: "Sensory sensitivity",
      desc: "Looks at how you react to sounds, lights, smells, textures, and environments with lots of stimuli at once.",
      high: "Your senses seem to pick up sounds, lights, smells, and textures more intensely than average, and crowded environments can wear you out quickly. This isn't being fussy: it's a real difference in how stimuli are processed. The same sensitivity often lets you notice nuances that other people miss.",
      low: "You seem to cope well with noisy, brightly lit, or highly stimulating environments. This makes it easier to concentrate in busy places. It's worth noticing whether any particular stimulus bothers you, because sensitivity can show up in just one or two senses.",
      tips: [
        "Keep a comfort kit handy, such as earplugs or noise-canceling headphones, sunglasses, and clothes made of fabrics you like.",
        "In crowded places, choose quieter spots, like a corner table, or go at less busy times.",
        "At long events, take breaks in a quiet place before you reach your limit.",
      ],
    },
    details: {
      label: "Details and intense interests",
      desc: "Looks at your attention to details and patterns and how intensely you dive into the subjects that spark your interest.",
      high: "You tend to notice details and patterns that other people miss and to go very deep into the subjects you enjoy. This combination is a real strength: it supports precision, memory for information, and specialized knowledge. The thing to watch is time, since diving into an interest can make you forget to eat, rest, or keep other commitments.",
      low: "You usually have more varied interests and a broader view of things, without getting too caught up in details. This helps you move between subjects and see the big picture. For tasks that call for precision, it's worth setting aside a moment to check your work calmly.",
      tips: [
        "Value your interests as a source of well-being and, if it makes sense, of work: fields like research, editing, technology, data, and the arts often value attention to detail.",
        "Use alarms to remind yourself to eat, rest, and keep your commitments when a subject holds your attention for hours.",
        "Share your interests with people and communities who also enjoy them, where your enthusiasm is welcome.",
      ],
    },
  },
  bands: {
    few: {
      label: "Few traits",
      text: "Your answers suggest few autism spectrum traits in your daily life. Even so, it's natural to identify with some aspects, like enjoying routine or being bothered by noise, which are part of human diversity. The boundaries between the ranges are only a reference and do not define who you are.",
    },
    some: {
      label: "Some traits",
      text: "Your answers suggest some autism spectrum traits in part of the situations described. Many people have traits like these without being on the spectrum, and some autistic people have learned to mask theirs, so the boundaries between the ranges are only a guide. Look at the areas with the highest scores and, if they cause difficulties in your daily life, talking to a professional can help you better understand the way you function.",
    },
    many: {
      label: "Many traits",
      text: "Your answers suggest many traits associated with the autism spectrum, and it may be worth seeking an assessment from a psychologist, psychiatrist, or neurologist with experience in adult autism. Many people discover they are on the spectrum in adulthood and say that understanding the way they function brought relief, self-knowledge, and access to helpful support. Keep in mind that this result is not a diagnosis and that the boundaries between the ranges are only a reference.",
    },
  },
  resultTitle: "Your autism spectrum traits",
  resultIntro:
    "The result adds up your answers across the five areas and shows which range your total falls into. Higher scores mean that more traits associated with the autism spectrum show up in your life. These traits are not flaws: they are differences in how you perceive the world, communicate, and organize yourself, which bring both challenges and strengths.",
  note: "This questionnaire is a self-discovery tool based on your own answers. It is not a diagnosis and does not replace an assessment by a professional. Diagnosing autism in adults involves detailed interviews, your life history, and often information about your childhood, and can only be done by qualified professionals. Similar traits can also appear with other conditions, such as anxiety, ADHD, or giftedness.",
  help: "For an assessment, reach out to a psychologist, psychiatrist, or neurologist with experience in adult autism. Your doctor or your local health services are often the first step and can refer you to specialized services; university psychology training clinics also often offer care at affordable prices. Before the appointment, write down examples of situations from your daily life and, if possible, memories from your childhood or accounts from family members. Communities and support groups for autistic adults, in person or online, can also help you share experiences, feel that you are not alone, and find recommendations for professionals.",
};

export default t;
