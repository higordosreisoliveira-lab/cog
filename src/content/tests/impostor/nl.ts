// impostor — Dutch translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Impostersyndroom',
  desc: 'Bekijk hoe vaak je twijfelt aan je eigen prestaties, bang bent dat anderen je tekortkomingen opmerken en te veel van jezelf eist op het werk en in je studie.',
  intro:
    'Het impostersyndroom is het gevoel dat je niet verdient wat je hebt bereikt en dat iemand daar vroeg of laat achter zal komen. Het is een heel gewone ervaring, ook onder bekwame en succesvolle mensen, en het is geen diagnose of psychische stoornis. Deze vragenlijst kijkt naar drie manieren waarop het zich meestal laat zien: succes toeschrijven aan geluk, bang zijn om "ontmaskerd" te worden en perfectionistisch veel van jezelf eisen. Je krijgt 15 situaties uit werk en studie. Denk aan de afgelopen maanden en geef aan hoe vaak elke situatie bij jou voorkomt. Hoort een situatie niet bij jouw dagelijks leven, antwoord dan op basis van iets vergelijkbaars dat je hebt meegemaakt. Er zijn geen goede of foute antwoorden.',
  scale: ['Nooit', 'Zelden', 'Soms', 'Vaak', 'Altijd'],
  items: [
    'Als ik slaag voor een moeilijk examen, denk ik dat ik geluk had en dat net de vragen erin zaten die ik wist.',
    'In een vergadering of les stel ik een vraag niet, zodat niemand merkt wat ik nog niet weet.',
    'Ik lees een eenvoudige e-mail meerdere keren over voordat ik hem verstuur, uit angst dat ik een fout over het hoofd zie.',
    'Als ik een baan, beurs of promotie krijg, denk ik dat het kwam doordat er weinig kandidaten waren of doordat iemand me heeft geholpen.',
    'In de eerste weken van een nieuwe baan of opleiding heb ik het gevoel dat ze snel zullen merken dat ze de verkeerde persoon hebben gekozen.',
    'Na een presentatie die goed ging, denk ik urenlang na over dat ene stukje waar ik even de draad kwijt was.',
    'Als een project waaraan ik heb gewerkt slaagt, verklaar ik het resultaat door de inzet van het team of door goede timing, en niet door wat ik heb gedaan.',
    'Als mijn leidinggevende of docent me apart wil spreken, is mijn eerste gedachte dat ze hebben gemerkt dat ik het niet aankan.',
    'Ik houd af werk langer bij me dan nodig is, omdat ik het gevoel heb dat het nog niet goed genoeg is om te laten zien.',
    'Als ik een hoog cijfer of een goede beoordeling krijg, denk ik dat degene die me beoordeelde die dag gul was.',
    'Voordat ik werk presenteer, stel ik me voor dat iemand een vraag stelt waaruit blijkt dat ik minder weet dan mensen denken.',
    'Als ik een goed cijfer haal, maar niet het hoogste, blijf ik malen over de punten die ik ben kwijtgeraakt in plaats van het resultaat te vieren.',
    'Als ik een probleem oplos waar het team op vastliep, denk ik dat het toeval was, en niet dat ik wist wat ik deed.',
    'Als iemand me voorstelt als expert op een bepaald gebied, voel ik me ongemakkelijk, alsof ik mensen voor de gek houd.',
    'Als ik een kleine fout maak, zoals een bijlage vergeten of een verkeerd getal intypen, ben ik de rest van de dag hard voor mezelf.',
  ],
  dims: {
    luck: {
      label: 'Succes toeschrijven aan geluk',
      desc: 'Meet in hoeverre je je prestaties verklaart door externe factoren, zoals geluk, hulp van anderen of gunstige omstandigheden, in plaats van je eigen inzet en kunnen te erkennen.',
      high: 'Als iets goed gaat, schrijf je het resultaat meestal toe aan geluk, aan het moment of aan anderen. Dat kan bescheiden lijken, maar op den duur zorgt het ervoor dat je je eigen vaardigheden niet ziet en dat elke nieuwe prestatie als toeval voelt. Je eigen aandeel erkennen is geen arrogantie: het is een nauwkeuriger beeld van wat er gebeurde.',
      low: 'Je erkent meestal de rol van je eigen inzet en kunnen bij wat je bereikt, zonder de hulp die je kreeg te vergeten. Dat helpt je om vertrouwen op te bouwen dat op feiten berust en om nieuwe uitdagingen zekerder aan te gaan. Blijf letten op wat werkte en waarom.',
      tips: [
        'Houd een succesdossier bij: noteer resultaten, complimenten en problemen die je hebt opgelost, met data en details, en lees het terug als de twijfel opkomt.',
        'Zet na een goed resultaat op een rij wat je hebt gedaan om daar te komen, zoals studie-uren, beslissingen en vaardigheden die je inzette, voordat je aan geluk denkt.',
        'Als je een compliment krijgt, probeer dan alleen te bedanken, zonder kleiner te maken wat je hebt gedaan of de verdienste naar iemand anders door te schuiven.',
      ],
    },
    fear: {
      label: 'Angst om ontmaskerd te worden',
      desc: 'Meet de zorg dat mensen zullen merken dat je niet zo bekwaam bent als je lijkt, en in hoeverre die angst bepaalt wat je wel of niet doet.',
      high: 'Je hebt vaak het gevoel dat je mensen misleidt en dat iemand het elk moment kan doorzien. Die angst kan ertoe leiden dat je vragen vermijdt, kansen afslaat of veel te hard werkt zodat niemand je twijfels opmerkt. Het is goed om te onthouden dat niemand alles weet, en dat toegeven dat je iets niet zeker weet meestal meer vertrouwen wekt dan wantrouwen.',
      low: 'Je voelt je op je gemak op de plek die je inneemt en leeft niet met het gevoel dat iemand een verborgen tekortkoming gaat ontdekken. Dat maakt het makkelijker om vragen te stellen, om hulp te vragen en nieuwe uitdagingen aan te nemen. Die zekerheid helpt ook collega\'s die net beginnen om zich meer op hun gemak te voelen.',
      tips: [
        'Praat erover met collega\'s die je vertrouwt: vaak blijkt dat velen hetzelfde voelen, ook mensen die je bewondert.',
        'Stel in vergaderingen of lessen minstens één vraag per week en kijk hoe mensen echt reageren.',
        'Als de angst opkomt, vraag jezelf dan welk concreet bewijs er is dat je het niet kunt, en vergelijk dat met het bewijs voor het tegendeel.',
      ],
    },
    perfection: {
      label: 'Perfectionisme en zelfkritiek',
      desc: 'Meet hoeveel je van jezelf eist om geen fouten te maken, hoe vaak je dingen overdreven controleert en hoe hard je jezelf bekritiseert als iets niet perfect gaat.',
      high: 'Je legt de lat meestal heel hoog en bent hard voor jezelf als je die niet haalt, zelfs bij kleine details. Die zorgvuldigheid kan werk van goede kwaliteit opleveren, maar ook vermoeidheid, vertraging en het gevoel dat niets ooit goed genoeg is. Normen hebben is gezond; de uitdaging is ze los te zien van de eis van perfectie.',
      low: 'Je vindt de kwaliteit van je werk belangrijk, maar accepteert dat fouten en onvolkomenheden bij het proces horen. Dat helpt je om op tijd te leveren, van misstappen te leren en je energie op peil te houden. Let er alleen op dat die rust niet omslaat in slordigheid bij taken die meer aandacht vragen.',
      tips: [
        'Bepaal voordat je aan een taak begint wat "klaar" daarvoor betekent, en stop met controleren zodra je dat punt bereikt.',
        'Maak onderscheid tussen normen en perfectie: vraag je af of het detail dat je dwarszit echt verschil zou maken voor degene die het werk ontvangt.',
        'Als je een fout maakt, praat dan tegen jezelf zoals je tegen een collega in dezelfde situatie zou praten: erken de fout, kijk wat je kunt herstellen en ga verder.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Weinig signalen',
      text: 'Je antwoorden wijzen op weinig signalen van het impostersyndroom. Je lijkt je prestaties te erkennen en met fouten om te gaan zonder te veel van jezelf te eisen. Toch is het normaal dat dit gevoel opkomt in periodes van verandering, zoals een nieuwe baan, een promotie of het begin van een opleiding.',
    },
    some: {
      label: 'Enkele signalen',
      text: 'Je antwoorden wijzen erop dat het impostergevoel in sommige situaties opkomt, wat heel gewoon is. Het wordt meestal sterker op momenten waarop je in de schijnwerpers staat of voor nieuwe uitdagingen staat. Kijk welk van de drie gebieden het hoogst scoorde en begin met de tips daarvan.',
    },
    strong: {
      label: 'Sterke signalen',
      text: 'Je antwoorden wijzen erop dat het impostergevoel sterk aanwezig is in je werk of studie. Steeds twijfelen aan je eigen prestaties, bang zijn dat anderen je tekortkomingen opmerken en voortdurend veel van jezelf eisen is vermoeiend, en niets daarvan zegt hoe bekwaam je echt bent. Probeer de praktische tips en overweeg een gesprek met een professional als dit gevoel je veel last bezorgt.',
    },
  },
  resultTitle: 'Hoe het impostersyndroom zich bij jou laat zien',
  resultIntro:
    'De uitslag telt de drie gebieden bij elkaar op en laat zien hoe sterk het impostergevoel op dit moment aanwezig is in je werk of studie. Het meet niet hoe bekwaam je bent: veel heel capabele mensen scoren hoog. Hieronder zie je hoe elk gebied in je antwoorden naar voren kwam.',
  note: 'Deze test is een hulpmiddel voor zelfinzicht, gebaseerd op je eigen antwoorden. Het impostersyndroom is geen medische diagnose of psychische stoornis, en deze uitslag vervangt geen beoordeling door een psycholoog. Het impostergevoel verandert ook met de tijd, de omstandigheden en oefening.',
  help: 'Als het impostergevoel je vaak verdriet, angst of uitputting bezorgt, of als je er kansen door afslaat, uitdagingen uit de weg gaat of vastloopt in je loopbaan of studie, kan een gesprek met een psycholoog helpen. Therapie biedt handvatten om met zelfkritiek om te gaan en een realistischer zelfvertrouwen op te bouwen.',
};

export default t;
