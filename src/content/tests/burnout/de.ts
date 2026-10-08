// burnout — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Burnout-Niveau",
  "desc": "Finde heraus, ob dich die Arbeit ohne Energie zurücklässt, dich von dem entfernt, was du tust, oder dir das Gefühl gibt, dass deine Mühe nichts bringt.",
  "intro": "Burnout ist eine arbeitsbedingte Erschöpfung, die sich meist auf drei Ebenen zeigt: Erschöpfung, Distanz zur Arbeit und Verlust des Gefühls, etwas zu erreichen. Der Fragebogen besteht aus 15 Aussagen über die letzten drei Monate. Gib bei jeder an, wie oft sie in diesem Zeitraum auf dich zutraf. Wenn du keine feste Anstellung hast, denk an deine Haupttätigkeit, etwa dein Studium, dein eigenes Geschäft oder die Pflege eines Menschen. Einige Aussagen beschreiben positive Situationen: Beantworte sie genauso und denk dabei nur an die Häufigkeit. Es ist eine Selbsteinschätzung auf Grundlage deiner Antworten und keine Diagnose.",
  "scale": [
    "Nie",
    "Selten",
    "Manchmal",
    "Oft",
    "Immer"
  ],
  "items": [
    "Nach Feierabend reichte meine Energie nur noch dafür, auf dem Sofa zu liegen oder durchs Handy zu scrollen.",
    "Ich habe bei der Arbeit nur das Nötigste getan, ohne mich wirklich auf die Aufgaben einzulassen.",
    "Ich habe den Arbeitstag mit dem Gefühl beendet, dass meine Mühe etwas bewirkt hat.",
    "Am Abend, bevor es wieder zur Arbeit ging, fühlte ich mich schon bedrückt, wenn ich nur daran dachte, was auf mich zukam.",
    "Ich bin mit Kolleginnen und Kollegen, Kundschaft oder den Menschen, die ich betreue, kühler oder ungeduldiger umgegangen, als mir lieb ist.",
    "Bei einem Problem bei der Arbeit habe ich darauf vertraut, dass ich einen Ausweg finden kann.",
    "Selbst nach freien Tagen oder Urlaub kam die Müdigkeit schon in den ersten Arbeitstagen zurück.",
    "Ich hatte das Gefühl, dass es egal ist, ob ich meine Arbeit gut oder schlecht mache.",
    "Ich habe etwas Neues gelernt oder mich in einem Bereich meiner Arbeit verbessert.",
    "Ich musste mich enorm anstrengen, nur um den Arbeitstag zu Ende zu bringen.",
    "Ich habe die Stunden bis zum Feierabend gezählt.",
    "Ich habe gemerkt, dass meine Arbeit jemandem geholfen hat, sei es im Kollegium, bei der Kundschaft oder im Team.",
    "Ich habe Freundschaften, Familie oder Aktivitäten, die ich mag, vernachlässigt, weil mir die Arbeit keine Energie mehr gelassen hat.",
    "Ich bin beruflichen Nachrichten, Meetings oder Gesprächen aus dem Weg gegangen, wann immer ich konnte.",
    "Ich war stolz auf etwas, das ich bei der Arbeit geleistet habe."
  ],
  "dims": {
    "exhaustion": {
      "label": "Erschöpfung",
      "desc": "Misst die arbeitsbedingte körperliche und geistige Müdigkeit, die mit einer Nacht Schlaf oder einem erholsamen Wochenende nicht verschwindet.",
      "high": "Die Arbeit verbraucht mehr Energie, als du wieder auftanken kannst. Die Müdigkeit bleibt nicht im Büro: Sie begleitet dich nach Hause, in deine freien Tage und in deine Beziehungen. Das ist meist das erste Anzeichen dafür, dass das aktuelle Tempo nicht auf Dauer tragbar ist.",
      "low": "Du kannst deine Energie zwischen zwei Arbeitstagen gut wieder auftanken. Müdigkeit kommt vor, wie in jedem Alltag, aber sie scheint sich nicht anzustauen. Schütze weiterhin deine Ruhezeiten.",
      "tips": [
        "Leg eine Uhrzeit für den Feierabend fest und schaff dir ein kleines Abschlussritual, etwa den Computer zuzuklappen und eine Runde spazieren zu gehen.",
        "Schütze deinen Schlaf und nimm dir Zeit für Bewegung, auch wenn es nur kurze Spaziergänge sind.",
        "Nutze freie Tage, um dich wirklich zu erholen, ohne berufliche Nachrichten zu lesen."
      ]
    },
    "detachment": {
      "label": "Distanz zur Arbeit",
      "desc": "Misst, wie sehr du dich von der Arbeit und den Menschen, die damit zu tun haben, zurückgezogen hast, mit weniger Engagement, mehr Kühle oder dem Gefühl, dass alles egal ist.",
      "high": "Du verspürst den Wunsch, dich von der Arbeit und den Menschen, die damit zu tun haben, zurückzuziehen, machst nur das Nötigste und verlierst das Interesse an dem, was dir früher wichtig war. Oft ist diese Distanz eine Art, dich vor der Erschöpfung zu schützen, und kein Mangel an Charakter oder Pflichtgefühl. Es lohnt sich zu verstehen, wie es dazu gekommen ist und was sich ändern könnte.",
      "low": "Du engagierst dich weiterhin für deine Arbeit und für die Menschen, die damit zu tun haben. Selbst an schwierigen Tagen scheint sie für dich einen gewissen Sinn zu behalten. Diese Verbindung hilft, dich vor Erschöpfung zu schützen.",
      "tips": [
        "Erinnere dich daran, warum du dich für diese Arbeit entschieden hast, und such nach Aufgaben, die dem nahekommen.",
        "Sprich mit deiner Führungskraft oder mit Kolleginnen und Kollegen darüber, was der Arbeit den Sinn nimmt, etwa unrealistische Ziele oder fehlende Eigenständigkeit.",
        "Pflege unterstützende Beziehungen bei der Arbeit: Ein ehrliches Gespräch mit einer Vertrauensperson aus dem Kollegium kann sehr entlasten."
      ]
    },
    "efficacy": {
      "label": "Geringes Erfolgserleben",
      "desc": "Misst, wie sehr dir das Gefühl fehlt, dass deine Arbeit etwas bewirkt, dass du fähig bist und dass du dich weiterentwickelst. Die Aussagen in diesem Teil sind positiv, deshalb steigt der Wert, wenn sie selten zutrafen.",
      "high": "Du hattest selten das Gefühl, dass sich deine Mühe auszahlt, dass du fähig bist oder dass deine Arbeit etwas bewirkt. Dieses Gefühl kann von der Erschöpfung selbst kommen, die verzerrt, wie du deine Leistung siehst, oder von einem Umfeld mit wenig Anerkennung. Es misst nicht deinen Wert als Fachkraft.",
      "low": "Du nimmst weiterhin wahr, dass deine Arbeit etwas bewirkt, dass du Probleme lösen kannst und dass du dazulernst. Dieses Erfolgserleben hilft dir, auch in anstrengenderen Phasen motiviert zu bleiben.",
      "tips": [
        "Schreib am Ende der Woche drei Dinge auf, die du abgeschlossen oder gelöst hast, auch wenn sie noch so klein sind.",
        "Bitte eine Vertrauensperson um Rückmeldung zu deiner Arbeit, um einen ausgewogeneren Blick auf deine Leistung zu bekommen.",
        "Such dir eine kleine Herausforderung oder etwas Neues zum Lernen, das dir das Gefühl von Fortschritt zurückgibt."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Wenige Burnout-Anzeichen",
      "text": "Deine Antworten zeigen wenige Anzeichen von Burnout. Du scheinst Energie, Engagement und Erfolgserleben bei der Arbeit zu bewahren, trotz der normalen Schwierigkeiten des Alltags. Achte weiterhin auf die Grenzen und Gewohnheiten, die dir helfen, dieses Gleichgewicht zu halten."
    },
    "moderate": {
      "label": "Mittlere Burnout-Anzeichen",
      "text": "Deine Antworten zeigen einige Anzeichen arbeitsbedingter Erschöpfung. Jetzt ist ein guter Zeitpunkt zu handeln, bevor sich die Müdigkeit anstaut. Achte darauf, was dich am meisten belastet, probier die Vorschläge unten aus und sprich, wenn möglich, mit deiner Führungskraft über Anpassungen im Arbeitsalltag."
    },
    "high": {
      "label": "Starke Burnout-Anzeichen",
      "text": "Deine Antworten zeigen starke Anzeichen von Burnout, etwa große Müdigkeit, Distanz zur Arbeit und wenig Erfolgserleben. Diese Erschöpfung erfordert meist echte Veränderungen im Alltag und nicht nur mehr Willenskraft. Wende dich an eine psychologische oder ärztliche Fachperson, um einschätzen zu lassen, wie es dir geht und welche Wege in deinem Fall sinnvoll sind."
    }
  },
  "resultTitle": "Dein Burnout-Niveau",
  "resultIntro": "Das Ergebnis addiert deine Antworten zu den letzten drei Monaten. Bei den Aussagen über Erfolgserleben wird umgekehrt gezählt: Je seltener du Erfolgserleben hattest, desto höher fällt das Ergebnis aus. Unten siehst du, in welchem Bereich du liegst und wie deine Werte in den einzelnen Teilen ausfallen.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und beruht auf deiner eigenen Wahrnehmung. Burnout ist eine arbeitsbedingte Erschöpfung und für sich genommen keine medizinische Diagnose. Ähnliche Anzeichen treten auch bei Depression, Angst und körperlichen Gesundheitsproblemen auf, und nur eine qualifizierte Fachperson kann das beurteilen.",
  "help": "Wenn die Arbeit deine Gesundheit beeinträchtigt, wende dich an eine Psychologin oder einen Psychologen oder an deine Hausarztpraxis. Die Gesundheitsversorgung vor Ort kann dich unterstützen und bei Bedarf an spezialisierte psychiatrische oder psychosoziale Dienste weitervermitteln. Wenn dein Arbeitgeber einen betriebsärztlichen Dienst oder ein Programm zur Unterstützung von Beschäftigten anbietet, kann auch das helfen. Wenn du sehr stark belastet bist, wende dich an ein Krisentelefon oder eine Hotline für emotionale Unterstützung in deinem Land; viele davon sind kostenlos, vertraulich und rund um die Uhr erreichbar. Im Notfall wähle die 112 oder die örtliche Notrufnummer."
};

export default t;
