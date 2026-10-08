// anxiety — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Livello di ansia",
  desc: "Scopri con che frequenza la preoccupazione e la tensione nel corpo sono comparse nella tua routine nelle ultime due settimane.",
  intro:
    "Questo questionario guarda a due lati dell'ansia: la preoccupazione, che occupa i pensieri, e la tensione, che si manifesta nel corpo e nel comportamento. Sono 10 frasi sulle ultime due settimane. Per ognuna, indica con che frequenza ti è capitata in questo periodo, e non come sei di solito in generale. Non ci sono risposte giuste o sbagliate. È un'autovalutazione basata sulle tue risposte: ti aiuta a capire come stai, ma non è una diagnosi.",
  scale: ["Mai", "Alcuni giorni", "Più della metà dei giorni", "Quasi ogni giorno"],
  items: [
    "Ho passato buona parte della giornata con la testa piena di preoccupazioni, una che tirava l'altra.",
    "Ho sentito il corpo teso, soprattutto alle spalle, al collo o alla mascella.",
    "Ho provato a pensare ad altro, ma tornavano sempre gli stessi pensieri preoccupanti.",
    "Ho notato il cuore che batteva forte o il respiro corto senza aver fatto alcuno sforzo fisico.",
    "Al momento di dormire, la mia testa continuava a ripassare problemi e cose in sospeso.",
    "Ho fatto fatica a stare senza muovermi: dondolavo le gambe, mi tormentavo le mani o camminavo avanti e indietro.",
    "Davanti a qualcosa di semplice, come un messaggio senza risposta, ho subito pensato al peggio.",
    "Piccoli imprevisti, come un rumore o un ritardo, mi hanno fatto perdere la pazienza più del solito.",
    "Ho rimandato decisioni o evitato situazioni per paura che qualcosa andasse storto.",
    "Anche nei momenti liberi, il mio corpo è rimasto in allerta e non riuscivo a rallentare.",
  ],
  dims: {
    worry: {
      label: "Preoccupazione",
      desc: "Misura quanto i pensieri preoccupanti hanno occupato la tua mente, sono tornati anche quando cercavi di distrarti e hanno influenzato le tue decisioni.",
      high: "Nelle ultime settimane la preoccupazione ha occupato molto spazio nei tuoi pensieri, spesso anticipando problemi che non si sono ancora verificati. Questo stanca e toglie attenzione a ciò che adesso è alla tua portata. Vale la pena imparare modi per mettere un limite a questi pensieri e cercare supporto se stanno ostacolando la tua routine.",
      low: "Nelle ultime settimane la preoccupazione è comparsa poco o in modo passeggero. Sembri riuscire a pensare ai problemi senza che prendano il sopravvento sulla tua giornata. Continua a coltivare le abitudini che ti aiutano a mantenere questo equilibrio.",
      tips: [
        "Riserva 15 minuti al giorno per annotare le tue preoccupazioni e, accanto a ciascuna, scrivi un possibile passo successivo oppure se è fuori dal tuo controllo.",
        "Quando ti accorgi che stai immaginando il peggio, chiediti: che cosa è più probabile che succeda davvero?",
        "Riduci il tempo dedicato alle notizie e ai social, soprattutto prima di dormire.",
      ],
    },
    tension: {
      label: "Tensione nel corpo e irrequietezza",
      desc: "Misura i segnali fisici e comportamentali legati all'ansia, come muscoli tesi, battito accelerato, irrequietezza e irritazione per piccole cose.",
      high: "Nelle ultime settimane il tuo corpo ha dato molti segnali di allerta, come tensione, irrequietezza o reazioni forti a piccoli imprevisti. È il modo in cui il corpo risponde alla pressione ma, quando dura a lungo, stanca e ostacola il riposo. Le pratiche che calmano il corpo di solito aiutano, e vale la pena parlarne con un professionista se i segnali sono intensi o frequenti.",
      low: "Nelle ultime settimane il tuo corpo ha mostrato pochi segnali di tensione, e nei momenti di riposo hai potuto rallentare. Questo indica che la pressione quotidiana non si sta accumulando nel corpo.",
      tips: [
        "Prova a respirare lentamente per qualche minuto, espirando più a lungo di quanto impieghi a inspirare.",
        "Muovi il corpo con regolarità: una camminata di 20-30 minuti aiuta già a scaricare la tensione.",
        "Se senti spesso il cuore che batte forte, mancanza d'aria o dolore al petto, rivolgiti a un medico per valutare altre possibili cause.",
      ],
    },
  },
  bands: {
    minimal: {
      label: "Ansia minima",
      text: "Le tue risposte indicano pochi segnali di ansia nelle ultime due settimane. Preoccupazioni e momenti di tensione fanno parte della vita e, nel tuo caso, non sembrano pesare sulla routine. Continua a prenderti cura del sonno, del movimento e delle tue relazioni.",
    },
    mild: {
      label: "Ansia lieve",
      text: "Le tue risposte indicano alcuni segnali di ansia, presenti in una parte dei giorni. È comune nei periodi più intensi o di cambiamento. Vale la pena osservare che cosa ti sta preoccupando e provare i suggerimenti qui sotto; se i segnali aumentano o durano a lungo, parlane con un professionista.",
    },
    moderate: {
      label: "Ansia moderata",
      text: "Le tue risposte indicano che la preoccupazione e la tensione sono state presenti in buona parte dei giorni. Questo può stancare e influire sul sonno, sulla concentrazione e sulle relazioni. Parlarne con un professionista, come uno psicologo o un medico, può aiutarti a capire che cosa sta succedendo e a trovare modi per affrontarlo.",
    },
    high: {
      label: "Ansia alta",
      text: "Le tue risposte indicano segnali intensi di ansia quasi ogni giorno nelle ultime due settimane. Questo non definisce chi sei, ma mostra che stai portando un peso grande, ed esistono modi efficaci per prendertene cura. Rivolgiti a un professionista, come uno psicologo o un medico, per una valutazione e per pensare insieme ai prossimi passi.",
    },
  },
  resultTitle: "Il tuo livello di ansia",
  resultIntro: "Il risultato considera la somma delle tue risposte sulle ultime due settimane. Qui sotto trovi la fascia in cui rientri e il tuo punteggio in preoccupazione e in tensione nel corpo.",
  note: "Questo questionario è uno strumento di conoscenza di sé e di screening, basato sulle tue risposte. Non è una diagnosi: solo un professionista qualificato, come uno psicologo o un medico, può valutare l'ansia in modo completo. Alcuni segnali fisici, come palpitazioni e mancanza d'aria, possono avere anche altre cause.",
  help: "Se l'ansia sta ostacolando la tua routine, rivolgiti a uno psicologo o al tuo medico di base. I servizi sanitari della tua zona possono orientarti e, se necessario, indirizzarti verso i servizi di salute mentale. Se stai attraversando un momento di sofferenza intensa, puoi contattare una linea di ascolto e supporto emotivo del tuo paese. In caso di emergenza, chiama il 112.",
};

export default t;
