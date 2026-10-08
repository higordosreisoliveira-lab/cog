// burnout — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Burn-outniveau",
  "desc": "Bekijk of je werk je de laatste tijd zonder energie laat, je afstand doet nemen van wat je doet of je het gevoel geeft dat je inzet niets oplevert.",
  "intro": "Een burn-out is werkgerelateerde uitputting die zich meestal op drie fronten laat zien: uitputting, afstand nemen van je werk en het verlies van het gevoel iets te bereiken. Je krijgt 15 uitspraken over de afgelopen drie maanden. Geef bij elke uitspraak aan hoe vaak die in die periode bij jou voorkwam. Als je geen vaste baan hebt, denk dan aan je belangrijkste bezigheid, zoals je studie, een eigen bedrijf of de zorg voor iemand. Sommige uitspraken beschrijven positieve situaties: beantwoord die op dezelfde manier en denk daarbij alleen aan hoe vaak het voorkwam. Het is een zelfbeoordeling op basis van je antwoorden, geen diagnose.",
  "scale": ["Nooit", "Zelden", "Soms", "Vaak", "Altijd"],
  "items": [
    "Na werktijd had ik alleen nog energie om op de bank te hangen of door mijn telefoon te scrollen.",
    "Ik deed op mijn werk alleen het hoognodige, zonder me echt bij mijn taken betrokken te voelen.",
    "Ik sloot mijn werkdag af met het gevoel dat mijn inzet iets had opgeleverd.",
    "Op de avond voordat ik weer aan het werk moest, voelde ik een zwaar gevoel als ik alleen al dacht aan wat er op me afkwam.",
    "Ik ging kouder of ongeduldiger om met collega's, klanten of de mensen die ik help dan ik zou willen.",
    "Bij een probleem op het werk vertrouwde ik op mijn vermogen om een oplossing te vinden.",
    "Zelfs na vrije dagen of vakantie kwam de vermoeidheid in de eerste werkdagen alweer terug.",
    "Ik had het gevoel dat het niet uitmaakte of ik mijn werk goed of slecht deed.",
    "Ik leerde iets nieuws of werd beter in een onderdeel van mijn werk.",
    "Het kostte me enorm veel moeite om alleen al het einde van de werkdag te halen.",
    "Ik telde de uren af tot het einde van de werkdag.",
    "Ik merkte dat mijn werk iemand had geholpen, of het nu een collega, een klant of het team was.",
    "Ik liet vrienden, familie of activiteiten die ik leuk vind schieten omdat mijn werk me zonder energie liet.",
    "Ik ging werkberichten, vergaderingen of werkgesprekken uit de weg wanneer ik maar kon.",
    "Ik was trots op iets wat ik op mijn werk had gedaan."
  ],
  "dims": {
    "exhaustion": {
      "label": "Uitputting",
      "desc": "Meet de lichamelijke en mentale vermoeidheid door je werk, het soort vermoeidheid dat niet overgaat na een nacht slapen of een rustig weekend.",
      "high": "Je werk kost je meer energie dan je kunt aanvullen. De vermoeidheid blijft niet beperkt tot je werktijd: die gaat mee naar huis, naar je vrije dagen en naar je relaties. Dat is vaak het eerste teken dat je huidige tempo niet vol te houden is.",
      "low": "Het lukt je om tussen twee werkdagen weer energie op te doen. Je bent weleens moe, zoals bij elke dagindeling, maar die vermoeidheid lijkt zich niet op te stapelen. Blijf je rustmomenten beschermen.",
      "tips": [
        "Spreek met jezelf een tijd af waarop je werkdag eindigt en maak er een klein afsluitritueel van, zoals je computer dichtklappen en een rondje lopen.",
        "Bescherm je slaap en maak tijd vrij om te bewegen, ook al zijn het maar korte wandelingen.",
        "Gebruik je vrije dagen om echt uit te rusten, zonder werkberichten te checken."
      ]
    },
    "detachment": {
      "label": "Afstand tot je werk",
      "desc": "Meet in hoeverre je afstand neemt van je werk en de mensen die erbij horen, met minder betrokkenheid, meer kilte of het gevoel dat het je niets meer uitmaakt.",
      "high": "Je hebt de neiging om afstand te nemen van je werk en de mensen die erbij horen: je doet het minimale en verliest je interesse in wat vroeger belangrijk was. Vaak is die afstand een manier om jezelf te beschermen tegen uitputting, en geen gebrek aan karakter of inzet. Het is de moeite waard om te begrijpen wat ertoe heeft geleid en wat er zou kunnen veranderen.",
      "low": "Je blijft betrokken bij je werk en bij de mensen die erbij horen. Zelfs op moeilijke dagen lijkt je werk nog betekenis voor je te hebben. Die band helpt je te beschermen tegen uitputting.",
      "tips": [
        "Denk terug aan waarom je voor dit werk hebt gekozen en zoek taken op die daar dichter bij liggen.",
        "Praat met je leidinggevende of collega's over wat de zin uit je werk haalt, zoals onrealistische doelen of te weinig zelfstandigheid.",
        "Bouw aan steunende relaties op je werk: een eerlijk gesprek met een collega die je vertrouwt, kan veel verlichting geven."
      ]
    },
    "efficacy": {
      "label": "Weinig voldoening",
      "desc": "Meet in hoeverre je het gevoel mist dat je werk resultaat oplevert, dat je het kunt en dat je groeit. De uitspraken in dit deel zijn positief, dus de score stijgt als ze weinig voorkwamen.",
      "high": "Je hebt de laatste tijd zelden het gevoel dat je inzet iets oplevert, dat je het kunt of dat je werk verschil maakt. Dat gevoel kan voortkomen uit de vermoeidheid zelf, die vertekent hoe je je eigen prestaties ziet, of uit een omgeving met weinig waardering. Het zegt niets over je waarde als professional.",
      "low": "Je blijft merken dat je werk resultaat oplevert, dat je problemen kunt oplossen en dat je bijleert. Dat gevoel van voldoening helpt je gemotiveerd te blijven, ook in zwaardere periodes.",
      "tips": [
        "Schrijf aan het eind van de week drie dingen op die je hebt afgerond of opgelost, hoe klein ook.",
        "Vraag iemand die je vertrouwt om feedback op je werk, zodat je een evenwichtiger beeld van je prestaties krijgt.",
        "Zoek een kleine uitdaging of iets nieuws om te leren dat je weer het gevoel geeft vooruit te gaan."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Weinig tekenen van burn-out",
      "text": "Je antwoorden laten weinig tekenen van een burn-out zien. Je lijkt je energie, betrokkenheid en voldoening in je werk te behouden, ook met de gewone moeilijkheden van elke dag. Blijf zorgen voor de grenzen en gewoonten die je helpen om dat evenwicht te bewaren."
    },
    "moderate": {
      "label": "Matige tekenen van burn-out",
      "text": "Je antwoorden laten enkele tekenen van werkgerelateerde uitputting zien. Dit is een goed moment om actie te ondernemen, voordat de vermoeidheid zich opstapelt. Kijk wat het zwaarst weegt, probeer de suggesties hieronder uit en praat, als dat kan, met je leidinggevende over aanpassingen in je werk."
    },
    "high": {
      "label": "Sterke tekenen van burn-out",
      "text": "Je antwoorden laten sterke tekenen van een burn-out zien, zoals veel vermoeidheid, afstand tot je werk en weinig gevoel van voldoening. Deze uitputting vraagt meestal om echte veranderingen in je dagelijks leven, en niet alleen om meer wilskracht. Neem contact op met een professional, zoals een psycholoog of arts, om te bekijken hoe het met je gaat en welke stappen in jouw situatie zinvol zijn."
    }
  },
  "resultTitle": "Jouw burn-outniveau",
  "resultIntro": "De uitslag telt je antwoorden over de afgelopen drie maanden bij elkaar op. Bij de uitspraken over voldoening wordt omgekeerd geteld: hoe minder voldoening je voelde, hoe hoger de uitslag. Hieronder zie je in welk niveau je valt en hoe je op elk deel scoorde.",
  "note": "Deze vragenlijst is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen ervaring. Een burn-out is werkgerelateerde uitputting en is op zichzelf geen medische diagnose. Vergelijkbare tekenen komen ook voor bij depressie, angst en lichamelijke gezondheidsproblemen, en alleen een gekwalificeerde professional kan dat beoordelen.",
  "help": "Als je werk invloed heeft op je gezondheid, neem dan contact op met een psycholoog of met je huisarts. Je huisarts of de gezondheidszorg bij jou in de buurt kan je zo nodig doorverwijzen naar gespecialiseerde psychische zorg. Als je werkgever een bedrijfsarts of een ondersteuningsprogramma voor medewerkers heeft, kan dat ook helpen. Als je het heel zwaar hebt, kun je contact opnemen met een crisislijn of een lijn voor emotionele steun in jouw land. Bel in een noodsituatie 112 of het noodnummer van het land waar je bent."
};

export default t;
