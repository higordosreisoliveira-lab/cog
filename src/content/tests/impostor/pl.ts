// impostor — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Syndrom oszusta',
  desc: 'Sprawdź, jak często wątpisz we własne osiągnięcia, boisz się, że inni dostrzegą twoje słabości, i stawiasz sobie zbyt wysokie wymagania w pracy i nauce.',
  intro:
    'Syndrom oszusta to poczucie, że nie zasługujesz na to, co osiągasz, i że prędzej czy później ktoś to zauważy. To bardzo częste doświadczenie, również wśród osób kompetentnych i odnoszących sukcesy, i nie jest ani diagnozą, ani zaburzeniem psychicznym. Ten kwestionariusz przygląda się trzem formom, w jakich zwykle się przejawia: przypisywaniu sukcesu szczęściu, lękowi przed „zdemaskowaniem” i perfekcjonistycznym wymaganiom wobec siebie. Zawiera 15 sytuacji z pracy i nauki. Pomyśl o ostatnich miesiącach i zaznacz, jak często każda z nich ci się zdarza. Jeśli jakaś sytuacja nie należy do twojej codzienności, odpowiedz, myśląc o podobnym doświadczeniu z przeszłości. Nie ma dobrych ani złych odpowiedzi.',
  scale: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
  items: [
    'Kiedy uda mi się zdać trudny egzamin, myślę, że to kwestia szczęścia, bo trafiły się akurat pytania, które umiem.',
    'Na zebraniu albo na zajęciach rezygnuję z zadania pytania, żeby nikt nie zauważył, czego jeszcze nie wiem.',
    'Kilka razy czytam prostego maila przed wysłaniem, bo boję się, że przeoczę jakiś błąd.',
    'Kiedy dostaję pracę, stypendium albo awans, myślę, że to dlatego, że było mało kandydatów albo ktoś mi pomógł.',
    'W pierwszych tygodniach w nowej pracy albo na nowym kursie mam wrażenie, że zaraz wszyscy się zorientują, że wybrano niewłaściwą osobę.',
    'Po prezentacji, która poszła dobrze, godzinami myślę o jedynym fragmencie, w którym coś mi się poplątało.',
    'Kiedy projekt, w którym biorę udział, kończy się sukcesem, tłumaczę to wysiłkiem zespołu albo sprzyjającym momentem, a nie moim wkładem.',
    'Kiedy przełożony albo prowadzący zajęcia prosi mnie o rozmowę w cztery oczy, moja pierwsza myśl jest taka, że ktoś zauważył, że sobie nie radzę.',
    'Trzymam gotową pracę u siebie dłużej, niż to konieczne, bo czuję, że wciąż nie jest na tyle dobra, żeby ją pokazać.',
    'Kiedy dostaję wysoką ocenę albo pozytywną ocenę pracy, myślę, że osoba oceniająca była tego dnia dla mnie łaskawa.',
    'Zanim przedstawię swoją pracę, wyobrażam sobie, że ktoś zada pytanie, które pokaże, że wiem mniej, niż ludzie myślą.',
    'Kiedy dostaję dobrą, ale nie najwyższą ocenę, rozpamiętuję stracone punkty, zamiast cieszyć się z wyniku.',
    'Kiedy rozwiązuję problem, który blokował zespół, myślę, że to był przypadek, a nie efekt tego, że wiem, co robię.',
    'Kiedy ktoś przedstawia mnie jako autorytet w jakiejś dziedzinie, czuję się nieswojo, bo mam wrażenie, że wprowadzam ludzi w błąd.',
    'Kiedy popełniam drobny błąd, na przykład zapominam o załączniku albo wpisuję złą liczbę, surowo krytykuję się przez resztę dnia.',
  ],
  dims: {
    luck: {
      label: 'Sukces przypisywany szczęściu',
      desc: 'Mierzy, na ile tłumaczysz swoje osiągnięcia czynnikami zewnętrznymi, takimi jak szczęście, pomoc innych czy sprzyjające okoliczności, zamiast dostrzegać swój wysiłek i swoje umiejętności.',
      high: 'Kiedy coś się udaje, zwykle przypisujesz to szczęściu, okolicznościom albo innym ludziom. Może to wyglądać na skromność, ale z czasem sprawia, że nie dostrzegasz własnych umiejętności, a każde kolejne osiągnięcie wydaje się przypadkiem. Docenienie swojego udziału to nie arogancja, tylko trafniejsze odczytanie tego, co się wydarzyło.',
      low: 'Zwykle dostrzegasz rolę swojego wysiłku i umiejętności w osiągnięciach, nie zapominając o pomocy, którą otrzymujesz. To pomaga budować pewność siebie opartą na faktach i podchodzić do nowych wyzwań z większym spokojem. Nadal zwracaj uwagę na to, co zadziałało i dlaczego.',
      tips: [
        'Prowadź teczkę osiągnięć: zapisuj wyniki, pochwały i problemy, które udało ci się rozwiązać, z datami i szczegółami, i wracaj do nich, gdy pojawiają się wątpliwości.',
        'Po dobrym wyniku wypisz działania, które do niego doprowadziły, takie jak godziny nauki, decyzje i wykorzystane umiejętności, zanim pomyślisz o szczęściu.',
        'Kiedy dostajesz pochwałę, spróbuj po prostu podziękować, bez umniejszania swojej pracy i bez przypisywania zasług komuś innemu.',
      ],
    },
    fear: {
      label: 'Lęk przed zdemaskowaniem',
      desc: 'Mierzy obawę, że inni zauważą, że twoje kompetencje są mniejsze, niż się wydaje, i to, na ile ten lęk wpływa na to, co robisz albo czego nie robisz.',
      high: 'Często masz poczucie, że wprowadzasz ludzi w błąd i że w każdej chwili ktoś to odkryje. Ten lęk może sprawiać, że unikasz pytań, odrzucasz okazje albo pracujesz ponad miarę, żeby nikt nie zauważył twoich wątpliwości. Warto pamiętać, że nikt nie wie wszystkiego, a przyznanie się do wątpliwości zwykle buduje więcej zaufania niż nieufności.',
      low: 'Dobrze czujesz się na swoim miejscu i nie żyjesz z poczuciem, że ktoś odkryje jakąś ukrytą słabość. To ułatwia zadawanie pytań, proszenie o pomoc i podejmowanie nowych wyzwań. Ten spokój pomaga też osobom, które dopiero zaczynają, poczuć się swobodniej.',
      tips: [
        'Porozmawiaj o tym z zaufanymi osobami z pracy albo ze studiów: często okazuje się, że wiele z nich czuje to samo, w tym osoby, które podziwiasz.',
        'Na zebraniach albo zajęciach zadawaj przynajmniej jedno pytanie w tygodniu i obserwuj, jak ludzie naprawdę reagują.',
        'Kiedy pojawia się lęk, zapytaj siebie, jakie konkretne dowody wskazują na to, że brakuje ci kompetencji, i porównaj je z dowodami przeciwnymi.',
      ],
    },
    perfection: {
      label: 'Perfekcjonizm i samokrytyka',
      desc: 'Mierzy, na ile wymagasz od siebie bezbłędności, nadmiernie wszystko sprawdzasz i surowo się krytykujesz, gdy coś nie wychodzi idealnie.',
      high: 'Zwykle stawiasz sobie bardzo wysokie wymagania i surowo się krytykujesz, kiedy ich nie spełniasz, nawet w drobnych szczegółach. Ta staranność może dawać dobrą jakość pracy, ale też zmęczenie, opóźnienia i poczucie, że nic nigdy nie jest wystarczająco dobre. Wysokie standardy są zdrowe. Wyzwanie polega na tym, żeby odróżnić je od wymogu perfekcji.',
      low: 'Zależy ci na jakości tego, co robisz, ale akceptujesz, że błędy i niedoskonałości są częścią procesu. To pomaga oddawać pracę w terminie, uczyć się na potknięciach i zachować energię na dłużej. Uważaj tylko, żeby spokój nie zamienił się w niedbałość przy zadaniach, które wymagają więcej uwagi.',
      tips: [
        'Zanim zaczniesz zadanie, określ, co w jego przypadku znaczy „gotowe”, i przestań poprawiać, gdy osiągniesz ten punkt.',
        'Oddziel standardy od perfekcji: zapytaj siebie, czy szczegół, który ci przeszkadza, zrobi realną różnicę dla odbiorcy twojej pracy.',
        'Kiedy popełniasz błąd, mów do siebie tak, jak do kogoś z zespołu w tej samej sytuacji: przyznaj się do błędu, zobacz, co da się poprawić, i idź dalej.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Niewiele sygnałów',
      text: 'Twoje odpowiedzi wskazują na niewiele sygnałów syndromu oszusta. Wydaje się, że dostrzegasz swoje osiągnięcia i radzisz sobie z błędami bez nadmiernych wymagań wobec siebie. Mimo to takie poczucie może się pojawiać w chwilach zmian, na przykład w nowej pracy, po awansie albo na początku kursu, i jest to normalne.',
    },
    some: {
      label: 'Pewne sygnały',
      text: 'Twoje odpowiedzi wskazują, że syndrom oszusta daje o sobie znać w niektórych sytuacjach, co jest bardzo częste. Zwykle nasila się w chwilach, gdy jesteś na widoku, albo w obliczu nowych wyzwań. Sprawdź, który z trzech obszarów ma najwyższy wynik, i zacznij od wskazówek do niego.',
    },
    strong: {
      label: 'Wyraźne sygnały',
      text: 'Twoje odpowiedzi wskazują, że syndrom oszusta jest bardzo obecny w twojej codziennej pracy albo nauce. Wątpienie we własne osiągnięcia, lęk, że inni dostrzegą twoje słabości, i ciągłe wymaganie od siebie więcej są męczące, a nic z tego nie mówi, jakie są twoje prawdziwe możliwości. Wypróbuj praktyczne wskazówki, a jeśli to uczucie sprawia ci cierpienie, rozważ rozmowę ze specjalistą.',
    },
  },
  resultTitle: 'Jak przejawia się u ciebie syndrom oszusta',
  resultIntro:
    'Wynik sumuje trzy obszary i pokazuje, na ile syndrom oszusta jest dziś obecny w twojej pracy albo nauce. Nie mierzy twoich kompetencji: wiele bardzo zdolnych osób ma wysokie wyniki. Poniżej zobaczysz, jak każdy obszar wypadł w twoich odpowiedziach.',
  note: 'Ten test to narzędzie do lepszego poznania siebie, oparte na twoich własnych odpowiedziach. Syndrom oszusta nie jest diagnozą medyczną ani zaburzeniem psychicznym, a ten wynik nie zastąpi oceny psychologa. To doświadczenie także zmienia się z czasem, w zależności od kontekstu i dzięki praktyce.',
  help: 'Jeśli syndrom oszusta często sprawia ci cierpienie, wywołuje niepokój albo wyczerpanie lub jeśli przez niego odrzucasz okazje, unikasz wyzwań czy stoisz w miejscu w karierze albo w nauce, pomocna może być rozmowa z psychologiem lub psycholożką. Terapia daje narzędzia, które pomagają radzić sobie z samokrytyką i budować bardziej realistyczną pewność siebie.',
};

export default t;
