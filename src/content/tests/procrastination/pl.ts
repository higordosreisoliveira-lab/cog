// procrastination — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Prokrastynacja',
  desc: 'Sprawdź, co zwykle skłania cię do odkładania zadań, i poznaj praktyczne strategie na każdą z przyczyn.',
  intro:
    'Prawie każdy czasem odkłada zadania, ale powody są różne u różnych osób. Ten kwestionariusz ocenia cztery częste przyczyny: unikanie dyskomfortu, strach, że coś nie wyjdzie idealnie, rozproszenie i brak jasnego planu. Zawiera 16 stwierdzeń. Pomyśl o ostatnich tygodniach i zaznacz, jak często każda sytuacja ci się zdarza. Nie ma dobrych odpowiedzi: chodzi o to, żeby zrozumieć, co w twoim przypadku waży najwięcej, i wybrać odpowiednie strategie.',
  scale: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
  items: [
    'Odkładam zadania, które wywołują u mnie niepokój, choć wiem, że są ważne.',
    'Długo nie mogę zacząć, bo czuję, że wszystko musi wyjść idealnie od samego początku.',
    'Biorę telefon, żeby szybko coś sprawdzić, i spędzam przy nim dużo więcej czasu, niż zamierzam.',
    'Odkładam zadanie, bo nie wiem dokładnie, od czego zacząć.',
    'Odkładam na później telefony, wiadomości albo rozmowy, które mogą być trudne.',
    'Tak długo poprawiam i dopracowuję pracę, że w końcu oddaję ją po terminie.',
    'W trakcie zadania przerzucam się na coś innego, gdy tylko pojawia się coś ciekawszego.',
    'Mam tyle do zrobienia, że nie wiem, czym zająć się najpierw.',
    'Unikam otwierania maili, rachunków albo wiadomości z obawy przed tym, co mogę w nich znaleźć.',
    'Wolę nie zaczynać, niż ryzykować, że zrobię coś poniżej własnych oczekiwań.',
    'Powiadomienia, rozmowy albo hałas wokół łatwo odrywają mnie od tego, co robię.',
    'Źle szacuję, ile czasu zajmie mi zadanie, i w końcu mam go mniej, niż potrzebuję.',
    'Kiedy zadanie wydaje mi się nudne albo nieprzyjemne, szukam sobie czegoś przyjemniejszego do roboty.',
    'Z rozpoczęciem ważnych zadań czekam na idealny moment, kiedy będę mieć dużo czasu i energii.',
    'Robię to, na co mam w danej chwili ochotę, choć wiem, że należałoby zająć się czymś innym.',
    'Kiedy zadanie jest duże albo niejasne, trudno mi rozbić je na konkretne kroki.',
  ],
  dims: {
    avoidance: {
      label: 'Unikanie dyskomfortu',
      desc: 'Odkładanie zadań, które wywołują nudę, niepokój, strach albo inne nieprzyjemne odczucia.',
      high: 'Wygląda na to, że często odkładasz zadania z chęci ucieczki od nieprzyjemnych odczuć, takich jak niepokój, nuda albo strach przed złą odpowiedzią. To pokazuje, że intensywnie przeżywasz emocje, co pomaga też dostrzegać, co jest ważne. Warto pamiętać, że ulga po odłożeniu zadania trwa krótko, a samo zadanie zwykle staje się potem jeszcze cięższe.',
      low: 'Dyskomfort związany z zadaniem rzadko powstrzymuje cię przed jego rozpoczęciem. Ta umiejętność mierzenia się z tym, co nudne albo trudne, to duża zaleta. Warto uważać, żeby nie zmuszać się do dalszej pracy, kiedy zmęczenie albo przeciążenie domagają się przerwy.',
      tips: [
        'Zacznij od zaledwie dwóch minut: otwórz plik albo napisz pierwsze zdanie. Potem możesz przestać, jeśli chcesz. Rozpoczęcie to zwykle najtrudniejsza część.',
        'Nazwij to, co czujesz, na przykład: „boję się krytyki”. Rozpoznanie emocji zwykle osłabia jej siłę.',
        'Najbardziej nieprzyjemne zadanie zrób na samym początku dnia, zanim otworzysz pocztę albo media społecznościowe.',
      ],
    },
    perfectionism: {
      label: 'Perfekcjonizm',
      desc: 'Odkładanie zadań ze strachu, że nie wykona się ich wystarczająco dobrze, albo z powodu czekania na idealny moment, żeby zacząć.',
      high: 'Wygląda na to, że odkładasz sprawy, bo chcesz, żeby wyszły idealnie, albo czekasz, aż będziesz mieć idealną ilość czasu i energii, żeby zacząć. Ta staranność pokazuje, że traktujesz pracę poważnie i masz wysokie standardy. Warto pamiętać, że idealny moment rzadko nadchodzi, a strach przed błędem może opóźnić albo uniemożliwić oddanie ważnych rzeczy.',
      low: 'Zwykle zaczynasz, nawet jeśli nie wszystko jest idealne, i akceptujesz poprawki po drodze. To daje sprawność działania i pomaga uczyć się w praktyce. Warto uważać, żeby nie oddawać czegoś z mniejszą starannością, niż wymaga sytuacja, zwłaszcza przy ważnych zadaniach.',
      tips: [
        'Zanim zaczniesz, zapisz, co w przypadku tego zadania oznacza „wystarczająco dobrze”.',
        'Zrób szybką pierwszą wersję ze świadomością, że później ją ulepszysz.',
        'Wyznacz limit czasu na poprawki i oddaj pracę, kiedy minie.',
      ],
    },
    distraction: {
      label: 'Rozproszenie i impulsywność',
      desc: 'Odkładanie zadań, bo uwagę przyciągają bardziej natychmiastowe bodźce, takie jak telefon, rozmowy albo przyjemniejsze zajęcia.',
      high: 'Twoją uwagę wydają się łatwo przyciągać powiadomienia, rozmowy albo zajęcia ciekawsze od bieżącego zadania. Ta wrażliwość na nowe bodźce może też dawać szybkość działania i kreatywność. Warto pamiętać, że drobne przerwy, zsumowane, zabierają ci godziny w ciągu dnia, nawet jeśli tego nie zauważasz.',
      low: 'Potrafisz utrzymać koncentrację mimo bodźców wokół i dobrze opierasz się pokusie zamiany zadania na coś przyjemniejszego. To duża zaleta w pracy wymagającej skupienia. Warto uważać, żeby nie zamykać się w zadaniu do tego stopnia, że umkną ci ważne prośby albo zmiany wokół.',
      tips: [
        'Kiedy pracujesz nad czymś ważnym, zostaw telefon w innym pokoju albo go wycisz.',
        'Pracuj w blokach po 25 minut z 5-minutowymi przerwami między nimi.',
        'Zapisuj pomysły i zachcianki, które pojawiają się w trakcie zadania, żeby zająć się nimi później, zamiast przerywać to, co robisz.',
      ],
    },
    planning: {
      label: 'Brak jasności i planowania',
      desc: 'Odkładanie zadań, bo nie wiadomo, od czego zacząć, co zrobić najpierw albo ile czasu zajmie każda rzecz.',
      high: 'Często odkładasz zadania nie z braku chęci, ale dlatego, że wydają się duże, niejasne albo zagmatwane. To pokazuje, że dostrzegasz złożoność spraw. Warto pamiętać, że bez konkretnych kroków nawet proste zadania wydają się trudne i w końcu lądują na później.',
      low: 'Zwykle wiesz, od czego zacząć, i potrafisz rozbić duże zadania na praktyczne kroki. To ułatwia utrzymanie tempa i dotrzymywanie terminów. Warto uważać, żeby nie planować tak drobiazgowo, że trudno będzie się dostosować, kiedy coś się zmieni.',
      tips: [
        'Podziel każde duże zadanie na kroki trwające maksymalnie 30 minut i zapisz, który jest pierwszy.',
        'Zdecyduj z góry, kiedy i gdzie wykonasz zadanie, na przykład: „We wtorek o 9:00 przy moim biurku napiszę wstęp do raportu”.',
        'Oszacuj, ile czasu zajmie każde zadanie, i dodaj co najmniej 50% zapasu.',
      ],
    },
  },
  resultTitle: 'Dlaczego odkładasz sprawy na później',
  resultIntro:
    'Każdy pasek pokazuje, na ile dana przyczyna pojawia się w twoich odpowiedziach. Im wyższy wynik, tym bardziej ten czynnik przyczynia się do odkładania przez ciebie zadań. Zacznij od strategii dla przyczyny z najwyższym wynikiem.',
  note: 'Ten kwestionariusz to narzędzie do lepszego poznania siebie, a nie diagnoza. Jeśli trudności z rozpoczynaniem albo kończeniem zadań są stałe i przeszkadzają ci w nauce, pracy albo życiu prywatnym, warto porozmawiać z lekarzem lub psychologiem, bo mogą mieć związek z takimi trudnościami jak lęk, depresja czy ADHD.',
};

export default t;
