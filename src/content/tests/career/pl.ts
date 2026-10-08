import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Zainteresowania zawodowe",
  "desc": "Sprawdź, jakie rodzaje zajęć najbardziej do ciebie pasują, i poznaj zawody związane z twoimi zainteresowaniami.",
  "intro": "Ten kwestionariusz opiera się na modelu Hollanda, który dzieli zainteresowania zawodowe na sześć typów: praktyczny, badawczy, artystyczny, społeczny, przedsiębiorczy i organizacyjny. Zawiera 36 czynności. Przy każdej zaznacz, na ile by ci się podobała, nie myśląc o zarobkach, wykształceniu ani o tym, czy już to umiesz. Nie ma dobrych odpowiedzi: chodzi o to, żeby sprawdzić, co budzi twoje zainteresowanie.",
  "scale": [
    "Zdecydowanie się nie zgadzam",
    "Nie zgadzam się",
    "Ani tak, ani nie",
    "Zgadzam się",
    "Zdecydowanie się zgadzam"
  ],
  "items": [
    "Podobałoby mi się ustalanie, dlaczego jakieś urządzenie przestało działać, i naprawianie go.",
    "Podobałoby mi się przeprowadzanie eksperymentów, które sprawdzają, czy jakiś pomysł działa w praktyce.",
    "Podobałoby mi się pisanie opowiadań, scenariuszy lub tekstów piosenek.",
    "Podobałoby mi się uczenie grupy osób czegoś nowego.",
    "Podobałoby mi się założenie i prowadzenie własnej firmy.",
    "Podobałoby mi się porządkowanie arkuszy kalkulacyjnych, plików i dokumentacji tak, żeby wszystko łatwo było znaleźć.",
    "Podobałoby mi się budowanie lub składanie różnych rzeczy własnymi rękami.",
    "Podobałoby mi się analizowanie danych, żeby znaleźć przyczynę problemu.",
    "Podobałoby mi się tworzenie identyfikacji wizualnej marki, na przykład logo i kolorystyki.",
    "Podobałoby mi się wysłuchiwanie i wspieranie radą osób, które przechodzą trudny okres.",
    "Podobałoby mi się negocjowanie z klientami i finalizowanie sprzedaży.",
    "Podobałoby mi się pilnowanie należności i zobowiązań firmy.",
    "Podobałaby mi się praca na świeżym powietrzu, na przykład na budowie, w gospodarstwie rolnym albo w parku.",
    "Podobałoby mi się badanie, jak działa ludzkie ciało i inne organizmy.",
    "Podobałoby mi się występowanie na scenie: śpiewanie, granie na instrumencie albo aktorstwo.",
    "Podobałoby mi się dbanie o zdrowie i samopoczucie innych ludzi.",
    "Podobałoby mi się kierowanie zespołem, który ma osiągnąć wyznaczony cel.",
    "Podobałoby mi się uważne sprawdzanie dokumentów, żeby nie było w nich błędów.",
    "Podobałaby mi się obsługa maszyn, pojazdów lub precyzyjnych narzędzi.",
    "Podobałoby mi się dogłębne poznawanie tego, jak działa nowa technologia.",
    "Podobałoby mi się robienie zdjęć lub filmów, a potem ich obróbka.",
    "Podobałoby mi się wspieranie rozwoju dzieci lub młodzieży.",
    "Podobałoby mi się przedstawianie pomysłu inwestorom lub zarządowi firmy, żeby ich przekonać.",
    "Podobałaby mi się kontrola stanów magazynowych, zamówień i terminów dostaw.",
    "Podobałaby mi się codzienna opieka nad roślinami lub zwierzętami.",
    "Podobałoby mi się czytanie badań naukowych i wyciąganie z nich własnych wniosków.",
    "Podobałoby mi się projektowanie ubrań, przedmiotów lub wystroju wnętrz.",
    "Podobałoby mi się pomaganie ludziom w rozwiązywaniu konfliktów i lepszym rozumieniu się nawzajem.",
    "Podobałoby mi się opracowywanie strategii, które pomogą produktowi zdobyć rynek.",
    "Podobałoby mi się sprawdzanie, czy firma przestrzega przepisów i norm.",
    "Podobałoby mi się wykonywanie instalacji elektrycznej lub hydraulicznej w budynku.",
    "Podobałoby mi się rozwiązywanie złożonych problemów matematycznych lub logicznych.",
    "Podobałoby mi się wymyślanie oryginalnych pomysłów na kampanię lub projekt kreatywny.",
    "Podobałby mi się udział w projektach, które pomagają mojej lokalnej społeczności.",
    "Podobałoby mi się podejmowanie ważnych decyzji, nawet jeśli wiąże się to z ryzykiem.",
    "Podobałoby mi się organizowanie kalendarza i codziennej pracy biura."
  ],
  "dims": {
    "realistic": {
      "label": "Praktyczny",
      "desc": "Zainteresowanie konkretnymi czynnościami: pracą rękami, narzędziami i maszynami, budowaniem, naprawianiem i pracą na świeżym powietrzu.",
      "high": "Lubisz widzieć konkretne efekty i rozwiązywać problemy własnymi rękami. Zwykle motywują cię miejsca, w których zadania są jasne i praktyczne. Pamiętaj, że wiele z tych zawodów wymaga też nauki technicznej i ciągłego doszkalania się.",
      "low": "Prace ręczne, techniczne czy na świeżym powietrzu mniej cię interesują. Prawdopodobnie swobodniej czujesz się, pracując z ideami, ludźmi lub informacjami. Mimo to kilka podstawowych umiejętności praktycznych przydaje się w każdej dziedzinie.",
      "tips": [
        "Zapisz się na krótki kurs jakiejś umiejętności manualnej lub technicznej, żeby sprawdzić swoje zainteresowanie.",
        "Porozmawiaj z osobami z branży o tym, jak naprawdę wygląda ich codzienna praca.",
        "Rozważ szkołę branżową lub kurs zawodowy, które często są szybką drogą do tych zawodów."
      ],
      "examples": [
        "Budownictwo",
        "Mechanika i budowa maszyn",
        "Instalacje elektryczne",
        "Rolnictwo",
        "Pilotaż lotniczy",
        "Gastronomia",
        "Stolarstwo",
        "Utrzymanie ruchu"
      ]
    },
    "investigative": {
      "label": "Badawczy",
      "desc": "Zainteresowanie obserwowaniem, badaniem, analizowaniem i rozumieniem, jak działają różne rzeczy, w nauce, technologii czy medycynie.",
      "high": "Lubisz trudne pytania, szukanie przyczyn i dogłębne rozumienie różnych spraw. Zwykle motywują cię miejsca, które cenią myślenie i samodzielność. Warto uważać, żeby nie zatracić się w analizie i nie zwlekać z przejściem do działania.",
      "low": "Badania, analiza danych i teorie mniej cię interesują. Prawdopodobnie wolisz stosować gotowe rozwiązania niż długo badać problem. Mimo to umiejętność szukania wiarygodnych informacji przydaje się w każdym zawodzie.",
      "tips": [
        "Śledź materiały popularnonaukowe na tematy, które cię ciekawią.",
        "Weź udział w projekcie badawczym, olimpiadzie przedmiotowej albo kursie online.",
        "Spróbuj przeanalizować prawdziwe dane w arkuszu kalkulacyjnym, żeby sprawdzić, czy takie zadania ci odpowiadają."
      ],
      "examples": [
        "Medycyna",
        "Biologia",
        "Analityka danych",
        "Chemia",
        "Farmacja",
        "Programowanie",
        "Badania naukowe",
        "Geologia"
      ]
    },
    "artistic": {
      "label": "Artystyczny",
      "desc": "Zainteresowanie tworzeniem, wyrażaniem siebie i pracą z oryginalnymi pomysłami: obrazem, słowem, muzyką, ruchem czy designem.",
      "high": "Lubisz tworzyć, wyobrażać sobie i nadawać kształt własnym pomysłom. Zwykle motywują cię miejsca, które dają swobodę, różnorodność i przestrzeń dla oryginalności. Wyzwaniem mogą być terminy, zasady i powtarzalne elementy, które ma też każda praca twórcza.",
      "low": "Działania artystyczne i wyrażanie siebie mniej cię interesują. Prawdopodobnie wolisz jasne cele i bardziej przewidywalne rezultaty. Kreatywność przejawia się jednak także w sposobie rozwiązywania problemów, w każdej dziedzinie.",
      "tips": [
        "Przygotuj proste portfolio ze swoimi pracami, nawet jeśli to projekty osobiste.",
        "Weź udział w krótkich warsztatach z innej dziedziny twórczej niż ta, którą już znasz.",
        "Sprawdź, jak osoby z branż kreatywnych łączą sztukę z innymi umiejętnościami, na przykład technologią albo biznesem."
      ],
      "examples": [
        "Projektowanie graficzne",
        "Architektura",
        "Reklama",
        "Fotografia",
        "Muzyka",
        "Sztuki sceniczne",
        "Projektowanie mody",
        "Produkcja filmowa i wideo"
      ]
    },
    "social": {
      "label": "Społeczny",
      "desc": "Zainteresowanie pomaganiem, uczeniem, opieką i doradzaniem ludziom, czyli wspieraniem ich dobrostanu i rozwoju.",
      "high": "Motywuje cię to, że twoja praca coś zmienia w życiu innych. Słuchanie, uczenie i opieka nadają sens twojemu dniu. Warto uważać, żeby nie przeciążać się cudzymi problemami i nie zapominać o dbaniu o siebie.",
      "low": "Zajęcia skupione na opiece, uczeniu czy doradzaniu ludziom mniej cię interesują. Prawdopodobnie wolisz pracę z zadaniami, przedmiotami, danymi lub ideami. Mimo to umiejętność współpracy pozostaje ważna niemal w każdej pracy.",
      "tips": [
        "Zaangażuj się w wolontariat w sprawie, która jest dla ciebie ważna, i obserwuj, jak się z tym czujesz.",
        "Spróbuj wytłumaczyć innym coś, na czym się znasz, na przykład podczas korepetycji albo zajęć dla młodszych.",
        "Porozmawiaj z osobami pracującymi w ochronie zdrowia, edukacji lub pomocy społecznej o wyzwaniach ich codziennej pracy."
      ],
      "examples": [
        "Psychologia",
        "Pedagogika",
        "Pielęgniarstwo",
        "Praca socjalna",
        "Fizjoterapia",
        "Wychowanie fizyczne",
        "Logopedia",
        "Zarządzanie zasobami ludzkimi"
      ]
    },
    "enterprising": {
      "label": "Przedsiębiorczy",
      "desc": "Zainteresowanie kierowaniem, przekonywaniem, negocjowaniem i podejmowaniem decyzji, by osiągać cele, w firmach, sprzedaży czy własnych projektach.",
      "high": "Lubisz przejmować inicjatywę, przekonywać ludzi i patrzeć, jak cele zostają osiągnięte. Zwykle motywują cię dynamiczne miejsca, które stawiają wyzwania i doceniają wyniki. Warto uważać na pośpiech w podejmowaniu decyzji i skłonność do niedoceniania ryzyka lub szczegółów.",
      "low": "Kierowanie ludźmi, sprzedaż i negocjacje mniej cię interesują. Prawdopodobnie wolisz wnosić swoją wiedzę lub pracę, nie będąc w centrum decyzji. Mimo to umiejętność bronienia swoich pomysłów przydaje się w każdej karierze.",
      "tips": [
        "Pokieruj małym projektem w pracy, na studiach albo w swojej społeczności.",
        "Przetestuj pomysł na biznes na małą skalę, zanim zainwestujesz dużo czasu lub pieniędzy.",
        "Poznaj podstawy finansów, negocjacji i komunikacji."
      ],
      "examples": [
        "Zarządzanie firmą",
        "Prawo",
        "Marketing",
        "Sprzedaż i zarządzanie handlowe",
        "Public relations",
        "Zarządzanie projektami",
        "Pośrednictwo w obrocie nieruchomościami",
        "Handel zagraniczny"
      ]
    },
    "conventional": {
      "label": "Organizacyjny",
      "desc": "Zainteresowanie porządkowaniem informacji, przestrzeganiem jasnych procedur i dokładną pracą z danymi, liczbami i dokumentami.",
      "high": "Lubisz porządek, jasne zasady i wiedzę o tym, co dokładnie trzeba zrobić. Zwykle motywują cię uporządkowane miejsca, w których ceni się precyzję. Wyzwaniem mogą być szybkie zmiany i sytuacje bez określonej procedury.",
      "low": "Rutyna, arkusze kalkulacyjne i szczegółowe procedury mniej cię interesują. Prawdopodobnie wolisz różnorodność i swobodę robienia rzeczy po swojemu. Mimo to odrobina organizacji ułatwia pracę w każdej dziedzinie.",
      "tips": [
        "Naucz się dobrze korzystać z arkuszy kalkulacyjnych i narzędzi do organizacji pracy, bo ta umiejętność przydaje się w wielu zawodach.",
        "Zajmij się finansami lub organizacją jakiegoś projektu i sprawdź, czy takie zadania ci odpowiadają.",
        "Przyjrzyj się takim dziedzinom jak rachunkowość, logistyka czy audyt, obecnym niemal w każdej firmie."
      ],
      "examples": [
        "Rachunkowość",
        "Audyt",
        "Logistyka",
        "Administracja biurowa",
        "Analiza finansowa",
        "Bibliotekoznawstwo",
        "Kontrola jakości",
        "Zakupy i zaopatrzenie"
      ]
    }
  },
  "resultTitle": "Twoje typy zainteresowań",
  "resultIntro": "Wyróżniamy trzy typy z najwyższymi wynikami. Większość ludzi łączy więcej niż jeden typ, a każdy zawód ceni inne połączenie. Traktuj te propozycje jako punkt wyjścia do poszukiwań i rozmów z osobami, które już pracują w danej dziedzinie.",
  "note": "Ten wynik pokazuje zainteresowania, a nie umiejętności ani szanse na sukces. To narzędzie do lepszego poznania siebie, które nie zastąpi doradztwa zawodowego prowadzonego przez specjalistów."
};

export default t;
