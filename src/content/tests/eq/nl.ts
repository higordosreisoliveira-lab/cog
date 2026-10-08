import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Emotionele intelligentie",
  "desc": "Ontdek hoe je in het dagelijks leven je eigen emoties en die van anderen herkent en ermee omgaat.",
  "intro": "Deze vragenlijst kijkt naar vier gebieden van emotionele intelligentie: zelfbewustzijn, zelfbeheersing, empathie en sociale vaardigheden. Je krijgt 24 uitspraken over alledaagse situaties. Geef bij elke uitspraak aan hoe goed die beschrijft hoe je meestal handelt, niet hoe je vindt dat je zou moeten handelen. Er zijn geen goede antwoorden: hoe eerlijker je antwoordt, hoe nuttiger de uitslag.",
  "scale": [
    "Helemaal oneens",
    "Oneens",
    "Neutraal",
    "Eens",
    "Helemaal eens"
  ],
  "items": [
    "Ik kan benoemen wat ik voel, ook als het een mengeling van emoties is.",
    "Als ik boos word, kan ik even wachten voordat ik reageer.",
    "Ik merk het als iemand van streek is, ook als die persoon niets zegt.",
    "Ik kan meningsverschillen oplossen zonder dat het gesprek uitloopt op ruzie.",
    "Vaak besef ik pas wat ik voelde als de situatie al voorbij is.",
    "Bij discussies zeg ik dingen waar ik later spijt van heb.",
    "Voordat ik iemand veroordeel, probeer ik te begrijpen wat die persoon doormaakt.",
    "Ik ga moeilijke gesprekken uit de weg, ook als ze nodig zijn.",
    "Ik merk het als mijn stemming mijn beslissingen beïnvloedt.",
    "Na een slechte dag kan ik tot rust komen zonder het op anderen af te reageren.",
    "Ik vind het moeilijk te begrijpen waarom sommige mensen zo heftig reageren.",
    "Ik kan een verzoek op een vastberaden en beleefde manier weigeren.",
    "Ik weet welke situaties me meestal op de kast jagen.",
    "Als ik kritiek krijg, luister ik tot het einde voordat ik me verdedig.",
    "Als iemand me over een probleem vertelt, luister ik aandachtig in plaats van alvast te bedenken wat ik ga zeggen.",
    "Als ik in een groep werk, help ik mensen om het met elkaar eens te worden.",
    "Ik vind het moeilijk om uit te leggen wat ik voel.",
    "Als er iets misgaat, blijf ik er lang over malen.",
    "Ik voel meestal meteen de sfeer aan als ik ergens binnenkom.",
    "Op nieuwe plekken vind ik het moeilijk om op mensen af te stappen.",
    "Ik merk signalen in mijn lichaam, zoals spanning of vermoeidheid, als iets me raakt.",
    "Ik kan me concentreren op wat ik moet doen, ook op een emotioneel zware dag.",
    "Als iemand er anders over denkt dan ik, heb ik weinig geduld om naar de redenen te luisteren.",
    "Ik kan een probleem in iemands werk aankaarten zonder dat die persoon zich aangevallen voelt."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Zelfbewustzijn",
      "desc": "Merken en benoemen wat je voelt, begrijpen waar die emoties vandaan komen en hoe ze je gedrag beïnvloeden.",
      "high": "Je merkt meestal wat je voelt en waarom, vaak al voordat je reageert. Dat helpt je om bewustere beslissingen te nemen en anderen uit te leggen wat je nodig hebt. Het aandachtspunt is dat je elke emotie te veel analyseert in plaats van verder te gaan.",
      "low": "Je richt je meestal meer op wat er moet gebeuren dan op wat je voelt, en dat helpt je om praktisch te handelen. Het aandachtspunt is dat je emoties pas opmerkt als de situatie voorbij is, wanneer ze je gedrag al hebben beïnvloed.",
      "tips": [
        "Sta een paar keer per dag een paar seconden stil en vraag je af: wat voel ik nu?",
        "Zeg niet alleen dat je je \"slecht\" voelt, maar probeer te herkennen of het vermoeidheid, frustratie, verdriet of onrust is.",
        "Schrijf situaties op die je raakten en wat er vlak daarvoor gebeurde."
      ]
    },
    "selfRegulation": {
      "label": "Zelfbeheersing",
      "desc": "Omgaan met sterke emoties zonder impulsief te handelen, weer tot rust komen en gefocust blijven, ook op moeilijke dagen.",
      "high": "Je kunt boosheid, frustratie of onrust voelen zonder dat ze je gedrag gaan bepalen. Dat wekt vertrouwen en voorkomt onnodige conflicten. Het aandachtspunt is dat je emoties opkropt die eigenlijk uitgesproken moeten worden, waardoor spanning zich kan opstapelen.",
      "low": "Je reageert snel en intens, en mensen weten meestal precies wat je voelt. Die spontaniteit kan oprecht en energiek zijn. Het aandachtspunt zijn reacties in het heetst van de strijd, die soms tot spijt leiden of relaties onder druk zetten.",
      "tips": [
        "Als je de emotie voelt opkomen, neem dan een korte pauze, adem diep in en reageer pas daarna.",
        "Neem geen belangrijke beslissingen en verstuur geen belangrijke berichten als je erg boos bent.",
        "Zorg voor een vaste uitlaatklep, zoals sporten, een wandeling of een gesprek met iemand die je vertrouwt."
      ]
    },
    "empathy": {
      "label": "Empathie",
      "desc": "Aanvoelen wat anderen voelen en hun standpunt begrijpen, ook als dat anders is dan het jouwe.",
      "high": "Je voelt de sfeer in een ruimte en de gevoelens van mensen makkelijk aan, ook zonder woorden. Daardoor voelen mensen zich bij jou begrepen. Het aandachtspunt is dat je de emoties van anderen zo sterk overneemt dat je uitgeput raakt.",
      "low": "Je richt je meestal meer op de feiten en het probleem zelf dan op de emoties die meespelen. Dat helpt je om objectief te blijven in gevoelige situaties. Het aandachtspunt is dat je signalen mist dat iemand steun nodig heeft, of onbedoeld afstandelijk overkomt.",
      "tips": [
        "Herhaal in belangrijke gesprekken in je eigen woorden wat je hebt begrepen voordat je reageert.",
        "Vraag \"hoe voel je je daarbij?\" voordat je meteen met oplossingen komt.",
        "Let op gezichtsuitdrukkingen, toon en stiltes, niet alleen op wat er gezegd wordt."
      ]
    },
    "social": {
      "label": "Sociale vaardigheden",
      "desc": "Helder communiceren, conflicten oplossen, samenwerken en goede relaties opbouwen, op het werk en privé.",
      "high": "Je gaat goed om met moeilijke gesprekken, durft een standpunt in te nemen en helpt groepen om het eens te worden. Daarom komen mensen vaak naar jou als er iets opgelost moet worden. Het aandachtspunt is dat je het oplossen van alle conflicten op je neemt, wat al snel te veel wordt.",
      "low": "Je vermijdt liever wrijving en voelt je het meest op je gemak bij mensen die je goed kent. Dat zorgt meestal voor rustige relaties en weinig ruzie. Het aandachtspunt is dat je nodige gesprekken uitstelt, waardoor problemen groter worden of je eigen behoeften onbeantwoord blijven.",
      "tips": [
        "Bespreek bij lastige feedback het gedrag en het effect ervan, niet de persoon.",
        "Oefen met nee zeggen in een korte, beleefde zin, zonder lange uitleg.",
        "Stel in een nieuwe omgeving een eenvoudige vraag om een gesprek te beginnen: mensen praten graag over wat ze doen."
      ]
    }
  },
  "resultTitle": "Jouw profiel voor emotionele intelligentie",
  "resultIntro": "Hier zie je je score op elk gebied. Deze vaardigheden ontwikkel je door te oefenen, dus gebruik de uitslag als startpunt, niet als etiket.",
  "note": "Deze vragenlijst is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen inschatting. Het is geen gevalideerde psychologische test en vervangt geen beoordeling door een professional."
};

export default t;
