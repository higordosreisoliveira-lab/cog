// procrastination — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Uitstelgedrag',
  desc: 'Ontdek waarom je taken meestal uitstelt en leer praktische strategieën voor elke reden.',
  intro:
    'Bijna iedereen stelt weleens taken uit, maar de redenen verschillen van persoon tot persoon. Deze vragenlijst kijkt naar vier veelvoorkomende redenen: ongemak vermijden, angst om het niet perfect te doen, afleiding en gebrek aan duidelijkheid in de planning. Je krijgt 16 uitspraken. Denk aan de afgelopen weken en geef aan hoe vaak elke situatie bij jou voorkomt. Er zijn geen goede antwoorden: het doel is te begrijpen wat in jouw geval het zwaarst weegt, zodat je de juiste strategieën kunt kiezen.',
  scale: ['Nooit', 'Zelden', 'Soms', 'Vaak', 'Altijd'],
  items: [
    'Ik stel taken uit die me onrustig maken, ook als ik weet dat ze belangrijk zijn.',
    'Ik begin laat omdat ik het gevoel heb dat alles vanaf het begin perfect moet zijn.',
    'Ik pak mijn telefoon om snel iets te bekijken en ben er uiteindelijk veel langer mee bezig dan ik van plan was.',
    'Ik stel een taak uit omdat ik niet precies weet waar ik moet beginnen.',
    'Ik schuif telefoontjes, berichten of gesprekken die moeilijk kunnen zijn voor me uit.',
    'Ik blijf zo lang aan een stuk werk schaven dat ik het uiteindelijk te laat inlever.',
    'Midden in een taak stap ik over op iets anders zodra er iets interessanters opduikt.',
    'Ik heb zoveel te doen dat ik niet weet waar ik als eerste aan moet beginnen.',
    'Ik vermijd het openen van e-mails, rekeningen of berichten uit angst voor wat ik zal aantreffen.',
    'Ik begin liever niet dan dat ik het risico loop iets te doen dat onder mijn eigen verwachtingen blijft.',
    'Meldingen, gesprekken of geluiden om me heen halen me makkelijk uit waar ik mee bezig ben.',
    'Ik schat verkeerd in hoe lang een taak duurt en heb uiteindelijk minder tijd dan ik nodig had.',
    'Als een taak me saai of onaangenaam lijkt, zoek ik iets leukers om te doen.',
    'Ik wacht op het ideale moment, met genoeg tijd en energie, om aan belangrijke taken te beginnen.',
    'Ik doe waar ik op dat moment zin in heb, ook als ik weet dat ik met iets anders bezig zou moeten zijn.',
    'Als een taak groot of vaag is, vind ik het moeilijk om er concrete stappen van te maken.',
  ],
  dims: {
    avoidance: {
      label: 'Ongemak vermijden',
      desc: 'Taken uitstellen omdat ze verveling, onrust, angst of andere onaangename gevoelens oproepen.',
      high: 'Een groot deel van je uitstelgedrag lijkt voort te komen uit de wens om onaangename gevoelens te ontlopen, zoals onrust, verveling of angst voor een negatieve reactie. Dat wijst erop dat je emoties intens beleeft, wat je ook helpt om te merken wat belangrijk is. Het aandachtspunt is dat de opluchting van uitstellen maar kort duurt, en dat de taak daarna meestal nog zwaarder voelt.',
      low: 'Het ongemak van een taak houdt je zelden tegen om eraan te beginnen. Dat vermogen om saaie of moeilijke dingen aan te pakken is een groot voordeel. Het aandachtspunt is dat je jezelf dwingt door te gaan, ook als vermoeidheid of overbelasting om een pauze vragen.',
      tips: [
        'Begin met slechts twee minuten: open het bestand of schrijf de eerste zin. Daarna mag je stoppen als je wilt. Beginnen is meestal het moeilijkste deel.',
        'Benoem wat je voelt, bijvoorbeeld "ik ben bang om kritiek te krijgen". Een emotie erkennen maakt haar meestal minder sterk.',
        'Doe de onaangenaamste taak meteen aan het begin van de dag, voordat je je e-mail of sociale media opent.',
      ],
    },
    perfectionism: {
      label: 'Perfectionisme',
      desc: 'Taken uitstellen uit angst ze niet goed genoeg te doen of omdat je wacht op het ideale moment om te beginnen.',
      high: 'Je lijkt dingen uit te stellen omdat je wilt dat ze perfect worden, of omdat je wacht tot je de ideale hoeveelheid tijd en energie hebt om te beginnen. Die zorgvuldigheid laat zien dat je je werk serieus neemt en hoge normen hebt. Het aandachtspunt is dat het ideale moment zelden komt, en dat de angst om fouten te maken belangrijke opleveringen kan vertragen of verhinderen.',
      low: 'Je begint meestal ook als nog niet alles perfect is en accepteert dat je onderweg dingen bijstelt. Dat maakt je slagvaardig en helpt je te leren door te doen. Het aandachtspunt is dat je iets met minder zorg oplevert dan de situatie vroeg, vooral bij belangrijke taken.',
      tips: [
        'Schrijf voordat je begint op wat voor die taak "goed genoeg" is.',
        'Maak een snelle eerste versie, in de wetenschap dat je die later verbetert.',
        'Stel een tijdslimiet voor het nakijken en lever in zodra die verstreken is.',
      ],
    },
    distraction: {
      label: 'Afleiding en impulsen',
      desc: 'Taken uitstellen omdat je aandacht wordt getrokken door directere prikkels, zoals je telefoon, gesprekken of leukere bezigheden.',
      high: 'Je aandacht lijkt makkelijk te worden getrokken door meldingen, gesprekken of bezigheden die interessanter zijn dan de taak van dat moment. Die gevoeligheid voor nieuwe prikkels kan je ook vlot en creatief maken. Het aandachtspunt is dat kleine onderbrekingen bij elkaar opgeteld uren van je dag opslokken zonder dat je het merkt.',
      low: 'Je kunt je focus vasthouden, ook als er prikkels om je heen zijn, en je weerstaat goed de neiging om een taak in te ruilen voor iets leukers. Dat is een groot voordeel bij werk dat concentratie vraagt. Het aandachtspunt is dat je zo opgaat in je taak dat je verzoeken of belangrijke veranderingen om je heen niet opmerkt.',
      tips: [
        'Leg je telefoon in een andere kamer of zet hem op stil terwijl je aan iets belangrijks werkt.',
        'Werk in blokken van 25 minuten, met pauzes van 5 minuten ertussen.',
        'Schrijf ideeën en impulsen die tijdens de taak opkomen op om ze later af te handelen, in plaats van te onderbreken waar je mee bezig bent.',
      ],
    },
    planning: {
      label: 'Gebrek aan duidelijkheid en planning',
      desc: 'Taken uitstellen omdat niet duidelijk is waar je moet beginnen, wat eerst moet of hoe lang alles gaat duren.',
      high: 'Vaak stel je dingen niet uit door gebrek aan motivatie, maar omdat de taak groot, vaag of verwarrend lijkt. Dat laat zien dat je oog hebt voor hoe complex dingen zijn. Het aandachtspunt is dat zonder concrete stappen zelfs eenvoudige taken moeilijk lijken en blijven liggen.',
      low: 'Je weet meestal waar je moet beginnen en kunt grote taken omzetten in praktische stappen. Dat maakt het makkelijker om het tempo vast te houden en deadlines te halen. Het aandachtspunt is dat je zo nauwkeurig plant dat het moeilijk wordt om je aan te passen als er iets verandert.',
      tips: [
        'Verdeel elke grote taak in stappen van maximaal 30 minuten en schrijf op wat de eerste is.',
        'Bepaal van tevoren wanneer en waar je de taak gaat doen, bijvoorbeeld: "Dinsdag om 9 uur ga ik aan mijn bureau de inleiding van het verslag schrijven".',
        'Schat in hoe lang elke taak duurt en tel daar een marge van minstens 50% bij op.',
      ],
    },
  },
  resultTitle: 'Waarom je dingen uitstelt',
  resultIntro:
    'Elke balk laat zien hoe sterk een reden in je antwoorden naar voren komt. Hoe hoger de score, hoe meer die factor bijdraagt aan je uitstelgedrag. Begin met de strategieën voor de reden met de hoogste score.',
  note: 'Deze vragenlijst is een hulpmiddel voor zelfinzicht en geen diagnose. Als moeite met het beginnen of afmaken van taken voortdurend speelt en je studie, je werk of je privéleven in de weg zit, is het verstandig om met een zorgverlener te praten, omdat het samen kan hangen met bijvoorbeeld angst, depressie of ADHD.',
};

export default t;
