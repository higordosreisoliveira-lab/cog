// dopamine — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Dopamin-Test",
  "desc": "Finde heraus, wie es um deine Gewohnheiten rund um das Belohnungssystem des Gehirns steht: schnelle Reize, Langeweile, Bildschirme und langfristige Ziele.",
  "intro": "Dieser Fragebogen betrachtet Alltagsgewohnheiten, die mit dem Belohnungssystem des Gehirns zusammenhängen. Dopamin ist ein Botenstoff, den das Gehirn zur Signalübertragung nutzt, und hängt mit Motivation und der Suche nach Belohnungen zusammen. Wichtig: Trotz seines bekannten Namens misst dieser Test nicht das Dopamin in deinem Körper. Das kann kein Fragebogen, und medizinische Untersuchungen, die Dopamin erfassen können, sind sehr speziell und werden dafür nur selten eingesetzt. Der Test erfasst stattdessen vier Bereiche von Gewohnheiten: die Suche nach schnellen Belohnungen, Schwierigkeiten mit Langeweile, Motivation für langfristige Ziele und Bildschirmgewohnheiten. Er besteht aus 16 Aussagen. Denk an die letzten 2 Wochen und gib an, wie oft dir jede Situation passiert ist. Antworte ehrlich und ohne lange nachzudenken: Es gibt keine richtigen oder falschen Antworten.",
  "scale": [
    "Nie",
    "Selten",
    "Manchmal",
    "Oft",
    "Immer"
  ],
  "items": [
    "Ich verbringe mehr Zeit als geplant damit, Kurzvideos anzuschauen oder durch soziale Netzwerke zu scrollen.",
    "Wenn ich warten muss, etwa in einer Schlange oder in öffentlichen Verkehrsmitteln, fällt es mir schwer, einfach nichts zu tun.",
    "Ich kann mich wochenlang einem Ziel widmen, auch wenn sich noch keine Ergebnisse zeigen.",
    "Ich greife in den ersten Minuten nach dem Aufwachen zum Handy.",
    "Ich kaufe Dinge spontan, vor allem im Internet, und merke danach, dass ich sie nicht gebraucht hätte.",
    "Bei langsamen oder sich wiederholenden Aufgaben verliere ich die Geduld und höre auf, bevor ich fertig bin.",
    "Ich kann auf ein unmittelbares Vergnügen verzichten, wenn es etwas Wichtiges für meine Zukunft behindert.",
    "Ich bleibe im Bett noch am Handy und schlafe am Ende später ein als geplant.",
    "Wenn ich müde oder niedergeschlagen bin, suche ich nach etwas, das sofort Freude macht, etwa etwas Süßes, einen Snack oder ein Video.",
    "Es fällt mir schwer, einen langen Text zu lesen oder einen ganzen Film anzuschauen, ohne mich mit etwas anderem abzulenken.",
    "Ich beginne wichtige Aufgaben zu der Zeit, die ich mir vorgenommen habe, ohne sie zugunsten von etwas Lustigerem aufzuschieben.",
    "Ich entsperre mein Handy ohne klaren Grund, einfach aus Gewohnheit.",
    "Wenn eine Benachrichtigung kommt, unterbreche ich, was ich gerade tue, um nachzusehen, worum es geht.",
    "Einfache Tätigkeiten wie Kochen oder Spazierengehen kommen mir langweilig vor, wenn es nicht gleichzeitig etwas zu sehen oder zu hören gibt.",
    "Ich empfinde Zufriedenheit über Fortschritte bei langen Vorhaben, etwa beim Lernen, beim Training oder beim Sparen.",
    "Ich nutze mehrere Bildschirme gleichzeitig, zum Beispiel schaue ich eine Serie und dabei aufs Handy."
  ],
  "dims": {
    "quickRewards": {
      "label": "Schnelle Belohnungen",
      "desc": "Misst, wie sehr du auf unmittelbare Vergnügen zurückgreifst, etwa soziale Netzwerke, Kurzvideos, Benachrichtigungen, Spontankäufe und Snacks.",
      "high": "Du greifst oft auf schnelle Reize zurück, häufig um dich zu entspannen oder deine Stimmung zu verändern. Das ist verbreitet und kein Makel: Viele dieser Reize sind gerade dafür gemacht, deine Aufmerksamkeit zu fesseln. Worauf du achten solltest, ist, ob sie Zeit für Dinge einnehmen, die dir wichtiger sind, oder das Gefühl verlorener Zeit hinterlassen.",
      "low": "Du greifst selten auf unmittelbare Vergnügen zurück und entscheidest meist bewusst, wie du deine freie Zeit nutzt. Das hilft dir, fokussiert zu bleiben und Ruhepausen besser zu genießen. Behalte trotzdem müde Tage im Blick, denn dann wächst meist das Verlangen nach schnellen Reizen.",
      "tips": [
        "Schalte Benachrichtigungen ab, die nicht wichtig sind, und behalte nur die von Menschen und Diensten, die wirklich zählen.",
        "Bevor du eine App öffnest, leg fest, was du darin tun willst und wie lange.",
        "Warte bei ungeplanten Online-Käufen 24 Stunden, bevor du die Bestellung abschließt."
      ]
    },
    "boredom": {
      "label": "Schwierigkeiten mit Langeweile",
      "desc": "Misst, wie schwer es dir fällt, ohne Reize auszukommen, zu warten oder dich auf langsame und sich wiederholende Aufgaben zu konzentrieren.",
      "high": "Wartezeiten und langsame Aufgaben sind dir meist unangenehm, und der Drang, nach etwas Interessanterem zu suchen, kommt schnell. Das ist in einem Alltag voller Reize sehr verbreitet. Die Toleranz für Langeweile lässt sich nach und nach trainieren, wie jede andere Gewohnheit.",
      "low": "Du kommst gut mit Wartezeiten, Pausen und Aufgaben zurecht, die Geduld erfordern. Das hilft dir, dich länger zu konzentrieren und zu Ende zu bringen, was du anfängst. Momente ohne Reize geben dem Kopf außerdem Raum, sich zu erholen und auf neue Ideen zu kommen.",
      "tips": [
        "Übe jeden Tag ein paar Minuten ohne Reize, etwa beim Warten in einer Schlange oder auf einem kurzen Weg, ohne zum Handy zu greifen.",
        "Arbeite bei langen Aufgaben in Blöcken von 20 bis 25 Minuten mit kurzen Pausen dazwischen.",
        "Mach ab und zu nur eine Sache auf einmal, etwa ohne Bildschirm essen oder ohne Kopfhörer spazieren gehen."
      ]
    },
    "longTerm": {
      "label": "Langfristige Ziele",
      "desc": "Misst die Motivation für Ziele, die erst nach einiger Zeit Ergebnisse bringen, etwa Lernen, Training oder Sparen. Hier bedeutet ein hoher Wert, dass es dir schwerer fällt, solche Ziele zu verfolgen; ein niedriger Wert, dass es dir leichter fällt.",
      "high": "Bei Zielen, die Zeit brauchen, motiviert zu bleiben, fällt dir derzeit schwer, vor allem wenn schnellere und angenehmere Möglichkeiten in Reichweite sind. Das heißt nicht, dass dir die Fähigkeit fehlt: Langfristige Ziele bringen am Anfang wenig Belohnung, und das Gehirn bevorzugt meist das Unmittelbare. Den Weg in kleinere Etappen aufzuteilen, hilft oft sehr.",
      "low": "Du kannst bei Zielen dranbleiben, die erst nach einiger Zeit Ergebnisse bringen, und schätzt Fortschritte, die Schritt für Schritt entstehen. Diese Fähigkeit hilft dir, dauerhafte Erfolge beim Lernen, im Beruf und bei der Gesundheit aufzubauen. Achte darauf, unterwegs Erholung und Freizeit nicht zu vernachlässigen.",
      "tips": [
        "Teile jedes große Ziel in kleine Etappen auf und würdige jede abgeschlossene Etappe mit einer einfachen Belohnung.",
        "Halte deine Fortschritte in einem Kalender oder einer App fest, um zu sehen, wie weit du schon gekommen bist.",
        "Erledige wichtige Aufgaben zu der Tageszeit, in der du meist am meisten Energie hast, bevor du soziale Netzwerke oder andere Apps öffnest."
      ]
    },
    "screens": {
      "label": "Bildschirmgewohnheiten",
      "desc": "Misst, welche Rolle das Handy und andere Bildschirme in deinem Alltag spielen: nach dem Aufwachen, vor dem Schlafengehen, beim grundlosen Nachsehen aufs Handy und bei der Nutzung mehrerer Bildschirme gleichzeitig.",
      "high": "Bildschirme sind in vielen Momenten deines Tages präsent, auch direkt nach dem Aufwachen und beim Schlafengehen. Das ist heute verbreitet, aber die Nutzung am Abend kann das Einschlafen verzögern und den Schlaf beeinträchtigen, und ständiges Nachsehen aufs Handy teilt die Aufmerksamkeit. Kleine Veränderungen in deiner Umgebung funktionieren meist besser, als sich nur auf Willenskraft zu verlassen.",
      "low": "Du nutzt Bildschirme bewusster und hältst einige Momente des Tages frei davon, etwa den frühen Morgen und die Zeit vor dem Schlafengehen. Das tut deinem Schlaf, deiner Konzentration und deiner Erholung gut. Es lohnt sich, diese Grenzen beizubehalten, vor allem in hektischeren Phasen.",
      "tips": [
        "Lass das Handy nachts außerhalb des Schlafzimmers und nutze einen normalen Wecker.",
        "Verzichte in den 30 bis 60 Minuten vor dem Schlafengehen auf Bildschirme und versuch, regelmäßige Schlafenszeiten einzuhalten.",
        "Ersetze das Handy in den Pausen des Tages durch etwas Bewegung, etwa einen kurzen Spaziergang oder ein paar Dehnübungen."
      ]
    }
  },
  "bands": {
    "balanced": {
      "label": "Ausgeglichen",
      "text": "Deine Antworten zeigen einen ausgewogenen Umgang mit schnellen Reizen und Bildschirmen. Du scheinst gut mit Langeweile zurechtzukommen und die Motivation für Ziele zu halten, die Zeit brauchen. Pflege weiterhin die Gewohnheiten, die dir guttun, etwa regelmäßigen Schlaf und Zeiten ohne Bildschirm."
    },
    "attention": {
      "label": "Aufmerksam bleiben",
      "text": "Deine Antworten zeigen, dass einige Gewohnheiten rund um schnelle Reize bereits einen wichtigen Platz in deinem Alltag einnehmen. Das ist sehr verbreitet und kein Grund zur Beunruhigung. Schau, welche Bereiche die höchsten Werte hatten, und wähle ein oder zwei kleine Veränderungen aus, die du in den nächsten Wochen ausprobierst."
    },
    "overloaded": {
      "label": "Reizüberflutung",
      "text": "Deine Antworten zeigen, dass schnelle Reize und Bildschirme in deinem Alltag sehr präsent sind und dass dir Warten, Konzentrieren oder das Verfolgen langfristiger Ziele womöglich schwerer fällt. Das ist immer häufiger der Fall und lässt sich mit schrittweisen Anpassungen deiner Gewohnheiten ändern, ohne radikale Einschnitte. Fang damit an, die Reizflut in ein oder zwei Momenten des Tages zu verringern, etwa nach dem Aufwachen und vor dem Schlafengehen, und beobachte, wie du dich dabei fühlst."
    }
  },
  "resultTitle": "Deine Belohnungsgewohnheiten",
  "resultIntro": "Das Ergebnis fasst die vier Bereiche zusammen und zeigt, wie stark deine aktuellen Gewohnheiten von schnellen Reizen abhängen. Denk daran: Es misst nicht das Dopamin in deinem Körper, sondern Verhaltensmuster, die sich mit der Zeit und mit Übung verändern können.",
  "note": "Dieser Test ist ein Werkzeug zur Selbstreflexion und beruht auf deinen eigenen Antworten. Er misst weder Dopamin noch einen anderen Stoff im Körper, ist keine medizinische Untersuchung und eignet sich nicht für eine Diagnose. Ein Zuviel an Reizen zu verringern, kann als Veränderung von Gewohnheiten hilfreich sein, ist aber keine medizinische Behandlung. Wenn dir eine Gewohnheit außer Kontrolle zu geraten scheint oder deinem Leben schadet, sprich mit einer medizinischen oder psychologischen Fachperson.",
  "help": "Wenn du das Gefühl hast, deine Nutzung von Handy, Videospielen, Glücksspiel oder Sportwetten oder dein Kaufverhalten nicht kontrollieren zu können, oder wenn das deinen Schlaf, deine Arbeit, deine Finanzen oder deine Beziehungen beeinträchtigt, wende dich an eine Psychotherapeutin, einen Psychotherapeuten oder deine Ärztin bzw. deinen Arzt. Bei zwanghaftem Spielen, Wetten oder Kaufen gibt es außerdem spezialisierte Beratungsstellen und Selbsthilfegruppen, die helfen können."
};

export default t;
