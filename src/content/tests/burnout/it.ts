// burnout — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Livello di burnout",
  desc: "Scopri se il lavoro ti sta lasciando senza energie, distante da ciò che fai o con la sensazione che il tuo impegno non renda.",
  intro:
    "Il burnout è un logoramento legato al lavoro che di solito si manifesta su tre fronti: esaurimento, distacco dal lavoro e perdita del senso di realizzazione. Sono 15 frasi sugli ultimi tre mesi. Per ognuna, indica con che frequenza ti è capitata in questo periodo. Se non hai un impiego formale, pensa alla tua attività principale, come lo studio, un'attività in proprio o la cura di qualcuno. Alcune frasi descrivono situazioni positive: rispondi allo stesso modo, pensando solo alla frequenza. È un'autovalutazione basata sulle tue risposte, non una diagnosi.",
  scale: ["Mai", "Raramente", "A volte", "Spesso", "Sempre"],
  items: [
    "Dopo il lavoro, avevo energie solo per restare sul divano o scorrere il telefono.",
    "Al lavoro ho fatto solo il minimo indispensabile, senza coinvolgermi davvero nei compiti.",
    "Ho finito la giornata di lavoro con la sensazione che il mio impegno avesse prodotto qualche risultato.",
    "La sera prima di tornare al lavoro, ho sentito un peso solo a pensare a cosa mi aspettava.",
    "Ho trattato colleghi, clienti o le persone che seguo con più freddezza o impazienza di quanto avrei voluto.",
    "Davanti a un problema sul lavoro, ho avuto fiducia nella mia capacità di trovare una soluzione.",
    "Anche dopo giorni liberi o ferie, la stanchezza è tornata subito nei primi giorni di lavoro.",
    "Ho avuto la sensazione che fosse indifferente fare bene o male il mio lavoro.",
    "Ho imparato qualcosa di nuovo o ho fatto progressi in qualche aspetto del mio lavoro.",
    "Mi è servito uno sforzo enorme solo per arrivare alla fine della giornata di lavoro.",
    "Ho contato le ore che mancavano alla fine dell'orario di lavoro.",
    "Ho notato che il mio lavoro ha aiutato qualcuno, che fosse un collega, un cliente o la squadra.",
    "Ho trascurato amici, famiglia o attività che mi piacciono perché il lavoro mi lasciava senza energie.",
    "Ho evitato messaggi, riunioni o conversazioni di lavoro ogni volta che potevo.",
    "Ho provato orgoglio per qualcosa che ho fatto al lavoro.",
  ],
  dims: {
    exhaustion: {
      label: "Esaurimento",
      desc: "Misura la stanchezza fisica e mentale legata al lavoro, quella che non passa con una notte di sonno o un fine settimana di riposo.",
      high: "Il lavoro ti sta consumando più energia di quanta riesci a recuperarne. La stanchezza non resta solo nell'orario di lavoro: ti accompagna a casa, nei giorni liberi e nelle tue relazioni. Di solito è il primo segnale che il ritmo attuale non è sostenibile.",
      low: "Riesci a recuperare energia tra una giornata di lavoro e l'altra. La stanchezza c'è, come in qualsiasi routine, ma non sembra accumularsi. Continua a proteggere i tuoi momenti di riposo.",
      tips: [
        "Stabilisci un orario per chiudere la giornata lavorativa e crea un piccolo rituale di uscita, come spegnere il computer e fare una passeggiata.",
        "Proteggi il sonno e ritagliati del tempo per muoverti, anche solo con brevi camminate.",
        "Usa i giorni liberi per riposare davvero, senza controllare i messaggi di lavoro.",
      ],
    },
    detachment: {
      label: "Distacco dal lavoro",
      desc: "Misura quanto ti stai allontanando dal lavoro e dalle persone legate a esso, con meno coinvolgimento, più freddezza o la sensazione che tutto sia indifferente.",
      high: "Ultimamente senti il desiderio di allontanarti dal lavoro e dalle persone legate a esso, facendo il minimo e perdendo interesse per ciò che prima contava. Spesso questo distacco è un modo per proteggersi dal logoramento, non una mancanza di carattere o di impegno. Vale la pena capire che cosa ti ha portato a questo punto e che cosa potrebbe cambiare.",
      low: "Continui a coinvolgerti nel tuo lavoro e con le persone legate a esso. Anche nei giorni difficili, per te sembra mantenere un certo senso. Questo legame aiuta a proteggerti dal logoramento.",
      tips: [
        "Ricorda che cosa ti ha portato a scegliere questo lavoro e cerca compiti che ti riavvicinino a quello.",
        "Parla con i responsabili o con i colleghi di ciò che sta togliendo senso al lavoro, come obiettivi irrealistici o mancanza di autonomia.",
        "Coltiva relazioni di sostegno sul lavoro: una conversazione sincera con un collega di fiducia può essere di grande sollievo.",
      ],
    },
    efficacy: {
      label: "Bassa realizzazione",
      desc: "Misura quanto manca la sensazione che il tuo lavoro dia risultati, di essere capace e di crescere. Le frasi di questa parte sono positive, quindi il punteggio sale quando si sono verificate poco.",
      high: "Ultimamente ti capita di rado di sentire che il tuo impegno rende, che sei capace o che il tuo lavoro fa la differenza. Questa sensazione può derivare dalla stanchezza stessa, che distorce il modo in cui vedi le tue prestazioni, o da un ambiente con poco riconoscimento. Non misura il tuo valore come professionista.",
      low: "Continui a percepire che il tuo lavoro dà risultati, che sei capace di risolvere problemi e che stai imparando. Questo senso di realizzazione aiuta a mantenere la motivazione anche nei periodi più impegnativi.",
      tips: [
        "Alla fine della settimana, annota tre cose che hai portato a termine o risolto, anche se piccole.",
        "Chiedi a una persona di fiducia un riscontro sul tuo lavoro, per avere una visione più equilibrata delle tue prestazioni.",
        "Cerca una piccola sfida o qualcosa di nuovo da imparare che ti restituisca la sensazione di progresso.",
      ],
    },
  },
  bands: {
    low: {
      label: "Pochi segnali di burnout",
      text: "Le tue risposte indicano pochi segnali di burnout. Sembri mantenere energia, coinvolgimento e senso di realizzazione nel lavoro, nonostante le normali difficoltà della routine. Continua a curare i limiti e le abitudini che ti aiutano a mantenere questo equilibrio.",
    },
    moderate: {
      label: "Segnali moderati di burnout",
      text: "Le tue risposte indicano alcuni segnali di logoramento legati al lavoro. È un buon momento per agire, prima che la stanchezza si accumuli. Osserva che cosa ti pesa di più, prova i suggerimenti qui sotto e, se possibile, parla con i tuoi responsabili di eventuali aggiustamenti nella routine.",
    },
    high: {
      label: "Segnali forti di burnout",
      text: "Le tue risposte indicano segnali forti di burnout, come molta stanchezza, distacco dal lavoro e scarso senso di realizzazione. Questo logoramento di solito richiede cambiamenti reali nella routine, non solo più forza di volontà. Rivolgiti a un professionista, come uno psicologo o un medico, per valutare come stai e quali strade hanno senso nel tuo caso.",
    },
  },
  resultTitle: "Il tuo livello di burnout",
  resultIntro: "Il risultato somma le tue risposte sugli ultimi tre mesi. Nelle frasi sulla realizzazione il conteggio è invertito: meno senso di realizzazione hai provato, più il risultato sale. Qui sotto trovi la fascia in cui rientri e il tuo punteggio in ciascuna parte.",
  note: "Questo questionario è uno strumento di conoscenza di sé, basato sulla tua percezione. Il burnout è un logoramento legato al lavoro e non è, di per sé, una diagnosi medica. Segnali simili compaiono anche nella depressione, nell'ansia e nei problemi di salute fisica, e solo un professionista qualificato può fare questa valutazione.",
  help: "Se il lavoro sta influendo sulla tua salute, rivolgiti a uno psicologo o al tuo medico di base. I servizi sanitari della tua zona possono orientarti e, se necessario, indirizzarti verso i servizi di salute mentale. Se la tua azienda ha un servizio di medicina del lavoro o un programma di supporto ai dipendenti, anche questo può aiutarti. Se stai attraversando un momento di sofferenza intensa, puoi contattare una linea di ascolto e supporto emotivo del tuo paese. In caso di emergenza, chiama il 112.",
};

export default t;
