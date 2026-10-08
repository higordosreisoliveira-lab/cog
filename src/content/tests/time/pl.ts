// time — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Zarządzanie czasem',
  desc: 'Zobacz, jak ustalasz priorytety, planujesz, chronisz swoje skupienie i równoważysz pracę z odpoczynkiem.',
  intro:
    'Ten kwestionariusz ocenia cztery nawyki związane z zarządzaniem czasem: ustalanie priorytetów, planowanie, utrzymywanie skupienia oraz szanowanie granic i czasu na odpoczynek. Zawiera 16 stwierdzeń. Przy każdym zaznacz, na ile opisuje ono twoją obecną codzienność, czy to w pracy, na studiach, czy w domu. Nie ma dobrych odpowiedzi: chodzi o to, żeby znaleźć obszary, których poprawa najbardziej usprawni twój dzień.',
  scale: ['Zdecydowanie się nie zgadzam', 'Nie zgadzam się', 'Ani tak, ani nie', 'Zgadzam się', 'Zdecydowanie się zgadzam'],
  items: [
    'Wiem, jakie są najważniejsze zadania w moim tygodniu.',
    'Poświęcam kilka minut na zaplanowanie dnia albo tygodnia.',
    'Potrafię pracować nad jednym zadaniem przez dłuższy czas bez przerywania.',
    'Potrafię odmawiać, kiedy prośby kolidują z moimi wcześniejszymi zobowiązaniami.',
    'Odróżniam to, co pilne, od tego, co naprawdę ważne.',
    'Często dopiero w ostatniej chwili odkrywam, że mam do oddania coś ważnego.',
    'Wyciszam powiadomienia, kiedy muszę się skupić.',
    'Robię przerwy w ciągu dnia, żeby odpocząć, nawet kiedy mam dużo pracy.',
    'Większą część dnia spędzam na załatwianiu drobnych spraw, a to, co najważniejsze, odkładam na bok.',
    'Zapisuję terminy i zobowiązania, gdy tylko się o nich dowiaduję.',
    'Robię jedną rzecz naraz, zamiast próbować robić kilka jednocześnie.',
    'Odpowiadam na wiadomości związane z pracą albo nauką wieczorem, w weekendy albo na urlopie.',
    'Zanim przyjmę nowe zadanie, zastanawiam się, czy jest ważniejsze od tego, co już robię.',
    'Kiedy planuję, zostawiam zapas czasu na nieprzewidziane sytuacje.',
    'Przerywam to, co robię, za każdym razem, gdy przychodzi wiadomość albo prośba.',
    'Mam ustaloną godzinę kończenia pracy i zwykle jej przestrzegam.',
  ],
  dims: {
    priorities: {
      label: 'Priorytety',
      desc: 'Rozpoznawanie, co jest najważniejsze, i poświęcanie temu czasu, zanim zajmiesz się tym, co tylko pilne albo łatwe.',
      high: 'Zwykle wiesz, co naprawdę się liczy, i poświęcasz tym zadaniom swój najlepszy czas. Dzięki temu twój wysiłek przynosi wyniki, które mają znaczenie. Warto uważać na sztywność: czasem niespodziewana prośba zasługuje na uwagę, nawet jeśli nie ma jej w planie.',
      low: 'Zwykle reagujesz na to, co pojawia się jako pierwsze, i chętnie zajmujesz się różnymi sprawami. To daje elastyczność i sprawia, że inni mogą na tobie polegać. Warto uważać, żeby nie kończyć dnia z mnóstwem wykonanej pracy, ale z niewielkim postępem w tym, co najważniejsze.',
      tips: [
        'Na początku każdego dnia wybierz trzy najważniejsze zadania i zacznij od jednego z nich.',
        'Zanim przyjmiesz nową sprawę, zapytaj siebie, czy jest ważniejsza od tego, co już robisz.',
        'Porę dnia, w której masz najwięcej energii, zarezerwuj na najważniejsze zadanie.',
      ],
    },
    planning: {
      label: 'Planowanie',
      desc: 'Organizowanie dnia i tygodnia z wyprzedzeniem, pilnowanie terminów i przewidywanie, ile czasu zajmie każde zadanie.',
      high: 'Zwykle planujesz z wyprzedzeniem, zapisujesz zobowiązania i przewidujesz, ile czasu zajmą różne sprawy. To ogranicza niespodzianki i daje spokój. Warto uważać, żeby nie poświęcać zbyt wiele czasu na planowanie i nie frustrować się, kiedy dzień nie idzie zgodnie z planem.',
      low: 'Zwykle decydujesz, co robić, w miarę jak upływa dzień, co daje spontaniczność i umiejętność improwizacji. Warto uważać na niespodzianki: terminy odkryte zbyt późno i zadania, które zajmują więcej czasu, niż zakładasz.',
      tips: [
        'Na początku każdego tygodnia poświęć dziesięć minut na zaplanowanie najbliższych dni.',
        'Każdy termin albo zobowiązanie wpisuj do kalendarza od razu, gdy się o nim dowiesz.',
        'Planując dzień, zostaw mniej więcej jedną trzecią czasu wolną na nieprzewidziane sytuacje.',
      ],
    },
    focus: {
      label: 'Skupienie',
      desc: 'Utrzymywanie koncentracji na jednym zadaniu naraz i chronienie swojego czasu przed przerywaniem.',
      high: 'Potrafisz długo skupiać się na jednym zadaniu i chronisz swoją pracę przed przerywaniem. To podnosi jakość i tempo tego, co robisz. Warto uważać, żeby nie zostawiać wiadomości zbyt długo bez odpowiedzi i nie opóźniać pracy osób, które na nią czekają.',
      low: 'Szybko odpowiadasz na wiadomości i prośby i śledzisz wiele spraw jednocześnie. Dzięki temu jesteś osobą dostępną i sprawną w działaniu. Warto pamiętać, że ciągłe przeskakiwanie między zadaniami męczy i sprawia, że każde z nich zajmuje więcej czasu, niż zajęłoby przy pełnej uwadze.',
      tips: [
        'Blokuj w kalendarzu okresy od 60 do 90 minut na pracę w skupieniu.',
        'Wycisz powiadomienia i wyznacz dwie albo trzy pory dnia na sprawdzanie wiadomości.',
        'Skończ jedno zadanie albo jego jasno określoną część, zanim zaczniesz kolejne.',
      ],
    },
    boundaries: {
      label: 'Granice i odpoczynek',
      desc: 'Mówienie „nie”, kiedy trzeba, robienie przerw i oddzielanie czasu pracy od czasu odpoczynku.',
      high: 'Potrafisz odmawiać, kiedy prośby zagrażają twoim priorytetom, i chronisz swoje chwile przerwy. To pozwala na dłuższą metę zachować energię i zdrowie. Warto uważać, żeby nie sprawiać wrażenia mało dostępnej osoby wtedy, gdy grupa naprawdę potrzebuje dodatkowego wysiłku.',
      low: 'Zwykle jesteś do dyspozycji i rzadko odmawiasz, dlatego ludzie bardzo na tobie polegają. Warto uważać na nagromadzone zmęczenie: bez przerw i granic energia i jakość pracy z czasem spadają.',
      tips: [
        'Ustal godzinę kończenia pracy i po niej wyłączaj powiadomienia.',
        'Co godzinę albo dwie zrób krótką przerwę, żeby wstać, napić się wody i dać odpocząć oczom.',
        'Kiedy chcesz odmówić, użyj prostego zdania, na przykład: „Teraz nie dam rady, ale mogę pomóc w czwartek”.',
      ],
    },
  },
  resultTitle: 'Twój profil zarządzania czasem',
  resultIntro:
    'Zobacz, jaki wynik uzyskujesz przy każdym nawyku. Wyższe wyniki oznaczają bardziej utrwalone praktyki, ale nawet przy nich jest na co uważać. Pracuj naraz nad jednym albo dwoma nawykami.',
  note: 'Ten wynik to narzędzie do lepszego poznania siebie, oparte na twoich własnych odpowiedziach, a nie profesjonalna ocena. Jeśli zmęczenie albo przeciążenie pojawiają się często, warto porozmawiać z przełożonym albo z lekarzem lub psychologiem.',
};

export default t;
