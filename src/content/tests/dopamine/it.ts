// dopamine — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Test della dopamina",
  desc: "Scopri come vanno le tue abitudini legate al sistema di ricompensa del cervello: stimoli rapidi, noia, schermi e obiettivi a lungo termine.",
  intro:
    "Questo questionario osserva le abitudini quotidiane legate al sistema di ricompensa del cervello. La dopamina è una sostanza che il cervello usa per trasmettere segnali ed è legata alla motivazione e alla ricerca di ricompense. Importante: nonostante il nome popolare, questo test non misura la dopamina nel tuo corpo. Nessun questionario può farlo, e gli esami medici in grado di valutare la dopamina sono specifici e usati raramente per questo scopo. Il test valuta invece quattro aree di abitudini: ricerca di ricompense rapide, difficoltà con la noia, motivazione per gli obiettivi a lungo termine e abitudini con gli schermi. Sono 16 frasi. Pensa alle ultime 2 settimane e indica con che frequenza ti è capitata ciascuna situazione. Rispondi con sincerità e senza pensarci troppo: non ci sono risposte giuste o sbagliate.",
  scale: ["Mai", "Raramente", "A volte", "Spesso", "Sempre"],
  items: [
    "Passo più tempo di quanto volessi a guardare video brevi o a scorrere i social.",
    "Nei momenti di attesa, come in coda o sui mezzi pubblici, faccio fatica a stare senza fare niente.",
    "Riesco a dedicarmi a un obiettivo per settimane, anche quando i risultati non si vedono ancora.",
    "Prendo il telefono nei primi minuti dopo il risveglio.",
    "Compro cose d'impulso, soprattutto online, e poi mi accorgo che non mi servivano.",
    "Perdo la pazienza con i compiti lenti o ripetitivi e smetto prima di finire.",
    "Riesco a rinunciare a un piacere immediato quando ostacola qualcosa di importante per il mio futuro.",
    "Resto al telefono a letto e finisco per addormentarmi più tardi di quanto volessi.",
    "Quando mi sento giù di energie o di morale, cerco qualcosa che mi dia un piacere immediato, come un dolce, uno snack o un video.",
    "Faccio fatica a leggere un testo lungo o a guardare un film intero senza distrarmi con altro.",
    "Comincio i compiti importanti all'ora che avevo previsto, senza rimandarli per fare qualcosa di più divertente.",
    "Sblocco il telefono senza un motivo preciso, solo per abitudine.",
    "Quando arriva una notifica, interrompo quello che sto facendo per vedere di cosa si tratta.",
    "Le attività semplici, come cucinare o camminare, mi sembrano noiose se non ho qualcosa da guardare o ascoltare nello stesso momento.",
    "Provo soddisfazione per i progressi nei progetti lunghi, come studiare, allenarmi o risparmiare.",
    "Uso più di uno schermo alla volta, come guardare una serie mentre controllo il telefono.",
  ],
  dims: {
    quickRewards: {
      label: "Ricompense rapide",
      desc: "Misura quanto ricorri ai piaceri immediati, come social, video brevi, notifiche, acquisti d'impulso e snack.",
      high: "Ricorri spesso agli stimoli rapidi, in molti casi per riposarti o cambiare umore. È comune e non è un difetto: molti di questi stimoli sono creati proprio per catturare la tua attenzione. Il punto di attenzione è quando occupano il tempo di cose che per te contano di più o ti lasciano la sensazione di aver perso tempo.",
      low: "Ricorri poco ai piaceri immediati e di solito scegli con intenzione come usare il tuo tempo libero. Questo ti aiuta a mantenere la concentrazione e a goderti meglio i momenti di riposo. Vale la pena continuare a osservare le giornate di stanchezza, quando la voglia di stimoli rapidi tende ad aumentare.",
      tips: [
        "Disattiva le notifiche non essenziali e tieni solo quelle di persone e servizi davvero importanti.",
        "Prima di aprire un'app, decidi cosa vuoi farci e per quanto tempo.",
        "Per gli acquisti online non programmati, aspetta 24 ore prima di confermare l'ordine.",
      ],
    },
    boredom: {
      label: "Difficoltà con la noia",
      desc: "Misura quanto ti è difficile stare senza stimoli, aspettare o concentrarti su compiti lenti e ripetitivi.",
      high: "I momenti di attesa e i compiti lenti tendono a metterti a disagio, e la voglia di cercare qualcosa di più interessante arriva in fretta. È molto comune in una routine piena di stimoli. La tolleranza alla noia si può allenare un po' alla volta, come qualsiasi altra abitudine.",
      low: "Gestisci bene le attese, le pause e i compiti che richiedono pazienza. Questo ti aiuta a concentrarti più a lungo e a finire ciò che inizi. I momenti senza stimoli lasciano anche spazio per far riposare la mente e avere nuove idee.",
      tips: [
        "Esercitati ogni giorno per qualche minuto a stare senza stimoli, per esempio aspettando in coda o facendo un breve tragitto senza prendere il telefono.",
        "Nei compiti lunghi, lavora a blocchi di 20-25 minuti, con brevi pause tra un blocco e l'altro.",
        "Ogni tanto fai una cosa alla volta, come mangiare senza schermi o camminare senza auricolari.",
      ],
    },
    longTerm: {
      label: "Obiettivi a lungo termine",
      desc: "Misura la motivazione per gli obiettivi che richiedono tempo prima di dare risultati, come studiare, allenarsi o risparmiare. Qui un punteggio alto indica più difficoltà a portare avanti questo tipo di obiettivi; un punteggio basso, più facilità.",
      high: "Ultimamente mantenere la motivazione per obiettivi che richiedono tempo ti risulta difficile, soprattutto quando ci sono opzioni più rapide e piacevoli a portata di mano. Questo non significa mancanza di capacità: gli obiettivi lunghi danno poche ricompense all'inizio, e il cervello tende a preferire ciò che è immediato. Dividere il percorso in tappe più piccole di solito aiuta molto.",
      low: "Riesci a mantenere l'impegno per obiettivi che richiedono tempo prima di dare risultati e dai valore ai progressi fatti un po' alla volta. Questa capacità ti aiuta a costruire risultati duraturi nello studio, nel lavoro e nella salute. Il punto di attenzione è non trascurare il riposo e lo svago lungo il percorso.",
      tips: [
        "Dividi ogni grande obiettivo in piccole tappe e riconosci ogni tappa completata con una ricompensa semplice.",
        "Registra i tuoi progressi su un calendario o in un'app per vedere quanta strada hai già fatto.",
        "Svolgi i compiti importanti nelle ore in cui di solito hai più energia, prima di aprire i social o altre app.",
      ],
    },
    screens: {
      label: "Abitudini con gli schermi",
      desc: "Misura come il telefono e gli altri schermi compaiono nella tua routine: al risveglio, prima di dormire, quando controlli il telefono senza motivo e quando usi più schermi contemporaneamente.",
      high: "Gli schermi sono presenti in molti momenti della tua giornata, anche appena ti svegli e al momento di dormire. Oggi è comune, ma usarli la sera può ritardare e peggiorare il sonno, e controllare il telefono di continuo divide l'attenzione. Piccoli cambiamenti nell'ambiente di solito funzionano meglio che affidarsi solo alla forza di volontà.",
      low: "Usi gli schermi con più intenzione e mantieni alcuni momenti della giornata liberi da essi, come il primo mattino e l'ora di andare a dormire. Questo favorisce il sonno, la concentrazione e il riposo. Vale la pena mantenere questi limiti, soprattutto nei periodi più frenetici.",
      tips: [
        "Di notte lascia il telefono fuori dalla camera da letto e usa una sveglia tradizionale.",
        "Evita gli schermi nei 30-60 minuti prima di dormire e cerca di mantenere orari di sonno regolari.",
        "Nelle pause della giornata, sostituisci il telefono con un po' di movimento, come una breve camminata o qualche esercizio di stretching.",
      ],
    },
  },
  bands: {
    balanced: {
      label: "Equilibrio",
      text: "Le tue risposte indicano un rapporto equilibrato con gli stimoli rapidi e gli schermi. Sembri gestire bene la noia e mantenere la motivazione per obiettivi che richiedono tempo. Continua a coltivare le abitudini che ti fanno bene, come un sonno regolare e dei momenti lontano dagli schermi.",
    },
    attention: {
      label: "Attenzione",
      text: "Le tue risposte indicano che alcune abitudini legate agli stimoli rapidi occupano già uno spazio importante nella tua routine. È molto comune e non è motivo di allarme. Osserva quali aree hanno ottenuto i punteggi più alti e scegli uno o due piccoli cambiamenti da provare nelle prossime settimane.",
    },
    overloaded: {
      label: "Sovraccarico di stimoli",
      text: "Le tue risposte indicano che gli stimoli rapidi e gli schermi sono molto presenti nella tua giornata, e che aspettare, concentrarti o portare avanti obiettivi lunghi potrebbe essere diventato più difficile. È sempre più comune e può cambiare con aggiustamenti graduali delle abitudini, senza tagli drastici. Comincia riducendo l'eccesso di stimoli in uno o due momenti della giornata, come al risveglio e prima di dormire, e osserva come ti senti.",
    },
  },
  resultTitle: "Le tue abitudini di ricompensa",
  resultIntro:
    "Il risultato somma le quattro aree e mostra quanto le tue abitudini attuali dipendono dagli stimoli rapidi. Ricorda: non misura la dopamina nel tuo corpo, ma schemi di comportamento che possono cambiare con il tempo e con la pratica.",
  note: "Questo test è uno strumento di conoscenza di sé basato sulle tue risposte. Non misura la dopamina né qualsiasi altra sostanza nel corpo, non è un esame medico e non serve a fare diagnosi. Ridurre l'eccesso di stimoli può aiutare come cambiamento di abitudini, ma non è un trattamento medico. Se un'abitudine ti sembra fuori controllo o sta causando danni nella tua vita, parlane con un professionista della salute.",
  help: "Se senti di non riuscire a controllare l'uso del telefono, dei videogiochi, delle scommesse o degli acquisti, oppure se questo sta influendo sul tuo sonno, sul lavoro, sulle finanze o sulle relazioni, rivolgiti a uno psicologo o a un medico. Per videogiochi, scommesse o acquisti compulsivi esistono anche servizi e gruppi di sostegno specializzati che possono aiutarti.",
};

export default t;
