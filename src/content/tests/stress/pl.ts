// stress — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Poziom stresu",
  "desc": "Sprawdź, na ile w ostatnim miesiącu ciążyło ci przeciążenie i jak wygląda twoja zdolność do złapania oddechu.",
  "intro": "Ten kwestionariusz ocenia stres z dwóch stron: przeciążenia i presji, których doświadczasz, oraz poczucia kontroli i regeneracji, które pomagają zrównoważyć ten ciężar. Zawiera 12 zdań dotyczących ostatniego miesiąca. Przy każdym zaznacz, jak często coś takiego ci się zdarzało w tym okresie. Niektóre zdania opisują sytuacje pozytywne: odpowiadaj na nie tak samo, myśląc tylko o częstotliwości. To samoocena oparta na twoich odpowiedziach i nie zastępuje oceny specjalisty.",
  "scale": ["Nigdy", "Prawie nigdy", "Czasami", "Często", "Bardzo często"],
  "items": [
    "Moich zadań i obowiązków było więcej, niż mieściło się w godzinach dnia.",
    "Udawało mi się znaleźć czas na odpoczynek, bez poczucia winy.",
    "Pod koniec dnia towarzyszyło mi poczucie, że zaległych spraw tylko przybywa.",
    "Kiedy pojawiał się problem, udawało mi się zatrzymać i spokojnie zastanowić, co zrobić.",
    "Towarzyszyła mi silna presja, ze strony innych albo moja własna, żeby wszystkiemu podołać.",
    "Udawało mi się układać dzień tak, jak było mi to potrzebne.",
    "Puszczały mi nerwy przy rzeczach, które normalnie by mi nie przeszkadzały.",
    "Po trudnym dniu do regeneracji wystarczał mi dobry sen albo chwila rozrywki.",
    "Myśli o zaległych sprawach nie opuszczały mnie nawet w chwilach, które miały być odpoczynkiem.",
    "W razie potrzeby było na kogo liczyć, żeby się wygadać albo poprosić o pomoc.",
    "Pojawiały się u mnie fizyczne oznaki napięcia, takie jak ból głowy, zaciśnięta szczęka albo zmęczenie, które nie mijało.",
    "Udawało mi się odmówić albo odłożyć czyjeś prośby, kiedy i tak było już za dużo na mojej głowie."
  ],
  "dims": {
    "load": {
      "label": "Przeciążenie i presja",
      "desc": "Mierzy, na ile w ostatnim miesiącu doskwierał ci nadmiar zadań, oczekiwań i napięcia oraz na ile towarzyszyło ci to nawet w czasie odpoczynku.",
      "high": "W ostatnim miesiącu poczucie przeciążenia było częste: dużo rzeczy do zrobienia, oczekiwania i mało wytchnienia dla głowy. Ciało i umysł wytrzymują takie tempo przez jakiś czas, ale gdy trwa ono długo, ma swoją cenę. Warto przyjrzeć się temu, co można ograniczyć, podzielić albo odłożyć.",
      "low": "W ostatnim miesiącu presja pojawiała się rzadko albo utrzymywała się na poziomie, który dało się udźwignąć. Nie znaczy to, że nie było wyzwań, ale wydaje się, że się nie kumulowały. Zwróć uwagę na to, co pomaga ci utrzymać tę równowagę.",
      "tips": [
        "Wypisz zadania na dany tydzień i oddziel to, co naprawdę pilne, od tego, co może poczekać, i od tego, czym można podzielić się z innymi.",
        "Rób krótkie przerwy w ciągu dnia, z dala od ekranów, nawet jeśli trwają tylko pięć minut.",
        "Ustal jasne granice, na przykład godzinę, po której nie odpowiadasz już na wiadomości służbowe."
      ]
    },
    "coping": {
      "label": "Mało kontroli i regeneracji",
      "desc": "Mierzy brak zasobów, które równoważą stres, takich jak poczucie, że masz wpływ na swoją codzienność, odpoczynek, wsparcie innych i stawianie granic. Zdania w tej części są pozytywne, więc wynik rośnie, gdy zdarzały się rzadko.",
      "high": "W ostatnim miesiącu chwile odpoczynku, wsparcia i poczucia kontroli były rzadkie. Bez takich przerw nawet zwykła codzienność ciąży bardziej, bo nie zostaje przestrzeń na złapanie oddechu. Stopniowe wzmacnianie tych zasobów to jeden z najskuteczniejszych sposobów na zmniejszenie stresu.",
      "low": "Udaje ci się odpoczywać, prosić o pomoc i czuć, że w dużej mierze masz wpływ na swoją codzienność. Te zasoby działają jak amortyzator: pomagają przejść przez trudne okresy bez wyczerpania. Nadal chroń te chwile, zwłaszcza gdy w codzienności zrobi się ciaśniej.",
      "tips": [
        "Chroń sen: staraj się kłaść spać i wstawać o podobnych porach, także w weekendy.",
        "Wpisz do kalendarza co najmniej jedno zajęcie w tygodniu, które daje ci przyjemność albo odpoczynek, i traktuj ten czas jak zobowiązanie.",
        "Powiedz zaufanej osobie, jak się czujesz: podzielenie się ciężarem już pomaga go zmniejszyć."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Niski stres",
      "text": "Twoje odpowiedzi wskazują na niski poziom stresu w ostatnim miesiącu. Wydaje się, że znajdujesz dobrą równowagę między codziennymi wymaganiami a chwilami regeneracji. Dbaj dalej o nawyki, które tę równowagę podtrzymują."
    },
    "moderate": {
      "label": "Umiarkowany stres",
      "text": "Twoje odpowiedzi wskazują na umiarkowany poziom stresu, co jest częste w okresach wielu wymagań. Warto uważać, gdy taki stan staje się normą, bez okresów ulgi. Wypróbuj poniższe wskazówki, a jeśli stres zacznie wpływać na twój sen, zdrowie albo relacje, porozmawiaj ze specjalistą."
    },
    "high": {
      "label": "Wysoki stres",
      "text": "Twoje odpowiedzi wskazują na wysoki poziom stresu w ostatnim miesiącu, z dużą presją i niewielką przestrzenią na regenerację. Gdy taka sytuacja się przedłuża, może wpływać na sen, nastrój i zdrowie fizyczne. Warto poszukać pomocy specjalisty, na przykład psychologa lub lekarza, żeby zrozumieć, co cię najbardziej obciąża, i znaleźć sposoby na zmniejszenie tego ciężaru."
    }
  },
  "resultTitle": "Twój poziom stresu",
  "resultIntro": "Wynik sumuje twoje odpowiedzi dotyczące ostatniego miesiąca. W zdaniach o kontroli i regeneracji punktacja jest odwrócona: im rzadziej pojawiały się te zasoby, tym wyższy wynik. Poniżej zobaczysz, w którym przedziale się znajdujesz i jakie wyniki uzyskujesz w każdej części.",
  "note": "Ten kwestionariusz to narzędzie do lepszego poznania siebie, oparte na twoim własnym postrzeganiu ostatniego miesiąca. Nie jest diagnozą i nie zastępuje oceny wykwalifikowanego specjalisty. Poziom stresu może się też znacznie różnić w zależności od etapu życia.",
  "help": "Jeśli stres wpływa na twoje zdrowie, sen albo relacje, zwróć się do psychologa albo lekarza rodzinnego. Lokalne placówki ochrony zdrowia mogą udzielić pomocy i w razie potrzeby skierować cię do specjalistycznej opieki w zakresie zdrowia psychicznego. Jeśli przeżywasz bardzo silne cierpienie, skontaktuj się z telefonem zaufania albo linią wsparcia emocjonalnego w swoim kraju. W nagłej sytuacji zadzwoń pod numer alarmowy 112."
};

export default t;
