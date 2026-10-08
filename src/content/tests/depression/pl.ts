// depression — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Oznaki obniżonego nastroju",
  "desc": "Sprawdź, jak często w ciągu ostatnich dwóch tygodni pojawiały się takie oznaki jak zniechęcenie, utrata zainteresowań i brak energii.",
  "intro": "Ten kwestionariusz przygląda się dwóm grupom oznak związanych z obniżonym nastrojem: zmianom nastroju i zainteresowania różnymi sprawami oraz zmianom energii, snu, apetytu i koncentracji. Zawiera 10 zdań dotyczących ostatnich dwóch tygodni. Przy każdym zaznacz, jak często coś takiego ci się zdarzało w tym okresie. Niektóre zdania dotyczą delikatnych tematów: odpowiadaj we własnym tempie i szczerze. To samoocena oparta na twoich odpowiedziach, a nie diagnoza.",
  "scale": ["Nigdy", "Kilka dni", "Ponad połowę dni", "Prawie codziennie"],
  "items": [
    "Rzeczy, które wcześniej sprawiały mi przyjemność, takie jak hobby czy spotkania z przyjaciółmi, straciły urok.",
    "Brakowało mi energii nawet na proste czynności, takie jak prysznic czy odpisanie na wiadomość.",
    "Przez większą część dnia towarzyszyło mi trudne do wyjaśnienia uczucie smutku albo pustki.",
    "Mój sen się zmienił: trudności z zasypianiem, częste wybudzanie się w nocy albo spanie dużo dłużej niż zwykle.",
    "Mój apetyt się zmienił: zdarzało mi się jeść dużo mniej albo dużo więcej niż zwykle.",
    "Myśl o najbliższych miesiącach nie budziła we mnie nadziei, że cokolwiek się poprawi.",
    "Zdarzało mi się gubić wątek w rozmowach albo przy prostych zadaniach z powodu trudności z koncentracją.",
    "Zdarzało mi się przyłapywać na myśli, że nie mam żadnej wartości albo że wszystko, co robię, wychodzi źle.",
    "Drobne decyzje, na przykład co zjeść albo w co się ubrać, wydawały się zbyt trudne.",
    "Przez głowę przechodziły mi myśli, że nie warto żyć, albo myśli o zrobieniu sobie krzywdy."
  ],
  "dims": {
    "mood": {
      "label": "Nastrój i zainteresowania",
      "desc": "Mierzy takie oznaki jak utrzymujący się smutek, utrata przyjemności z różnych rzeczy, brak nadziei i bardzo negatywne myśli o sobie.",
      "high": "W ciągu ostatnich dwóch tygodni często pojawiały się smutek, brak zainteresowania albo surowe myśli o sobie. To nie jest brak silnej woli: obniżony nastrój zmienia sposób, w jaki postrzegamy siebie i przyszłość. Rozmowa o tym ze specjalistą to ważny krok i nie musisz czekać, aż będzie gorzej, żeby poszukać pomocy.",
      "low": "Twój nastrój i zainteresowanie różnymi sprawami wydają się stabilne w ciągu ostatnich dwóch tygodni. Smutne dni zdarzają się każdemu, ale nie wydają się dominować w twojej codzienności. Dbaj dalej o to, co ci służy.",
      "tips": [
        "Planuj w ciągu tygodnia drobne przyjemne zajęcia, nawet bez ochoty: często chęć przychodzi po rozpoczęciu, a nie przed nim.",
        "Utrzymuj kontakt z zaufanymi osobami, nawet jeśli to tylko wiadomość albo krótka rozmowa.",
        "Jeśli smutek albo brak zainteresowania utrzymują się dłużej niż dwa tygodnie, zwróć się do psychologa lub lekarza, żeby o tym porozmawiać."
      ]
    },
    "energy": {
      "label": "Energia, sen, apetyt i koncentracja",
      "desc": "Mierzy zmiany w ciele i w codziennym funkcjonowaniu, które często towarzyszą obniżonemu nastrojowi, takie jak zmęczenie, zmiany snu i apetytu oraz trudności z koncentracją.",
      "high": "W ciągu ostatnich dwóch tygodni twoje ciało i umysł wysyłały sygnały wyczerpania: mniej energii, zmiany snu albo apetytu i trudności z koncentracją. Te oznaki mogą towarzyszyć obniżonemu nastrojowi, ale mogą mieć też inne przyczyny, takie jak stres, nieprzespane noce czy problemy ze zdrowiem fizycznym. Warto porozmawiać z lekarzem lub lekarką, zwłaszcza jeśli się utrzymują.",
      "low": "Twoja energia, sen, apetyt i koncentracja wydają się funkcjonować stabilnie. Taka podstawa zwykle bardzo pomaga przetrwać trudniejsze dni. Dbaj o nią dalej.",
      "tips": [
        "Staraj się kłaść spać, wstawać i jeść o stałych porach, nawet w dni, gdy brakuje ci chęci.",
        "Wyjdź choć na chwilę na świeże powietrze i rusz się, nawet jeśli to tylko krótki spacer: światło dzienne i ruch pomagają regulować sen i energię.",
        "Dziel zadania na małe części i doceniaj każdą ukończoną, nie wymagając od siebie dawnego tempa."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Niewiele oznak",
      "text": "Twoje odpowiedzi wskazują na niewiele oznak obniżonego nastroju albo na ich brak w ciągu ostatnich dwóch tygodni. Chwile smutku czy zmęczenia są częścią życia, a w twoim przypadku nie wydają się przejmować kontroli nad codziennością. Dbaj dalej o sen, ruch i swoje relacje."
    },
    "mild": {
      "label": "Łagodne oznaki",
      "text": "Twoje odpowiedzi wskazują na pewne oznaki obniżonego nastroju przez część dni. Może się to zdarzać w okresach zmęczenia, strat albo zmian. Obserwuj, jak się czujesz w najbliższych tygodniach, a jeśli oznaki się utrzymają albo nasilą, porozmawiaj ze specjalistą."
    },
    "moderate": {
      "label": "Umiarkowane oznaki",
      "text": "Twoje odpowiedzi wskazują na oznaki obniżonego nastroju przez sporą część dni, co może obciążać twoją codzienność. To zasługuje na uwagę i troskę i nie jest czymś, z czym musisz radzić sobie w pojedynkę. Zwróć się do specjalisty, na przykład psychologa lub lekarza, żeby porozmawiać o tym, co czujesz."
    },
    "high": {
      "label": "Silne oznaki",
      "text": "Twoje odpowiedzi wskazują na częste i silne oznaki obniżonego nastroju w ciągu ostatnich dwóch tygodni. To może sprawiać, że wszystko jest trudniejsze, ale istnieje leczenie, a ludziom z odpowiednim wsparciem się poprawia. Jak najszybciej zwróć się do specjalisty, na przykład psychologa lub lekarza, i powiedz zaufanej osobie, jak się czujesz."
    }
  },
  "resultTitle": "Oznaki twojego nastroju",
  "resultIntro": "Wynik sumuje twoje odpowiedzi dotyczące ostatnich dwóch tygodni. Poniżej zobaczysz, w którym przedziale się znajdujesz, oraz jakie wyniki uzyskujesz w obszarach nastroju i zainteresowań oraz energii, snu, apetytu i koncentracji.",
  "note": "Ten kwestionariusz to narzędzie do lepszego poznania siebie i wstępnej oceny, oparte na twoich własnych odpowiedziach. Nie jest diagnozą depresji: taką ocenę może przeprowadzić tylko wykwalifikowany specjalista, na przykład psycholog lub lekarz. Zmęczenie oraz zmiany snu i apetytu mogą mieć też inne przyczyny, w tym fizyczne.",
  "help": "Żeby porozmawiać o tym, co czujesz, zwróć się do psychologa albo lekarza rodzinnego. Lokalne placówki ochrony zdrowia mogą udzielić pomocy i w razie potrzeby skierować cię do specjalistycznej opieki w zakresie zdrowia psychicznego. Jeśli przeżywasz cierpienie, skontaktuj się z telefonem zaufania albo linią wsparcia emocjonalnego w swoim kraju. W nagłej sytuacji zadzwoń pod numer alarmowy 112.",
  "alert": "Z twoich odpowiedzi wynika, że w ciągu ostatnich dwóch tygodni pojawiały się u ciebie myśli, że nie warto żyć, albo myśli o zrobieniu sobie krzywdy. Dobrze, że odpowiadasz szczerze. Te myśli zasługują teraz na troskę i nie musisz przechodzić przez to bez nikogo u swojego boku. Jeśli grozi ci niebezpieczeństwo albo czujesz, że możesz zrobić sobie krzywdę, zadzwoń teraz pod numer alarmowy 112. Żeby porozmawiać z kimś, kto cię wysłucha, skontaktuj się z telefonem zaufania albo linią wsparcia kryzysowego w swoim kraju. Jeśli możesz, powiedz też zaufanej osobie, jak się czujesz."
};

export default t;
