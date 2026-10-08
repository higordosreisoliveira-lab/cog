// stress — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Stressniveau",
  "desc": "Bekijk hoe zwaar overbelasting de afgelopen maand op je drukte en hoe het staat met je vermogen om weer op adem te komen.",
  "intro": "Deze vragenlijst bekijkt stress van twee kanten: de overbelasting en druk die je voelde, en het gevoel van controle en herstel dat helpt om dat gewicht in evenwicht te houden. Je krijgt 12 uitspraken over de afgelopen maand. Geef bij elke uitspraak aan hoe vaak die in die periode bij jou voorkwam. Sommige uitspraken beschrijven positieve situaties: beantwoord die op dezelfde manier en denk daarbij alleen aan hoe vaak het voorkwam. Het is een zelfbeoordeling op basis van je antwoorden en vervangt geen beoordeling door een professional.",
  "scale": ["Nooit", "Bijna nooit", "Soms", "Vaak", "Heel vaak"],
  "items": [
    "Mijn taken en verantwoordelijkheden leken groter dan de uren in een dag.",
    "Het lukte me om tijd vrij te maken om uit te rusten, zonder me schuldig te voelen.",
    "Ik kwam aan het eind van de dag met het gevoel dat de openstaande taken alleen maar toenamen.",
    "Als er een probleem opdook, kon ik even stilstaan en rustig nadenken over wat ik moest doen.",
    "Ik voelde een sterke druk, van anderen of van mezelf, om alles voor elkaar te krijgen.",
    "Ik had het gevoel dat ik mijn dag kon indelen zoals ik dat nodig had.",
    "Ik verloor mijn geduld bij dingen die me normaal niet zouden storen.",
    "Na een moeilijke dag was een goede nachtrust of een moment van ontspanning genoeg om te herstellen.",
    "Ik bleef aan mijn openstaande taken denken, zelfs op momenten die bedoeld waren om uit te rusten.",
    "Ik had iemand bij wie ik terechtkon als ik mijn hart wilde luchten of om hulp wilde vragen.",
    "Ik had lichamelijke tekenen van spanning, zoals hoofdpijn, een vastgeklemde kaak of een vermoeidheid die maar niet overging.",
    "Het lukte me om nee te zeggen of verzoeken uit te stellen als ik al te veel op mijn bord had."
  ],
  "dims": {
    "load": {
      "label": "Overbelasting en druk",
      "desc": "Meet in hoeverre je te veel taken, verwachtingen en spanning voelde, en in hoeverre dat je ook in je rusttijd bleef achtervolgen.",
      "high": "De afgelopen maand had je vaak het gevoel overbelast te zijn: veel te doen, verwachtingen en weinig ruimte in je hoofd. Lichaam en geest kunnen dat tempo een tijd volhouden, maar als het lang duurt, eist het zijn tol. Het is de moeite waard om te kijken wat er minder kan, wat je kunt verdelen of wat kan wachten.",
      "low": "De afgelopen maand was er weinig druk, of bleef die op een niveau dat je aankon. Dat betekent niet dat er geen uitdagingen waren, maar ze lijken zich niet te hebben opgestapeld. Kijk wat er heeft gewerkt om dat evenwicht te bewaren.",
      "tips": [
        "Zet de taken van de week op een rij en verdeel ze in wat echt dringend is, wat kan wachten en wat je met anderen kunt delen.",
        "Neem gedurende de dag korte pauzes, weg van schermen, ook al zijn het maar vijf minuten.",
        "Spreek duidelijke grenzen af, zoals een tijdstip waarna je geen werkberichten meer beantwoordt."
      ]
    },
    "coping": {
      "label": "Weinig controle en herstel",
      "desc": "Meet het gebrek aan hulpbronnen die stress in evenwicht houden, zoals het gevoel dat je je dagelijks leven in eigen hand hebt, uitrusten, kunnen rekenen op steun en grenzen stellen. De uitspraken in dit deel zijn positief, dus de score stijgt als ze weinig voorkwamen.",
      "high": "De afgelopen maand waren momenten van rust, steun en het gevoel van controle zeldzaam. Zonder die pauzes weegt zelfs een gewone dagindeling zwaarder, omdat er geen ruimte overblijft om op adem te komen. Deze hulpbronnen stap voor stap versterken is een van de beste manieren om stress te verminderen.",
      "low": "Het lukt je om uit te rusten, om hulp te vragen en het gevoel te hebben dat je je dagelijks leven grotendeels in eigen hand hebt. Die hulpbronnen werken als een buffer: ze helpen je moeilijke periodes door te komen zonder uitgeput te raken. Blijf die momenten beschermen, vooral als het drukker wordt.",
      "tips": [
        "Bescherm je slaap: probeer op ongeveer dezelfde tijden naar bed te gaan en op te staan, ook in het weekend.",
        "Zet minstens één activiteit per week in je agenda die je plezier of rust geeft, en behandel dat moment als een afspraak.",
        "Vertel iemand die je vertrouwt hoe het met je gaat: de last delen maakt hem al lichter."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Weinig stress",
      "text": "Je antwoorden laten de afgelopen maand een laag stressniveau zien. Je lijkt een goed evenwicht te vinden tussen wat het dagelijks leven van je vraagt en momenten van herstel. Blijf zorgen voor de gewoonten die dat evenwicht ondersteunen."
    },
    "moderate": {
      "label": "Matige stress",
      "text": "Je antwoorden laten een matig stressniveau zien, iets wat vaak voorkomt in periodes waarin er veel van je gevraagd wordt. Het aandachtspunt is wanneer die toestand normaal wordt, zonder momenten van verlichting. Probeer de suggesties hieronder uit en praat met een professional als de stress invloed begint te krijgen op je slaap, je gezondheid of je relaties."
    },
    "high": {
      "label": "Veel stress",
      "text": "Je antwoorden laten de afgelopen maand een hoog stressniveau zien, met veel druk en weinig ruimte om te herstellen. Als die situatie lang aanhoudt, kan ze invloed hebben op je slaap, je stemming en je lichamelijke gezondheid. Het is verstandig om hulp te zoeken bij een professional, zoals een psycholoog of arts, om te begrijpen wat er zo zwaar weegt en manieren te vinden om de last te verlichten."
    }
  },
  "resultTitle": "Jouw stressniveau",
  "resultIntro": "De uitslag telt je antwoorden over de afgelopen maand bij elkaar op. Bij de uitspraken over controle en herstel wordt omgekeerd geteld: hoe minder die hulpbronnen voorkwamen, hoe hoger de uitslag. Hieronder zie je in welk niveau je valt en hoe je op elk deel scoorde.",
  "note": "Deze vragenlijst is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen ervaring van de afgelopen maand. Het is geen diagnose en vervangt geen beoordeling door een gekwalificeerde professional. Het stressniveau kan bovendien sterk verschillen per levensfase.",
  "help": "Als stress invloed heeft op je gezondheid, je slaap of je relaties, neem dan contact op met een psycholoog of met je huisarts. Je huisarts of de gezondheidszorg bij jou in de buurt kan je zo nodig doorverwijzen naar gespecialiseerde psychische zorg. Als je het heel zwaar hebt, kun je contact opnemen met een crisislijn of een lijn voor emotionele steun in jouw land. Bel in een noodsituatie 112 of het noodnummer van het land waar je bent."
};

export default t;
