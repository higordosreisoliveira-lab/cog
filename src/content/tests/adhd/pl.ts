// adhd — Polish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Cechy ADHD u dorosłych",
  "desc": "Sprawdź, jak często w twojej dorosłej codzienności pojawiają się sytuacje związane z uwagą, organizacją, niepokojem ruchowym i impulsywnością.",
  "intro": "ADHD (zespół nadpobudliwości psychoruchowej z deficytem uwagi) to nie tylko sprawa dzieci: wiele osób wchodzi w dorosłość z tymi cechami, czasem nigdy nie przechodząc żadnej oceny. Ten kwestionariusz przygląda się dwóm grupom cech w codziennym życiu: uwadze i organizacji oraz nadpobudliwości i impulsywności. Zawiera 18 typowych sytuacji z dorosłego życia: w pracy, w domu i w relacjach. Pomyśl o ostatnich 6 miesiącach i zaznacz, jak często każda z nich ci się zdarzała. Odpowiadaj szczerze, myśląc o tym, co faktycznie się dzieje, a nie o tym, jak chcesz, żeby było. Pamiętaj, że to samoocena, która przygląda się cechom, a nie diagnoza. Każdy czasem się rozprasza albo działa w pośpiechu; tutaj liczy się częstotliwość.",
  "scale": ["Nigdy", "Rzadko", "Czasami", "Często", "Bardzo często"],
  "items": [
    "Czytam do końca stronę książki albo raportu i orientuję się, że nie potrafię powiedzieć, co tam było napisane, bo moje myśli krążyły wokół czegoś innego.",
    "Na spotkaniu, zajęciach albo wykładzie zauważam, że cały czas macham nogą, stukam długopisem w stół albo zmieniam pozycję na krześle.",
    "Już w drzwiach tracę kilka minut na szukanie kluczy, telefonu albo portfela, które leżą gdzieś, ale nie pamiętam gdzie.",
    "Podczas rozmowy w grupie przychodzi mi do głowy pomysł i od razu go wypowiadam, wchodząc w słowo komuś, kto jeszcze nie skończył, bo boję się, że zapomnę, co chcę powiedzieć.",
    "Biorę telefon albo otwieram komputer, żeby załatwić jedną konkretną rzecz, na przykład zapłacić rachunek, a w końcu robię trzy inne, nie załatwiając tej pierwszej.",
    "Widzę promocję albo coś, co przyciąga moją uwagę, i kupuję od razu, bez porównywania cen i bez myślenia o miesięcznym budżecie.",
    "Kiedy ktoś spokojnie mi coś tłumaczy, zauważam, że umknęła mi część tego, co mówi, i muszę poprosić o powtórzenie albo udaję, że nadążam.",
    "W kolejce w sklepie albo w korku czuję szybko narastającą niecierpliwość: rozglądam się na boki, wzdycham z irytacją albo szukam innej drogi.",
    "Prosta i nudna sprawa, jak umówienie wizyty czy wysłanie dokumentu, tkwi na mojej liście tygodniami, choć wiem, że zajęłaby kilka minut.",
    "W wolny dzień bez planów, zamiast odpoczywać, czuję niepokój i szybko wymyślam sobie jakieś zajęcie, bo nicnierobienie mnie uwiera.",
    "Wysyłam e-mail, pracę albo arkusz kalkulacyjny i dopiero potem zauważam szczegół, który mi umknął, na przykład zapomniany załącznik, złą datę albo pomylone imię.",
    "Odpowiadam na wiadomość albo komentarz pod wpływem emocji i chwilę później żałuję tonu albo treści.",
    "Zaczynam sprzątać pokój, znajduję coś, co prowadzi mnie w inny kąt mieszkania, i pod koniec dnia mam kilka porządków zaczętych w połowie.",
    "Kładę się spać, ciało jest zmęczone, ale głowa wciąż pracuje na wysokich obrotach i przez dłuższy czas przeskakuje z myśli na myśl.",
    "Umawiam się z kimś na coś i przypominam sobie o tym dopiero wtedy, gdy ta osoba pisze z pytaniem, czy nadal przyjdę.",
    "Po spotkaniu ze znajomymi albo współpracownikami mam wrażenie, że moich słów było dużo więcej niż słów innych osób albo że moje przeskakiwanie z tematu na temat nie dawało rozmowie odetchnąć.",
    "Wydaje mi się, że mam jeszcze sporo czasu przed wyjściem, a kiedy patrzę na zegarek, pora wyjścia już minęła.",
    "W przypływie entuzjazmu od razu przyjmuję zaproszenie, nowy projekt albo zmianę planów i dopiero potem zauważam, że nie mieści się to w moim grafiku."
  ],
  "dims": {
    "inattention": {
      "label": "Uwaga i organizacja",
      "desc": "Mierzy, jak często uwaga ucieka w trakcie czytania, wykonywania zadania czy rozmowy oraz jak radzisz sobie z terminami, zobowiązaniami, codziennymi przedmiotami i mało interesującymi zadaniami.",
      "high": "Utrzymanie skupienia na mało interesujących zadaniach, pamiętanie o zobowiązaniach i dbanie o szczegóły wydaje się wymagać od ciebie więcej wysiłku niż od wielu innych osób. Nie ma to nic wspólnego z lenistwem ani z brakiem inteligencji: wiele osób o takim profilu ma szybki i kreatywny umysł, pełen skojarzeń, i potrafi intensywnie skupić się na tym, co je interesuje. Zwykle pomaga przeniesienie organizacji z głowy do otoczenia, czyli przypomnienia, listy i proste nawyki.",
      "low": "Zwykle utrzymujesz uwagę na tym, co robisz, pamiętasz o zobowiązaniach i doprowadzasz zadania do końca, nawet te mniej ciekawe. Dzięki temu można na tobie polegać, a w pracy i w domu jest spokojniej. Okazjonalne rozproszenia są normalne, zwłaszcza w okresach zmęczenia, stresu albo słabego snu.",
      "tips": [
        "Do zobowiązań i rachunków używaj alarmów i przypomnień w telefonie, zamiast polegać tylko na pamięci.",
        "Miej stałe miejsce na klucze, portfel i dokumenty, na przykład miseczkę albo haczyk przy drzwiach.",
        "Przy nudnym zadaniu zobowiąż się tylko do pierwszych pięciu minut: zaczęcie jest zwykle najtrudniejsze."
      ]
    },
    "hyperactivity": {
      "label": "Nadpobudliwość i impulsywność",
      "desc": "Mierzy niepokój ciała i umysłu, trudność z czekaniem oraz skłonność do mówienia, decydowania lub działania pod wpływem chwilowego impulsu.",
      "high": "Masz dużo energii i działasz szybko: mówisz, decydujesz i reagujesz w tempie, w jakim pojawiają się pomysły, a czekanie albo długie pozostawanie bez ruchu bywa dla ciebie niewygodne. Ta energia może być wielkim sprzymierzeńcem, bo daje entuzjazm, inicjatywę, kreatywność i odwagę do zaczynania nowych rzeczy. Warto uważać na słowa i decyzje podejmowane pod wpływem chwili, które czasem prowadzą do żalu albo tarć, oraz na zmęczenie umysłu, który długo nie potrafi zwolnić.",
      "low": "Zwykle czekasz spokojnie, myślisz, zanim zaczniesz działać, i potrafisz odpocząć, kiedy masz wolny czas. To pomaga podejmować przemyślane decyzje i prowadzić wyważone rozmowy. Pojedyncze chwile niecierpliwości czy pobudzenia są normalne, zwłaszcza w okresach stresu.",
      "tips": [
        "Zanim coś kupisz, odpowiesz na wiadomość, która cię zirytowała, albo przyjmiesz nowe zobowiązanie, zrób przerwę: odczekaj kilka minut albo do następnego dnia.",
        "Daj ujście energii ciała: regularna aktywność fizyczna, krótkie spacery w przerwach albo dyskretny przedmiot do zajęcia rąk podczas spotkań.",
        "Jeśli przed snem myśli przyspieszają, zanim się położysz, zapisz na kartce to, co masz w głowie, i zostaw to na następny dzień."
      ]
    }
  },
  "bands": {
    "few": {
      "label": "Niewiele cech",
      "text": "Twoje odpowiedzi wskazują, że sytuacje związane z nieuwagą, nadpobudliwością i impulsywnością rzadko pojawiają się w twojej codzienności. Pewne rozproszenia i chwile niecierpliwości są normalne u każdego. Przedziały w tym teście służą wyłącznie jako orientacja i nie zostały zweryfikowane klinicznie."
    },
    "some": {
      "label": "Kilka cech",
      "text": "Twoje odpowiedzi wskazują, że niektóre cechy nieuwagi lub nadpobudliwości dość często pojawiają się w twojej codzienności. To częste zjawisko i może mieć różne przyczyny, takie jak zmęczenie, stres, słaby sen albo nadmiar obowiązków. Zwróć uwagę, w jakich sytuacjach najbardziej dają o sobie znać, i wypróbuj wskazówki dla każdego obszaru, pamiętając, że przedziały są tylko orientacyjne i nie zostały zweryfikowane klinicznie."
    },
    "many": {
      "label": "Wiele cech",
      "text": "Twoje odpowiedzi wskazują, że wiele cech związanych z uwagą, nadpobudliwością i impulsywnością często pojawia się w twojej codzienności. Nie oznacza to, że masz ADHD: inne stany i etapy życia mogą dawać podobne sygnały, a przedziały w tym teście są tylko orientacyjne i nie zostały zweryfikowane klinicznie. Jeśli te cechy towarzyszą ci od dawna, może nawet od dzieciństwa, i przeszkadzają w pracy, nauce albo relacjach, warto porozmawiać z psychiatrą, neurologiem lub psychologiem, żeby przejść rzetelną ocenę."
    }
  },
  "resultTitle": "Twoje cechy ADHD",
  "resultIntro": "Wynik sumuje twoje odpowiedzi dotyczące 18 sytuacji i pokazuje, jak często cechy nieuwagi, nadpobudliwości i impulsywności pojawiają się w twojej codzienności. Zobacz też oba obszary osobno: pomagają zrozumieć, gdzie te cechy ważą najwięcej, a gdzie leżą twoje mocne strony.",
  "note": "Ten test to narzędzie do lepszego poznania siebie, oparte na twoich własnych odpowiedziach. Nie jest diagnozą ADHD ani żadnego innego stanu, a przedziały wyników nie zostały zweryfikowane klinicznie. Tylko wykwalifikowany specjalista, na przykład psychiatra, neurolog lub psycholog, może przeprowadzić pełną ocenę, która uwzględnia twoją historię od dzieciństwa i inne możliwe przyczyny, takie jak lęk, depresja czy problemy ze snem.",
  "help": "Jeśli chcesz przyjrzeć się tym cechom bliżej, zwróć się do psychiatry, neurologa lub psychologa, najlepiej z doświadczeniem w ADHD u dorosłych. Pierwszym krokiem może być rozmowa z lekarzem rodzinnym albo kontakt z lokalnymi placówkami ochrony zdrowia, które mogą doradzić i skierować na diagnozę; w okresach większego cierpienia pomocy udzielają także lokalne ośrodki zdrowia psychicznego. Istnieją również specjalistyczne poradnie przy uczelniach i szpitalach klinicznych, a także stowarzyszenia wspierające osoby z ADHD, które często polecają sprawdzonych specjalistów i rzetelne materiały."
};

export default t;
