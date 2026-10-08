import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Inteligencja emocjonalna",
  "desc": "Sprawdź, jak na co dzień rozpoznajesz własne emocje i emocje innych ludzi oraz jak sobie z nimi radzisz.",
  "intro": "Ten kwestionariusz ocenia cztery obszary inteligencji emocjonalnej: samoświadomość, samokontrolę, empatię i umiejętności społeczne. Zawiera 24 stwierdzenia dotyczące codziennych sytuacji. Przy każdym zaznacz, na ile opisuje ono to, jak zwykle postępujesz, a nie to, jak według ciebie należałoby postępować. Nie ma dobrych odpowiedzi: im szczersze odpowiedzi, tym bardziej przydatny wynik.",
  "scale": [
    "Zdecydowanie się nie zgadzam",
    "Nie zgadzam się",
    "Ani tak, ani nie",
    "Zgadzam się",
    "Zdecydowanie się zgadzam"
  ],
  "items": [
    "Potrafię nazwać to, co czuję, nawet gdy to mieszanka różnych emocji.",
    "Kiedy się złoszczę, potrafię chwilę odczekać, zanim odpowiem.",
    "Wyczuwam, kiedy komuś jest przykro, nawet jeśli nic nie mówi.",
    "Potrafię rozwiązywać nieporozumienia tak, żeby rozmowa nie zamieniła się w kłótnię.",
    "Często dopiero po fakcie uświadamiam sobie, jakie emocje mi towarzyszyły.",
    "W czasie sprzeczek zdarza mi się mówić rzeczy, których potem żałuję.",
    "Zanim kogoś ocenię, próbuję zrozumieć, przez co ta osoba przechodzi.",
    "Unikam trudnych rozmów, nawet gdy są potrzebne.",
    "Zauważam, kiedy mój nastrój wpływa na moje decyzje.",
    "Po złym dniu potrafię się uspokoić i nie wyładowywać się na innych.",
    "Trudno mi zrozumieć, dlaczego niektórzy reagują tak intensywnie.",
    "Potrafię stanowczo i uprzejmie odmówić, gdy ktoś mnie o coś prosi.",
    "Wiem, jakie sytuacje zwykle wyprowadzają mnie z równowagi.",
    "Kiedy słyszę krytykę, słucham do końca, zanim zacznę się bronić.",
    "Kiedy ktoś opowiada mi o swoim problemie, uważnie słucham, zamiast od razu myśleć o tym, co odpowiem.",
    "Kiedy pracuję w grupie, pomagam innym dojść do porozumienia.",
    "Trudno mi wyjaśnić, co czuję.",
    "Kiedy coś pójdzie nie tak, długo nie mogę przestać o tym myśleć.",
    "Zwykle od razu wyczuwam atmosferę miejsca, do którego przychodzę.",
    "W nowych miejscach trudno mi nawiązać kontakt z ludźmi.",
    "Kiedy coś na mnie wpływa, zauważam sygnały z ciała, takie jak napięcie czy zmęczenie.",
    "Potrafię skupić się na tym, co mam do zrobienia, nawet w trudnym emocjonalnie dniu.",
    "Kiedy ktoś myśli inaczej niż ja, brakuje mi cierpliwości, żeby wysłuchać jego racji.",
    "Potrafię wskazać problem w czyjejś pracy tak, żeby ta osoba nie czuła się atakowana."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Samoświadomość",
      "desc": "Dostrzeganie i nazywanie tego, co czujesz, rozumienie, skąd biorą się te emocje i jak wpływają na twoje zachowanie.",
      "high": "Zwykle wiesz, co czujesz i dlaczego, często zanim zareagujesz. To pomaga podejmować bardziej świadome decyzje i wyjaśniać innym swoje potrzeby. Warto uważać, żeby nie analizować zbyt długo każdej emocji, zamiast iść dalej.",
      "low": "Częściej skupiasz się na tym, co trzeba zrobić, niż na tym, co czujesz, a to pomaga działać praktycznie. Warto uważać, żeby nie dostrzegać emocji dopiero po fakcie, gdy już wpłynęły na twoje zachowanie.",
      "tips": [
        "Kilka razy dziennie zatrzymaj się na kilka sekund i zapytaj siebie: co teraz czuję?",
        "Zamiast mówić tylko, że jest ci „źle”, spróbuj rozpoznać, czy to zmęczenie, frustracja, smutek czy niepokój.",
        "Zapisuj sytuacje, które cię poruszyły, i to, co wydarzyło się tuż przed nimi."
      ]
    },
    "selfRegulation": {
      "label": "Samokontrola",
      "desc": "Radzenie sobie z silnymi emocjami bez działania pod wpływem impulsu, odzyskiwanie spokoju i utrzymywanie skupienia nawet w trudne dni.",
      "high": "Potrafisz czuć złość, frustrację czy niepokój i nie pozwalasz, by przejęły kontrolę nad twoim zachowaniem. To budzi zaufanie i pozwala uniknąć niepotrzebnych konfliktów. Warto uważać, żeby nie tłumić emocji, które należałoby wyrazić, bo napięcie może się kumulować.",
      "low": "Reagujesz szybko i intensywnie, a ludzie zwykle dokładnie wiedzą, co czujesz. Ta spontaniczność bywa szczera i pełna energii. Warto uważać na reakcje pod wpływem chwili, które czasem prowadzą do żalu albo nadwyrężają relacje.",
      "tips": [
        "Gdy czujesz, że emocje rosną, zrób krótką przerwę, weź głęboki oddech i dopiero potem odpowiedz.",
        "Nie podejmuj decyzji i nie wysyłaj ważnych wiadomości, kiedy targa tobą silna złość.",
        "Miej regularny wentyl bezpieczeństwa, na przykład ćwiczenia, spacer albo rozmowę z zaufaną osobą."
      ]
    },
    "empathy": {
      "label": "Empatia",
      "desc": "Dostrzeganie tego, co czują inni, i rozumienie ich punktu widzenia, nawet gdy różni się od twojego.",
      "high": "Łatwo wyczuwasz atmosferę w danym miejscu i to, co czują ludzie, nawet bez słów. Dzięki temu inni czują się przy tobie zrozumiani. Warto uważać, żeby nie przejmować cudzych emocji do tego stopnia, że zabraknie ci sił.",
      "low": "Zwykle skupiasz się na faktach i samym problemie bardziej niż na emocjach, które się z nim wiążą. To pomaga zachować obiektywizm w delikatnych sytuacjach. Warto uważać, żeby nie przeoczyć sygnałów, że ktoś potrzebuje wsparcia, i nie sprawiać nieumyślnie wrażenia osoby zdystansowanej.",
      "tips": [
        "W ważnych rozmowach, zanim odpowiesz, powtórz własnymi słowami, co udało ci się zrozumieć.",
        "Zanim przejdziesz do rozwiązań, zapytaj: „jak się z tym czujesz?”.",
        "Zwracaj uwagę na mimikę, ton głosu i milczenie, a nie tylko na to, co zostaje powiedziane."
      ]
    },
    "social": {
      "label": "Umiejętności społeczne",
      "desc": "Jasne komunikowanie się, rozwiązywanie konfliktów, współpraca i budowanie dobrych relacji w pracy i w życiu prywatnym.",
      "high": "Dobrze radzisz sobie z trudnymi rozmowami, potrafisz zająć stanowisko i pomagasz grupom dojść do porozumienia. Dlatego ludzie często zwracają się do ciebie, gdy trzeba coś rozwiązać. Warto uważać, żeby nie brać na siebie rozwiązywania wszystkich konfliktów, bo to może prowadzić do przeciążenia.",
      "low": "Wolisz unikać tarć i swobodniej czujesz się z ludźmi, których dobrze znasz. Zwykle przekłada się to na spokojne relacje i mało kłótni. Warto uważać, żeby nie odkładać potrzebnych rozmów, bo wtedy problemy rosną, a twoje potrzeby zostają bez odpowiedzi.",
      "tips": [
        "Przekazując trudną informację zwrotną, mów o zachowaniu i jego skutkach, a nie o osobie.",
        "Ćwicz mówienie „nie” krótkim, uprzejmym zdaniem, bez długich wyjaśnień.",
        "W nowym otoczeniu zadaj proste pytanie, żeby zacząć rozmowę: ludzie lubią opowiadać o tym, czym się zajmują."
      ]
    }
  },
  "resultTitle": "Twój profil inteligencji emocjonalnej",
  "resultIntro": "Zobacz, jaki wynik uzyskujesz w każdym obszarze. Te umiejętności rozwijają się dzięki praktyce, więc traktuj wynik jako punkt wyjścia, a nie etykietę.",
  "note": "Ten kwestionariusz to narzędzie do lepszego poznania siebie, oparte na twojej własnej ocenie. Nie jest zweryfikowanym testem psychologicznym i nie zastąpi oceny specjalisty."
};

export default t;
