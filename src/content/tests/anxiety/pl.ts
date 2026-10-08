// anxiety — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Poziom lęku",
  "desc": "Sprawdź, jak często w ciągu ostatnich dwóch tygodni w twojej codzienności pojawiały się zamartwianie się i napięcie w ciele.",
  "intro": "Ten kwestionariusz przygląda się dwóm stronom lęku: zamartwianiu się, które zajmuje myśli, i napięciu, które pojawia się w ciele i w zachowaniu. Zawiera 10 zdań dotyczących ostatnich dwóch tygodni. Przy każdym zaznacz, jak często coś takiego ci się zdarzało w tym okresie, a nie to, jak zwykle funkcjonujesz. Nie ma dobrych ani złych odpowiedzi. To samoocena oparta na twoich odpowiedziach: pomaga zauważyć, jak się teraz czujesz, ale nie jest diagnozą.",
  "scale": ["Nigdy", "Kilka dni", "Ponad połowę dni", "Prawie codziennie"],
  "items": [
    "Przez większą część dnia moją głowę zajmowały zmartwienia, jedno pociągało za sobą drugie.",
    "Moje ciało było spięte, zwłaszcza barki, kark albo szczęka.",
    "Mimo prób myślenia o czymś innym te same niepokojące myśli wracały.",
    "Serce mi kołatało albo oddech stawał się krótki i płytki, choć nie było żadnego wysiłku fizycznego.",
    "Przed snem moja głowa wciąż odtwarzała problemy i niezałatwione sprawy.",
    "Trudno mi było usiedzieć spokojnie, bez machania nogami, bawienia się czymś w rękach albo chodzenia tam i z powrotem.",
    "W obliczu czegoś prostego, na przykład wiadomości bez odpowiedzi, od razu przychodziło mi do głowy najgorsze.",
    "Drobne niespodzianki, takie jak hałas czy spóźnienie, wyprowadzały mnie z równowagi bardziej niż zwykle.",
    "Zdarzało mi się odkładać decyzje albo unikać sytuacji ze strachu, że coś pójdzie nie tak.",
    "Nawet w wolnych chwilach moje ciało pozostawało w stanie gotowości i nie udawało mi się zwolnić."
  ],
  "dims": {
    "worry": {
      "label": "Zamartwianie się",
      "desc": "Mierzy, na ile niepokojące myśli zajmowały twoją głowę, wracały nawet przy próbach odwrócenia uwagi i wpływały na twoje decyzje.",
      "high": "W ostatnich tygodniach zamartwianie się zajmowało dużo miejsca w twoich myślach, często wybiegając naprzód ku problemom, które jeszcze się nie wydarzyły. To męczy i odciąga uwagę od tego, na co masz wpływ teraz. Warto poznać sposoby na stawianie tym myślom granic i poszukać wsparcia, jeśli utrudniają ci codzienne funkcjonowanie.",
      "low": "W ostatnich tygodniach zamartwianie się pojawiało się rzadko albo przelotnie. Wydaje się, że potrafisz myśleć o problemach, nie pozwalając, by zawładnęły twoim dniem. Dbaj dalej o nawyki, które pomagają ci utrzymać tę równowagę.",
      "tips": [
        "Zarezerwuj codziennie 15 minut na zapisanie swoich zmartwień, a obok każdego zanotuj możliwy kolejny krok albo to, że nie masz na nie wpływu.",
        "Kiedy zauważysz, że wyobrażasz sobie najgorsze, zapytaj siebie: co najprawdopodobniej wydarzy się naprawdę?",
        "Ogranicz czas spędzany na czytaniu wiadomości i w mediach społecznościowych, zwłaszcza przed snem."
      ]
    },
    "tension": {
      "label": "Napięcie w ciele i niepokój ruchowy",
      "desc": "Mierzy fizyczne i behawioralne sygnały związane z lękiem, takie jak napięte mięśnie, przyspieszone bicie serca, niepokój ruchowy i irytacja drobiazgami.",
      "high": "W ostatnich tygodniach twoje ciało wysyłało wiele sygnałów alarmowych, takich jak napięcie, niepokój ruchowy czy silne reakcje na drobne niespodzianki. Tak ciało odpowiada na presję, ale gdy trwa to długo, męczy i utrudnia odpoczynek. Zwykle pomagają praktyki, które uspokajają ciało, a jeśli sygnały są intensywne lub częste, warto porozmawiać ze specjalistą.",
      "low": "W ostatnich tygodniach twoje ciało wykazywało niewiele oznak napięcia, a w chwilach odpoczynku udawało ci się zwolnić. To znak, że codzienna presja nie kumuluje się w twoim ciele.",
      "tips": [
        "Spróbuj przez kilka minut oddychać powoli, wydychając powietrze dłużej, niż trwa wdech.",
        "Ruszaj się regularnie: już 20–30-minutowy spacer pomaga rozładować napięcie.",
        "Jeśli często odczuwasz kołatanie serca, duszność albo ból w klatce piersiowej, zgłoś się do lekarza lub lekarki, żeby sprawdzić inne możliwe przyczyny."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Minimalny lęk",
      "text": "Twoje odpowiedzi wskazują na niewiele oznak lęku w ciągu ostatnich dwóch tygodni. Zmartwienia i chwile napięcia są częścią życia, a w twoim przypadku nie wydają się obciążać codzienności. Dbaj dalej o sen, ruch i swoje relacje."
    },
    "mild": {
      "label": "Łagodny lęk",
      "text": "Twoje odpowiedzi wskazują na pewne oznaki lęku, obecne przez część dni. To częste w bardziej zabieganych okresach albo w czasie zmian. Warto przyjrzeć się temu, co ostatnio wywołuje zmartwienia, i wypróbować poniższe wskazówki; jeśli oznaki się nasilą albo będą się długo utrzymywać, porozmawiaj ze specjalistą."
    },
    "moderate": {
      "label": "Umiarkowany lęk",
      "text": "Twoje odpowiedzi wskazują, że zamartwianie się i napięcie towarzyszyły ci przez sporą część dni. To może męczyć i wpływać na sen, koncentrację i relacje. Rozmowa ze specjalistą, na przykład z psychologiem lub lekarzem, może pomóc ci zrozumieć, co się dzieje, i znaleźć sposoby, żeby sobie z tym radzić."
    },
    "high": {
      "label": "Silny lęk",
      "text": "Twoje odpowiedzi wskazują na silne oznaki lęku niemal każdego dnia w ciągu ostatnich dwóch tygodni. To nie określa tego, kim jesteś, ale pokazuje, że dźwigasz duży ciężar, a istnieją skuteczne sposoby, żeby się tym zająć. Zwróć się do specjalisty, na przykład psychologa lub lekarza, żeby przejść ocenę i wspólnie zastanowić się nad kolejnymi krokami."
    }
  },
  "resultTitle": "Twój poziom lęku",
  "resultIntro": "Wynik uwzględnia sumę twoich odpowiedzi dotyczących ostatnich dwóch tygodni. Poniżej zobaczysz, w którym przedziale się znajdujesz, oraz jakie wyniki uzyskujesz w zamartwianiu się i w napięciu w ciele.",
  "note": "Ten kwestionariusz to narzędzie do lepszego poznania siebie i wstępnej oceny, oparte na twoich własnych odpowiedziach. Nie jest diagnozą: tylko wykwalifikowany specjalista, na przykład psycholog lub lekarz, może w pełni ocenić lęk. Niektóre objawy fizyczne, takie jak kołatanie serca czy duszność, mogą mieć też inne przyczyny.",
  "help": "Jeśli lęk utrudnia ci codzienne funkcjonowanie, zwróć się do psychologa albo lekarza rodzinnego. Lokalne placówki ochrony zdrowia mogą udzielić pomocy i w razie potrzeby skierować cię do specjalistycznej opieki w zakresie zdrowia psychicznego. Jeśli przeżywasz bardzo silne cierpienie, skontaktuj się z telefonem zaufania albo linią wsparcia emocjonalnego w swoim kraju. W nagłej sytuacji zadzwoń pod numer alarmowy 112."
};

export default t;
