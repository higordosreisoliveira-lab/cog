import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Emotionale Intelligenz",
  "desc": "Finde heraus, wie du im Alltag deine eigenen Gefühle und die Gefühle anderer wahrnimmst und mit ihnen umgehst.",
  "intro": "Dieser Fragebogen erfasst vier Bereiche der emotionalen Intelligenz: Selbstwahrnehmung, Selbststeuerung, Empathie und soziale Kompetenz. Er besteht aus 24 Aussagen über Situationen aus dem Alltag. Gib bei jeder an, wie gut sie beschreibt, wie du dich normalerweise verhältst, und nicht, wie du dich deiner Meinung nach verhalten solltest. Es gibt keine richtigen Antworten: Je ehrlicher du antwortest, desto nützlicher ist das Ergebnis.",
  "scale": [
    "Stimme gar nicht zu",
    "Stimme nicht zu",
    "Neutral",
    "Stimme zu",
    "Stimme voll zu"
  ],
  "items": [
    "Ich kann benennen, was ich fühle, auch wenn es eine Mischung aus verschiedenen Gefühlen ist.",
    "Wenn ich wütend bin, kann ich kurz abwarten, bevor ich antworte.",
    "Ich merke, wenn jemand bedrückt oder verärgert ist, auch wenn die Person nichts sagt.",
    "Ich kann Meinungsverschiedenheiten klären, ohne dass das Gespräch in Streit ausartet.",
    "Oft wird mir erst im Nachhinein klar, was ich in einer Situation gefühlt habe.",
    "In Diskussionen sage ich Dinge, die ich hinterher bereue.",
    "Bevor ich jemanden verurteile, versuche ich zu verstehen, was die Person gerade durchmacht.",
    "Ich gehe schwierigen Gesprächen aus dem Weg, auch wenn sie nötig sind.",
    "Ich merke, wenn meine Stimmung meine Entscheidungen beeinflusst.",
    "Nach einem schlechten Tag kann ich mich beruhigen, ohne es an anderen auszulassen.",
    "Es fällt mir schwer zu verstehen, warum manche Menschen so heftig reagieren.",
    "Ich kann eine Bitte bestimmt und höflich ablehnen.",
    "Ich weiß, welche Situationen mich leicht auf die Palme bringen.",
    "Wenn ich kritisiert werde, höre ich bis zum Ende zu, bevor ich mich verteidige.",
    "Wenn mir jemand von einem Problem erzählt, höre ich aufmerksam zu, statt schon über meine Antwort nachzudenken.",
    "Bei Gruppenarbeiten helfe ich den anderen, sich zu einigen.",
    "Es fällt mir schwer zu erklären, was ich fühle.",
    "Wenn etwas schiefgeht, kann ich lange nicht aufhören, darüber nachzudenken.",
    "Wenn ich irgendwo ankomme, spüre ich meist sofort die Stimmung im Raum.",
    "An neuen Orten fällt es mir schwer, auf Menschen zuzugehen.",
    "Ich bemerke Signale meines Körpers, wie Anspannung oder Müdigkeit, wenn mich etwas belastet.",
    "Ich kann mich auf das konzentrieren, was ich zu tun habe, auch an einem emotional schwierigen Tag.",
    "Wenn jemand anders denkt als ich, habe ich wenig Geduld, mir die Gründe anzuhören.",
    "Ich kann ein Problem in der Arbeit einer anderen Person ansprechen, ohne dass sie sich angegriffen fühlt."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Selbstwahrnehmung",
      "desc": "Wahrnehmen und benennen, was du fühlst, und verstehen, woher diese Gefühle kommen und wie sie dein Verhalten beeinflussen.",
      "high": "Du merkst meist, was du fühlst und warum, oft schon bevor du reagierst. Das hilft dir, bewusstere Entscheidungen zu treffen und anderen deine Bedürfnisse zu erklären. Achte darauf, nicht jedes Gefühl bis ins Letzte zu analysieren, statt einfach weiterzumachen.",
      "low": "Du konzentrierst dich eher auf das, was zu tun ist, als auf das, was du fühlst. Das hilft dir, pragmatisch zu handeln. Achte darauf, dass du Gefühle oft erst bemerkst, wenn die Situation vorbei ist und sie dein Verhalten schon beeinflusst haben.",
      "tips": [
        "Halte ein paar Mal am Tag für einige Sekunden inne und frag dich: Was fühle ich gerade?",
        "Statt nur zu sagen, dass es dir „schlecht“ geht, versuch herauszufinden, ob es Müdigkeit, Frust, Traurigkeit oder Angst ist.",
        "Notiere Situationen, die dich aufgewühlt haben, und was direkt davor passiert ist."
      ]
    },
    "selfRegulation": {
      "label": "Selbststeuerung",
      "desc": "Mit starken Gefühlen umgehen, ohne impulsiv zu handeln, wieder zur Ruhe kommen und auch an schwierigen Tagen fokussiert bleiben.",
      "high": "Du kannst Wut, Frust oder Angst spüren, ohne dass sie dein Verhalten bestimmen. Das wirkt vertrauenswürdig und vermeidet unnötige Konflikte. Achte darauf, Gefühle nicht herunterzuschlucken, die ausgesprochen werden sollten, denn so kann sich Anspannung aufstauen.",
      "low": "Du reagierst schnell und intensiv, und andere wissen meist genau, was in dir vorgeht. Diese Spontaneität kann ehrlich und voller Energie sein. Achte auf Reaktionen in der Hitze des Moments, die manchmal zu Reue führen oder Beziehungen belasten.",
      "tips": [
        "Wenn du merkst, dass ein Gefühl hochkocht, mach eine kurze Pause, atme tief durch und antworte erst dann.",
        "Triff keine wichtigen Entscheidungen und schick keine wichtigen Nachrichten, wenn du sehr wütend bist.",
        "Sorge für ein regelmäßiges Ventil, zum Beispiel Sport, einen Spaziergang oder ein Gespräch mit einer Vertrauensperson."
      ]
    },
    "empathy": {
      "label": "Empathie",
      "desc": "Wahrnehmen, was andere fühlen, und ihre Sichtweise verstehen, auch wenn sie sich von deiner unterscheidet.",
      "high": "Du spürst leicht die Stimmung in einem Raum und was Menschen fühlen, auch ohne Worte. Dadurch fühlen sich andere bei dir verstanden. Achte darauf, die Gefühle anderer nicht so stark aufzunehmen, dass du dich dabei erschöpfst.",
      "low": "Du konzentrierst dich eher auf die Fakten und das eigentliche Problem als auf die Gefühle, die dabei mitspielen. Das hilft dir, in heiklen Situationen sachlich zu bleiben. Achte darauf, Signale nicht zu übersehen, dass jemand Unterstützung braucht, und nicht ungewollt distanziert zu wirken.",
      "tips": [
        "Wiederhole in wichtigen Gesprächen mit eigenen Worten, was du verstanden hast, bevor du antwortest.",
        "Frag „Wie geht es dir damit?“, bevor du direkt zu Lösungen übergehst.",
        "Achte auf Mimik, Tonfall und Pausen, nicht nur auf das, was gesagt wird."
      ]
    },
    "social": {
      "label": "Soziale Kompetenz",
      "desc": "Klar kommunizieren, Konflikte lösen, zusammenarbeiten und gute Beziehungen aufbauen, im Beruf und im Privatleben.",
      "high": "Du kommst gut mit schwierigen Gesprächen zurecht, kannst klar Position beziehen und hilfst Gruppen, sich zu einigen. Deshalb wenden sich andere oft an dich, wenn etwas geklärt werden muss. Achte darauf, nicht jeden Konflikt zu deiner Aufgabe zu machen, sonst wird es dir schnell zu viel.",
      "low": "Du gehst Reibereien lieber aus dem Weg und fühlst dich mit Menschen wohler, die du gut kennst. Das sorgt meist für entspannte Beziehungen und wenig Streit. Achte darauf, nötige Gespräche nicht aufzuschieben, damit Probleme nicht wachsen und deine Bedürfnisse nicht auf der Strecke bleiben.",
      "tips": [
        "Wenn du schwieriges Feedback gibst, sprich über das Verhalten und seine Wirkung, nicht über die Person.",
        "Übe, mit einem kurzen, höflichen Satz Nein zu sagen, ohne lange Rechtfertigungen.",
        "In neuen Umgebungen hilft eine einfache Frage als Gesprächseinstieg: Die meisten Menschen erzählen gern von dem, was sie machen."
      ]
    }
  },
  "resultTitle": "Dein Profil der emotionalen Intelligenz",
  "resultIntro": "Hier siehst du deine Werte in jedem Bereich. Diese Fähigkeiten lassen sich durch Übung weiterentwickeln, also nutze das Ergebnis als Ausgangspunkt und nicht als Etikett.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und beruht auf deiner eigenen Wahrnehmung. Er ist kein validierter psychologischer Test und ersetzt keine Einschätzung durch eine Fachperson."
};

export default t;
