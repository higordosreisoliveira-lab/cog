// autism — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Tratti dello spettro autistico negli adulti",
  desc: "Scopri come alcuni tratti legati allo spettro autistico compaiono nella tua vita adulta: comunicazione, amicizie, routine, sensi e interessi.",
  intro:
    "Questo questionario raccoglie 25 situazioni quotidiane legate a cinque aree in cui le persone autistiche tendono ad avere un proprio modo di funzionare: comunicazione, interazione e amicizie, routine e cambiamenti, sensibilità sensoriale, e dettagli e interessi intensi. È pensato per la vita adulta. Per ogni frase, indica quanto descrive come sei di solito, la maggior parte del tempo, e non solo in un periodo o in un giorno particolare. È un'autovalutazione rispettosa dei tratti, non una diagnosi: il risultato mostra tendenze, senza etichette. Molte persone adulte non sono mai state valutate durante l'infanzia e, nel corso degli anni, hanno imparato a mascherare o compensare i propri tratti per adattarsi. Se è il tuo caso, prova a rispondere pensando a come sei davvero quando non ti sforzi di apparire in un altro modo. Non ci sono risposte giuste o sbagliate.",
  scale: ["Completamente in disaccordo", "In disaccordo", "Neutrale", "D'accordo", "Completamente d'accordo"],
  items: [
    "Quando qualcuno mi saluta dicendo «passa a trovarmi uno di questi giorni», mi chiedo se sia un invito vero o solo un modo gentile per chiudere la conversazione.",
    "Dopo un compleanno o un pranzo in famiglia, anche quando mi è piaciuto, torno a casa senza energie e ho bisogno di ore di silenzio per riprendermi.",
    "Se il programma del sabato cambia all'ultimo momento, per esempio dal cinema a un locale, mi adatto senza fastidio.",
    "Nei ristoranti affollati, il rumore di posate, conversazioni e musica tutti insieme mi impedisce di seguire ciò che dice la persona che ho davanti.",
    "Quando un argomento mi prende, come un periodo storico, una serie o un tipo di pianta, passo ore a fare ricerche e perdo la cognizione del tempo.",
    "In una conversazione di gruppo, colgo senza sforzo il momento giusto per parlare e quello per lasciar parlare qualcun altro.",
    "Preferisco vedere gli amici per fare qualcosa insieme, come giocare, cucinare o montare qualcosa, piuttosto che solo per chiacchierare.",
    "Quando dei lavori stradali mi costringono a cambiare il solito percorso per andare al lavoro o tornare a casa, provo un senso di disagio che dura per il resto della giornata.",
    "Indosso un vestito nuovo appena comprato senza preoccuparmi dell'etichetta, delle cuciture o della consistenza del tessuto.",
    "Mi accorgo subito quando un quadro è storto, quando un numero non torna in un conto o quando una parola è scritta male su un cartello.",
    "In una conversazione faccia a faccia, guardare la persona negli occhi mi stanca o mi distrae, e di solito guardo altrove mentre ascolto.",
    "Fare amicizia con nuovi colleghi di lavoro o di università mi viene naturale, senza dover pensare a ogni passo.",
    "Al ristorante o al bar ordino quasi sempre lo stesso piatto, perché così so esattamente cosa mi aspetta.",
    "La luce bianca e intensa di certi supermercati e uffici mi stanca o mi fa venire mal di testa, mentre le persone intorno a me sembrano non notarla nemmeno.",
    "Quando compro un nuovo dispositivo, leggo solo lo stretto necessario per farlo funzionare e il resto del manuale non mi incuriosisce.",
    "Quando una persona vicina a me si sfoga senza chiedere consigli, capisco dal tono di voce che ha più bisogno di essere ascoltata che di ricevere soluzioni.",
    "Al lavoro o in gruppi nuovi, osservo e imito il modo di parlare, i gesti e le espressioni degli altri per sembrare più a mio agio di quanto sia davvero.",
    "Viaggiare senza un itinerario, decidendo ogni mattina cosa fare, mi sembra rilassante e perfino divertente.",
    "Odori come un profumo forte sull'autobus o un detersivo in ascensore mi danno fastidio al punto da dovermi allontanare o trattenere il respiro.",
    "Ho liste, collezioni o appunti dettagliati su un argomento che mi piace, con informazioni che la maggior parte delle persone non penserebbe nemmeno a cercare.",
    "Quando parlo di un argomento che mi appassiona, mi accorgo che l'altra persona ha perso interesse solo quando cambia discorso o prende il telefono.",
    "A una grigliata o a una festa in cui conosco poche persone, riesco a inserirmi e a passare da un gruppo all'altro senza grande fatica.",
    "Prima di andare in un posto nuovo, come uno studio medico o un ufficio, guardo online le foto, la mappa e perfino l'ingresso dell'edificio per sapere cosa troverò.",
    "Riesco a lavorare o a studiare con una conversazione in sottofondo, la TV accesa o il rumore dei lavori dai vicini senza perdere la concentrazione.",
    "Quando qualcuno mi consiglia una serie, la guardo per curiosità, ma non sento il bisogno di sapere tutto sul dietro le quinte, sugli attori o sulle teorie dei fan.",
  ],
  dims: {
    social: {
      label: "Comunicazione",
      desc: "Osserva come usi e interpreti il linguaggio nella vita quotidiana: frasi a doppio senso, contatto visivo, tono di voce e ritmo di una conversazione.",
      high: "Tendi a comunicare in modo diretto e a prendere le parole per ciò che dicono, mentre i segnali indiretti, come l'ironia, le frecciatine o i cambi di tono, possono richiederti più sforzo. Questo modo di comunicare ha punti di forza chiari: onestà, chiarezza e poco spazio per i fraintendimenti voluti. La difficoltà di solito emerge quando gli altri si aspettano che tu legga tra le righe.",
      low: "Di solito segui con facilità i segnali impliciti di una conversazione, come il tono di voce, le pause e ciò che resta sottinteso. Questo ti aiuta ad adattare ciò che dici a ogni persona e situazione. Anche così, ci possono essere momenti, come negli ambienti nuovi o nei giorni di stanchezza, in cui comunicare ti richiede di più.",
      tips: [
        "Quando qualcosa ti sembra ambiguo, chiedi con tranquillità, per esempio: «Era un invito o solo un modo di dire?». Chiedere è un modo legittimo di comunicare.",
        "Mettiti d'accordo con le persone vicine sul fatto che potete parlarvi in modo diretto, senza dover indovinare le intenzioni.",
        "Se mantenere lo sguardo ti stanca, non devi forzarti: annuire o ripetere una parte di ciò che hai sentito mostra comunque che stai prestando attenzione.",
      ],
    },
    interaction: {
      label: "Interazione e amicizie",
      desc: "Osserva come ti avvicini alle persone, come crei e mantieni le amicizie e quanta energia ti consumano gli incontri sociali.",
      high: "Le situazioni sociali tendono a consumarti molta energia, anche quando sono piacevoli, e creare legami può richiedere più strategia che spontaneità. Molte persone con questo profilo preferiscono poche amicizie, ma profonde e leali, spesso costruite intorno a interessi o attività in comune. Imitare il modo di fare degli altri per adattarsi è comune e, con il tempo, può stancare molto.",
      low: "Di solito ti avvicini alle persone e ti muovi tra gruppi diversi con naturalezza. Questo rende più facile creare nuovi contatti al lavoro e nella vita privata. Vale comunque la pena rispettare i tuoi limiti di energia sociale, che possono cambiare a seconda della fase della vita.",
      tips: [
        "Concediti un momento di riposo dopo gli eventi sociali, come faresti dopo uno sforzo fisico.",
        "Cerca amicizie in luoghi legati ai tuoi interessi, come gruppi di gioco, corsi, club del libro o attività di volontariato.",
        "Osserva in quali ambienti ti senti a tuo agio nell'essere come sei, senza dover imitare nessuno, e cerca di passarci più tempo.",
      ],
    },
    routine: {
      label: "Routine e cambiamenti",
      desc: "Osserva quanto la prevedibilità ti dà conforto e come affronti imprevisti, cambi di programma e situazioni nuove.",
      high: "Routine e prevedibilità sembrano darti sicurezza e calma, mentre i cambiamenti inaspettati possono causarti disagio o stanchezza. Questo ha vantaggi concreti: costanza, affidabilità e una buona capacità di pianificazione. La difficoltà di solito emerge quando l'ambiente cambia senza preavviso.",
      low: "Tendi ad affrontare imprevisti e cambi di programma con flessibilità. Questo aiuta nei viaggi, nei lavori dinamici e nelle situazioni nuove. Anche così, avere qualche routine di supporto può essere utile nei periodi più frenetici.",
      tips: [
        "Prima di una situazione nuova, informati su tutto ciò che puoi: indirizzo, foto del posto, chi ci sarà e quanto dovrebbe durare.",
        "Quando è possibile, chiedi alle persone vicine di avvisarti in anticipo dei cambi di programma.",
        "Crea piccoli punti fermi di routine che funzionino ovunque, come un caffè sempre alla stessa ora o una playlist familiare.",
      ],
    },
    sensory: {
      label: "Sensibilità sensoriale",
      desc: "Osserva come reagisci a suoni, luci, odori, consistenze e ambienti con molti stimoli contemporaneamente.",
      high: "I tuoi sensi sembrano cogliere suoni, luci, odori e consistenze con più intensità della media, e gli ambienti affollati possono stancarti in fretta. Non è un capriccio: è una differenza reale nel modo di elaborare gli stimoli. La stessa sensibilità spesso ti permette di cogliere sfumature che sfuggono ad altre persone.",
      low: "Sembri gestire bene gli ambienti rumorosi, molto illuminati o pieni di stimoli. Questo facilita la concentrazione nei luoghi affollati. Vale la pena osservare se qualche stimolo specifico ti dà fastidio, perché la sensibilità può riguardare solo uno o due sensi.",
      tips: [
        "Tieni a portata di mano un kit di comfort, come tappi per le orecchie o cuffie con cancellazione del rumore, occhiali da sole e vestiti di tessuti che ti piacciono.",
        "Nei luoghi affollati, scegli posizioni più tranquille, come un tavolo in un angolo, oppure vai negli orari meno frequentati.",
        "Durante gli eventi lunghi, fai delle pause in un posto silenzioso prima di arrivare al tuo limite.",
      ],
    },
    details: {
      label: "Dettagli e interessi intensi",
      desc: "Osserva la tua attenzione ai dettagli e agli schemi e l'intensità con cui ti immergi negli argomenti che suscitano il tuo interesse.",
      high: "Tendi a notare dettagli e schemi che ad altre persone sfuggono e ad approfondire molto gli argomenti che ti piacciono. Questa combinazione è una vera forza: favorisce la precisione, la memoria per le informazioni e le conoscenze specialistiche. Il punto di attenzione è il tempo, perché immergerti in un interesse può farti dimenticare di mangiare, riposare o rispettare altri impegni.",
      low: "Di solito hai interessi più vari e una visione più generale delle cose, senza fermarti troppo sui dettagli. Questo ti aiuta a spaziare tra argomenti diversi e a vedere il quadro d'insieme. Nei compiti che richiedono precisione, conviene ritagliarti un momento per ricontrollare con calma.",
      tips: [
        "Valorizza i tuoi interessi come fonte di benessere e, se ha senso, di lavoro: settori come la ricerca, la revisione di testi, la tecnologia, i dati e le arti spesso apprezzano l'attenzione ai dettagli.",
        "Usa delle sveglie per ricordarti di mangiare, riposare e rispettare gli impegni quando un argomento cattura la tua attenzione per ore.",
        "Condividi i tuoi interessi con persone e comunità appassionate degli stessi temi, dove il tuo entusiasmo è benvenuto.",
      ],
    },
  },
  bands: {
    few: {
      label: "Pochi tratti",
      text: "Le tue risposte indicano pochi tratti dello spettro autistico nella tua vita quotidiana. È comunque naturale riconoscersi in alcuni aspetti, come apprezzare la routine o non sopportare il rumore, che fanno parte della diversità umana. I confini tra le fasce sono solo un riferimento e non definiscono chi sei.",
    },
    some: {
      label: "Alcuni tratti",
      text: "Le tue risposte indicano alcuni tratti dello spettro autistico in una parte delle situazioni descritte. Molte persone hanno tratti simili senza essere nello spettro, e ci sono persone autistiche che hanno imparato a mascherare i propri; per questo i confini tra le fasce servono solo come guida. Osserva le aree con il punteggio più alto e, se ti creano difficoltà nella vita quotidiana, parlarne con un professionista può aiutarti a capire meglio il tuo modo di funzionare.",
    },
    many: {
      label: "Molti tratti",
      text: "Le tue risposte indicano molti tratti associati allo spettro autistico, e potrebbe valere la pena chiedere una valutazione a uno psicologo, uno psichiatra o un neurologo con esperienza nell'autismo negli adulti. Molte persone scoprono di essere nello spettro solo in età adulta e raccontano che capire il proprio modo di funzionare ha portato sollievo, conoscenza di sé e accesso a forme di supporto utili. Ricorda che questo risultato non è una diagnosi e che i confini tra le fasce sono solo un riferimento.",
    },
  },
  resultTitle: "I tuoi tratti dello spettro autistico",
  resultIntro:
    "Il risultato somma le tue risposte nelle cinque aree e mostra in quale fascia si trova il totale. Punteggi più alti indicano che nella tua vita compaiono più tratti associati allo spettro autistico. Questi tratti non sono difetti: sono differenze nel modo di percepire il mondo, di comunicare e di organizzarsi, che portano sia sfide sia punti di forza.",
  note: "Questo questionario è uno strumento di conoscenza di sé basato sulle tue risposte. Non è una diagnosi e non sostituisce la valutazione di un professionista. La diagnosi di autismo negli adulti richiede colloqui approfonditi, la ricostruzione della storia di vita e, spesso, informazioni sull'infanzia, e può essere fatta solo da professionisti abilitati. Tratti simili possono comparire anche in altre condizioni, come ansia, ADHD o plusdotazione.",
  help: "Per una valutazione, rivolgiti a uno psicologo, a uno psichiatra o a un neurologo con esperienza nell'autismo negli adulti. Nel servizio pubblico il percorso di solito comincia dal tuo medico di base o dai servizi sanitari della tua zona, che possono indirizzarti verso servizi specializzati; anche i centri clinici delle università con corsi di psicologia offrono spesso consulenze a prezzi accessibili. Prima della visita, annota esempi di situazioni della tua vita quotidiana e, se possibile, ricordi d'infanzia o racconti dei familiari. Le comunità e i gruppi di sostegno per adulti autistici, in presenza oppure online, aiutano anche a scambiare esperienze, a capire che non sei l'unica persona a vivere certe cose e a trovare indicazioni su professionisti.",
};

export default t;
