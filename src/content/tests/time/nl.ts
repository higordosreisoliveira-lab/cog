// time — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Timemanagement',
  desc: 'Bekijk hoe je prioriteiten stelt, plant, je focus bewaakt en werk en rust in balans houdt.',
  intro:
    'Deze vragenlijst kijkt naar vier gewoonten rond timemanagement: prioriteiten stellen, plannen, gefocust blijven en grenzen en rustmomenten respecteren. Je krijgt 16 uitspraken. Geef bij elke uitspraak aan hoe goed die je huidige dagelijkse routine beschrijft, of dat nu op het werk, in je studie of thuis is. Er zijn geen goede antwoorden: het doel is de punten te vinden die je dagelijks leven het meest kunnen verbeteren.',
  scale: ['Helemaal oneens', 'Oneens', 'Neutraal', 'Eens', 'Helemaal eens'],
  items: [
    'Ik weet wat de belangrijkste taken van mijn week zijn.',
    'Ik neem een paar minuten de tijd om mijn dag of week te plannen.',
    'Ik kan een flinke tijd aan een taak werken zonder mezelf te onderbreken.',
    'Ik kan verzoeken weigeren als ze in de weg zitten van wat ik al heb toegezegd.',
    'Ik maak onderscheid tussen wat dringend is en wat echt belangrijk is.',
    'Vaak ontdek ik pas op het laatste moment dat ik iets belangrijks moet inleveren.',
    'Ik zet meldingen uit als ik me moet concentreren.',
    'Ik neem in de loop van de dag pauzes om uit te rusten, ook als er veel werk is.',
    'Ik besteed een groot deel van de dag aan kleine klusjes en laat liggen wat het belangrijkst is.',
    'Ik noteer deadlines en afspraken zodra ik ervan hoor.',
    'Ik doe één ding tegelijk, in plaats van te proberen meerdere dingen tegelijk te doen.',
    'Ik beantwoord berichten voor werk of studie \'s avonds, in het weekend of tijdens de vakantie.',
    'Voordat ik een nieuwe taak aanneem, bedenk ik of die belangrijker is dan waar ik al mee bezig ben.',
    'Als ik plannen maak, houd ik tijd over voor onverwachte dingen.',
    'Ik stop met waar ik mee bezig ben telkens als er een bericht of verzoek binnenkomt.',
    'Ik heb een vast tijdstip om te stoppen met werken en houd me daar meestal aan.',
  ],
  dims: {
    priorities: {
      label: 'Prioriteiten',
      desc: 'Weten wat het belangrijkst is en daar je tijd aan besteden vóór wat alleen dringend of makkelijk is.',
      high: 'Je weet meestal wat er echt toe doet en besteedt je beste tijd aan die taken. Daardoor levert je inzet resultaten op die verschil maken. Het aandachtspunt is starheid: soms verdient een onverwacht verzoek aandacht, ook als het niet in de planning past.',
      low: 'Je reageert meestal op wat zich het eerst aandient en bent beschikbaar voor allerlei verzoeken. Dat maakt je flexibel en iemand op wie anderen kunnen rekenen. Het aandachtspunt is dat je aan het eind van de dag veel werk hebt verzet maar weinig vooruitgang hebt geboekt in wat het belangrijkst is.',
      tips: [
        'Kies aan het begin van elke dag de drie belangrijkste taken en begin met een daarvan.',
        'Vraag je voordat je een nieuw verzoek aanneemt af of het belangrijker is dan waar je al mee bezig bent.',
        'Reserveer het moment waarop je de meeste energie hebt voor de belangrijkste taak van de dag.',
      ],
    },
    planning: {
      label: 'Planning',
      desc: 'Je dag en week vooraf inrichten, deadlines bijhouden en inschatten hoeveel tijd elke taak kost.',
      high: 'Je plant meestal vooruit, legt afspraken vast en schat in hoe lang dingen gaan duren. Dat vermindert verrassingen en geeft rust. Het aandachtspunt is dat je te veel tijd aan plannen besteedt of gefrustreerd raakt als de dag niet loopt zoals verwacht.',
      low: 'Je beslist meestal gaandeweg wat je doet, wat spontaniteit en improvisatievermogen geeft. Het aandachtspunt zijn de verrassingen: deadlines die je pas laat ontdekt en taken die langer duren dan je dacht.',
      tips: [
        'Neem aan het begin van elke week tien minuten om de komende dagen te plannen.',
        'Zet elke deadline of afspraak in je agenda op het moment dat je ervan hoort.',
        'Houd bij het plannen van je dag ongeveer een derde van de tijd vrij voor onverwachte dingen.',
      ],
    },
    focus: {
      label: 'Focus',
      desc: 'Je concentratie bij één taak tegelijk houden en je tijd beschermen tegen onderbrekingen.',
      high: 'Je kunt je lange tijd op een taak concentreren en beschermt je werk tegen onderbrekingen. Dat verhoogt de kwaliteit en snelheid van wat je doet. Het aandachtspunt is dat je te lang niet reageert en mensen ophoudt die op een antwoord van je wachten.',
      low: 'Je reageert snel op berichten en verzoeken en houdt meerdere dingen tegelijk in de gaten. Dat maakt je toegankelijk en vlot. Het aandachtspunt is dat voortdurend wisselen tussen taken vermoeiend is en ervoor zorgt dat elke taak langer duurt dan met volle aandacht.',
      tips: [
        'Blokkeer in je agenda periodes van 60 tot 90 minuten voor geconcentreerd werk.',
        'Zet meldingen uit en kies twee of drie momenten per dag om berichten te bekijken.',
        'Maak een taak af, of een duidelijk afgebakend deel ervan, voordat je aan een andere begint.',
      ],
    },
    boundaries: {
      label: 'Grenzen en rust',
      desc: 'Nee zeggen als dat nodig is, pauzes nemen en werktijd scheiden van rusttijd.',
      high: 'Je kunt verzoeken weigeren die je prioriteiten in gevaar brengen en je beschermt je pauzemomenten. Dat spaart je energie en je gezondheid op de lange termijn. Het aandachtspunt is dat je weinig beschikbaar kunt lijken op momenten waarop de groep echt een extra inspanning nodig heeft.',
      low: 'Je bent meestal beschikbaar en zegt zelden nee, waardoor mensen sterk op je vertrouwen. Het aandachtspunt is opgestapelde vermoeidheid: zonder pauzes en grenzen nemen je energie en de kwaliteit van je werk na verloop van tijd af.',
      tips: [
        'Stel een tijdstip vast waarop je stopt met werken en zet daarna je meldingen uit.',
        'Neem elk uur of elke twee uur een korte pauze om op te staan, water te drinken en je ogen rust te geven.',
        'Gebruik een eenvoudige zin om een verzoek te weigeren, zoals "Nu lukt het me niet, maar donderdag kan ik je helpen".',
      ],
    },
  },
  resultTitle: 'Jouw profiel voor timemanagement',
  resultIntro:
    'Bekijk hoe je scoort op elke gewoonte. Hogere scores wijzen op beter verankerde gewoonten, maar ook die hebben hun aandachtspunten. Kies een of twee gewoonten om tegelijk aan te werken.',
  note: 'Deze uitslag is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen antwoorden, en geen professionele beoordeling. Als vermoeidheid of overbelasting vaak voorkomen, is het verstandig om met je leidinggevende of een zorgverlener te praten.',
};

export default t;
