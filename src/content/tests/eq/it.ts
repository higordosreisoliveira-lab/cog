import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Intelligenza emotiva",
  "desc": "Scopri come riconosci e gestisci le tue emozioni e quelle degli altri nella vita di tutti i giorni.",
  "intro": "Questo questionario valuta quattro aree dell'intelligenza emotiva: consapevolezza di sé, autocontrollo, empatia e abilità sociali. Sono 24 frasi su situazioni quotidiane. Per ognuna, indica quanto descrive il modo in cui agisci di solito, non come pensi che dovresti agire. Non ci sono risposte giuste: più le risposte sono sincere, più il risultato sarà utile.",
  "scale": [
    "Completamente in disaccordo",
    "In disaccordo",
    "Neutrale",
    "D'accordo",
    "Completamente d'accordo"
  ],
  "items": [
    "Riesco a dare un nome a ciò che provo, anche quando è un insieme di emozioni diverse.",
    "Quando mi arrabbio, riesco ad aspettare un po' prima di rispondere.",
    "Mi accorgo quando qualcuno è turbato, anche se non dice nulla.",
    "Riesco a risolvere i disaccordi senza che la conversazione diventi un litigio.",
    "Spesso mi rendo conto di ciò che ho provato solo quando la situazione è già passata.",
    "Nelle discussioni finisco per dire cose di cui poi mi pento.",
    "Prima di giudicare qualcuno, cerco di capire che cosa sta passando.",
    "Evito le conversazioni difficili, anche quando sono necessarie.",
    "Mi accorgo quando il mio umore sta influenzando le mie decisioni.",
    "Dopo una brutta giornata, riesco a calmarmi senza sfogarmi sugli altri.",
    "Faccio fatica a capire perché alcune persone reagiscono in modo così intenso.",
    "Riesco a rifiutare una richiesta in modo fermo ed educato.",
    "So quali situazioni tendono a farmi perdere la pazienza.",
    "Quando ricevo una critica, ascolto fino alla fine prima di difendermi.",
    "Quando qualcuno mi racconta un problema, ascolto con attenzione invece di pensare già a cosa rispondere.",
    "Quando lavoro in gruppo, aiuto le persone a trovare un accordo.",
    "Faccio fatica a spiegare ciò che provo.",
    "Quando qualcosa va storto, ci metto molto a smettere di pensarci.",
    "Di solito percepisco l'atmosfera di un ambiente appena arrivo.",
    "Nei posti nuovi faccio fatica ad avvicinarmi alle persone.",
    "Noto i segnali del mio corpo, come tensione o stanchezza, quando qualcosa mi sta colpendo.",
    "Riesco a concentrarmi su ciò che devo fare anche in una giornata emotivamente difficile.",
    "Quando qualcuno la pensa diversamente da me, ho poca pazienza nell'ascoltarne le ragioni.",
    "Riesco a segnalare un problema nel lavoro di qualcuno senza che quella persona si senta attaccata."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Consapevolezza di sé",
      "desc": "Accorgerti di ciò che provi e dargli un nome, capire da dove nascono queste emozioni e come influenzano i tuoi comportamenti.",
      "high": "Di solito ti accorgi di ciò che provi e del perché, spesso prima di reagire. Questo ti aiuta a prendere decisioni più consapevoli e a spiegare agli altri i tuoi bisogni. Il punto di attenzione è analizzare troppo ogni emozione invece di andare avanti.",
      "low": "Tendi a concentrarti più su ciò che c'è da fare che su ciò che provi, e questo ti aiuta ad agire in modo pratico. Il punto di attenzione è accorgerti delle emozioni solo quando la situazione è passata, quando hanno già influenzato i tuoi comportamenti.",
      "tips": [
        "Qualche volta al giorno, fermati per qualche secondo e chiediti: che cosa sto provando adesso?",
        "Invece di dire solo che stai «male», prova a capire se si tratta di stanchezza, frustrazione, tristezza o ansia.",
        "Annota le situazioni che ti hanno toccato e che cosa è successo subito prima."
      ]
    },
    "selfRegulation": {
      "label": "Autocontrollo",
      "desc": "Gestire le emozioni forti senza agire d'impulso, ritrovare la calma e mantenere la concentrazione anche nelle giornate difficili.",
      "high": "Riesci a provare rabbia, frustrazione o ansia senza lasciare che prendano il controllo dei tuoi comportamenti. Questo trasmette fiducia ed evita conflitti inutili. Il punto di attenzione è tenerti dentro emozioni che andrebbero espresse, cosa che può accumulare tensione.",
      "low": "Reagisci in modo rapido e intenso, e le persone di solito sanno esattamente che cosa provi. Questa spontaneità può essere sincera e piena di energia. Il punto di attenzione sono le reazioni a caldo, che a volte portano a pentirti o logorano i rapporti.",
      "tips": [
        "Quando senti l'emozione salire, fai una breve pausa, respira a fondo e solo dopo rispondi.",
        "Evita di prendere decisioni o di inviare messaggi importanti quando la rabbia è forte.",
        "Trova una valvola di sfogo regolare, come l'esercizio fisico, una passeggiata o una chiacchierata con una persona di fiducia."
      ]
    },
    "empathy": {
      "label": "Empatia",
      "desc": "Capire che cosa provano le altre persone e comprendere il loro punto di vista, anche quando è diverso dal tuo.",
      "high": "Percepisci con facilità l'atmosfera di un ambiente e ciò che provano le persone, anche senza parole. Per questo accanto a te si sentono comprese. Il punto di attenzione è assorbire le emozioni degli altri fino a esaurirti.",
      "low": "Tendi a concentrarti sui fatti e sul problema in sé, più che sulle emozioni coinvolte. Questo ti aiuta a mantenere l'obiettività nelle situazioni delicate. Il punto di attenzione è non cogliere i segnali che qualcuno ha bisogno di sostegno o sembrare distante senza volerlo.",
      "tips": [
        "Nelle conversazioni importanti, ripeti con parole tue ciò che hai capito prima di rispondere.",
        "Chiedi «come ti senti al riguardo?» prima di passare direttamente alle soluzioni.",
        "Osserva espressioni, tono di voce e silenzi, non solo ciò che viene detto."
      ]
    },
    "social": {
      "label": "Abilità sociali",
      "desc": "Comunicare con chiarezza, risolvere i conflitti, collaborare e costruire buone relazioni nel lavoro e nella vita privata.",
      "high": "Gestisci bene le conversazioni difficili, sai prendere posizione e aiuti i gruppi a trovare un accordo. Per questo le persone tendono a cercarti quando c'è qualcosa da risolvere. Il punto di attenzione è farti carico di risolvere tutti i conflitti, cosa che può sovraccaricarti.",
      "low": "Preferisci evitare gli attriti e ti senti più a tuo agio con le persone che conosci bene. Questo di solito porta a rapporti tranquilli e a pochi litigi. Il punto di attenzione è rimandare conversazioni necessarie e lasciare che i problemi crescano o che i tuoi bisogni restino senza risposta.",
      "tips": [
        "Quando devi dare un feedback difficile, parla del comportamento e del suo impatto, non della persona.",
        "Esercitati a dire di no con una frase breve ed educata, senza lunghe giustificazioni.",
        "Negli ambienti nuovi, fai una domanda semplice per avviare la conversazione: alle persone piace parlare di ciò che fanno."
      ]
    }
  },
  "resultTitle": "Il tuo profilo di intelligenza emotiva",
  "resultIntro": "Ecco il tuo punteggio in ogni area. Queste abilità si sviluppano con la pratica, quindi usa il risultato come punto di partenza, non come un'etichetta.",
  "note": "Questo questionario è uno strumento di conoscenza di sé basato sulla tua percezione. Non è un test psicologico validato e non sostituisce la valutazione di un professionista."
};

export default t;
