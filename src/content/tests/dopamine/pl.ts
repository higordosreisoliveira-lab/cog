// dopamine — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Test dopaminy",
  "desc": "Sprawdź, jak wyglądają twoje nawyki związane z układem nagrody w mózgu: szybkie bodźce, nuda, ekrany i cele długoterminowe.",
  "intro": "Ten kwestionariusz przygląda się codziennym nawykom związanym z układem nagrody w mózgu. Dopamina to substancja, której mózg używa do przekazywania sygnałów, związana z motywacją i dążeniem do nagród. Ważne: mimo popularnej nazwy ten test nie mierzy dopaminy w twoim organizmie. Żaden kwestionariusz tego nie potrafi, a badania medyczne, które pozwalają ocenić dopaminę, są specjalistyczne i rzadko wykonuje się je w tym celu. Test ocenia cztery obszary nawyków: szukanie szybkich nagród, trudność ze znoszeniem nudy, motywację do celów długoterminowych i nawyki związane z ekranami. Zawiera 16 zdań. Pomyśl o ostatnich 2 tygodniach i zaznacz, jak często każda sytuacja ci się zdarzała. Odpowiadaj szczerze i bez zbytniego zastanawiania się: nie ma dobrych ani złych odpowiedzi.",
  "scale": ["Nigdy", "Rzadko", "Czasami", "Często", "Zawsze"],
  "items": [
    "Spędzam więcej czasu, niż zamierzam, na oglądaniu krótkich filmików albo przeglądaniu mediów społecznościowych.",
    "W chwilach czekania, na przykład w kolejce albo w komunikacji miejskiej, trudno mi nic nie robić.",
    "Potrafię poświęcać się jakiemuś celowi całymi tygodniami, nawet gdy efektów jeszcze nie widać.",
    "Sięgam po telefon w pierwszych minutach po przebudzeniu.",
    "Kupuję rzeczy pod wpływem impulsu, zwłaszcza w internecie, a potem zdaję sobie sprawę, że nie były mi potrzebne.",
    "Tracę cierpliwość przy powolnych albo powtarzalnych zadaniach i przerywam je przed końcem.",
    "Potrafię zrezygnować z natychmiastowej przyjemności, gdy przeszkadza w czymś ważnym dla mojej przyszłości.",
    "Siedzę na telefonie w łóżku i w końcu zasypiam później, niż zamierzam.",
    "Kiedy czuję zmęczenie albo zniechęcenie, szukam czegoś, co da natychmiastową przyjemność, na przykład czegoś słodkiego, przekąski albo filmiku.",
    "Trudno mi przeczytać długi tekst albo obejrzeć cały film, nie rozpraszając się czymś innym.",
    "Zaczynam ważne zadania o zaplanowanej porze, nie odkładając ich, żeby zająć się czymś przyjemniejszym.",
    "Odblokowuję telefon bez wyraźnego powodu, po prostu z przyzwyczajenia.",
    "Kiedy przychodzi powiadomienie, przerywam to, co robię, żeby sprawdzić, o co chodzi.",
    "Proste czynności, takie jak gotowanie czy spacer, wydają mi się nudne, jeśli jednocześnie nie mam czegoś do oglądania albo słuchania.",
    "Czuję satysfakcję z postępów w długich projektach, takich jak nauka, trening czy oszczędzanie.",
    "Korzystam z więcej niż jednego ekranu naraz, na przykład oglądam serial i jednocześnie zerkam w telefon."
  ],
  "dims": {
    "quickRewards": {
      "label": "Szybkie nagrody",
      "desc": "Mierzy, jak często sięgasz po natychmiastowe przyjemności, takie jak media społecznościowe, krótkie filmiki, powiadomienia, zakupy pod wpływem impulsu i przekąski.",
      "high": "Często sięgasz po szybkie bodźce, nierzadko po to, żeby odpocząć albo poprawić sobie nastrój. To częste i nie jest wadą: wiele z tych bodźców projektuje się właśnie po to, żeby przyciągały twoją uwagę. Warto uważać, gdy zabierają czas rzeczom, które są dla ciebie ważniejsze, albo zostawiają poczucie straconego czasu.",
      "low": "Rzadko sięgasz po natychmiastowe przyjemności i zwykle świadomie wybierasz, jak spędzić wolny czas. To pomaga utrzymać skupienie i lepiej wykorzystać chwile odpoczynku. Warto nadal obserwować dni zmęczenia, kiedy ochota na szybkie bodźce zwykle rośnie.",
      "tips": [
        "Wyłącz powiadomienia, które nie są niezbędne, i zostaw tylko te od naprawdę ważnych osób i usług.",
        "Zanim otworzysz aplikację, ustal, co chcesz w niej zrobić i na jak długo.",
        "Przy nieplanowanych zakupach w internecie odczekaj 24 godziny, zanim złożysz zamówienie."
      ]
    },
    "boredom": {
      "label": "Trudność ze znoszeniem nudy",
      "desc": "Mierzy, jak trudno ci obywać się bez bodźców, czekać albo skupić się na powolnych i powtarzalnych zadaniach.",
      "high": "Chwile czekania i powolne zadania zwykle są dla ciebie niekomfortowe, a ochota, żeby poszukać czegoś ciekawszego, pojawia się szybko. To bardzo częste przy codzienności pełnej bodźców. Tolerancję na nudę można stopniowo trenować, jak każdy inny nawyk.",
      "low": "Dobrze radzisz sobie z czekaniem, przerwami i zadaniami, które wymagają cierpliwości. To pomaga dłużej się skupiać i kończyć to, co zaczynasz. Chwile bez bodźców dają też przestrzeń, żeby umysł odpoczął i żeby pojawiły się nowe pomysły.",
      "tips": [
        "Ćwicz codziennie kilka minut bez bodźców, na przykład czekając w kolejce albo pokonując krótką trasę bez sięgania po telefon.",
        "Przy długich zadaniach pracuj w blokach po 20–25 minut, z krótkimi przerwami między nimi.",
        "Od czasu do czasu rób jedną rzecz naraz, na przykład jedz bez ekranu albo spaceruj bez słuchawek."
      ]
    },
    "longTerm": {
      "label": "Cele długoterminowe",
      "desc": "Mierzy motywację do celów, na których efekty trzeba długo czekać, takich jak nauka, trening czy oszczędzanie. Tutaj wysoki wynik oznacza większą trudność w trzymaniu się takich celów, a niski wynik większą łatwość.",
      "high": "Utrzymanie motywacji przy celach, które wymagają czasu, jest ostatnio dla ciebie trudne, zwłaszcza gdy w pobliżu są szybsze i przyjemniejsze opcje. Nie oznacza to braku możliwości: długie cele dają na początku niewiele nagród, a mózg zwykle woli to, co natychmiastowe. Podzielenie drogi na mniejsze etapy zwykle bardzo pomaga.",
      "low": "Potrafisz wytrwać w wysiłku przy celach, na których efekty trzeba długo czekać, i cenisz postępy robione krok po kroku. Ta umiejętność pomaga osiągać trwałe sukcesy w nauce, w pracy i w dbaniu o zdrowie. Warto uważać, żeby po drodze nie zaniedbywać odpoczynku i rozrywki.",
      "tips": [
        "Podziel każdy duży cel na małe etapy i nagradzaj każdy ukończony etap czymś prostym.",
        "Zapisuj swoje postępy w kalendarzu albo aplikacji, żeby widzieć, ile już udało ci się osiągnąć.",
        "Wykonuj ważne zadania o porze, w której zwykle masz najwięcej energii, zanim otworzysz media społecznościowe czy inne aplikacje."
      ]
    },
    "screens": {
      "label": "Nawyki związane z ekranami",
      "desc": "Mierzy, jakie miejsce telefon i inne ekrany zajmują w twojej codzienności: po przebudzeniu, przed snem, przy sprawdzaniu telefonu bez powodu i przy korzystaniu z kilku ekranów naraz.",
      "high": "Ekrany są obecne w wielu momentach twojego dnia, także zaraz po przebudzeniu i przed snem. To dziś częste, ale korzystanie z nich wieczorem może opóźniać i pogarszać sen, a ciągłe sprawdzanie telefonu dzieli uwagę. Małe zmiany w otoczeniu zwykle działają lepiej niż poleganie wyłącznie na silnej woli.",
      "low": "Korzystasz z ekranów bardziej świadomie i zostawiasz niektóre pory dnia wolne od nich, na przykład wczesny ranek i czas przed snem. To sprzyja snowi, koncentracji i odpoczynkowi. Warto utrzymać te granice, zwłaszcza w bardziej intensywnych okresach.",
      "tips": [
        "Na noc zostawiaj telefon poza sypialnią i używaj zwykłego budzika.",
        "Unikaj ekranów przez 30–60 minut przed snem i staraj się kłaść spać i wstawać o stałych porach.",
        "W przerwach w ciągu dnia zamień telefon na trochę ruchu, na przykład krótki spacer albo rozciąganie."
      ]
    }
  },
  "bands": {
    "balanced": {
      "label": "Równowaga",
      "text": "Twoje odpowiedzi wskazują na zrównoważoną relację z szybkimi bodźcami i ekranami. Wydaje się, że dobrze radzisz sobie z nudą i utrzymujesz motywację do celów, które wymagają czasu. Dbaj dalej o nawyki, które ci pomagają, takie jak regularny sen i chwile z dala od ekranów."
    },
    "attention": {
      "label": "Warto się przyjrzeć",
      "text": "Twoje odpowiedzi wskazują, że niektóre nawyki związane z szybkimi bodźcami zajmują już ważne miejsce w twojej codzienności. To bardzo częste i nie ma powodu do niepokoju. Sprawdź, które obszary mają najwyższe wyniki, i wybierz jedną lub dwie małe zmiany do wypróbowania w najbliższych tygodniach."
    },
    "overloaded": {
      "label": "Przeciążenie bodźcami",
      "text": "Twoje odpowiedzi wskazują, że szybkie bodźce i ekrany są bardzo obecne w twoim dniu i że czekanie, skupianie się albo trzymanie się długoterminowych celów może być teraz trudniejsze. To coraz częstsze i może się zmienić dzięki stopniowym zmianom nawyków, bez radykalnych cięć. Zacznij od ograniczenia nadmiaru bodźców w jednym lub dwóch momentach dnia, na przykład po przebudzeniu i przed snem, i obserwuj, jak się czujesz."
    }
  },
  "resultTitle": "Twoje nawyki związane z nagrodą",
  "resultIntro": "Wynik sumuje cztery obszary i pokazuje, na ile twoje obecne nawyki zależą od szybkich bodźców. Pamiętaj: nie mierzy on dopaminy w twoim organizmie, tylko wzorce zachowań, które mogą się zmieniać z czasem i dzięki praktyce.",
  "note": "Ten test to narzędzie do lepszego poznania siebie, oparte na twoich własnych odpowiedziach. Nie mierzy dopaminy ani żadnej innej substancji w organizmie, nie jest badaniem medycznym i nie służy do diagnozy. Ograniczenie nadmiaru bodźców może pomóc jako zmiana nawyków, ale nie jest leczeniem. Jeśli jakiś nawyk wydaje się wymykać spod twojej kontroli albo szkodzi ci w życiu, porozmawiaj z lekarzem lub innym specjalistą.",
  "help": "Jeśli czujesz, że nie potrafisz kontrolować korzystania z telefonu, gier wideo, zakładów i hazardu albo zakupów, lub jeśli wpływa to na twój sen, pracę, finanse czy relacje, zwróć się do psychologa albo lekarza. W przypadku kompulsywnego grania, hazardu czy zakupów istnieją też specjalistyczne poradnie i grupy wsparcia, które mogą pomóc."
};

export default t;
