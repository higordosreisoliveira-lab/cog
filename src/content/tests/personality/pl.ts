import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Profil osobowości",
  "desc": "Sprawdź, jak wypadasz w pięciu wielkich cechach osobowości, opisanych w jednym z najlepiej zbadanych modeli psychologii.",
  "intro": "Ten kwestionariusz mierzy pięć ogólnych cech osobowości: otwartość na doświadczenia, sumienność, ekstrawersję, ugodowość i stabilność emocjonalną. 50 stwierdzeń zaadaptowano z IPIP, ogólnodostępnej bazy pozycji testowych używanej w badaniach naukowych. Przy każdym stwierdzeniu zaznacz, na ile pasuje ono do ciebie obecnie, a nie do osoby, którą chcesz być. Nie ma dobrych ani złych odpowiedzi, a żadna cecha nie jest lepsza od innej. Odpowiadaj szczerze i bez długiego zastanawiania się: pierwsze wrażenie jest zwykle najtrafniejsze.",
  "scale": [
    "Zdecydowanie się nie zgadzam",
    "Nie zgadzam się",
    "Ani tak, ani nie",
    "Zgadzam się",
    "Zdecydowanie się zgadzam"
  ],
  "items": [
    "Jestem duszą towarzystwa.",
    "Niewiele obchodzą mnie inni ludzie.",
    "Zawsze przygotowuję się zawczasu.",
    "Łatwo się stresuję.",
    "Mam bogate słownictwo.",
    "Nie mówię dużo.",
    "Interesuję się ludźmi.",
    "Zostawiam swoje rzeczy, gdzie popadnie.",
    "Przez większość czasu zachowuję spokój.",
    "Mam trudności ze zrozumieniem abstrakcyjnych idei.",
    "Dobrze się czuję wśród ludzi.",
    "Robię uwagi, które obrażają innych.",
    "Zwracam uwagę na szczegóły.",
    "Często się czymś martwię.",
    "Mam bujną wyobraźnię.",
    "Wolę pozostawać w cieniu.",
    "Obchodzi mnie, co czują inni.",
    "Zwykle robię wokół siebie bałagan.",
    "Rzadko miewam chandrę.",
    "Abstrakcyjne idee mnie nie interesują.",
    "Zwykle to ja zaczynam rozmowę.",
    "Problemy innych mnie nie interesują.",
    "Wykonuję swoje obowiązki od razu, bez odkładania na później.",
    "Łatwo wytrącić mnie z równowagi.",
    "Mam świetne pomysły.",
    "Zwykle niewiele mam do powiedzenia.",
    "Mam miękkie serce.",
    "Często zapominam odkładać rzeczy na miejsce.",
    "Łatwo się denerwuję.",
    "Nie mam zbyt bogatej wyobraźni.",
    "Na imprezach rozmawiam z wieloma różnymi osobami.",
    "Tak naprawdę niezbyt interesuję się innymi.",
    "Lubię porządek.",
    "Mój nastrój często się zmienia.",
    "Szybko rozumiem, o co chodzi.",
    "Nie lubię zwracać na siebie uwagi.",
    "Znajduję czas, by pomagać innym.",
    "Uchylam się od swoich obowiązków.",
    "Często miewam wahania nastroju.",
    "Używam trudnych słów.",
    "Nie przeszkadza mi bycie w centrum uwagi.",
    "Wyczuwam emocje innych ludzi.",
    "Trzymam się zaplanowanego rozkładu dnia.",
    "Łatwo się irytuję.",
    "Poświęcam czas na rozmyślanie o różnych sprawach.",
    "Przy obcych ludziach mało mówię.",
    "Sprawiam, że ludzie czują się przy mnie swobodnie.",
    "Mam wysokie wymagania co do jakości swojej pracy.",
    "Często miewam chandrę.",
    "Zawsze mam głowę pełną pomysłów."
  ],
  "dims": {
    "openness": {
      "label": "Otwartość na doświadczenia",
      "desc": "Mierzy ciekawość, wyobraźnię i zainteresowanie nowymi, abstrakcyjnymi lub nietypowymi pomysłami.",
      "high": "Lubisz zgłębiać idee, uczyć się nowych rzeczy i wyobrażać sobie różne możliwości. To pomaga wymyślać oryginalne rozwiązania i dostosowywać się do zmian. Warto uważać, żeby nie rozpraszać się między wieloma zainteresowaniami i nie zostawiać projektów w połowie.",
      "low": "Wolisz to, co konkretne, znane i sprawdzone w praktyce. Daje ci to skupienie, zdrowy rozsądek i skuteczność w codziennych zadaniach. Warto uważać, żeby nie odrzucać nowych pomysłów zbyt wcześnie, zanim zrozumiesz, co mogą wnieść.",
      "tips": [
        "Od czasu do czasu spróbuj czegoś nowego, na przykład książki z innego gatunku albo innej drogi do domu.",
        "Gdy trafisz na nietypowy pomysł, zanim zdecydujesz, zapytaj siebie: „co tu może być przydatnego?”.",
        "Jeśli masz wiele zainteresowań, wybierz jedno naraz i doprowadź je do końca."
      ]
    },
    "conscientiousness": {
      "label": "Sumienność",
      "desc": "Mierzy, na ile planujesz, dotrzymujesz zobowiązań i dbasz o szczegóły, czyli twoją dyscyplinę i poczucie odpowiedzialności.",
      "high": "Zwykle planujesz, dotrzymujesz terminów i dbasz o szczegóły, a inni wiedzą, że mogą na tobie polegać. Warto uważać na zbyt wysokie wymagania wobec siebie: perfekcjonizm i trudność w radzeniu sobie z niespodziankami mogą męczyć.",
      "low": "Do zadań podchodzisz elastycznie i spontanicznie, bez przywiązywania się do sztywnych planów. To pomaga improwizować i dostosowywać się, gdy coś się zmienia. Warto uważać, żeby nie odkładać ważnych spraw na ostatnią chwilę i nie tracić z oczu terminów.",
      "tips": [
        "Dziel duże zadania na małe kroki i każdemu wyznacz termin.",
        "Korzystaj z prostej listy albo kalendarza i przeglądaj je na początku dnia.",
        "Zanim zaczniesz, ustal, co będzie „wystarczająco dobre”, żeby nie utknąć w perfekcjonizmie."
      ]
    },
    "extraversion": {
      "label": "Ekstrawersja",
      "desc": "Mierzy, na ile szukasz towarzystwa innych ludzi, rozmów i gwarnych miejsc oraz na ile to dodaje ci energii.",
      "high": "Zyskujesz energię w towarzystwie ludzi, łatwo zaczynasz rozmowy i dobrze czujesz się w gwarnych miejscach. To pomaga budować relacje i występować publicznie. Wyzwaniem może być mówienie więcej niż słuchanie albo zadania, które wymagają czasu w samotności.",
      "low": "Wolisz małe grupy, głębsze rozmowy i chwile ciszy, które pozwalają naładować baterie. To sprzyja koncentracji, słuchaniu i namysłowi przed działaniem. Warto uważać, żeby nie ukrywać swoich pomysłów i swojej pracy tylko dlatego, że nie chcesz zwracać na siebie uwagi.",
      "tips": [
        "Zauważ, co cię ładuje, przebywanie z ludźmi czy czas w samotności, i rezerwuj na to czas.",
        "Jeśli na spotkaniach mówisz dużo, zadaj pytanie, zanim podasz swoją opinię; jeśli mówisz mało, spróbuj podzielić się przynajmniej jednym pomysłem.",
        "Bycie osobą powściągliwą to nie to samo co nieśmiałość: można lubić ciszę i świetnie się komunikować."
      ]
    },
    "agreeableness": {
      "label": "Ugodowość",
      "desc": "Mierzy, na ile troszczysz się o innych, ufasz ludziom i wolisz współpracować niż rywalizować.",
      "high": "Jesteś osobą troskliwą, życzliwą i chętną do pomocy. Dzięki temu budujesz relacje oparte na zaufaniu i dobrą atmosferę wokół siebie. Wyzwaniem może być stawianie potrzeb innych zawsze przed własnymi i trudność z mówieniem „nie”.",
      "low": "Zwykle jesteś osobą bezpośrednią, rzeczową i krytyczną, która nie boi się wyrażać sprzeciwu. To pomaga negocjować, bronić swojego zdania i podejmować trudne decyzje. Warto uważać, żeby nie brzmieć nieumyślnie szorstko i nie zrażać ludzi, którzy mogliby z tobą współpracować.",
      "tips": [
        "Zanim się z kimś nie zgodzisz, pokaż, że rozumiesz punkt widzenia tej osoby.",
        "Ćwicz uprzejme odmawianie próśb, które przeszkadzają w realizacji twoich priorytetów.",
        "Pamiętaj, że życzliwość i stanowczość mogą iść w parze."
      ]
    },
    "stability": {
      "label": "Stabilność emocjonalna",
      "desc": "Mierzy, na ile zachowujesz spokój w obliczu presji, zmartwień i frustracji. Wysoki wynik oznacza więcej spokoju ducha, a niski większą wrażliwość na stres.",
      "high": "Zwykle zachowujesz spokój pod presją i szybko dochodzisz do siebie po niepowodzeniach. To daje innym poczucie bezpieczeństwa i pomaga jasno myśleć w trudnych chwilach. Warto uważać, żeby nie bagatelizować prawdziwych problemów i nie przeoczyć chwili, gdy ktoś bliski cierpi.",
      "low": "Intensywnie przeżywasz emocje i dostrzegasz zagrożenia i problemy wcześniej niż wiele osób. Ta wrażliwość pomaga się przygotować i traktować sprawy poważnie. Warto uważać na zmęczenie: częste zmartwienia i stres wyczerpują, dlatego dobrze mieć sposoby, by sobie z nimi radzić.",
      "tips": [
        "Dbaj o podstawy: sen, jedzenie i ruch mają wpływ na nastrój.",
        "Gdy pojawia się zmartwienie, zapisz, o czym myślisz i jaki mógłby być następny możliwy krok.",
        "Jeśli stres albo smutek przeszkadzają ci w codziennym życiu, porozmawiaj ze specjalistą od zdrowia psychicznego."
      ]
    }
  },
  "resultTitle": "Twój profil osobowości",
  "resultIntro": "Każdy pasek pokazuje, gdzie znajdujesz się między dwoma biegunami danej cechy. Wysoki ani niski wynik nie jest ani dobry, ani zły: każdy biegun ma swoje zalety i rzeczy, na które warto uważać.",
  "note": "Ten wynik to narzędzie do lepszego poznania siebie, oparte na twoich własnych odpowiedziach. Nie jest diagnozą i nie zastąpi oceny psychologa. Osobowość zmienia się też w ciągu życia i zależnie od sytuacji."
};

export default t;
