// depression — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Segnali di umore depresso",
  desc: "Scopri con che frequenza segnali come scoraggiamento, perdita di interesse e mancanza di energia sono comparsi nelle ultime due settimane.",
  intro:
    "Questo questionario osserva due gruppi di segnali legati all'umore depresso: i cambiamenti nell'umore e nell'interesse per le cose, e i cambiamenti nell'energia, nel sonno, nell'appetito e nella concentrazione. Sono 10 frasi sulle ultime due settimane. Per ognuna, indica con che frequenza ti è capitata in questo periodo. Alcune frasi toccano temi delicati: rispondi con i tuoi tempi e con sincerità. È un'autovalutazione basata sulle tue risposte, non una diagnosi.",
  scale: ["Mai", "Alcuni giorni", "Più della metà dei giorni", "Quasi ogni giorno"],
  items: [
    "Le cose che prima mi davano piacere, come un hobby o vedere gli amici, hanno perso il loro gusto.",
    "Mi è mancata l'energia anche per cose semplici, come farmi la doccia o rispondere a un messaggio.",
    "Ho passato buona parte della giornata con una tristezza o un vuoto difficile da spiegare.",
    "Il mio sonno è cambiato: ho fatto fatica ad addormentarmi, ho avuto risvegli frequenti durante la notte o ho dormito molto più del solito.",
    "Il mio appetito è cambiato: ho mangiato molto meno o molto più del solito.",
    "Ho guardato ai prossimi mesi senza speranza che qualcosa potesse migliorare.",
    "Ho perso il filo di conversazioni o di compiti semplici perché non riuscivo a concentrarmi.",
    "Mi è capitato di pensare di non valere niente o che tutto ciò che faccio vada storto.",
    "Le piccole decisioni, come cosa mangiare o cosa indossare, mi sono sembrate troppo difficili.",
    "Mi sono passati per la testa pensieri che non valga la pena vivere o di farmi del male.",
  ],
  dims: {
    mood: {
      label: "Umore e interesse",
      desc: "Misura segnali come tristezza persistente, perdita di piacere per le cose, mancanza di speranza e pensieri molto negativi su di sé.",
      high: "Nelle ultime due settimane la tristezza, la mancanza di interesse o pensieri duri su di te sono comparsi spesso. Non è una mancanza di forza di volontà: l'umore depresso cambia il modo in cui vediamo noi stessi e il futuro. Parlarne con un professionista è un passo importante, e non devi aspettare di stare peggio per chiedere aiuto.",
      low: "Il tuo umore e il tuo interesse per le cose sembrano essere rimasti stabili nelle ultime due settimane. Le giornate tristi capitano a tutti, ma non sembrano aver dominato la tua routine. Continua a prenderti cura di ciò che ti fa bene.",
      tips: [
        "Programma piccole attività piacevoli nel corso della settimana, anche se non ne hai voglia: spesso la motivazione arriva dopo aver cominciato, non prima.",
        "Mantieni i contatti con le persone di fiducia, anche solo con un messaggio o una breve conversazione.",
        "Se la tristezza o la mancanza di interesse durano più di due settimane, rivolgiti a uno psicologo o a un medico per parlarne.",
      ],
    },
    energy: {
      label: "Energia, sonno, appetito e concentrazione",
      desc: "Misura i cambiamenti nel corpo e nel funzionamento quotidiano che spesso accompagnano l'umore depresso, come stanchezza, alterazioni del sonno e dell'appetito e difficoltà di concentrazione.",
      high: "Nelle ultime due settimane il tuo corpo e la tua mente hanno dato segnali di logoramento: meno energia, cambiamenti nel sonno o nell'appetito e difficoltà a concentrarti. Questi segnali possono accompagnare l'umore depresso, ma possono avere anche altre cause, come stress, notti dormite male o problemi di salute fisica. Vale la pena parlarne con un medico, soprattutto se continuano.",
      low: "La tua energia, il sonno, l'appetito e la concentrazione sembrano funzionare in modo stabile. Questa base di solito aiuta molto ad attraversare le giornate più difficili. Continua a prendertene cura.",
      tips: [
        "Cerca di mantenere orari regolari per dormire, svegliarti e mangiare, anche nei giorni in cui hai poca voglia.",
        "Esci un po' all'aria aperta e muovi il corpo, anche solo con una breve camminata: la luce del giorno e il movimento aiutano a regolare il sonno e l'energia.",
        "Dividi i compiti in piccole parti e riconosci ognuna che porti a termine, senza pretendere da te il ritmo di prima.",
      ],
    },
  },
  bands: {
    minimal: {
      label: "Pochi segnali",
      text: "Le tue risposte indicano pochi o nessun segnale di umore depresso nelle ultime due settimane. I momenti di tristezza o di stanchezza fanno parte della vita e, nel tuo caso, non sembrano prendere il sopravvento sulla routine. Continua a prenderti cura del sonno, del movimento e delle tue relazioni.",
    },
    mild: {
      label: "Segnali lievi",
      text: "Le tue risposte indicano alcuni segnali di umore depresso in una parte dei giorni. Può succedere nei periodi di stanchezza, di perdite o di cambiamenti. Osserva come ti senti nelle prossime settimane e, se i segnali continuano o aumentano, parlane con un professionista.",
    },
    moderate: {
      label: "Segnali moderati",
      text: "Le tue risposte indicano segnali di umore depresso in buona parte dei giorni, e questo potrebbe pesare sulla tua vita quotidiana. Merita attenzione e cura, e non è qualcosa che devi affrontare senza aiuto. Rivolgiti a un professionista, come uno psicologo o un medico, per parlare di ciò che stai provando.",
    },
    high: {
      label: "Segnali intensi",
      text: "Le tue risposte indicano segnali frequenti e intensi di umore depresso nelle ultime due settimane. Questo può rendere tutto più difficile, ma esistono cure efficaci, e con il supporto giusto le persone stanno meglio. Rivolgiti a un professionista, come uno psicologo o un medico, appena puoi, e racconta a una persona di fiducia come stai.",
    },
  },
  resultTitle: "I tuoi segnali dell'umore",
  resultIntro: "Il risultato somma le tue risposte sulle ultime due settimane. Qui sotto trovi la fascia in cui rientri e il tuo punteggio in umore e interesse e in energia, sonno, appetito e concentrazione.",
  note: "Questo questionario è uno strumento di conoscenza di sé e di screening, basato sulle tue risposte. Non è una diagnosi di depressione: solo un professionista qualificato, come uno psicologo o un medico, può fare questa valutazione. La stanchezza e i cambiamenti nel sonno e nell'appetito possono avere anche altre cause, comprese quelle fisiche.",
  help: "Per parlare di ciò che stai provando, rivolgiti a uno psicologo o al tuo medico di base. I servizi sanitari della tua zona possono orientarti e, se necessario, indirizzarti verso i servizi di salute mentale. Se stai soffrendo, puoi contattare una linea di ascolto e supporto emotivo del tuo paese. In caso di emergenza, chiama il 112.",
  alert:
    "Hai indicato che, nelle ultime due settimane, hai avuto pensieri che non valga la pena vivere o di farti del male. Hai fatto bene a rispondere con sincerità. Questi pensieri meritano attenzione adesso, e non devi affrontare tutto questo senza nessuno accanto. Se sei in pericolo o senti che potresti farti del male, chiama subito il 112. Per parlare con qualcuno in qualsiasi momento, puoi contattare una linea di ascolto e supporto emotivo del tuo paese. Se puoi, racconta anche a una persona di fiducia come ti senti.",
};

export default t;
