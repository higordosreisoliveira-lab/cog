// anxiety — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Angstniveau",
  "desc": "Bekijk hoe vaak piekeren en spanning in je lichaam de afgelopen twee weken in je dagelijks leven voorkwamen.",
  "intro": "Deze vragenlijst kijkt naar twee kanten van angst: piekeren, dat je gedachten in beslag neemt, en spanning, die zich laat zien in je lichaam en je gedrag. Je krijgt 10 uitspraken over de afgelopen twee weken. Geef bij elke uitspraak aan hoe vaak die in die periode bij jou voorkwam, en niet hoe je in het algemeen bent. Er zijn geen goede of foute antwoorden. Het is een zelfbeoordeling op basis van je antwoorden: die helpt je te zien hoe het met je gaat, maar het is geen diagnose.",
  "scale": ["Nooit", "Een aantal dagen", "Meer dan de helft van de dagen", "Bijna elke dag"],
  "items": [
    "Ik was een groot deel van de dag bezig met zorgen, waarbij de ene zorg de andere opriep.",
    "Mijn lichaam voelde gespannen, vooral in mijn schouders, nek of kaak.",
    "Ik probeerde aan iets anders te denken, maar dezelfde zorgelijke gedachten bleven terugkomen.",
    "Ik merkte dat mijn hart op hol sloeg of dat mijn ademhaling kort was, zonder dat ik me lichamelijk had ingespannen.",
    "Bij het slapengaan bleef mijn hoofd problemen en openstaande zaken doornemen.",
    "Ik vond het moeilijk om stil te zitten: ik wiebelde met mijn benen, friemelde met mijn handen of liep heen en weer.",
    "Bij iets eenvoudigs, zoals een bericht waar geen antwoord op kwam, dacht ik meteen aan het ergste.",
    "Kleine onverwachte dingen, zoals een geluid of een vertraging, brachten me meer van mijn stuk dan normaal.",
    "Ik stelde beslissingen uit of vermeed situaties uit angst dat er iets mis zou gaan.",
    "Zelfs op vrije momenten bleef mijn lichaam alert en lukte het me niet om tot rust te komen."
  ],
  "dims": {
    "worry": {
      "label": "Piekeren",
      "desc": "Meet in hoeverre zorgelijke gedachten je hoofd in beslag namen, terugkwamen ook als je probeerde je af te leiden, en je beslissingen beïnvloedden.",
      "high": "De afgelopen weken nam piekeren veel ruimte in je gedachten in, vaak door problemen te voorzien die nog niet zijn gebeurd. Dat is vermoeiend en haalt je aandacht weg van wat je nu wel in de hand hebt. Het is de moeite waard om manieren te leren om die gedachten te begrenzen en steun te zoeken als ze je dagelijks leven in de weg zitten.",
      "low": "Piekeren kwam de afgelopen weken weinig of maar kort voor. Je lijkt over problemen te kunnen nadenken zonder dat ze je hele dag overnemen. Blijf zorgen voor de gewoonten die je helpen om dat evenwicht te bewaren.",
      "tips": [
        "Neem elke dag 15 minuten om je zorgen op te schrijven en noteer bij elke zorg een mogelijke volgende stap, of dat die buiten je invloed ligt.",
        "Als je merkt dat je je het ergste voorstelt, vraag jezelf dan af: wat is het meest waarschijnlijk dat er echt gebeurt?",
        "Besteed minder tijd aan nieuws en sociale media, vooral voor het slapengaan."
      ]
    },
    "tension": {
      "label": "Lichamelijke spanning en onrust",
      "desc": "Meet lichamelijke en gedragsmatige signalen die met angst samenhangen, zoals gespannen spieren, een snelle hartslag, onrust en irritatie over kleine dingen.",
      "high": "Je lichaam gaf de afgelopen weken veel alarmsignalen, zoals spanning, onrust of sterke reacties op kleine onverwachte dingen. Zo reageert het lichaam op druk, maar als het lang duurt, is het vermoeiend en verstoort het je rust. Oefeningen die je lichaam kalmeren helpen meestal, en het is verstandig om met een professional te praten als de signalen heftig zijn of vaak voorkomen.",
      "low": "Je lichaam liet de afgelopen weken weinig tekenen van spanning zien, en het lukte je om tot rust te komen op momenten van ontspanning. Dat wijst erop dat de druk van het dagelijks leven zich niet in je lichaam opstapelt.",
      "tips": [
        "Probeer een paar minuten langzaam te ademen, waarbij je langer uitademt dan inademt.",
        "Beweeg regelmatig: een wandeling van 20 tot 30 minuten helpt al om spanning kwijt te raken.",
        "Als je vaak hartkloppingen, kortademigheid of pijn op de borst hebt, ga dan naar een arts om andere mogelijke oorzaken te laten onderzoeken."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Minimale angst",
      "text": "Je antwoorden laten de afgelopen twee weken weinig tekenen van angst zien. Zorgen en momenten van spanning horen bij het leven en lijken bij jou niet zwaar op je dagelijks leven te drukken. Blijf goed zorgen voor je slaap, je beweging en je relaties."
    },
    "mild": {
      "label": "Lichte angst",
      "text": "Je antwoorden laten enkele tekenen van angst zien, op een deel van de dagen. Dat komt vaak voor in drukke periodes of tijden van verandering. Het is goed om te kijken waar je zorgen vandaan komen en de suggesties hieronder uit te proberen; als de signalen toenemen of lang aanhouden, praat dan met een professional."
    },
    "moderate": {
      "label": "Matige angst",
      "text": "Je antwoorden laten zien dat piekeren en spanning op een groot deel van de dagen aanwezig waren. Dat kan vermoeiend zijn en invloed hebben op je slaap, je concentratie en je relaties. Een gesprek met een professional, zoals een psycholoog of arts, kan je helpen begrijpen wat er aan de hand is en manieren te vinden om ermee om te gaan."
    },
    "high": {
      "label": "Hoge angst",
      "text": "Je antwoorden laten op bijna alle dagen van de afgelopen twee weken sterke tekenen van angst zien. Dat bepaalt niet wie je bent, maar het laat wel zien dat je veel met je meedraagt, en er zijn goede manieren om daar zorg voor te dragen. Neem contact op met een professional, zoals een psycholoog of arts, voor een beoordeling en om samen na te denken over de volgende stappen."
    }
  },
  "resultTitle": "Jouw angstniveau",
  "resultIntro": "De uitslag is gebaseerd op de optelsom van je antwoorden over de afgelopen twee weken. Hieronder zie je in welk niveau je valt en hoe je scoorde op piekeren en op lichamelijke spanning.",
  "note": "Deze vragenlijst is een hulpmiddel voor zelfinzicht en een eerste verkenning, gebaseerd op je eigen antwoorden. Het is geen diagnose: alleen een gekwalificeerde professional, zoals een psycholoog of arts, kan angst volledig beoordelen. Sommige lichamelijke signalen, zoals hartkloppingen en kortademigheid, kunnen ook andere oorzaken hebben.",
  "help": "Als angst je dagelijks leven in de weg zit, neem dan contact op met een psycholoog of met je huisarts. Je huisarts of de gezondheidszorg bij jou in de buurt kan je zo nodig doorverwijzen naar gespecialiseerde psychische zorg. Als je het heel zwaar hebt, kun je contact opnemen met een crisislijn of een lijn voor emotionele steun in jouw land. Bel in een noodsituatie 112 of het noodnummer van het land waar je bent."
};

export default t;
