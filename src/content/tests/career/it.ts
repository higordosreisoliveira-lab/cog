import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Interessi professionali",
  "desc": "Scopri quali tipi di attività ti si addicono di più e conosci professioni legate ai tuoi interessi.",
  "intro": "Questo questionario si basa sul modello di Holland, che organizza gli interessi professionali in sei tipi: pratico, investigativo, artistico, sociale, intraprendente e organizzativo. Sono 36 attività. Per ognuna, indica quanto ti piacerebbe svolgerla, senza pensare allo stipendio, alla formazione o al fatto di saperla già fare. Non ci sono risposte giuste: l'obiettivo è capire che cosa suscita il tuo interesse.",
  "scale": [
    "Completamente in disaccordo",
    "In disaccordo",
    "Neutrale",
    "D'accordo",
    "Completamente d'accordo"
  ],
  "items": [
    "Mi piacerebbe capire perché un apparecchio ha smesso di funzionare e ripararlo.",
    "Mi piacerebbe fare esperimenti per verificare se un'idea funziona nella pratica.",
    "Mi piacerebbe scrivere racconti, sceneggiature o testi di canzoni.",
    "Mi piacerebbe insegnare qualcosa di nuovo a un gruppo di persone.",
    "Mi piacerebbe avviare e gestire un'attività tutta mia.",
    "Mi piacerebbe organizzare fogli di calcolo, archivi e registri in modo che tutto sia facile da trovare.",
    "Mi piacerebbe costruire o montare oggetti con le mie mani.",
    "Mi piacerebbe analizzare dati per scoprire la causa di un problema.",
    "Mi piacerebbe creare l'identità visiva di un marchio, come il logo e i colori.",
    "Mi piacerebbe ascoltare e consigliare persone che stanno attraversando un momento difficile.",
    "Mi piacerebbe trattare con i clienti e concludere vendite.",
    "Mi piacerebbe tenere sotto controllo i pagamenti e gli incassi di un'azienda.",
    "Mi piacerebbe lavorare all'aperto, in luoghi come cantieri, aziende agricole o parchi.",
    "Mi piacerebbe studiare come funzionano il corpo umano e gli altri esseri viventi.",
    "Mi piacerebbe esibirmi su un palco, cantando, suonando o recitando.",
    "Mi piacerebbe prendermi cura della salute e del benessere di altre persone.",
    "Mi piacerebbe guidare una squadra per raggiungere un obiettivo.",
    "Mi piacerebbe rileggere documenti con attenzione per assicurarmi che non ci siano errori.",
    "Mi piacerebbe usare macchinari, veicoli o strumenti di precisione.",
    "Mi piacerebbe capire a fondo come funziona una nuova tecnologia.",
    "Mi piacerebbe fotografare o filmare e poi montare il materiale.",
    "Mi piacerebbe seguire e sostenere la crescita di bambini o ragazzi.",
    "Mi piacerebbe presentare un'idea per convincere degli investitori o la direzione di un'azienda.",
    "Mi piacerebbe gestire il magazzino, gli ordini e i tempi di consegna.",
    "Mi piacerebbe prendermi cura ogni giorno di piante o animali.",
    "Mi piacerebbe leggere studi scientifici e trarre le mie conclusioni.",
    "Mi piacerebbe disegnare abiti, oggetti o l'arredamento di ambienti.",
    "Mi piacerebbe aiutare le persone a risolvere i conflitti e a capirsi meglio.",
    "Mi piacerebbe creare strategie per far crescere un prodotto sul mercato.",
    "Mi piacerebbe verificare che un'azienda rispetti le norme e le leggi.",
    "Mi piacerebbe realizzare l'impianto elettrico o idraulico di un immobile.",
    "Mi piacerebbe risolvere problemi complessi di matematica o di logica.",
    "Mi piacerebbe inventare idee originali per una campagna o un progetto creativo.",
    "Mi piacerebbe partecipare a progetti che aiutano la comunità in cui vivo.",
    "Mi piacerebbe prendere decisioni importanti, anche se comportano dei rischi.",
    "Mi piacerebbe organizzare l'agenda e le attività di routine di un ufficio."
  ],
  "dims": {
    "realistic": {
      "label": "Pratico",
      "desc": "Interesse per attività concrete: usare le mani, gli attrezzi e le macchine, costruire, riparare e lavorare all'aperto.",
      "high": "Ti piace vedere risultati concreti e risolvere i problemi con le tue mani. Gli ambienti con compiti chiari e pratici tendono a motivarti. Tieni presente che molte di queste carriere richiedono anche studi tecnici e un aggiornamento costante.",
      "low": "Le attività manuali, meccaniche o all'aperto ti interessano meno. Probabilmente ti trovi più a tuo agio con idee, persone o informazioni. Detto questo, alcune abilità pratiche di base sono utili in qualsiasi campo.",
      "tips": [
        "Segui un breve corso su un'abilità manuale o tecnica per mettere alla prova il tuo interesse.",
        "Parla con chi lavora nel settore per capire com'è davvero la routine di lavoro.",
        "Valuta i corsi tecnici e professionali, che spesso sono una porta d'ingresso rapida a queste carriere."
      ],
      "examples": [
        "Ingegneria civile",
        "Ingegneria meccanica",
        "Elettricista",
        "Agronomia",
        "Pilota di aerei",
        "Cucina e ristorazione",
        "Falegnameria",
        "Manutenzione industriale"
      ]
    },
    "investigative": {
      "label": "Investigativo",
      "desc": "Interesse per osservare, fare ricerca, analizzare e capire come funzionano le cose, nella scienza, nella tecnologia o nella salute.",
      "high": "Ti piacciono le domande difficili, indagare sulle cause e capire le cose a fondo. Gli ambienti che danno valore al ragionamento e all'autonomia tendono a motivarti. Il punto di attenzione è perderti nell'analisi e tardare a passare all'azione.",
      "low": "La ricerca, l'analisi dei dati e le teorie ti interessano meno. Probabilmente preferisci applicare soluzioni piuttosto che studiare a lungo un problema. Detto questo, saper cercare informazioni affidabili è utile in qualsiasi professione.",
      "tips": [
        "Segui contenuti di divulgazione scientifica sui temi che ti incuriosiscono.",
        "Partecipa a un progetto di ricerca, a un'olimpiade scientifica o a un corso online.",
        "Prova ad analizzare dati reali in un foglio di calcolo per capire se questo tipo di attività fa per te."
      ],
      "examples": [
        "Medicina",
        "Biologia",
        "Data science",
        "Chimica",
        "Farmacia",
        "Sviluppo software",
        "Ricerca scientifica",
        "Geologia"
      ]
    },
    "artistic": {
      "label": "Artistico",
      "desc": "Interesse per creare, esprimersi e lavorare con idee originali, attraverso immagini, parole, musica, movimento o design.",
      "high": "Ti piace creare, immaginare e dare forma a idee tue. Gli ambienti con libertà, varietà e spazio per l'originalità tendono a motivarti. Il punto di attenzione è gestire le scadenze, le regole e le parti ripetitive che ogni lavoro creativo ha comunque.",
      "low": "Le attività artistiche e di espressione personale ti interessano meno. Probabilmente preferisci obiettivi chiari e risultati più prevedibili. La creatività, però, si manifesta anche nel modo di risolvere i problemi, in qualsiasi campo.",
      "tips": [
        "Crea un portfolio semplice con i tuoi lavori, anche se sono progetti personali.",
        "Partecipa a un breve laboratorio in un ambito creativo diverso da quello che conosci già.",
        "Scopri come i professionisti creativi uniscono l'arte ad altre competenze, come la tecnologia o il business."
      ],
      "examples": [
        "Graphic design",
        "Architettura",
        "Pubblicità",
        "Fotografia",
        "Musica",
        "Arti dello spettacolo",
        "Design di moda",
        "Produzione audiovisiva"
      ]
    },
    "social": {
      "label": "Sociale",
      "desc": "Interesse per aiutare, insegnare, prendersi cura delle persone e guidarle, contribuendo al loro benessere e alla loro crescita.",
      "high": "Trovi motivazione quando il tuo lavoro fa la differenza nella vita degli altri. Ascoltare, insegnare e prenderti cura delle persone sono attività che danno senso alle tue giornate. Il punto di attenzione è caricarti dei problemi altrui e dimenticare di prenderti cura di te.",
      "low": "Le attività incentrate sul prendersi cura delle persone, sull'insegnare o sul consigliare ti interessano meno. Probabilmente preferisci occuparti di compiti, oggetti, dati o idee. Detto questo, saper collaborare resta importante in quasi tutti i lavori.",
      "tips": [
        "Fai volontariato per una causa che ti sta a cuore e osserva come ti senti.",
        "Prova a spiegare ad altre persone qualcosa che sai, per esempio con un tutoraggio o delle ripetizioni.",
        "Parla con chi lavora nella sanità, nell'istruzione o nei servizi sociali delle sfide della loro quotidianità."
      ],
      "examples": [
        "Psicologia",
        "Scienze dell'educazione",
        "Infermieristica",
        "Servizio sociale",
        "Fisioterapia",
        "Scienze motorie",
        "Logopedia",
        "Risorse umane"
      ]
    },
    "enterprising": {
      "label": "Intraprendente",
      "desc": "Interesse per guidare, convincere, negoziare e prendere decisioni per raggiungere obiettivi, in azienda, nelle vendite o in progetti propri.",
      "high": "Ti piace prendere l'iniziativa, convincere le persone e vedere gli obiettivi raggiunti. Gli ambienti dinamici, con sfide e riconoscimento dei risultati, tendono a motivarti. Il punto di attenzione è la fretta nel decidere e la tendenza a sottovalutare rischi o dettagli.",
      "low": "Guidare, vendere e negoziare ti interessano meno. Probabilmente preferisci contribuire con le tue conoscenze o il tuo lavoro senza stare al centro delle decisioni. Detto questo, saper difendere le proprie idee è utile in qualsiasi carriera.",
      "tips": [
        "Prendi la guida di un piccolo progetto, al lavoro, nello studio o nella tua comunità.",
        "Metti alla prova un'idea imprenditoriale su piccola scala prima di investire molto tempo o denaro.",
        "Studia le basi di finanza, negoziazione e comunicazione."
      ],
      "examples": [
        "Economia aziendale",
        "Giurisprudenza",
        "Marketing",
        "Vendite e direzione commerciale",
        "Relazioni pubbliche",
        "Project management",
        "Intermediazione immobiliare",
        "Commercio internazionale"
      ]
    },
    "conventional": {
      "label": "Organizzativo",
      "desc": "Interesse per organizzare informazioni, seguire procedure chiare e gestire dati, numeri e documenti con precisione.",
      "high": "Ti piacciono l'ordine, le regole chiare e sapere esattamente che cosa c'è da fare. Gli ambienti strutturati, in cui la precisione è apprezzata, tendono a motivarti. Il punto di attenzione è gestire i cambiamenti rapidi e le situazioni senza una procedura definita.",
      "low": "Le routine, i fogli di calcolo e le procedure dettagliate ti interessano meno. Probabilmente preferisci la varietà e la libertà di fare le cose a modo tuo. Detto questo, un po' di organizzazione facilita il lavoro in qualsiasi campo.",
      "tips": [
        "Impara a usare bene i fogli di calcolo e gli strumenti di organizzazione, una competenza utile in molte carriere.",
        "Occupati delle finanze o dell'organizzazione di un progetto e osserva se questo tipo di attività fa per te.",
        "Informati su settori come contabilità, logistica e revisione, presenti in quasi ogni tipo di azienda."
      ],
      "examples": [
        "Contabilità",
        "Revisione contabile",
        "Logistica",
        "Segreteria di direzione",
        "Analisi finanziaria",
        "Biblioteconomia",
        "Controllo qualità",
        "Gestione degli acquisti"
      ]
    }
  },
  "resultTitle": "I tuoi tipi di interesse",
  "resultIntro": "Abbiamo messo in evidenza i tre tipi con i punteggi più alti. La maggior parte delle persone combina più di un tipo, e ogni professione valorizza una combinazione diversa. Usa i suggerimenti come punto di partenza per informarti e parlare con chi lavora già nel settore.",
  "note": "Questo risultato mostra interessi, non abilità né probabilità di successo. È uno strumento di conoscenza di sé e non sostituisce un orientamento professionale svolto da specialisti."
};

export default t;
