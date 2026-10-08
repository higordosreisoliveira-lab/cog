import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Career interests",
  "desc": "Find out which kinds of activities suit you best and explore careers connected to your interests.",
  "intro": "This questionnaire is based on Holland's model, which groups career interests into six types: practical, investigative, artistic, social, enterprising, and organized. There are 36 activities. For each one, indicate how much you would like to do it, without thinking about pay, training, or whether you already know how. There are no right answers: the goal is to map what sparks your interest.",
  "scale": [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree"
  ],
  "items": [
    "I'd like to figure out why a device stopped working and fix it.",
    "I'd like to run experiments to test whether an idea works in practice.",
    "I'd like to write stories, scripts, or song lyrics.",
    "I'd like to teach something new to a group of people.",
    "I'd like to start and run my own business.",
    "I'd like to organize spreadsheets, files, and records so everything is easy to find.",
    "I'd like to build or assemble things with my own hands.",
    "I'd like to analyze data to find the cause of a problem.",
    "I'd like to create a brand's visual identity, such as its logo and colors.",
    "I'd like to listen to and guide people who are going through a hard time.",
    "I'd like to negotiate with customers and close sales.",
    "I'd like to keep track of a company's accounts payable and receivable.",
    "I'd like to work outdoors, in places like construction sites, farms, or parks.",
    "I'd like to research how the human body and other living things work.",
    "I'd like to perform on stage, singing, playing music, or acting.",
    "I'd like to look after other people's health and well-being.",
    "I'd like to lead a team to reach a goal.",
    "I'd like to review documents carefully to make sure there are no errors.",
    "I'd like to operate machines, vehicles, or precision tools.",
    "I'd like to understand in depth how a new technology works.",
    "I'd like to take photos or shoot video and then edit the footage.",
    "I'd like to support and follow the development of children or young people.",
    "I'd like to pitch an idea to win over investors or a company's leadership.",
    "I'd like to manage inventory, orders, and delivery deadlines.",
    "I'd like to take care of plants or animals day to day.",
    "I'd like to read scientific studies and draw my own conclusions.",
    "I'd like to design clothes, objects, or interior spaces.",
    "I'd like to help people resolve conflicts and understand each other better.",
    "I'd like to create strategies to grow a product in the market.",
    "I'd like to check whether a company is following regulations and laws.",
    "I'd like to install the electrical wiring or plumbing in a building.",
    "I'd like to solve complex math or logic problems.",
    "I'd like to come up with original ideas for a campaign or a creative project.",
    "I'd like to take part in projects that help the community where I live.",
    "I'd like to make important decisions, even if they involve risk.",
    "I'd like to organize an office's schedule and routines."
  ],
  "dims": {
    "realistic": {
      "label": "Practical",
      "desc": "Interest in hands-on activities: using your hands, tools, and machines, building, repairing, and working outdoors.",
      "high": "You like seeing concrete results and solving problems with your own hands. Settings with clear, practical tasks tend to motivate you. Keep in mind that many of these careers also require technical training and ongoing learning.",
      "low": "Manual, mechanical, or outdoor activities interest you less. You're probably more comfortable working with ideas, people, or information. Even so, some basic practical skills are useful in any field.",
      "tips": [
        "Take a short course in a manual or technical skill to test your interest.",
        "Talk to people in the field about what the work is really like day to day.",
        "Consider vocational or technical programs, which are often a quick way into these careers."
      ],
      "examples": [
        "Civil engineering",
        "Mechanical engineering",
        "Electrician",
        "Agronomy",
        "Airline pilot",
        "Culinary arts",
        "Carpentry",
        "Industrial maintenance"
      ]
    },
    "investigative": {
      "label": "Investigative",
      "desc": "Interest in observing, researching, analyzing, and understanding how things work, whether in science, technology, or health.",
      "high": "You enjoy hard questions, investigating causes, and understanding things in depth. Settings that value reasoning and independence tend to motivate you. The thing to watch is getting lost in analysis and being slow to move to action.",
      "low": "Research, data analysis, and theories interest you less. You probably prefer applying solutions to studying a problem for a long time. Even so, knowing how to find reliable information helps in any profession.",
      "tips": [
        "Follow popular science content on topics that catch your attention.",
        "Join a research project, an academic competition, or an online course.",
        "Try analyzing real data in a spreadsheet to see whether this kind of task appeals to you."
      ],
      "examples": [
        "Medicine",
        "Biology",
        "Data science",
        "Chemistry",
        "Pharmacy",
        "Software development",
        "Scientific research",
        "Geology"
      ]
    },
    "artistic": {
      "label": "Artistic",
      "desc": "Interest in creating, expressing yourself, and working with original ideas, whether through images, words, music, movement, or design.",
      "high": "You enjoy creating, imagining, and giving shape to your own ideas. Settings with freedom, variety, and room for originality tend to motivate you. The thing to watch is dealing with the deadlines, rules, and repetitive parts that every creative job also has.",
      "low": "Artistic activities and personal expression interest you less. You probably prefer clear goals and more predictable results. Creativity, however, also shows up in how you solve problems, in any field.",
      "tips": [
        "Put together a simple portfolio of your work, even if it's just personal projects.",
        "Take a short workshop in a creative field different from the ones you already know.",
        "Look into how creative professionals combine art with other skills, such as technology or business."
      ],
      "examples": [
        "Graphic design",
        "Architecture",
        "Advertising",
        "Photography",
        "Music",
        "Performing arts",
        "Fashion design",
        "Film and video production"
      ]
    },
    "social": {
      "label": "Social",
      "desc": "Interest in helping, teaching, caring for, and guiding people, contributing to their well-being and growth.",
      "high": "You feel motivated when your work makes a difference in other people's lives. Listening, teaching, and caring for others are activities that give meaning to your day. The thing to watch is getting overloaded with other people's problems and forgetting to take care of yourself.",
      "low": "Activities centered on caring for, teaching, or advising people interest you less. You probably prefer working with tasks, objects, data, or ideas. Even so, knowing how to collaborate is still important in almost any job.",
      "tips": [
        "Volunteer for a cause that matters to you and notice how you feel.",
        "Try explaining something you know to other people, for example by tutoring.",
        "Talk to people working in health care, education, or social services about the challenges of their daily work."
      ],
      "examples": [
        "Psychology",
        "Teaching",
        "Nursing",
        "Social work",
        "Physical therapy",
        "Physical education",
        "Speech-language pathology",
        "Human resources"
      ]
    },
    "enterprising": {
      "label": "Enterprising",
      "desc": "Interest in leading, persuading, negotiating, and making decisions to reach goals, whether in companies, sales, or your own projects.",
      "high": "You like taking the lead, persuading people, and seeing goals reached. Dynamic settings with challenges and recognition for results tend to motivate you. The thing to watch is rushing decisions and tending to underestimate risks or details.",
      "low": "Leading, selling, and negotiating interest you less. You probably prefer contributing your knowledge or your work without being at the center of decisions. Even so, knowing how to stand up for your ideas helps in any career.",
      "tips": [
        "Take the lead on a small project at work, at school, or in your community.",
        "Test a business idea on a small scale before investing a lot of time or money.",
        "Learn the basics of finance, negotiation, and communication."
      ],
      "examples": [
        "Business administration",
        "Law",
        "Marketing",
        "Sales management",
        "Public relations",
        "Project management",
        "Real estate",
        "International trade"
      ]
    },
    "conventional": {
      "label": "Organized",
      "desc": "Interest in organizing information, following clear processes, and handling data, numbers, and documents with precision.",
      "high": "You like order, clear rules, and knowing exactly what needs to be done. Structured settings where precision is valued tend to motivate you. The thing to watch is dealing with rapid change and situations without a set procedure.",
      "low": "Routines, spreadsheets, and detailed procedures interest you less. You probably prefer variety and the freedom to do things your own way. Even so, a little organization makes work easier in any field.",
      "tips": [
        "Learn to use spreadsheets and organization tools well, a useful skill in many careers.",
        "Take charge of the finances or organization of a project and see whether this kind of task appeals to you.",
        "Look into fields like accounting, logistics, and auditing, which exist in almost every kind of company."
      ],
      "examples": [
        "Accounting",
        "Auditing",
        "Logistics",
        "Executive assistant",
        "Financial analysis",
        "Library science",
        "Quality control",
        "Purchasing and procurement"
      ]
    }
  },
  "resultTitle": "Your interest types",
  "resultIntro": "We've highlighted the three types with the highest scores. Most people combine more than one type, and each career values a different combination. Use the suggestions as a starting point for research and for conversations with people who already work in the field.",
  "note": "This result shows interests, not abilities or chances of success. It is a self-discovery tool and does not replace career guidance from a specialist."
};

export default t;
