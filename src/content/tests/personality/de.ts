import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Persönlichkeitsprofil",
  "desc": "Finde heraus, wo du bei den fünf großen Persönlichkeitsmerkmalen stehst, einem der am besten erforschten Modelle der Psychologie.",
  "intro": "Dieser Fragebogen misst fünf grundlegende Persönlichkeitsmerkmale: Offenheit für Erfahrungen, Gewissenhaftigkeit, Extraversion, Verträglichkeit und emotionale Stabilität. Die 50 Aussagen sind an das IPIP angelehnt, eine gemeinfreie Sammlung von Testfragen, die in der Forschung genutzt wird. Gib bei jeder Aussage an, wie gut sie beschreibt, wie du heute bist, und nicht, wie du gern wärst. Es gibt keine richtigen oder falschen Antworten, und kein Merkmal ist besser als ein anderes. Antworte ehrlich und ohne lange nachzudenken: Der erste Eindruck trifft meistens am besten zu.",
  "scale": [
    "Stimme gar nicht zu",
    "Stimme nicht zu",
    "Neutral",
    "Stimme zu",
    "Stimme voll zu"
  ],
  "items": [
    "Auf Partys sorge ich für Stimmung.",
    "Ich mache mir wenig Gedanken um andere.",
    "Ich bereite mich immer rechtzeitig vor.",
    "Ich bin schnell gestresst.",
    "Ich habe einen großen Wortschatz.",
    "Ich rede nicht viel.",
    "Ich interessiere mich für Menschen.",
    "Ich lasse meine Sachen überall herumliegen.",
    "Meistens bleibe ich gelassen.",
    "Es fällt mir schwer, abstrakte Ideen zu verstehen.",
    "Unter Menschen fühle ich mich wohl.",
    "Ich mache Bemerkungen, die andere kränken.",
    "Ich achte auf Details.",
    "Ich mache mir häufig Sorgen.",
    "Ich habe eine lebhafte Fantasie.",
    "Ich halte mich lieber im Hintergrund.",
    "Mir ist wichtig, was andere fühlen.",
    "Ich hinterlasse oft Unordnung.",
    "Ich bin selten niedergeschlagen.",
    "Abstrakte Ideen interessieren mich nicht.",
    "Ich fange oft Gespräche an.",
    "Die Probleme anderer interessieren mich nicht.",
    "Ich erledige Aufgaben sofort, statt sie aufzuschieben.",
    "Ich bin leicht aus der Fassung zu bringen.",
    "Ich habe hervorragende Ideen.",
    "Ich habe meistens wenig zu sagen.",
    "Ich habe ein weiches Herz.",
    "Ich vergesse oft, Dinge an ihren Platz zurückzulegen.",
    "Ich rege mich schnell auf.",
    "Ich habe nicht viel Fantasie.",
    "Auf Partys unterhalte ich mich mit vielen verschiedenen Leuten.",
    "Eigentlich interessiere ich mich nicht besonders für andere.",
    "Ich mag es, wenn alles seine Ordnung hat.",
    "Meine Stimmung wechselt oft.",
    "Ich verstehe Dinge schnell.",
    "Ich mag es nicht, Aufmerksamkeit auf mich zu ziehen.",
    "Ich nehme mir Zeit, um anderen zu helfen.",
    "Ich drücke mich vor meinen Pflichten.",
    "Ich habe häufig Stimmungsschwankungen.",
    "Ich verwende schwierige Wörter.",
    "Es macht mir nichts aus, im Mittelpunkt zu stehen.",
    "Ich spüre, was andere fühlen.",
    "Ich halte mich an eine geplante Routine.",
    "Ich bin leicht reizbar.",
    "Ich verbringe Zeit damit, über Dinge nachzudenken.",
    "Unter Fremden rede ich wenig.",
    "Ich sorge dafür, dass sich andere wohlfühlen.",
    "Ich stelle hohe Ansprüche an die Qualität meiner Arbeit.",
    "Ich bin oft niedergeschlagen.",
    "Mein Kopf ist immer voller Ideen."
  ],
  "dims": {
    "openness": {
      "label": "Offenheit für Erfahrungen",
      "desc": "Misst Neugier, Fantasie und Interesse an neuen, abstrakten oder ungewohnten Ideen.",
      "high": "Du erkundest gern Ideen, lernst Neues und malst dir Möglichkeiten aus. Das hilft dir, originelle Lösungen zu finden und dich an Veränderungen anzupassen. Achte darauf, dich nicht zwischen zu vielen Interessen zu verzetteln und Projekte halb fertig liegen zu lassen.",
      "low": "Du bevorzugst das Konkrete, Bekannte und in der Praxis Bewährte. Das bringt dir Fokus, gesunden Menschenverstand und Effizienz im Alltag. Achte darauf, neue Ideen nicht zu früh abzulehnen, bevor du verstanden hast, was sie bieten können.",
      "tips": [
        "Probier ab und zu etwas Neues aus, zum Beispiel ein Buch aus einem anderen Genre oder einen anderen Weg nach Hause.",
        "Wenn dir eine ungewohnte Idee begegnet, frag dich „Was ist daran nützlich?“, bevor du entscheidest.",
        "Wenn du viele Interessen hast, konzentrier dich auf eins nach dem anderen und bring es zu Ende."
      ]
    },
    "conscientiousness": {
      "label": "Gewissenhaftigkeit",
      "desc": "Misst, wie sehr du planst, Zusagen einhältst und auf Details achtest, also deine Disziplin und dein Verantwortungsbewusstsein.",
      "high": "Du planst gern, hältst Fristen ein und achtest auf Details, und andere wissen, dass sie sich auf dich verlassen können. Achte auf zu hohe Ansprüche an dich selbst: Perfektionismus und Schwierigkeiten mit Unvorhergesehenem können dich auslaugen.",
      "low": "Du gehst Aufgaben flexibel und spontan an, ohne dich an starre Pläne zu binden. Das hilft dir, zu improvisieren und dich anzupassen, wenn sich etwas ändert. Achte darauf, Wichtiges nicht auf den letzten Drücker zu erledigen oder Fristen aus den Augen zu verlieren.",
      "tips": [
        "Teile große Aufgaben in kleine Schritte auf und gib jedem Schritt eine Frist.",
        "Nutze eine einfache Liste oder einen Kalender und wirf morgens einen Blick darauf.",
        "Leg vor dem Start fest, was „gut genug“ ist, damit dich der Perfektionismus nicht ausbremst."
      ]
    },
    "extraversion": {
      "label": "Extraversion",
      "desc": "Misst, wie sehr du die Gesellschaft anderer, Gespräche und lebhafte Umgebungen suchst und wie sehr dir das Energie gibt.",
      "high": "Du tankst Energie, wenn du unter Menschen bist, kommst leicht ins Gespräch und fühlst dich in lebhaften Umgebungen wohl. Das hilft dir, Kontakte zu knüpfen und vor anderen aufzutreten. Achte darauf, nicht mehr zu reden als zuzuhören. Auch Aufgaben, für die du Zeit allein brauchst, fallen dir vielleicht schwerer.",
      "low": "Du bevorzugst kleine Gruppen, tiefere Gespräche und ruhige Momente, um neue Energie zu tanken. Das fördert Konzentration, Zuhören und Nachdenken, bevor du handelst. Achte darauf, deine Ideen und deine Arbeit nicht zurückzuhalten, nur weil du keine Aufmerksamkeit auf dich ziehen willst.",
      "tips": [
        "Beobachte, was dir Energie gibt, Zeit mit anderen oder Zeit für dich, und plane bewusst Raum dafür ein.",
        "Wenn du in Meetings viel redest, stell eine Frage, bevor du deine Meinung sagst; wenn du wenig redest, versuch, mindestens eine Idee einzubringen.",
        "Zurückhaltend zu sein ist nicht dasselbe wie schüchtern zu sein: Du kannst Ruhe mögen und trotzdem sehr gut kommunizieren."
      ]
    },
    "agreeableness": {
      "label": "Verträglichkeit",
      "desc": "Misst, wie sehr du dich um andere kümmerst, Menschen vertraust und lieber kooperierst als konkurrierst.",
      "high": "Du bist aufmerksam, herzlich und hilfsbereit. So entstehen vertrauensvolle Beziehungen und eine gute Atmosphäre, wo immer du bist. Achte darauf, die Bedürfnisse anderer nicht ständig über deine eigenen zu stellen. Vielleicht fällt es dir auch schwer, Nein zu sagen.",
      "low": "Du bist eher direkt, sachlich und kritisch und scheust dich nicht, anderer Meinung zu sein. Das hilft dir beim Verhandeln, beim Vertreten deiner Positionen und bei schwierigen Entscheidungen. Achte darauf, nicht ungewollt hart zu wirken und Menschen abzuschrecken, die gern mit dir zusammenarbeiten würden.",
      "tips": [
        "Bevor du widersprichst, zeig, dass du die Sicht der anderen Person verstanden hast.",
        "Übe, Bitten freundlich abzulehnen, wenn sie deinen Prioritäten im Weg stehen.",
        "Denk daran: Freundlich und bestimmt zu sein, schließt sich nicht aus."
      ]
    },
    "stability": {
      "label": "Emotionale Stabilität",
      "desc": "Misst, wie gut du bei Druck, Sorgen und Frust ruhig bleibst. Ein hoher Wert steht für mehr Gelassenheit, ein niedriger für eine größere Empfindlichkeit gegenüber Stress.",
      "high": "Du bleibst unter Druck meist ruhig und erholst dich schnell von Rückschlägen. Das gibt anderen Sicherheit und hilft dir, in schwierigen Momenten klar zu denken. Achte darauf, echte Probleme nicht kleinzureden und zu bemerken, wenn es jemandem in deiner Nähe schlecht geht.",
      "low": "Du erlebst Gefühle intensiv und bemerkst Risiken und Probleme früher als viele andere. Diese Sensibilität hilft dir, dich vorzubereiten und Dinge ernst zu nehmen. Achte auf deine Kräfte: Häufige Sorgen und Stress machen müde, und es lohnt sich, Strategien für den Umgang damit zu haben.",
      "tips": [
        "Kümmere dich um die Grundlagen: Schlaf, Ernährung und Bewegung wirken sich spürbar auf die Stimmung aus.",
        "Wenn Sorgen auftauchen, schreib auf, was dir durch den Kopf geht und was ein möglicher nächster Schritt wäre.",
        "Wenn Stress oder Traurigkeit deinen Alltag beeinträchtigen, sprich mit einer Fachperson für psychische Gesundheit."
      ]
    }
  },
  "resultTitle": "Dein Persönlichkeitsprofil",
  "resultIntro": "Jeder Balken zeigt, wo du zwischen den beiden Polen eines Merkmals liegst. Hohe oder niedrige Werte sind weder gut noch schlecht: Jede Seite hat ihre Stärken und ihre Stolpersteine.",
  "note": "Dieses Ergebnis ist ein Werkzeug zur Selbstreflexion und beruht auf deinen eigenen Antworten. Es ist keine Diagnose und ersetzt keine Einschätzung durch eine Psychologin oder einen Psychologen. Persönlichkeit verändert sich außerdem im Laufe des Lebens und je nach Situation."
};

export default t;
