// anxiety — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Angstniveau",
  "desc": "Finde heraus, wie oft Sorgen und körperliche Anspannung in den letzten zwei Wochen in deinem Alltag aufgetreten sind.",
  "intro": "Dieser Fragebogen betrachtet zwei Seiten der Angst: die Sorgen, die die Gedanken beschäftigen, und die Anspannung, die sich im Körper und im Verhalten zeigt. Er besteht aus 10 Aussagen über die letzten zwei Wochen. Gib bei jeder an, wie oft sie in diesem Zeitraum auf dich zutraf, und nicht, wie du im Allgemeinen bist. Es gibt keine richtigen oder falschen Antworten. Es ist eine Selbsteinschätzung auf Grundlage deiner Antworten: Sie hilft dir wahrzunehmen, wie es dir geht, ist aber keine Diagnose.",
  "scale": [
    "Nie",
    "An einigen Tagen",
    "An mehr als der Hälfte der Tage",
    "Fast jeden Tag"
  ],
  "items": [
    "Ich war einen großen Teil des Tages mit Sorgen beschäftigt, und eine zog die nächste nach sich.",
    "Mein Körper fühlte sich angespannt an, vor allem in den Schultern, im Nacken oder im Kiefer.",
    "Ich habe versucht, an etwas anderes zu denken, aber dieselben sorgenvollen Gedanken kamen immer wieder.",
    "Ich habe Herzrasen oder Kurzatmigkeit bemerkt, ohne mich körperlich angestrengt zu haben.",
    "Beim Schlafengehen ist mein Kopf immer wieder Probleme und offene Aufgaben durchgegangen.",
    "Es fiel mir schwer, stillzuhalten: Ich habe mit den Beinen gewippt, mit den Händen herumgespielt oder bin hin und her gelaufen.",
    "Bei etwas Einfachem, wie einer unbeantworteten Nachricht, habe ich sofort an das Schlimmste gedacht.",
    "Kleine Zwischenfälle, wie ein Geräusch oder eine Verspätung, haben mich mehr als sonst aus der Fassung gebracht.",
    "Ich habe Entscheidungen aufgeschoben oder Situationen gemieden, aus Angst, dass etwas schiefgehen könnte.",
    "Selbst in freien Momenten blieb mein Körper in Alarmbereitschaft, und ich konnte nicht herunterfahren."
  ],
  "dims": {
    "worry": {
      "label": "Sorgen",
      "desc": "Misst, wie sehr sorgenvolle Gedanken deinen Kopf beschäftigt haben, auch dann wiederkamen, wenn du versucht hast, dich abzulenken, und deine Entscheidungen beeinflusst haben.",
      "high": "In den letzten Wochen haben Sorgen viel Raum in deinen Gedanken eingenommen und oft Probleme vorweggenommen, die noch gar nicht eingetreten sind. Das ist anstrengend und lenkt den Blick weg von dem, was du jetzt beeinflussen kannst. Es lohnt sich, Wege zu lernen, diesen Gedanken Grenzen zu setzen, und dir Unterstützung zu suchen, wenn sie deinen Alltag beeinträchtigen.",
      "low": "Sorgen kamen in den letzten Wochen selten oder nur vorübergehend auf. Du scheinst über Probleme nachdenken zu können, ohne dass sie deinen Tag bestimmen. Pflege weiterhin die Gewohnheiten, die dir helfen, dieses Gleichgewicht zu halten.",
      "tips": [
        "Nimm dir täglich 15 Minuten Zeit, um deine Sorgen aufzuschreiben, und notiere neben jeder einen möglichen nächsten Schritt oder dass sie außerhalb deiner Kontrolle liegt.",
        "Wenn du merkst, dass du dir das Schlimmste ausmalst, frag dich: Was wird realistisch betrachtet am wahrscheinlichsten passieren?",
        "Verbringe weniger Zeit mit Nachrichten und sozialen Netzwerken, vor allem vor dem Schlafengehen."
      ]
    },
    "tension": {
      "label": "Körperliche Anspannung und Unruhe",
      "desc": "Misst körperliche Anzeichen und Verhaltensweisen, die mit Angst zusammenhängen, etwa angespannte Muskeln, Herzrasen, Unruhe und Gereiztheit wegen Kleinigkeiten.",
      "high": "Dein Körper hat in den letzten Wochen viele Alarmsignale gesendet, etwa Anspannung, Unruhe oder heftige Reaktionen auf kleine Zwischenfälle. So reagiert der Körper auf Druck, aber wenn das lange anhält, ist es erschöpfend und stört die Erholung. Übungen, die den Körper beruhigen, helfen meist, und es lohnt sich, mit einer Fachperson zu sprechen, wenn die Anzeichen stark oder häufig sind.",
      "low": "Dein Körper hat in den letzten Wochen wenige Anzeichen von Anspannung gezeigt, und du konntest in Ruhephasen herunterfahren. Das deutet darauf hin, dass sich der Druck des Alltags nicht in deinem Körper anstaut.",
      "tips": [
        "Probier aus, ein paar Minuten lang langsam zu atmen und dabei länger aus- als einzuatmen.",
        "Beweg dich regelmäßig: Schon ein Spaziergang von 20 bis 30 Minuten hilft, Anspannung abzubauen.",
        "Wenn du häufig Herzrasen, Atemnot oder Brustschmerzen hast, lass dich ärztlich untersuchen, um andere mögliche Ursachen abzuklären."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Minimale Angst",
      "text": "Deine Antworten zeigen in den letzten zwei Wochen wenige Anzeichen von Angst. Sorgen und angespannte Momente gehören zum Leben und scheinen deinen Alltag in deinem Fall nicht zu belasten. Achte weiterhin auf deinen Schlaf, auf Bewegung und auf deine Beziehungen."
    },
    "mild": {
      "label": "Leichte Angst",
      "text": "Deine Antworten zeigen einige Anzeichen von Angst, die an einem Teil der Tage auftraten. Das ist in hektischen Zeiten oder Phasen der Veränderung verbreitet. Es lohnt sich, darauf zu achten, was dir Sorgen bereitet, und die Vorschläge unten auszuprobieren; wenn die Anzeichen zunehmen oder lange anhalten, sprich mit einer Fachperson."
    },
    "moderate": {
      "label": "Mittlere Angst",
      "text": "Deine Antworten zeigen, dass Sorgen und Anspannung an vielen Tagen präsent waren. Das kann erschöpfend sein und sich auf Schlaf, Konzentration und Beziehungen auswirken. Ein Gespräch mit einer psychologischen oder ärztlichen Fachperson kann dir helfen zu verstehen, was gerade los ist, und Wege zu finden, damit umzugehen."
    },
    "high": {
      "label": "Starke Angst",
      "text": "Deine Antworten zeigen in den letzten zwei Wochen an fast jedem Tag starke Anzeichen von Angst. Das bestimmt nicht, wer du bist, aber es zeigt, dass du eine große Last trägst, und es gibt wirksame Wege, dich darum zu kümmern. Wende dich an eine psychologische oder ärztliche Fachperson, um eine Einschätzung zu bekommen und gemeinsam die nächsten Schritte zu überlegen."
    }
  },
  "resultTitle": "Dein Angstniveau",
  "resultIntro": "Das Ergebnis beruht auf der Summe deiner Antworten zu den letzten zwei Wochen. Unten siehst du, in welchem Bereich du liegst und wie deine Werte bei Sorgen und körperlicher Anspannung ausfallen.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und Ersteinschätzung und beruht auf deinen eigenen Antworten. Er ist keine Diagnose: Nur eine qualifizierte Fachperson, etwa aus Psychologie oder Medizin, kann Angst umfassend beurteilen. Manche körperlichen Anzeichen wie Herzklopfen und Atemnot können auch andere Ursachen haben.",
  "help": "Wenn die Angst deinen Alltag beeinträchtigt, wende dich an eine Psychologin oder einen Psychologen oder an deine Hausarztpraxis. Die Gesundheitsversorgung vor Ort kann dich unterstützen und bei Bedarf an spezialisierte psychiatrische oder psychosoziale Dienste weitervermitteln. Wenn du sehr stark belastet bist, wende dich an ein Krisentelefon oder eine Hotline für emotionale Unterstützung in deinem Land; viele davon sind kostenlos, vertraulich und rund um die Uhr erreichbar. Im Notfall wähle die 112 oder die örtliche Notrufnummer."
};

export default t;
