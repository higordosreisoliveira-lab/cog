// stress — German translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Stressniveau",
  "desc": "Finde heraus, wie sehr dich Überlastung im letzten Monat belastet hat und wie es um deine Fähigkeit steht, wieder durchzuatmen.",
  "intro": "Dieser Fragebogen betrachtet Stress von zwei Seiten: die Überlastung und den Druck, die du gespürt hast, und das Gefühl von Kontrolle und Erholung, das hilft, diese Last auszugleichen. Er besteht aus 12 Aussagen über den letzten Monat. Gib bei jeder an, wie oft sie in diesem Zeitraum auf dich zutraf. Einige Aussagen beschreiben positive Situationen: Beantworte sie genauso und denk dabei nur an die Häufigkeit. Es ist eine Selbsteinschätzung auf Grundlage deiner Antworten und ersetzt keine Einschätzung durch eine Fachperson.",
  "scale": [
    "Nie",
    "Fast nie",
    "Manchmal",
    "Oft",
    "Sehr oft"
  ],
  "items": [
    "Meine Aufgaben und Verpflichtungen schienen größer als die Stunden des Tages.",
    "Ich konnte mir Zeit zum Ausruhen nehmen, ohne schlechtes Gewissen.",
    "Ich kam am Ende des Tages mit dem Gefühl an, dass die offenen Aufgaben nur mehr wurden.",
    "Als ein Problem auftauchte, konnte ich innehalten und in Ruhe überlegen, was zu tun ist.",
    "Ich habe einen starken Druck gespürt, von anderen oder von mir selbst, alles zu schaffen.",
    "Ich hatte das Gefühl, meinen Tag so organisieren zu können, wie ich es brauchte.",
    "Ich habe bei Dingen die Geduld verloren, die mich normalerweise nicht stören würden.",
    "Nach einem schwierigen Tag haben mir eine gute Nacht Schlaf oder etwas Freizeit gereicht, um mich zu erholen.",
    "Ich habe weiter an meine offenen Aufgaben gedacht, selbst in Momenten, die eigentlich der Erholung dienen sollten.",
    "Ich hatte jemanden, auf den ich zählen konnte, wenn ich mich aussprechen oder um Hilfe bitten musste.",
    "Ich habe körperliche Anzeichen von Anspannung gespürt, etwa Kopfschmerzen, einen verkrampften Kiefer oder eine Müdigkeit, die nicht verging.",
    "Ich konnte Nein sagen oder Bitten aufschieben, wenn ich schon zu viel um die Ohren hatte."
  ],
  "dims": {
    "load": {
      "label": "Überlastung und Druck",
      "desc": "Misst, wie sehr du ein Übermaß an Aufgaben, Erwartungen und Anspannung gespürt hast und wie sehr dich das selbst in Ruhezeiten begleitet hat.",
      "high": "Im letzten Monat hattest du häufig das Gefühl, überlastet zu sein: viel zu tun, hohe Erwartungen und wenig Freiraum für den Kopf. Körper und Geist halten dieses Tempo eine Zeit lang aus, aber wenn es lange anhält, hat es seinen Preis. Es lohnt sich zu schauen, was sich reduzieren, aufteilen oder verschieben lässt.",
      "low": "Im letzten Monat war der Druck gering oder blieb auf einem Niveau, mit dem du umgehen konntest. Das heißt nicht, dass es keine Herausforderungen gab, aber sie scheinen sich nicht angestaut zu haben. Achte darauf, was dir hilft, dieses Gleichgewicht zu halten.",
      "tips": [
        "Liste die Aufgaben der Woche auf und trenne, was wirklich dringend ist, was warten kann und was sich mit anderen teilen lässt.",
        "Mach über den Tag verteilt kurze Pausen ohne Bildschirm, auch wenn es nur fünf Minuten sind.",
        "Vereinbare klare Grenzen, etwa eine Uhrzeit, ab der du keine beruflichen Nachrichten mehr beantwortest."
      ]
    },
    "coping": {
      "label": "Wenig Kontrolle und Erholung",
      "desc": "Misst das Fehlen der Ressourcen, die Stress ausgleichen, etwa das Gefühl, deinen Alltag selbst in der Hand zu haben, dich auszuruhen, auf Unterstützung zählen zu können und Grenzen zu setzen. Die Aussagen in diesem Teil sind positiv, deshalb steigt der Wert, wenn sie selten zutrafen.",
      "high": "Im letzten Monat waren Momente der Erholung, der Unterstützung und des Gefühls von Kontrolle selten. Ohne solche Pausen wiegt selbst ein gewöhnlicher Alltag schwerer, weil kein Raum bleibt, um wieder durchzuatmen. Diese Ressourcen nach und nach zu stärken, ist einer der wirksamsten Wege, Stress zu verringern.",
      "low": "Du konntest dich ausruhen, um Hilfe bitten und das Gefühl haben, deinen Alltag größtenteils selbst in der Hand zu haben. Diese Ressourcen wirken wie ein Puffer: Sie helfen dir, schwierige Phasen zu überstehen, ohne dich zu erschöpfen. Schütze diese Momente weiterhin, vor allem wenn es im Alltag eng wird.",
      "tips": [
        "Schütze deinen Schlaf: Versuch, zu ähnlichen Zeiten schlafen zu gehen und aufzustehen, auch am Wochenende.",
        "Trag mindestens eine Aktivität pro Woche in deinen Kalender ein, die dir Freude oder Erholung bringt, und behandle diese Zeit wie einen festen Termin.",
        "Erzähl einer Vertrauensperson, wie es dir geht: Die Last zu teilen, macht sie schon leichter."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Geringer Stress",
      "text": "Deine Antworten zeigen im letzten Monat ein geringes Stressniveau. Du scheinst ein gutes Gleichgewicht zwischen den Anforderungen des Alltags und Momenten der Erholung zu finden. Pflege weiterhin die Gewohnheiten, die dieses Gleichgewicht tragen."
    },
    "moderate": {
      "label": "Mittlerer Stress",
      "text": "Deine Antworten zeigen ein mittleres Stressniveau, was in Phasen mit vielen Anforderungen verbreitet ist. Achtsam solltest du werden, wenn dieser Zustand zum Normalfall wird, ohne Zeiten der Entlastung. Probier die Vorschläge unten aus, und wenn der Stress beginnt, deinen Schlaf, deine Gesundheit oder deine Beziehungen zu beeinträchtigen, sprich mit einer Fachperson."
    },
    "high": {
      "label": "Hoher Stress",
      "text": "Deine Antworten zeigen im letzten Monat ein hohes Stressniveau, mit viel Druck und wenig Raum zur Erholung. Wenn diese Situation länger anhält, kann sie sich auf Schlaf, Stimmung und körperliche Gesundheit auswirken. Es lohnt sich, Unterstützung bei einer psychologischen oder ärztlichen Fachperson zu suchen, um zu verstehen, was dich belastet, und Wege zu finden, die Last zu verringern."
    }
  },
  "resultTitle": "Dein Stressniveau",
  "resultIntro": "Das Ergebnis addiert deine Antworten zum letzten Monat. Bei den Aussagen über Kontrolle und Erholung wird umgekehrt gezählt: Je seltener diese Ressourcen vorkamen, desto höher fällt das Ergebnis aus. Unten siehst du, in welchem Bereich du liegst und wie deine Werte in den beiden Teilen ausfallen.",
  "note": "Dieser Fragebogen ist ein Werkzeug zur Selbstreflexion und beruht auf deiner eigenen Wahrnehmung des letzten Monats. Er ist keine Diagnose und ersetzt keine Einschätzung durch eine qualifizierte Fachperson. Das Stressniveau schwankt außerdem stark von einer Lebensphase zur nächsten.",
  "help": "Wenn der Stress deine Gesundheit, deinen Schlaf oder deine Beziehungen beeinträchtigt, wende dich an eine Psychologin oder einen Psychologen oder an deine Hausarztpraxis. Die Gesundheitsversorgung vor Ort kann dich unterstützen und bei Bedarf an spezialisierte psychiatrische oder psychosoziale Dienste weitervermitteln. Wenn du sehr stark belastet bist, wende dich an ein Krisentelefon oder eine Hotline für emotionale Unterstützung in deinem Land; viele davon sind kostenlos, vertraulich und rund um die Uhr erreichbar. Im Notfall wähle die 112 oder die örtliche Notrufnummer."
};

export default t;
