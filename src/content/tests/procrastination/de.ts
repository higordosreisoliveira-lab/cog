// procrastination — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Prokrastination",
  "desc": "Finde heraus, was dich normalerweise dazu bringt, Aufgaben aufzuschieben, und lerne praktische Strategien für jeden Grund kennen.",
  "intro": "Fast alle schieben ab und zu Aufgaben auf, aber die Gründe sind von Mensch zu Mensch verschieden. Dieser Fragebogen erfasst vier häufige Gründe: Unbehagen vermeiden, die Angst, etwas nicht perfekt zu machen, Ablenkung und fehlende Klarheit bei der Planung. Er besteht aus 16 Aussagen. Denk an die letzten Wochen und gib an, wie oft dir jede Situation passiert. Es gibt keine richtigen Antworten: Ziel ist es zu verstehen, was in deinem Fall am stärksten ins Gewicht fällt, damit du die passenden Strategien wählen kannst.",
  "scale": [
    "Nie",
    "Selten",
    "Manchmal",
    "Oft",
    "Immer"
  ],
  "items": [
    "Ich schiebe Aufgaben auf, die mir Angst machen, obwohl ich weiß, dass sie wichtig sind.",
    "Ich fange spät an, weil ich das Gefühl habe, dass alles von Anfang an perfekt sein muss.",
    "Ich greife zum Handy, um schnell etwas nachzusehen, und verbringe am Ende viel mehr Zeit damit als geplant.",
    "Ich schiebe eine Aufgabe auf, weil ich nicht genau weiß, wo ich anfangen soll.",
    "Ich schiebe Anrufe, Nachrichten oder Gespräche auf, die schwierig werden könnten.",
    "Ich überarbeite und verbessere eine Arbeit so lange, dass ich sie am Ende zu spät abgebe.",
    "Mitten in einer Aufgabe wechsle ich zu etwas anderem, sobald etwas Interessanteres auftaucht.",
    "Ich habe so viel zu tun, dass ich nicht weiß, womit ich anfangen soll.",
    "Ich vermeide es, E-Mails, Rechnungen oder Nachrichten zu öffnen, aus Sorge, was mich erwarten könnte.",
    "Ich fange lieber gar nicht erst an, als zu riskieren, etwas schlechter zu machen, als ich es von mir erwarte.",
    "Benachrichtigungen, Gespräche oder Geräusche in meiner Umgebung reißen mich leicht aus dem, was ich gerade tue.",
    "Ich schätze falsch ein, wie lange eine Aufgabe dauert, und habe am Ende weniger Zeit als nötig.",
    "Wenn mir eine Aufgabe langweilig oder unangenehm erscheint, suche ich mir etwas Angenehmeres zu tun.",
    "Ich warte auf den idealen Moment mit viel Zeit und Energie, um wichtige Aufgaben anzufangen.",
    "Ich mache, wozu ich gerade Lust habe, obwohl ich weiß, dass ich eigentlich etwas anderes tun sollte.",
    "Wenn eine Aufgabe groß oder unklar ist, fällt es mir schwer, sie in konkrete Schritte zu zerlegen."
  ],
  "dims": {
    "avoidance": {
      "label": "Unbehagen vermeiden",
      "desc": "Aufgaben aufschieben, weil sie Langeweile, Angst, Furcht oder andere unangenehme Gefühle auslösen.",
      "high": "Ein großer Teil deines Aufschiebens scheint aus dem Wunsch zu kommen, unangenehmen Gefühlen wie Angst, Langeweile oder der Furcht vor einer schlechten Rückmeldung auszuweichen. Das zeigt, dass du Gefühle intensiv wahrnimmst, was dir auch hilft zu erkennen, was wichtig ist. Achte darauf, dass die Erleichterung durch das Aufschieben nur kurz anhält und die Aufgabe danach oft noch schwerer wiegt.",
      "low": "Das Unbehagen, das eine Aufgabe auslöst, hält dich selten davon ab, mit ihr anzufangen. Diese Fähigkeit, dich Langweiligem oder Schwierigem zu stellen, ist ein großer Vorteil. Achte darauf, dich nicht zum Weitermachen zu zwingen, wenn Müdigkeit oder Überlastung nach einer Pause verlangen.",
      "tips": [
        "Fang mit nur zwei Minuten an: Öffne die Datei oder schreib den ersten Satz. Danach kannst du aufhören, wenn du willst. Der Anfang ist meist der schwierigste Teil.",
        "Benenne, was du fühlst, etwa „ich habe Angst, kritisiert zu werden“. Ein Gefühl anzuerkennen schwächt es oft ab.",
        "Erledige die unangenehmste Aufgabe gleich zu Beginn des Tages, bevor du E-Mails oder soziale Medien öffnest."
      ]
    },
    "perfectionism": {
      "label": "Perfektionismus",
      "desc": "Aufgaben aufschieben aus Angst, sie nicht gut genug zu machen, oder weil man auf den idealen Moment zum Anfangen wartet.",
      "high": "Du scheinst Dinge aufzuschieben, weil sie perfekt werden sollen oder weil du darauf wartest, ideale Zeit und Energie zum Anfangen zu haben. Diese Sorgfalt zeigt, dass du deine Arbeit ernst nimmst und hohe Ansprüche hast. Achte darauf, dass der ideale Moment selten kommt und die Angst vor Fehlern wichtige Abgaben verzögern oder verhindern kann.",
      "low": "Du fängst meist an, auch wenn nicht alles perfekt ist, und nimmst unterwegs Anpassungen vor. Das macht dich schnell und hilft dir, durch die Praxis zu lernen. Achte darauf, nichts mit weniger Sorgfalt abzugeben, als die Situation verlangt, vor allem bei wichtigen Aufgaben.",
      "tips": [
        "Schreib vor dem Start auf, was für diese Aufgabe „gut genug“ bedeutet.",
        "Mach eine schnelle erste Version und sei dir bewusst, dass du sie später verbessern wirst.",
        "Leg ein Zeitlimit für Überarbeitungen fest und gib die Arbeit ab, wenn es abgelaufen ist."
      ]
    },
    "distraction": {
      "label": "Ablenkung und Impulse",
      "desc": "Aufgaben aufschieben, weil die Aufmerksamkeit von unmittelbareren Reizen angezogen wird, etwa vom Handy, von Gesprächen oder angenehmeren Tätigkeiten.",
      "high": "Deine Aufmerksamkeit scheint leicht von Benachrichtigungen, Gesprächen oder Tätigkeiten angezogen zu werden, die interessanter sind als die aktuelle Aufgabe. Diese Empfänglichkeit für neue Reize kann dich auch schnell und kreativ machen. Achte darauf, dass kleine Unterbrechungen sich summieren und unbemerkt Stunden deines Tages verschlingen.",
      "low": "Du kannst konzentriert bleiben, auch wenn um dich herum viel los ist, und widerstehst gut dem Drang, eine Aufgabe gegen etwas Angenehmeres zu tauschen. Das ist ein großer Vorteil bei Arbeiten, die Konzentration erfordern. Achte darauf, dich nicht so sehr in eine Aufgabe zu vertiefen, dass du wichtige Bitten oder Veränderungen um dich herum übersiehst.",
      "tips": [
        "Leg das Handy in einen anderen Raum oder schalte es stumm, während du an etwas Wichtigem arbeitest.",
        "Arbeite in Blöcken von 25 Minuten mit jeweils 5 Minuten Pause dazwischen.",
        "Notiere Ideen und Impulse, die während der Aufgabe auftauchen, um dich später darum zu kümmern, statt zu unterbrechen, was du gerade tust."
      ]
    },
    "planning": {
      "label": "Fehlende Klarheit und Planung",
      "desc": "Aufgaben aufschieben, weil unklar ist, wo man anfangen soll, was zuerst kommt oder wie lange etwas dauern wird.",
      "high": "Oft schiebst du nicht aus fehlender Lust auf, sondern weil die Aufgabe groß, unklar oder verwirrend wirkt. Das zeigt, dass du die Komplexität der Dinge erkennst. Achte darauf, dass ohne konkrete Schritte selbst einfache Aufgaben schwierig erscheinen und am Ende liegen bleiben.",
      "low": "Du weißt meist, wo du anfangen sollst, und kannst große Aufgaben in praktische Schritte zerlegen. Das hilft dir, im Rhythmus zu bleiben und Fristen einzuhalten. Achte darauf, nicht so genau zu planen, dass es dir schwerfällt, dich anzupassen, wenn sich etwas ändert.",
      "tips": [
        "Teile jede große Aufgabe in Schritte von höchstens 30 Minuten auf und schreib auf, welcher der erste ist.",
        "Leg vorher fest, wann und wo du die Aufgabe erledigst, zum Beispiel: „Am Dienstag um 9 Uhr schreibe ich an meinem Schreibtisch die Einleitung des Berichts.“",
        "Schätze, wie lange jede Aufgabe dauern wird, und plane einen Puffer von mindestens 50 % ein."
      ]
    }
  },
  "resultTitle": "Warum du Dinge aufschiebst",
  "resultIntro": "Jeder Balken zeigt, wie stark ein Grund in deinen Antworten vorkommt. Je höher der Wert, desto mehr trägt dieser Faktor zu deinem Aufschieben bei. Fang mit den Strategien für den Grund mit dem höchsten Wert an.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und keine Diagnose. Wenn es dir ständig schwerfällt, Aufgaben anzufangen oder abzuschließen, und das dein Studium, deine Arbeit oder dein Privatleben beeinträchtigt, lohnt sich ein Gespräch mit einer Ärztin, einem Arzt oder einer psychologischen Fachperson, denn es kann mit Themen wie Angst, Depression oder ADHS zusammenhängen."
};

export default t;
