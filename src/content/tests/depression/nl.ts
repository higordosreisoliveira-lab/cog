// depression — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Tekenen van een sombere stemming",
  "desc": "Bekijk hoe vaak tekenen zoals neerslachtigheid, verlies van interesse en gebrek aan energie de afgelopen twee weken voorkwamen.",
  "intro": "Deze vragenlijst kijkt naar twee groepen tekenen die samenhangen met een sombere stemming: veranderingen in je stemming en in je interesse voor dingen, en veranderingen in je energie, slaap, eetlust en concentratie. Je krijgt 10 uitspraken over de afgelopen twee weken. Geef bij elke uitspraak aan hoe vaak die in die periode bij jou voorkwam. Sommige uitspraken gaan over gevoelige onderwerpen: neem de tijd die je nodig hebt en antwoord eerlijk. Het is een zelfbeoordeling op basis van je antwoorden, geen diagnose.",
  "scale": ["Nooit", "Een aantal dagen", "Meer dan de helft van de dagen", "Bijna elke dag"],
  "items": [
    "Dingen waar ik vroeger plezier aan beleefde, zoals een hobby of afspreken met vrienden, waren niet leuk meer.",
    "Ik had zelfs voor eenvoudige dingen geen energie, zoals douchen of een bericht beantwoorden.",
    "Ik voelde een groot deel van de dag een verdriet of leegte die moeilijk uit te leggen was.",
    "Mijn slaap veranderde: ik viel moeilijk in slaap, werd 's nachts meerdere keren wakker of sliep veel meer dan normaal.",
    "Mijn eetlust veranderde: ik at veel minder of veel meer dan ik gewend ben.",
    "Ik keek naar de komende maanden zonder hoop dat er iets beter zou worden.",
    "Ik raakte de draad kwijt in gesprekken of bij eenvoudige taken omdat ik me niet kon concentreren.",
    "Ik betrapte mezelf op de gedachte dat ik niets waard ben of dat alles wat ik doe mislukt.",
    "Kleine beslissingen, zoals wat ik zou eten of aantrekken, leken veel te moeilijk.",
    "Er gingen gedachten door mijn hoofd dat het leven niet de moeite waard is of dat ik mezelf iets zou aandoen."
  ],
  "dims": {
    "mood": {
      "label": "Stemming en interesse",
      "desc": "Meet tekenen zoals aanhoudend verdriet, verlies van plezier in dingen, hopeloosheid en heel negatieve gedachten over jezelf.",
      "high": "De afgelopen twee weken kwamen verdriet, gebrek aan interesse of harde gedachten over jezelf vaak voor. Dat is geen gebrek aan wilskracht: een sombere stemming verandert hoe we naar onszelf en naar de toekomst kijken. Erover praten met een professional is een belangrijke stap, en je hoeft niet te wachten tot het erger wordt om hulp te zoeken.",
      "low": "Je stemming en je interesse voor dingen lijken de afgelopen twee weken stabiel te zijn gebleven. Iedereen heeft weleens verdrietige dagen, maar die lijken je dagelijks leven niet te hebben beheerst. Blijf zorgen voor wat je goeddoet.",
      "tips": [
        "Plan door de week heen kleine, prettige activiteiten, ook als je er geen zin in hebt: vaak komt de zin pas nadat je bent begonnen, niet ervoor.",
        "Houd contact met mensen die je vertrouwt, ook al is het maar een berichtje of een kort gesprek.",
        "Als het verdriet of het gebrek aan interesse langer dan twee weken aanhoudt, neem dan contact op met een psycholoog of arts om erover te praten."
      ]
    },
    "energy": {
      "label": "Energie, slaap, eetlust en concentratie",
      "desc": "Meet veranderingen in je lichaam en in je dagelijks functioneren die vaak samengaan met een sombere stemming, zoals vermoeidheid, veranderingen in slaap en eetlust en moeite met concentreren.",
      "high": "Je lichaam en je hoofd lieten de afgelopen twee weken tekenen van uitputting zien: minder energie, veranderingen in slaap of eetlust en moeite met concentreren. Die tekenen kunnen samengaan met een sombere stemming, maar kunnen ook andere oorzaken hebben, zoals stress, slecht slapen of lichamelijke gezondheidsproblemen. Het is verstandig om erover te praten met een arts, vooral als ze aanhouden.",
      "low": "Je energie, slaap, eetlust en concentratie lijken stabiel te zijn. Die basis helpt je vaak enorm om moeilijkere dagen door te komen. Blijf er goed voor zorgen.",
      "tips": [
        "Probeer vaste tijden aan te houden voor slapen, opstaan en eten, ook op dagen dat je weinig zin hebt.",
        "Ga even naar buiten en beweeg, al is het maar een kort wandelingetje: daglicht en beweging helpen om je slaap en energie te reguleren.",
        "Verdeel taken in kleine stukjes en sta stil bij elk stukje dat je afrondt, zonder van jezelf het tempo van vroeger te eisen."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Weinig tekenen",
      "text": "Je antwoorden laten de afgelopen twee weken weinig of geen tekenen van een sombere stemming zien. Momenten van verdriet of vermoeidheid horen bij het leven en lijken bij jou je dagelijks leven niet over te nemen. Blijf goed zorgen voor je slaap, je beweging en je relaties."
    },
    "mild": {
      "label": "Lichte tekenen",
      "text": "Je antwoorden laten op een deel van de dagen enkele tekenen van een sombere stemming zien. Dat kan gebeuren in periodes van vermoeidheid, verlies of verandering. Let op hoe je je de komende weken voelt en praat met een professional als de tekenen aanhouden of toenemen."
    },
    "moderate": {
      "label": "Matige tekenen",
      "text": "Je antwoorden laten op een groot deel van de dagen tekenen van een sombere stemming zien, wat zwaar kan drukken op je dagelijks leven. Dat verdient aandacht en zorg, en het is niet iets wat je in je eentje hoeft op te lossen. Neem contact op met een professional, zoals een psycholoog of arts, om te praten over wat je voelt."
    },
    "high": {
      "label": "Sterke tekenen",
      "text": "Je antwoorden laten de afgelopen twee weken vaak voorkomende en sterke tekenen van een sombere stemming zien. Dat kan alles moeilijker maken, maar er bestaat behandeling, en met de juiste steun gaat het mensen beter. Neem zo snel als je kunt contact op met een professional, zoals een psycholoog of arts, en vertel iemand die je vertrouwt hoe het met je gaat."
    }
  },
  "resultTitle": "Jouw stemmingssignalen",
  "resultIntro": "De uitslag telt je antwoorden over de afgelopen twee weken bij elkaar op. Hieronder zie je in welk niveau je valt en hoe je scoorde op stemming en interesse en op energie, slaap, eetlust en concentratie.",
  "note": "Deze vragenlijst is een hulpmiddel voor zelfinzicht en een eerste verkenning, gebaseerd op je eigen antwoorden. Het is geen diagnose van depressie: alleen een gekwalificeerde professional, zoals een psycholoog of arts, kan die beoordeling doen. Vermoeidheid en veranderingen in slaap en eetlust kunnen ook andere oorzaken hebben, ook lichamelijke.",
  "help": "Om te praten over wat je voelt, kun je contact opnemen met een psycholoog of met je huisarts. Je huisarts of de gezondheidszorg bij jou in de buurt kan je zo nodig doorverwijzen naar gespecialiseerde psychische zorg. Als je het zwaar hebt, kun je contact opnemen met een crisislijn of een lijn voor emotionele steun in jouw land. Bel in een noodsituatie 112 of het noodnummer van het land waar je bent.",
  "alert": "Je hebt aangegeven dat je de afgelopen twee weken gedachten had dat het leven niet de moeite waard is of dat je jezelf iets zou aandoen. Goed dat je zo eerlijk hebt geantwoord. Deze gedachten verdienen nu zorg, en je hoeft hier niet alleen doorheen te gaan. Als je in gevaar bent of het gevoel hebt dat je jezelf iets zou kunnen aandoen, bel dan nu 112 of het noodnummer van het land waar je bent. Wil je op elk moment van de dag met iemand praten, neem dan contact op met een crisislijn of een lijn voor emotionele steun in jouw land. Vertel ook, als dat lukt, aan iemand die je vertrouwt hoe je je voelt."
};

export default t;
