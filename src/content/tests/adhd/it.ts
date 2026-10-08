// adhd — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Tratti di ADHD negli adulti",
  desc: "Scopri con che frequenza situazioni legate all'attenzione, all'organizzazione, all'irrequietezza e all'impulsività compaiono nella tua vita adulta.",
  intro:
    "L'ADHD (disturbo da deficit di attenzione e iperattività) non riguarda solo i bambini: molte persone arrivano all'età adulta con questi tratti, a volte senza aver mai fatto una valutazione. Questo questionario osserva due gruppi di tratti nella vita quotidiana: attenzione e organizzazione, e irrequietezza e impulsività. Sono 18 situazioni comuni della vita adulta, al lavoro, a casa e nelle relazioni. Pensa agli ultimi 6 mesi e indica con che frequenza ciascuna ti è capitata. Rispondi con sincerità, pensando a ciò che succede davvero e non a ciò che vorresti che succedesse. Ricorda che si tratta di un'autovalutazione che guarda ai tratti, non di una diagnosi. Tutti si distraggono o vanno di fretta ogni tanto; qui conta la frequenza.",
  scale: ["Mai", "Raramente", "A volte", "Spesso", "Molto spesso"],
  items: [
    "Leggo una pagina di un libro o di una relazione fino in fondo e mi accorgo che non saprei dire cosa c'era scritto, perché la mia testa era altrove.",
    "Durante una riunione, una lezione o una conferenza, mi accorgo che continuo a dondolare la gamba, a picchiettare la penna sul tavolo o a cambiare posizione sulla sedia.",
    "Già sulla porta di casa, perdo qualche minuto a cercare le chiavi, il telefono o il portafoglio, che ho lasciato da qualche parte senza ricordare dove.",
    "In una conversazione di gruppo mi viene un'idea e la dico subito, sovrapponendomi a chi non aveva ancora finito, per paura di dimenticare quello che volevo dire.",
    "Prendo il telefono o accendo il computer per fare una cosa precisa, come pagare una bolletta, e finisco per farne altre tre senza aver fatto la prima.",
    "Vedo un'offerta o qualcosa che attira la mia attenzione e lo compro subito, senza confrontare i prezzi né pensare al budget del mese.",
    "Mentre qualcuno mi spiega qualcosa con calma, mi accorgo che mi è sfuggita una parte di ciò che ha detto e devo chiedere di ripetere, oppure faccio finta di aver seguito.",
    "In coda al supermercato o nel traffico fermo, sento un'impazienza che cresce in fretta: mi guardo intorno, sbuffo o cerco un'altra strada.",
    "Un compito semplice e noioso, come prenotare una visita o inviare un documento, resta fermo per settimane nella mia lista, anche se so che richiederebbe pochi minuti.",
    "In un giorno libero senza programmi, invece di riposare, sento un'irrequietezza e mi invento subito qualcosa da fare, perché passare del tempo senza fare niente mi dà fastidio.",
    "Invio un'email, un lavoro o un foglio di calcolo e solo dopo noto un dettaglio che mi era sfuggito, come un allegato dimenticato, una data sbagliata o un nome scambiato.",
    "Rispondo a un messaggio o a un commento sull'onda del momento e, poco dopo, mi pento del tono o di ciò che ho scritto.",
    "Comincio a riordinare una stanza, trovo qualcosa che mi porta in un'altra parte della casa e, a fine giornata, ci sono diversi riordini lasciati a metà.",
    "Vado a letto con il corpo stanco, ma la testa continua a correre, saltando da un pensiero all'altro per parecchio tempo.",
    "Prendo un impegno con qualcuno e me ne ricordo solo quando quella persona mi scrive per chiedermi se è tutto confermato.",
    "Dopo un'uscita con amici o colleghi, mi rendo conto di aver parlato molto più degli altri o di aver saltato da un argomento all'altro senza lasciar respirare la conversazione.",
    "Penso di avere ancora parecchio tempo prima di uscire e, quando guardo l'orologio, dovrei già essere per strada.",
    "Sull'onda dell'entusiasmo accetto subito un invito, un nuovo progetto o un cambio di programma, e solo dopo mi rendo conto che non ci stava nella mia routine.",
  ],
  dims: {
    inattention: {
      label: "Attenzione e organizzazione",
      desc: "Misura con che frequenza l'attenzione ti sfugge nel mezzo di una lettura, di un compito o di una conversazione, e come gestisci scadenze, impegni, oggetti di uso quotidiano e compiti poco interessanti.",
      high: "Mantenere la concentrazione sui compiti poco interessanti, ricordare gli impegni e curare i dettagli sembra richiederti più sforzo che a molte altre persone. Non ha niente a che fare con la pigrizia o con la mancanza di intelligenza: molte persone con questo profilo hanno una mente rapida e creativa, piena di associazioni, e riescono a concentrarsi intensamente su ciò che suscita il loro interesse. Di solito aiuta togliere l'organizzazione dalla testa e portarla nell'ambiente, con promemoria, liste e routine semplici.",
      low: "Di solito mantieni l'attenzione su ciò che stai facendo, ricordi gli impegni e riesci a portare a termine i compiti, anche quelli meno interessanti. Questo porta affidabilità e tranquillità al lavoro e a casa. Le distrazioni occasionali sono normali, soprattutto nei periodi di stanchezza, stress o sonno scarso.",
      tips: [
        "Usa sveglie e promemoria sul telefono per impegni e bollette, invece di affidarti solo alla memoria.",
        "Tieni un posto fisso per chiavi, portafoglio e documenti, come una ciotola o un gancio vicino alla porta.",
        "Davanti a un compito noioso, impegnati solo per i primi cinque minuti: cominciare è spesso la parte più difficile.",
      ],
    },
    hyperactivity: {
      label: "Irrequietezza e impulsività",
      desc: "Misura l'irrequietezza del corpo e della mente, la difficoltà ad aspettare e la tendenza a parlare, decidere o agire d'impulso.",
      high: "Hai molta energia e tendi ad agire in fretta: parli, decidi e reagisci al ritmo con cui arrivano le idee, e aspettare o restare a lungo senza muoverti di solito è scomodo. Questa energia può essere una grande alleata, perché porta entusiasmo, iniziativa, creatività e il coraggio di cominciare cose nuove. Il punto di attenzione sono le parole e le decisioni prese a caldo, che a volte portano a pentimenti o attriti, e la stanchezza di una mente che fatica a rallentare.",
      low: "Di solito sai aspettare con calma, pensi prima di agire e riesci a rilassarti quando hai tempo libero. Questo ti aiuta a prendere decisioni ponderate e a mantenere conversazioni equilibrate. Momenti occasionali di impazienza o agitazione sono normali, soprattutto nei periodi di stress.",
      tips: [
        "Prima di comprare qualcosa, rispondere a un messaggio che ti ha dato fastidio o accettare un nuovo impegno, crea una pausa: aspetta qualche minuto o fino al giorno dopo.",
        "Dai uno sfogo all'energia del corpo, con attività fisica regolare, brevi camminate durante le pause o un piccolo oggetto discreto da tenere tra le mani durante le riunioni.",
        "Se la mente accelera al momento di dormire, prima di andare a letto scrivi su un foglio ciò che hai in testa e rimanda tutto al giorno dopo.",
      ],
    },
  },
  bands: {
    few: {
      label: "Pochi tratti",
      text: "Le tue risposte indicano che le situazioni legate alla disattenzione, all'irrequietezza e all'impulsività compaiono poco nella tua vita quotidiana. Qualche distrazione e qualche momento di impazienza sono normali per chiunque. Le fasce di questo test servono solo come orientamento e non sono state validate clinicamente.",
    },
    some: {
      label: "Alcuni tratti",
      text: "Le tue risposte indicano che alcuni tratti di disattenzione o di irrequietezza compaiono con una certa frequenza nella tua routine. È comune e può avere diverse cause, come stanchezza, stress, sonno scarso o troppe richieste. Osserva in quali situazioni pesano di più e prova i consigli di ciascuna area, ricordando che le fasce sono solo un orientamento, senza validazione clinica.",
    },
    many: {
      label: "Molti tratti",
      text: "Le tue risposte indicano che molti tratti legati all'attenzione, all'irrequietezza e all'impulsività compaiono spesso nella tua vita quotidiana. Questo non significa che tu abbia l'ADHD: altre condizioni e fasi della vita possono portare segnali simili, e le fasce di questo test sono solo un orientamento, senza validazione clinica. Se questi tratti ti accompagnano da molto tempo, forse dall'infanzia, e ostacolano il lavoro, lo studio o le relazioni, vale la pena parlarne con uno psichiatra, un neurologo o uno psicologo per una valutazione adeguata.",
    },
  },
  resultTitle: "I tuoi tratti di ADHD",
  resultIntro:
    "Il risultato somma le tue risposte alle 18 situazioni e mostra con che frequenza tratti di disattenzione, irrequietezza e impulsività compaiono nella tua vita quotidiana. Guarda anche le due aree separatamente: ti aiutano a capire dove questi tratti pesano di più e dove sono i tuoi punti di forza.",
  note: "Questo test è uno strumento di conoscenza di sé basato sulle tue risposte. Non è una diagnosi di ADHD né di qualsiasi altra condizione, e le fasce di risultato non sono state validate clinicamente. Solo un professionista qualificato, come uno psichiatra, un neurologo o uno psicologo, può fare una valutazione completa, che tenga conto della tua storia fin dall'infanzia e di altre possibili cause, come ansia, depressione o problemi di sonno.",
  help: "Se vuoi approfondire questi tratti, rivolgiti a uno psichiatra, a un neurologo o a uno psicologo, preferibilmente con esperienza nell'ADHD in età adulta. Un buon primo passo è parlarne con il tuo medico di base o con i servizi sanitari della tua zona, che possono orientarti e indirizzarti verso una valutazione; nei momenti di maggiore sofferenza puoi rivolgerti anche ai servizi di salute mentale del territorio. Esistono inoltre servizi specializzati presso ambulatori universitari e ospedali universitari, oltre ad associazioni di sostegno per le persone con ADHD, che spesso sanno indicare professionisti e materiali affidabili.",
};

export default t;
