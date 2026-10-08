// burnout — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Poziom wypalenia zawodowego",
  "desc": "Sprawdź, czy praca odbiera ci energię, oddala cię od tego, co robisz, albo daje poczucie, że twój wysiłek nic nie przynosi.",
  "intro": "Wypalenie zawodowe to stan wyczerpania związany z pracą, który zwykle obejmuje trzy obszary: zmęczenie, dystans wobec pracy i utratę poczucia osiągnięć. Kwestionariusz zawiera 15 zdań dotyczących ostatnich trzech miesięcy. Przy każdym zaznacz, jak często coś takiego ci się zdarzało w tym okresie. Jeśli nie masz etatowej pracy, pomyśl o swoim głównym zajęciu, takim jak nauka, własna firma albo opieka nad kimś. Niektóre zdania opisują sytuacje pozytywne: odpowiadaj na nie tak samo, myśląc tylko o częstotliwości. To samoocena oparta na twoich odpowiedziach, a nie diagnoza.",
  "scale": ["Nigdy", "Rzadko", "Czasami", "Często", "Zawsze"],
  "items": [
    "Po pracy starczało mi energii tylko na leżenie na kanapie albo przewijanie telefonu.",
    "Moja praca sprowadzała się do niezbędnego minimum, bez prawdziwego zaangażowania w zadania.",
    "Dzień pracy kończył się poczuciem, że mój wysiłek przyniósł jakiś efekt.",
    "W przeddzień powrotu do pracy przygniatała mnie już sama myśl o tym, co mnie czeka.",
    "Zdarzało mi się traktować współpracowników, klientów albo osoby, którym pomagam, z większym chłodem albo zniecierpliwieniem, niż naprawdę chcę.",
    "W obliczu problemu w pracy towarzyszyło mi przekonanie, że potrafię znaleźć wyjście.",
    "Nawet po dniach wolnych albo urlopie zmęczenie wracało już w pierwszych dniach pracy.",
    "Towarzyszyło mi poczucie, że nie ma znaczenia, czy wykonuję swoją pracę dobrze, czy źle.",
    "Udało mi się nauczyć czegoś nowego albo poprawić w jakiejś części swojej pracy.",
    "Samo dotrwanie do końca dnia pracy wymagało ode mnie ogromnego wysiłku.",
    "Zdarzało mi się odliczać godziny do końca pracy.",
    "Moja praca wyraźnie komuś pomagała: współpracownikowi, klientowi albo zespołowi.",
    "Na przyjaciół, rodzinę albo ulubione zajęcia nie zostawało mi sił, bo praca wysysała ze mnie całą energię.",
    "Unikam służbowych wiadomości, spotkań i rozmów, kiedy tylko się da.",
    "Jakiś efekt mojej pracy napawał mnie dumą."
  ],
  "dims": {
    "exhaustion": {
      "label": "Wyczerpanie",
      "desc": "Mierzy fizyczne i psychiczne zmęczenie związane z pracą, takie, które nie mija po przespanej nocy ani po weekendzie odpoczynku.",
      "high": "Praca pochłania więcej energii, niż jesteś w stanie odzyskać. Zmęczenie nie zostaje w pracy: idzie za tobą do domu, na dni wolne i do twoich relacji. To zwykle pierwszy sygnał, że obecnego tempa nie da się utrzymać na dłuższą metę.",
      "low": "Udaje ci się odzyskiwać energię między kolejnymi dniami pracy. Zmęczenie się pojawia, jak przy każdej codziennej rutynie, ale nie wydaje się kumulować. Nadal chroń swoje chwile odpoczynku.",
      "tips": [
        "Ustal godzinę zakończenia pracy i stwórz mały rytuał wyjścia, na przykład zamknięcie komputera i krótki spacer.",
        "Chroń sen i znajdź czas na ruch, nawet jeśli to tylko krótkie spacery.",
        "Wykorzystuj dni wolne na prawdziwy odpoczynek, bez sprawdzania służbowych wiadomości."
      ]
    },
    "detachment": {
      "label": "Dystans wobec pracy",
      "desc": "Mierzy, na ile oddalasz się od pracy i związanych z nią osób: mniej się angażujesz, okazujesz więcej chłodu albo masz poczucie, że wszystko jedno.",
      "high": "Masz ostatnio ochotę odsunąć się od pracy i związanych z nią osób, robisz minimum i tracisz zainteresowanie tym, co wcześniej było ważne. Często taki dystans jest sposobem na ochronę przed wyczerpaniem, a nie brakiem charakteru czy zaangażowania. Warto zrozumieć, co do tego doprowadziło i co mogłoby się zmienić.",
      "low": "Nadal angażujesz się w swoją pracę i w relacje z osobami, które się z nią wiążą. Nawet w trudne dni wydaje się mieć dla ciebie jakiś sens. Ta więź pomaga chronić się przed wyczerpaniem.",
      "tips": [
        "Przypomnij sobie, co skłoniło cię do wyboru tej pracy, i szukaj zadań, które są temu bliskie.",
        "Porozmawiaj z przełożonymi albo współpracownikami o tym, co odbiera pracy sens, na przykład o nierealnych celach czy braku autonomii.",
        "Pielęgnuj wspierające relacje w pracy: szczera rozmowa z zaufanym współpracownikiem może przynieść sporą ulgę."
      ]
    },
    "efficacy": {
      "label": "Niskie poczucie osiągnięć",
      "desc": "Mierzy, na ile brakuje ci poczucia, że twoja praca przynosi efekty, że masz odpowiednie umiejętności i że się rozwijasz. Zdania w tej części są pozytywne, więc wynik rośnie, gdy zdarzały się rzadko.",
      "high": "Rzadko masz ostatnio poczucie, że twój wysiłek przynosi efekty, że dajesz radę albo że twoja praca coś zmienia. To poczucie może wynikać z samego zmęczenia, które zniekształca to, jak oceniasz swoje wyniki, albo z otoczenia, w którym brakuje docenienia. Nie jest ono miarą twojej wartości zawodowej.",
      "low": "Nadal dostrzegasz, że twoja praca przynosi efekty, że potrafisz rozwiązywać problemy i że się uczysz. To poczucie osiągnięć pomaga utrzymać motywację nawet w bardziej wymagających okresach.",
      "tips": [
        "Pod koniec tygodnia zapisz trzy rzeczy, które udało ci się ukończyć albo rozwiązać, nawet najmniejsze.",
        "Poproś zaufaną osobę o informację zwrotną na temat twojej pracy, żeby uzyskać bardziej wyważony obraz swoich wyników.",
        "Poszukaj małego wyzwania albo czegoś nowego do nauczenia się, co przywróci poczucie postępu."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Niewiele oznak wypalenia",
      "text": "Twoje odpowiedzi wskazują na niewiele oznak wypalenia. Wydaje się, że zachowujesz energię, zaangażowanie i poczucie osiągnięć w pracy, mimo zwykłych codziennych trudności. Dbaj dalej o granice i nawyki, które pomagają ci utrzymać tę równowagę."
    },
    "moderate": {
      "label": "Umiarkowane oznaki wypalenia",
      "text": "Twoje odpowiedzi wskazują na pewne oznaki wyczerpania związanego z pracą. To dobry moment, żeby zadziałać, zanim zmęczenie się nawarstwi. Zwróć uwagę na to, co najbardziej cię obciąża, wypróbuj poniższe wskazówki i, jeśli to możliwe, porozmawiaj z przełożonymi o zmianach w organizacji pracy."
    },
    "high": {
      "label": "Silne oznaki wypalenia",
      "text": "Twoje odpowiedzi wskazują na silne oznaki wypalenia, takie jak duże zmęczenie, dystans wobec pracy i niewielkie poczucie osiągnięć. Takie wyczerpanie zwykle wymaga realnych zmian w codzienności, a nie tylko większej siły woli. Zwróć się do specjalisty, na przykład psychologa lub lekarza, żeby ocenić, jak się czujesz i jakie rozwiązania mają sens w twoim przypadku."
    }
  },
  "resultTitle": "Twój poziom wypalenia",
  "resultIntro": "Wynik sumuje twoje odpowiedzi dotyczące ostatnich trzech miesięcy. W zdaniach o poczuciu osiągnięć punktacja jest odwrócona: im rzadziej towarzyszyło ci poczucie osiągnięć, tym wyższy wynik. Poniżej zobaczysz, w którym przedziale się znajdujesz i jakie wyniki uzyskujesz w każdej części.",
  "note": "Ten kwestionariusz to narzędzie do lepszego poznania siebie, oparte na twoim własnym postrzeganiu. Wypalenie zawodowe to wyczerpanie związane z pracą i samo w sobie nie jest diagnozą medyczną. Podobne oznaki pojawiają się też przy depresji, lęku i problemach ze zdrowiem fizycznym, a ocenić to może tylko wykwalifikowany specjalista.",
  "help": "Jeśli praca wpływa na twoje zdrowie, zwróć się do psychologa albo lekarza rodzinnego. Lokalne placówki ochrony zdrowia mogą udzielić pomocy i w razie potrzeby skierować cię do specjalistycznej opieki w zakresie zdrowia psychicznego. Jeśli twój pracodawca zapewnia opiekę medycyny pracy albo program wsparcia dla pracowników, z niego też warto skorzystać. Jeśli przeżywasz bardzo silne cierpienie, skontaktuj się z telefonem zaufania albo linią wsparcia emocjonalnego w swoim kraju. W nagłej sytuacji zadzwoń pod numer alarmowy 112."
};

export default t;
