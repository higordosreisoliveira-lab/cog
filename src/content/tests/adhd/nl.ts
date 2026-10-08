// adhd — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "ADHD-kenmerken bij volwassenen",
  "desc": "Bekijk hoe vaak situaties rond aandacht, organisatie, onrust en impulsiviteit voorkomen in je dagelijks leven als volwassene.",
  "intro": "ADHD (aandachtstekortstoornis met hyperactiviteit) is niet alleen iets van kinderen: veel mensen nemen deze kenmerken mee naar hun volwassen leven, soms zonder dat ze ooit zijn onderzocht. Deze vragenlijst kijkt naar twee groepen kenmerken in het dagelijks leven: aandacht en organisatie, en onrust en impulsiviteit. Je krijgt 18 herkenbare situaties uit het volwassen leven, op het werk, thuis en in relaties. Denk aan de afgelopen 6 maanden en geef aan hoe vaak elke situatie bij jou voorkwam. Antwoord eerlijk, op basis van wat er echt gebeurt en niet van wat je zou willen dat er gebeurt. Onthoud dat dit een zelfbeoordeling is die naar kenmerken kijkt, geen diagnose. Iedereen is weleens afgeleid of gehaast; waar het hier om gaat, is hoe vaak het gebeurt.",
  "scale": ["Nooit", "Zelden", "Soms", "Vaak", "Heel vaak"],
  "items": [
    "Ik lees een pagina van een boek of rapport helemaal uit en merk dan dat ik niet kan zeggen wat er stond, omdat mijn hoofd ergens anders was.",
    "In een vergadering, les of lezing merk ik dat ik voortdurend met mijn been wiebel, met mijn pen op tafel tik of op mijn stoel van houding verander.",
    "Als ik al bij de voordeur sta, ben ik een paar minuten kwijt aan het zoeken naar mijn sleutels, telefoon of portemonnee, die ik ergens heb neergelegd zonder te weten waar.",
    "In een groepsgesprek komt er een idee bij me op en zeg ik het meteen, door iemand heen die nog niet was uitgepraat, uit angst dat ik vergeet wat ik wilde zeggen.",
    "Ik pak mijn telefoon of zet mijn computer aan om iets specifieks te regelen, zoals een rekening betalen, en doe uiteindelijk drie andere dingen zonder het eerste te regelen.",
    "Ik zie een aanbieding of iets wat mijn aandacht trekt en koop het meteen, zonder prijzen te vergelijken of aan mijn budget voor die maand te denken.",
    "Terwijl iemand me rustig iets uitlegt, merk ik dat ik een deel heb gemist van wat er gezegd werd en moet ik vragen of het herhaald kan worden, of doe ik alsof ik het heb gevolgd.",
    "In de rij bij de supermarkt of in de file voel ik een ongeduld dat snel groeit: ik kijk om me heen, zucht diep of zoek een andere route.",
    "Een eenvoudige, saaie taak, zoals een afspraak maken of een document versturen, blijft wekenlang op mijn lijstje staan, terwijl ik weet dat het maar een paar minuten zou kosten.",
    "Op een vrije dag zonder plannen voel ik me onrustig in plaats van uit te rusten, en verzin ik al snel iets om te doen, omdat een tijdje niets doen me stoort.",
    "Ik verstuur een e-mail, een opdracht of een spreadsheet en merk pas daarna een detail dat me was ontgaan, zoals een vergeten bijlage, een verkeerde datum of een verwisselde naam.",
    "Ik reageer in het heetst van het moment op een bericht of opmerking en heb kort daarna spijt van de toon of van wat ik schreef.",
    "Ik begin een kamer op te ruimen, vind iets waardoor ik naar een andere plek in huis loop, en aan het eind van de dag zijn er verschillende half afgemaakte opruimklussen.",
    "Ik ga naar bed met een moe lichaam, maar mijn hoofd blijft nog lange tijd op volle toeren draaien en springt van de ene gedachte naar de andere.",
    "Ik spreek iets af met iemand en denk pas weer aan de afspraak als die persoon een bericht stuurt om te vragen of ik nog kom.",
    "Na een afspraak met vrienden of collega's merk ik dat ik veel meer heb gepraat dan de anderen, of dat ik van het ene onderwerp in het andere ben gerold zonder het gesprek ruimte te geven.",
    "Ik denk dat ik nog genoeg tijd heb voordat ik weg moet, en als ik op de klok kijk, had ik al onderweg moeten zijn.",
    "Meegesleept door mijn enthousiasme zeg ik meteen ja tegen een uitnodiging, een nieuw project of een verandering van plannen, en pas later merk ik dat het niet in mijn routine paste."
  ],
  "dims": {
    "inattention": {
      "label": "Aandacht en organisatie",
      "desc": "Meet hoe vaak je aandacht afdwaalt tijdens het lezen, een taak of een gesprek, en hoe je omgaat met deadlines, afspraken, alledaagse spullen en weinig interessante taken.",
      "high": "Gefocust blijven bij weinig interessante taken, afspraken onthouden en op details letten lijkt jou meer moeite te kosten dan veel anderen. Dat heeft niets te maken met luiheid of een gebrek aan intelligentie: veel mensen met dit profiel hebben een snelle, creatieve geest vol associaties en kunnen zich intens concentreren op wat hun interesse wekt. Wat meestal helpt, is de organisatie uit je hoofd halen en in je omgeving onderbrengen, met herinneringen, lijstjes en eenvoudige routines.",
      "low": "Je houdt je aandacht meestal bij wat je doet, onthoudt je afspraken en maakt taken af, ook de minder interessante. Dat maakt je betrouwbaar en geeft rust, op het werk en thuis. Af en toe afgeleid zijn is normaal, vooral in periodes van vermoeidheid, stress of slecht slapen.",
      "tips": [
        "Gebruik wekkers en herinneringen op je telefoon voor afspraken en rekeningen, in plaats van alleen op je geheugen te vertrouwen.",
        "Geef je sleutels, portemonnee en documenten een vaste plek, zoals een bakje of een haakje bij de deur.",
        "Als je tegen een saaie taak opziet, neem je dan alleen voor om er de eerste vijf minuten aan te werken: beginnen is meestal het moeilijkste."
      ]
    },
    "hyperactivity": {
      "label": "Onrust en impulsiviteit",
      "desc": "Meet lichamelijke en mentale onrust, moeite met wachten en de neiging om in een opwelling te praten, te beslissen of te handelen.",
      "high": "Je hebt veel energie en handelt meestal snel: je praat, beslist en reageert in het tempo waarin ideeën opkomen, en wachten of lang stilzitten voelt vaak ongemakkelijk. Die energie kan een grote bondgenoot zijn en zorgt voor enthousiasme, initiatief, creativiteit en de moed om nieuwe dingen te beginnen. Het aandachtspunt zijn woorden en beslissingen in het heetst van het moment, die soms tot spijt of wrijving leiden, en de vermoeidheid van een hoofd dat maar moeilijk tot rust komt.",
      "low": "Je kunt meestal rustig wachten, denkt na voordat je handelt en kunt ontspannen als je vrije tijd hebt. Dat helpt je om weloverwogen beslissingen te nemen en gesprekken in balans te houden. Af en toe ongeduldig of onrustig zijn is normaal, vooral in stressvolle periodes.",
      "tips": [
        "Bouw een pauze in voordat je iets koopt, reageert op een bericht dat je irriteerde of een nieuwe verplichting aangaat: wacht een paar minuten of tot de volgende dag.",
        "Geef de energie van je lichaam een uitlaatklep, met regelmatige lichaamsbeweging, korte wandelingen in de pauzes of een onopvallend voorwerp om tijdens vergaderingen mee te friemelen.",
        "Als je hoofd begint te malen wanneer je gaat slapen, schrijf dan voor het slapengaan op papier wat je bezighoudt en bewaar het oplossen voor de volgende dag."
      ]
    }
  },
  "bands": {
    "few": {
      "label": "Weinig kenmerken",
      "text": "Je antwoorden laten zien dat situaties rond onoplettendheid, onrust en impulsiviteit weinig voorkomen in je dagelijks leven. Af en toe afgeleid of ongeduldig zijn is voor iedereen normaal. De niveaus in deze test zijn alleen bedoeld als richtlijn en zijn niet klinisch gevalideerd."
    },
    "some": {
      "label": "Enkele kenmerken",
      "text": "Je antwoorden laten zien dat sommige kenmerken van onoplettendheid of onrust regelmatig voorkomen in je dagelijks leven. Dat is heel gewoon en kan verschillende oorzaken hebben, zoals vermoeidheid, stress, slecht slapen of te veel verplichtingen. Let op in welke situaties ze het zwaarst wegen en probeer de tips voor elk gebied uit. Houd er rekening mee dat de niveaus alleen een richtlijn zijn, zonder klinische validatie."
    },
    "many": {
      "label": "Veel kenmerken",
      "text": "Je antwoorden laten zien dat veel kenmerken rond aandacht, onrust en impulsiviteit vaak voorkomen in je dagelijks leven. Dat betekent niet dat je ADHD hebt: andere aandoeningen en levensfasen kunnen vergelijkbare signalen geven, en de niveaus in deze test zijn alleen een richtlijn, zonder klinische validatie. Als deze kenmerken je al lange tijd vergezellen, misschien al sinds je kindertijd, en ze je werk, studie of relaties in de weg zitten, is het de moeite waard om met een psychiater, neuroloog of psycholoog te praten voor een goed onderzoek."
    }
  },
  "resultTitle": "Jouw ADHD-kenmerken",
  "resultIntro": "De uitslag telt je antwoorden op de 18 situaties bij elkaar op en laat zien hoe vaak kenmerken van onoplettendheid, onrust en impulsiviteit in je dagelijks leven voorkomen. Bekijk ook de twee gebieden apart: zo zie je beter waar deze kenmerken het zwaarst wegen en waar je sterke punten liggen.",
  "note": "Deze test is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen antwoorden. Het is geen diagnose van ADHD of van een andere aandoening, en de uitslagniveaus zijn niet klinisch gevalideerd. Alleen een gekwalificeerde professional, zoals een psychiater, neuroloog of psycholoog, kan een volledig onderzoek doen, waarin ook je voorgeschiedenis vanaf je kindertijd en andere mogelijke oorzaken worden meegenomen, zoals angst, depressie of slaapproblemen.",
  "help": "Als je deze kenmerken verder wilt onderzoeken, neem dan contact op met een psychiater, neuroloog of psycholoog, bij voorkeur met ervaring met ADHD bij volwassenen. Je huisarts of de gezondheidszorg bij jou in de buurt is vaak een goede eerste stap: die kan je advies geven en doorverwijzen voor onderzoek. Bij meer psychische nood kun je ook terecht bij de geestelijke gezondheidszorg in je regio. Daarnaast zijn er gespecialiseerde poliklinieken bij universiteiten en academische ziekenhuizen, en verenigingen voor mensen met ADHD, die vaak betrouwbare professionals en informatie kunnen aanraden."
};

export default t;
