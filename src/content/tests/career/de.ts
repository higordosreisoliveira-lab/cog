import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Berufliche Interessen",
  "desc": "Finde heraus, welche Tätigkeiten am besten zu dir passen, und lerne Berufe kennen, die mit deinen Interessen zusammenhängen.",
  "intro": "Dieser Fragebogen beruht auf dem Modell von Holland, das berufliche Interessen in sechs Typen einteilt: praktisch, forschend, künstlerisch, sozial, unternehmerisch und ordnend. Er umfasst 36 Tätigkeiten. Gib bei jeder an, wie gern du sie machen würdest, ohne an Gehalt oder Ausbildung zu denken oder daran, ob du sie schon kannst. Es gibt keine richtigen Antworten: Ziel ist es herauszufinden, was dein Interesse weckt.",
  "scale": [
    "Stimme gar nicht zu",
    "Stimme nicht zu",
    "Neutral",
    "Stimme zu",
    "Stimme voll zu"
  ],
  "items": [
    "Ich würde gern herausfinden, warum ein Gerät nicht mehr funktioniert, und es reparieren.",
    "Ich würde gern Experimente machen, um zu testen, ob eine Idee in der Praxis funktioniert.",
    "Ich würde gern Geschichten, Drehbücher oder Songtexte schreiben.",
    "Ich würde gern einer Gruppe von Menschen etwas Neues beibringen.",
    "Ich würde gern ein eigenes Unternehmen gründen und führen.",
    "Ich würde gern Tabellen, Ablagen und Unterlagen so ordnen, dass man alles leicht wiederfindet.",
    "Ich würde gern mit meinen eigenen Händen Dinge bauen oder zusammensetzen.",
    "Ich würde gern Daten analysieren, um die Ursache eines Problems zu finden.",
    "Ich würde gern das Erscheinungsbild einer Marke gestalten, zum Beispiel Logo und Farben.",
    "Ich würde gern Menschen zuhören und sie beraten, die gerade eine schwierige Zeit durchmachen.",
    "Ich würde gern mit Kundschaft verhandeln und Verkäufe abschließen.",
    "Ich würde gern die offenen Rechnungen und Zahlungseingänge eines Unternehmens im Blick behalten.",
    "Ich würde gern draußen arbeiten, zum Beispiel auf Baustellen, auf Bauernhöfen oder in Parks.",
    "Ich würde gern erforschen, wie der menschliche Körper und andere Lebewesen funktionieren.",
    "Ich würde gern auf einer Bühne stehen und singen, ein Instrument spielen oder schauspielern.",
    "Ich würde mich gern um die Gesundheit und das Wohlbefinden anderer Menschen kümmern.",
    "Ich würde gern ein Team zu einem gemeinsamen Ziel führen.",
    "Ich würde gern Dokumente sorgfältig prüfen, um sicherzustellen, dass sie keine Fehler enthalten.",
    "Ich würde gern Maschinen, Fahrzeuge oder Präzisionswerkzeuge bedienen.",
    "Ich würde gern genau verstehen, wie eine neue Technologie funktioniert.",
    "Ich würde gern fotografieren oder filmen und das Material anschließend bearbeiten.",
    "Ich würde gern Kinder oder Jugendliche in ihrer Entwicklung begleiten und unterstützen.",
    "Ich würde gern eine Idee präsentieren, um Investoren oder die Geschäftsleitung eines Unternehmens zu überzeugen.",
    "Ich würde gern Lagerbestand, Bestellungen und Liefertermine verwalten.",
    "Ich würde mich gern jeden Tag um Pflanzen oder Tiere kümmern.",
    "Ich würde gern wissenschaftliche Studien lesen und meine eigenen Schlüsse daraus ziehen.",
    "Ich würde gern Kleidung, Gegenstände oder die Einrichtung von Räumen entwerfen.",
    "Ich würde gern Menschen helfen, Konflikte zu lösen und sich besser zu verstehen.",
    "Ich würde gern Strategien entwickeln, damit ein Produkt auf dem Markt wächst.",
    "Ich würde gern prüfen, ob ein Unternehmen Vorschriften und Gesetze einhält.",
    "Ich würde gern die Elektro- oder Sanitärinstallation eines Gebäudes ausführen.",
    "Ich würde gern komplexe Mathe- oder Logikprobleme lösen.",
    "Ich würde mir gern originelle Ideen für eine Kampagne oder ein kreatives Projekt ausdenken.",
    "Ich würde gern bei Projekten mitmachen, die den Menschen in meinem Wohnort helfen.",
    "Ich würde gern wichtige Entscheidungen treffen, auch wenn sie mit Risiken verbunden sind.",
    "Ich würde gern die Termine und Abläufe eines Büros organisieren."
  ],
  "dims": {
    "realistic": {
      "label": "Praktisch",
      "desc": "Interesse an konkreten Tätigkeiten: mit den Händen, mit Werkzeugen und Maschinen arbeiten, bauen, reparieren und draußen arbeiten.",
      "high": "Du siehst gern greifbare Ergebnisse und löst Probleme am liebsten mit deinen eigenen Händen. Umgebungen mit klaren, praktischen Aufgaben motivieren dich meist. Denk daran, dass viele dieser Berufe auch eine technische Ausbildung und ständige Weiterbildung erfordern.",
      "low": "Handwerkliche und technische Tätigkeiten oder Arbeit im Freien interessieren dich weniger. Wahrscheinlich fühlst du dich wohler, wenn du mit Ideen, Menschen oder Informationen arbeitest. Trotzdem sind ein paar praktische Grundfertigkeiten in jedem Bereich nützlich.",
      "tips": [
        "Mach einen kurzen Kurs in einer handwerklichen oder technischen Fertigkeit, um dein Interesse zu testen.",
        "Sprich mit Fachleuten aus dem Bereich darüber, wie ihr Arbeitsalltag wirklich aussieht.",
        "Zieh eine Berufsausbildung in Betracht: Sie ist oft ein schneller Einstieg in diese Berufe."
      ],
      "examples": [
        "Bauingenieurwesen",
        "Maschinenbau",
        "Elektrohandwerk",
        "Agrarwissenschaften",
        "Luftfahrt",
        "Kochen und Gastronomie",
        "Tischlerhandwerk",
        "Industrielle Instandhaltung"
      ]
    },
    "investigative": {
      "label": "Forschend",
      "desc": "Interesse daran, zu beobachten, zu recherchieren, zu analysieren und zu verstehen, wie Dinge funktionieren, ob in Wissenschaft, Technik oder Medizin.",
      "high": "Du magst schwierige Fragen, gehst Ursachen auf den Grund und willst Dinge genau verstehen. Umgebungen, in denen logisches Denken und Selbstständigkeit geschätzt werden, motivieren dich meist. Achte darauf, dich nicht in der Analyse zu verlieren und rechtzeitig ins Handeln zu kommen.",
      "low": "Forschung, Datenanalyse und Theorien interessieren dich weniger. Wahrscheinlich wendest du lieber Lösungen an, als ein Problem lange zu untersuchen. Trotzdem hilft es in jedem Beruf, verlässliche Informationen finden zu können.",
      "tips": [
        "Folge populärwissenschaftlichen Inhalten zu Themen, die dich interessieren.",
        "Mach bei einem Forschungsprojekt, einem Wissenswettbewerb oder einem Onlinekurs mit.",
        "Versuch, echte Daten in einer Tabellenkalkulation auszuwerten, um zu sehen, ob dir so etwas liegt."
      ],
      "examples": [
        "Medizin",
        "Biologie",
        "Data Science",
        "Chemie",
        "Pharmazie",
        "Softwareentwicklung",
        "Wissenschaftliche Forschung",
        "Geologie"
      ]
    },
    "artistic": {
      "label": "Künstlerisch",
      "desc": "Interesse daran, etwas zu erschaffen, sich auszudrücken und mit originellen Ideen zu arbeiten, ob mit Bildern, Worten, Musik, Bewegung oder Design.",
      "high": "Du erschaffst gern etwas, lässt deiner Fantasie freien Lauf und setzt eigene Ideen um. Umgebungen mit Freiheit, Abwechslung und Raum für Originalität motivieren dich meist. Achte darauf, auch mit Fristen, Regeln und den routinemäßigen Teilen zurechtzukommen, die jede kreative Arbeit ebenfalls mit sich bringt.",
      "low": "Künstlerische Tätigkeiten und persönlicher Ausdruck interessieren dich weniger. Wahrscheinlich bevorzugst du klare Ziele und besser vorhersehbare Ergebnisse. Kreativität zeigt sich aber auch darin, wie du Probleme löst, und zwar in jedem Bereich.",
      "tips": [
        "Stell ein einfaches Portfolio mit deinen Arbeiten zusammen, auch wenn es private Projekte sind.",
        "Besuche einen kurzen Workshop in einem kreativen Bereich, den du noch nicht kennst.",
        "Informier dich, wie kreative Profis Kunst mit anderen Fähigkeiten wie Technik oder Business verbinden."
      ],
      "examples": [
        "Grafikdesign",
        "Architektur",
        "Werbung",
        "Fotografie",
        "Musik",
        "Darstellende Kunst",
        "Modedesign",
        "Film- und Videoproduktion"
      ]
    },
    "social": {
      "label": "Sozial",
      "desc": "Interesse daran, Menschen zu helfen, sie zu unterrichten, zu pflegen und zu beraten und so zu ihrem Wohlbefinden und ihrer Entwicklung beizutragen.",
      "high": "Dich motiviert es, wenn deine Arbeit im Leben anderer etwas bewirkt. Zuhören, unterrichten und sich um andere kümmern geben deinem Tag Sinn. Achte darauf, dich nicht mit den Problemen anderer zu überlasten und dabei dich selbst zu vergessen.",
      "low": "Tätigkeiten, bei denen es darum geht, Menschen zu pflegen, zu unterrichten oder zu beraten, interessieren dich weniger. Wahrscheinlich arbeitest du lieber mit Aufgaben, Gegenständen, Daten oder Ideen. Trotzdem bleibt Zusammenarbeit in fast jedem Beruf wichtig.",
      "tips": [
        "Engagiere dich ehrenamtlich für eine Sache, die dir wichtig ist, und beobachte, wie du dich dabei fühlst.",
        "Versuch, anderen etwas zu erklären, das du gut kannst, zum Beispiel in einem Tutorium oder bei der Nachhilfe.",
        "Sprich mit Fachleuten aus Gesundheit, Bildung oder Sozialarbeit über die Herausforderungen in ihrem Alltag."
      ],
      "examples": [
        "Psychologie",
        "Pädagogik",
        "Pflege",
        "Soziale Arbeit",
        "Physiotherapie",
        "Sportwissenschaft",
        "Logopädie",
        "Personalwesen"
      ]
    },
    "enterprising": {
      "label": "Unternehmerisch",
      "desc": "Interesse daran, zu führen, zu überzeugen, zu verhandeln und Entscheidungen zu treffen, um Ziele zu erreichen, ob im Unternehmen, im Vertrieb oder in eigenen Projekten.",
      "high": "Du übernimmst gern die Führung, überzeugst andere und siehst gern, wie Ziele erreicht werden. Dynamische Umgebungen mit Herausforderungen und Anerkennung für Ergebnisse motivieren dich meist. Achte darauf, nicht vorschnell zu entscheiden und Risiken oder Details nicht zu unterschätzen.",
      "low": "Führen, verkaufen und verhandeln interessieren dich weniger. Wahrscheinlich bringst du dich lieber mit deinem Wissen oder deiner Arbeit ein, ohne im Zentrum der Entscheidungen zu stehen. Trotzdem hilft es in jedem Beruf, die eigenen Ideen vertreten zu können.",
      "tips": [
        "Übernimm die Leitung eines kleinen Projekts, im Job, im Studium oder in deinem Umfeld.",
        "Teste eine Geschäftsidee im Kleinen, bevor du viel Zeit oder Geld investierst.",
        "Eigne dir die Grundlagen von Finanzen, Verhandlung und Kommunikation an."
      ],
      "examples": [
        "Betriebswirtschaft",
        "Rechtswissenschaft",
        "Marketing",
        "Vertrieb und Verkaufsleitung",
        "Öffentlichkeitsarbeit",
        "Projektmanagement",
        "Immobilienwirtschaft",
        "Außenhandel"
      ]
    },
    "conventional": {
      "label": "Ordnend",
      "desc": "Interesse daran, Informationen zu ordnen, klaren Abläufen zu folgen und genau mit Daten, Zahlen und Dokumenten zu arbeiten.",
      "high": "Du magst Ordnung und klare Regeln und weißt gern genau, was zu tun ist. Strukturierte Umgebungen, in denen Genauigkeit geschätzt wird, motivieren dich meist. Achte darauf, auch mit schnellen Veränderungen und Situationen ohne festgelegtes Vorgehen zurechtzukommen.",
      "low": "Routinen, Tabellen und detaillierte Abläufe interessieren dich weniger. Wahrscheinlich bevorzugst du Abwechslung und die Freiheit, Dinge auf deine Art zu erledigen. Trotzdem macht ein bisschen Organisation die Arbeit in jedem Bereich leichter.",
      "tips": [
        "Lerne, Tabellenkalkulationen und Organisationstools gut zu nutzen, eine Fähigkeit, die in vielen Berufen gefragt ist.",
        "Übernimm die Finanzen oder die Organisation eines Projekts und schau, ob dir solche Aufgaben liegen.",
        "Informier dich über Bereiche wie Rechnungswesen, Logistik und Wirtschaftsprüfung, die es in fast jedem Unternehmen gibt."
      ],
      "examples": [
        "Rechnungswesen",
        "Wirtschaftsprüfung",
        "Logistik",
        "Büromanagement",
        "Finanzanalyse",
        "Bibliothekswesen",
        "Qualitätssicherung",
        "Einkauf"
      ]
    }
  },
  "resultTitle": "Deine Interessentypen",
  "resultIntro": "Hier siehst du die drei Typen mit den höchsten Werten. Die meisten Menschen vereinen mehrere Typen, und jeder Beruf setzt auf eine andere Kombination. Nutze die Vorschläge als Ausgangspunkt, um dich zu informieren und mit Leuten zu sprechen, die schon in dem Bereich arbeiten.",
  "note": "Dieses Ergebnis zeigt Interessen, nicht Fähigkeiten oder Erfolgschancen. Es ist ein Werkzeug zur Selbstreflexion und ersetzt keine Berufsberatung durch Fachleute."
};

export default t;
