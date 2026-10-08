// depression — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Anzeichen gedrückter Stimmung",
  "desc": "Finde heraus, wie oft Anzeichen wie Niedergeschlagenheit, Interessenverlust und Energiemangel in den letzten zwei Wochen aufgetreten sind.",
  "intro": "Dieser Fragebogen betrachtet zwei Gruppen von Anzeichen, die mit gedrückter Stimmung zusammenhängen: Veränderungen in der Stimmung und im Interesse an Dingen sowie Veränderungen bei Energie, Schlaf, Appetit und Konzentration. Er besteht aus 10 Aussagen über die letzten zwei Wochen. Gib bei jeder an, wie oft sie in diesem Zeitraum auf dich zutraf. Einige Aussagen berühren sensible Themen: Nimm dir Zeit und antworte ehrlich. Es ist eine Selbsteinschätzung auf Grundlage deiner Antworten und keine Diagnose.",
  "scale": [
    "Nie",
    "An einigen Tagen",
    "An mehr als der Hälfte der Tage",
    "Fast jeden Tag"
  ],
  "items": [
    "Dinge, die mir früher Freude gemacht haben, etwa ein Hobby oder Treffen mit Freundinnen und Freunden, haben ihren Reiz verloren.",
    "Mir fehlte die Energie selbst für einfache Dinge, wie zu duschen oder auf eine Nachricht zu antworten.",
    "Ich habe einen großen Teil des Tages eine Traurigkeit oder eine Leere gespürt, die schwer zu erklären ist.",
    "Mein Schlaf hat sich verändert: Ich habe lange zum Einschlafen gebraucht, bin nachts mehrmals aufgewacht oder habe viel mehr geschlafen als sonst.",
    "Mein Appetit hat sich verändert: Ich habe viel weniger oder viel mehr gegessen als sonst.",
    "Ich habe auf die kommenden Monate geblickt, ohne Hoffnung, dass sich etwas bessern würde.",
    "Ich habe in Gesprächen oder bei einfachen Aufgaben den Faden verloren, weil ich mich nicht konzentrieren konnte.",
    "Ich habe mich bei dem Gedanken ertappt, dass ich nichts wert bin oder dass alles, was ich tue, schiefgeht.",
    "Kleine Entscheidungen, etwa was ich essen oder anziehen soll, kamen mir viel zu schwer vor.",
    "Mir sind Gedanken durch den Kopf gegangen, dass das Leben nicht lebenswert ist, oder Gedanken, mir etwas anzutun."
  ],
  "dims": {
    "mood": {
      "label": "Stimmung und Interesse",
      "desc": "Misst Anzeichen wie anhaltende Traurigkeit, Verlust der Freude an Dingen, Hoffnungslosigkeit und sehr negative Gedanken über dich selbst.",
      "high": "In den letzten zwei Wochen sind Traurigkeit, Interessenlosigkeit oder harte Gedanken über dich selbst häufig aufgetreten. Das ist kein Mangel an Willenskraft: Gedrückte Stimmung verändert, wie wir uns selbst und die Zukunft sehen. Mit einer Fachperson darüber zu sprechen, ist ein wichtiger Schritt, und du musst nicht warten, bis es schlimmer wird, um dir Hilfe zu holen.",
      "low": "Deine Stimmung und dein Interesse an Dingen scheinen in den letzten zwei Wochen stabil geblieben zu sein. Traurige Tage hat jeder Mensch, aber sie scheinen deinen Alltag nicht bestimmt zu haben. Kümmere dich weiterhin um das, was dir guttut.",
      "tips": [
        "Plane über die Woche verteilt kleine angenehme Aktivitäten ein, auch wenn dir nicht danach ist: Oft kommt der Antrieb erst nach dem Anfangen und nicht vorher.",
        "Bleib mit Vertrauenspersonen in Kontakt, auch wenn es nur eine Nachricht oder ein kurzes Gespräch ist.",
        "Wenn Traurigkeit oder Interessenlosigkeit länger als zwei Wochen anhalten, wende dich an eine psychologische oder ärztliche Fachperson, um darüber zu sprechen."
      ]
    },
    "energy": {
      "label": "Energie, Schlaf, Appetit und Konzentration",
      "desc": "Misst Veränderungen im Körper und im Alltag, die gedrückte Stimmung oft begleiten, etwa Müdigkeit, veränderter Schlaf und Appetit sowie Konzentrationsschwierigkeiten.",
      "high": "Dein Körper und dein Kopf haben in den letzten zwei Wochen Anzeichen von Erschöpfung gezeigt: weniger Energie, Veränderungen bei Schlaf oder Appetit und Schwierigkeiten, dich zu konzentrieren. Diese Anzeichen können gedrückte Stimmung begleiten, aber auch andere Ursachen haben, etwa Stress, schlecht geschlafene Nächte oder körperliche Gesundheitsprobleme. Es lohnt sich, mit einer Ärztin oder einem Arzt zu sprechen, vor allem wenn sie anhalten.",
      "low": "Deine Energie, dein Schlaf, dein Appetit und deine Konzentration scheinen stabil zu funktionieren. Diese Grundlage hilft oft sehr dabei, auch schwierigere Tage zu überstehen. Kümmere dich weiterhin darum.",
      "tips": [
        "Versuch, regelmäßige Zeiten zum Schlafen, Aufstehen und Essen einzuhalten, auch an Tagen, an denen dir die Lust fehlt.",
        "Geh ein wenig nach draußen und beweg dich, und sei es nur bei einem kurzen Spaziergang: Tageslicht und Bewegung helfen, Schlaf und Energie zu regulieren.",
        "Teile Aufgaben in kleine Schritte auf und würdige jeden, den du schaffst, ohne von dir das frühere Tempo zu verlangen."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Wenige Anzeichen",
      "text": "Deine Antworten zeigen in den letzten zwei Wochen wenige oder keine Anzeichen gedrückter Stimmung. Momente der Traurigkeit oder Müdigkeit gehören zum Leben und scheinen in deinem Fall deinen Alltag nicht zu bestimmen. Achte weiterhin auf deinen Schlaf, auf Bewegung und auf deine Beziehungen."
    },
    "mild": {
      "label": "Leichte Anzeichen",
      "text": "Deine Antworten zeigen einige Anzeichen gedrückter Stimmung an einem Teil der Tage. Das kann in Phasen von Erschöpfung, Verlusten oder Veränderungen vorkommen. Beobachte, wie du dich in den nächsten Wochen fühlst, und wenn die Anzeichen anhalten oder zunehmen, sprich mit einer Fachperson."
    },
    "moderate": {
      "label": "Mittlere Anzeichen",
      "text": "Deine Antworten zeigen an vielen Tagen Anzeichen gedrückter Stimmung, die deinen Alltag belasten können. Das verdient Aufmerksamkeit und Fürsorge, und es ist nichts, was du allein bewältigen musst. Wende dich an eine psychologische oder ärztliche Fachperson, um über das zu sprechen, was du gerade empfindest."
    },
    "high": {
      "label": "Starke Anzeichen",
      "text": "Deine Antworten zeigen in den letzten zwei Wochen häufige und starke Anzeichen gedrückter Stimmung. Das kann alles schwerer machen, aber es gibt Behandlungsmöglichkeiten, und mit der richtigen Unterstützung geht es Menschen wieder besser. Wende dich so bald wie möglich an eine psychologische oder ärztliche Fachperson und erzähl einer Vertrauensperson, wie es dir geht."
    }
  },
  "resultTitle": "Deine Stimmungsanzeichen",
  "resultIntro": "Das Ergebnis addiert deine Antworten zu den letzten zwei Wochen. Unten siehst du, in welchem Bereich du liegst und wie deine Werte bei Stimmung und Interesse sowie bei Energie, Schlaf, Appetit und Konzentration ausfallen.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und Ersteinschätzung und beruht auf deinen eigenen Antworten. Er ist keine Diagnose einer Depression: Nur eine qualifizierte Fachperson, etwa aus Psychologie oder Medizin, kann diese Einschätzung vornehmen. Müdigkeit und Veränderungen bei Schlaf und Appetit können auch andere Ursachen haben, auch körperliche.",
  "help": "Um über das zu sprechen, was du empfindest, wende dich an eine Psychologin oder einen Psychologen oder an deine Hausarztpraxis. Die Gesundheitsversorgung vor Ort kann dich unterstützen und bei Bedarf an spezialisierte psychiatrische oder psychosoziale Dienste weitervermitteln. Wenn es dir schlecht geht, wende dich an ein Krisentelefon oder eine Hotline für emotionale Unterstützung in deinem Land; viele davon sind kostenlos, vertraulich und rund um die Uhr erreichbar. Im Notfall wähle die 112 oder die örtliche Notrufnummer.",
  "alert": "Du hast angegeben, dass du in den letzten zwei Wochen Gedanken hattest, dass das Leben nicht lebenswert ist, oder Gedanken, dir etwas anzutun. Gut, dass du so ehrlich geantwortet hast. Diese Gedanken verdienen jetzt Aufmerksamkeit und Fürsorge, und du musst das nicht allein durchstehen. Wenn du in Gefahr bist oder das Gefühl hast, dass du dir etwas antun könntest, ruf jetzt die 112 oder die örtliche Notrufnummer an. Um jederzeit mit jemandem zu sprechen, wende dich an ein Krisentelefon oder eine Hotline für emotionale Unterstützung in deinem Land. Wenn du kannst, erzähl auch einer Vertrauensperson, wie es dir gerade geht."
};

export default t;
