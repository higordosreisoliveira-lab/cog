// time — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Zeitmanagement",
  "desc": "Finde heraus, wie du Prioritäten setzt, planst, deinen Fokus schützt und Arbeit und Erholung ins Gleichgewicht bringst.",
  "intro": "Dieser Fragebogen erfasst vier Gewohnheiten rund um das Zeitmanagement: Prioritäten setzen, planen, fokussiert bleiben und Grenzen sowie Erholungszeiten respektieren. Er besteht aus 16 Aussagen. Gib bei jeder an, wie gut sie deinen derzeitigen Alltag beschreibt, ob bei der Arbeit, im Studium oder zu Hause. Es gibt keine richtigen Antworten: Ziel ist es, die Punkte zu finden, die deinen Alltag am meisten verbessern können.",
  "scale": [
    "Stimme gar nicht zu",
    "Stimme nicht zu",
    "Neutral",
    "Stimme zu",
    "Stimme voll zu"
  ],
  "items": [
    "Ich weiß, welche Aufgaben in meiner Woche am wichtigsten sind.",
    "Ich nehme mir ein paar Minuten Zeit, um meinen Tag oder meine Woche zu planen.",
    "Ich kann längere Zeit an einer Aufgabe arbeiten, ohne mich zu unterbrechen.",
    "Ich kann Bitten ablehnen, wenn sie dem im Weg stehen, was ich schon zugesagt habe.",
    "Ich unterscheide zwischen dem, was dringend, und dem, was wirklich wichtig ist.",
    "Oft merke ich erst im letzten Moment, dass ich etwas Wichtiges abgeben muss.",
    "Ich schalte Benachrichtigungen stumm, wenn ich mich konzentrieren muss.",
    "Ich mache im Laufe des Tages Pausen, um mich zu erholen, auch wenn viel zu tun ist.",
    "Ich verbringe einen großen Teil des Tages mit kleinen Anfragen und lasse liegen, was am wichtigsten ist.",
    "Ich notiere Fristen und Termine, sobald ich von ihnen erfahre.",
    "Ich mache eine Sache nach der anderen, statt zu versuchen, mehrere gleichzeitig zu erledigen.",
    "Ich beantworte Nachrichten zur Arbeit oder zum Studium abends, am Wochenende oder im Urlaub.",
    "Bevor ich eine neue Aufgabe annehme, überlege ich, ob sie wichtiger ist als das, woran ich gerade arbeite.",
    "Wenn ich plane, lasse ich einen zeitlichen Puffer für Unvorhergesehenes.",
    "Ich unterbreche, was ich gerade tue, jedes Mal, wenn eine Nachricht oder eine Bitte eintrifft.",
    "Ich habe eine feste Uhrzeit für den Feierabend und halte mich meistens daran."
  ],
  "dims": {
    "priorities": {
      "label": "Prioritäten",
      "desc": "Wissen, was am wichtigsten ist, und deine Zeit zuerst dafür einsetzen, bevor du dich um das kümmerst, was nur dringend oder einfach ist.",
      "high": "Du weißt meist, worauf es wirklich ankommt, und widmest diesen Aufgaben deine beste Zeit. So führt deine Mühe zu Ergebnissen, die einen Unterschied machen. Achte auf Starrheit: Manchmal verdient eine unerwartete Bitte Aufmerksamkeit, auch wenn sie nicht im Plan steht.",
      "low": "Du reagierst eher auf das, was zuerst kommt, und zeigst dich offen für verschiedene Anliegen. Das macht dich flexibel und zu jemandem, auf den andere zählen können. Achte darauf, nicht am Ende des Tages viel erledigt, aber bei dem, was am wichtigsten ist, kaum Fortschritte gemacht zu haben.",
      "tips": [
        "Wähle zu Beginn jedes Tages die drei wichtigsten Aufgaben aus und fang mit einer davon an.",
        "Frag dich, bevor du ein neues Anliegen annimmst, ob es wichtiger ist als das, woran du gerade arbeitest.",
        "Reserviere die Zeit, in der du am meisten Energie hast, für die wichtigste Aufgabe des Tages."
      ]
    },
    "planning": {
      "label": "Planung",
      "desc": "Den Tag und die Woche im Voraus organisieren, Fristen im Blick behalten und abschätzen, wie lange jede Aufgabe dauert.",
      "high": "Du planst meist im Voraus, trägst Termine ein und schätzt ab, wie lange die Dinge dauern werden. Das verringert Überraschungen und gibt dir Ruhe. Achte darauf, nicht zu viel Zeit mit Planen zu verbringen und nicht frustriert zu sein, wenn der Tag anders verläuft als gedacht.",
      "low": "Du entscheidest eher im Laufe des Tages, was du tust, und das macht dich spontan und gut im Improvisieren. Achte auf Überraschungen: Fristen, die du spät bemerkst, und Aufgaben, die länger dauern, als du dachtest.",
      "tips": [
        "Nimm dir zu Beginn jeder Woche zehn Minuten Zeit, um die nächsten Tage zu planen.",
        "Trag jede Frist und jeden Termin sofort in deinen Kalender ein, sobald du davon erfährst.",
        "Lass bei der Tagesplanung etwa ein Drittel der Zeit für Unvorhergesehenes frei."
      ]
    },
    "focus": {
      "label": "Fokus",
      "desc": "Bei einer Aufgabe nach der anderen konzentriert bleiben und deine Zeit vor Unterbrechungen schützen.",
      "high": "Du kannst dich lange auf eine Aufgabe konzentrieren und schützt deine Arbeit vor Unterbrechungen. Das steigert die Qualität und das Tempo deiner Arbeit. Achte darauf, nicht zu lange unerreichbar zu sein und Menschen aufzuhalten, die auf eine Antwort von dir warten.",
      "low": "Du antwortest schnell auf Nachrichten und Bitten und behältst mehrere Dinge gleichzeitig im Blick. Das macht dich ansprechbar und flink. Achte darauf, dass ständiges Wechseln zwischen Aufgaben ermüdet und jede Aufgabe länger dauern lässt, als sie mit voller Aufmerksamkeit dauern würde.",
      "tips": [
        "Blocke in deinem Kalender Zeiträume von 60 bis 90 Minuten für konzentriertes Arbeiten.",
        "Schalte Benachrichtigungen stumm und leg zwei oder drei feste Zeiten am Tag fest, zu denen du Nachrichten liest.",
        "Schließ eine Aufgabe oder einen klar abgegrenzten Teil davon ab, bevor du mit einer anderen beginnst."
      ]
    },
    "boundaries": {
      "label": "Grenzen und Erholung",
      "desc": "Nein sagen, wenn es nötig ist, Pausen machen und Arbeitszeit von Erholungszeit trennen.",
      "high": "Du kannst Bitten ablehnen, die deine Prioritäten gefährden, und schützt deine Pausen. Das bewahrt auf lange Sicht deine Energie und deine Gesundheit. Achte darauf, nicht wenig verfügbar zu wirken, wenn die Gruppe wirklich einen zusätzlichen Einsatz braucht.",
      "low": "Du bist meist erreichbar und sagst selten Nein, weshalb sich andere sehr auf dich verlassen. Achte auf die angesammelte Erschöpfung: Ohne Pausen und Grenzen lassen deine Energie und die Qualität deiner Arbeit mit der Zeit nach.",
      "tips": [
        "Leg eine Uhrzeit für den Feierabend fest und schalte danach die Benachrichtigungen aus.",
        "Mach alle ein bis zwei Stunden eine kurze Pause, um aufzustehen, etwas Wasser zu trinken und die Augen auszuruhen.",
        "Nutze zum Ablehnen einer Bitte einen einfachen Satz, etwa „Gerade schaffe ich das nicht, aber am Donnerstag kann ich helfen“."
      ]
    }
  },
  "resultTitle": "Dein Profil im Zeitmanagement",
  "resultIntro": "Hier siehst du deine Werte bei jeder Gewohnheit. Höhere Werte zeigen gefestigtere Gewohnheiten, aber auch sie haben ihre Stolpersteine. Such dir ein oder zwei Gewohnheiten aus, an denen du jeweils arbeitest.",
  "note": "Dieses Ergebnis ist ein Werkzeug zur Selbstreflexion, beruht auf deinen eigenen Antworten und ist keine professionelle Einschätzung. Wenn Erschöpfung oder Überlastung häufig vorkommen, lohnt sich ein Gespräch mit deiner Führungskraft oder mit einer Ärztin oder einem Arzt."
};

export default t;
