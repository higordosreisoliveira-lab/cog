// stress — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: "Livello di stress",
  desc: "Scopri quanto ha pesato il sovraccarico nell'ultimo mese e come va la tua capacità di riprendere fiato.",
  intro:
    "Questo questionario valuta lo stress da due lati: il sovraccarico e la pressione che hai sentito, e la sensazione di controllo e di recupero che aiuta a bilanciare questo peso. Sono 12 frasi sull'ultimo mese. Per ognuna, indica con che frequenza ti è capitata in questo periodo. Alcune frasi descrivono situazioni positive: rispondi allo stesso modo, pensando solo alla frequenza. È un'autovalutazione basata sulle tue risposte e non sostituisce la valutazione di un professionista.",
  scale: ["Mai", "Quasi mai", "A volte", "Spesso", "Molto spesso"],
  items: [
    "I miei compiti e le mie responsabilità sembravano più grandi delle ore della giornata.",
    "Ho trovato il tempo per riposare, senza sensi di colpa.",
    "Alla fine della giornata avevo la sensazione che le cose da fare non facessero che aumentare.",
    "Quando è sorto un problema, ho saputo fermarmi e pensare con calma a cosa fare.",
    "Ho sentito una forte pressione, che venisse dagli altri o da me, a stare dietro a tutto.",
    "Ho sentito di riuscire a organizzare la mia giornata come mi serviva.",
    "Ho perso la pazienza per cose che di solito non mi darebbero fastidio.",
    "Dopo una giornata difficile, una buona notte di sonno o un momento di svago mi sono bastati per recuperare.",
    "Ho continuato a pensare alle cose da fare anche nei momenti che avrebbero dovuto essere di riposo.",
    "Ho avuto qualcuno su cui contare quando avevo bisogno di sfogarmi o di chiedere aiuto.",
    "Ho avvertito segnali fisici di tensione, come mal di testa, mascella serrata o una stanchezza che non passava.",
    "Ho saputo dire di no o rimandare le richieste quando avevo già troppe cose da fare.",
  ],
  dims: {
    load: {
      label: "Sovraccarico e pressione",
      desc: "Misura quanto hai sentito un eccesso di compiti, pressioni e tensione, e quanto tutto questo ti ha accompagnato anche nei momenti di riposo.",
      high: "Nell'ultimo mese la sensazione di sovraccarico è stata frequente: molte cose da fare, pressioni e poco respiro per la mente. Corpo e mente reggono questo ritmo per un po', ma quando dura a lungo si paga un prezzo. Vale la pena guardare a ciò che si può ridurre, condividere o rimandare.",
      low: "Nell'ultimo mese la pressione si è fatta sentire poco o è rimasta a un livello che hai potuto gestire. Non significa che non ci siano state sfide, ma non sembrano essersi accumulate. Osserva che cosa ha funzionato per mantenere questo equilibrio.",
      tips: [
        "Elenca i compiti della settimana e separa ciò che è davvero urgente, ciò che può aspettare e ciò che si può dividere con altre persone.",
        "Fai brevi pause durante la giornata, lontano dagli schermi, anche solo di cinque minuti.",
        "Stabilisci limiti chiari, come un orario dopo il quale non rispondi più ai messaggi di lavoro.",
      ],
    },
    coping: {
      label: "Controllo e recupero in calo",
      desc: "Misura la mancanza delle risorse che bilanciano lo stress, come sentire di avere in mano la propria routine, riposare, contare su un sostegno e porre dei limiti. Le frasi di questa parte sono positive, quindi il punteggio sale quando si sono verificate poco.",
      high: "Nell'ultimo mese i momenti di riposo, di sostegno e di sensazione di controllo sono stati rari. Senza queste pause, anche una routine normale pesa di più, perché non resta spazio per riprendere fiato. Rafforzare queste risorse un po' alla volta è uno dei modi più efficaci per ridurre lo stress.",
      low: "Ultimamente riesci a riposare, a chiedere aiuto e a sentire che la tua routine è, in buona parte, nelle tue mani. Queste risorse funzionano come un ammortizzatore: aiutano ad attraversare i periodi difficili senza esaurirsi. Continua a proteggere questi momenti, soprattutto quando la routine si fa più pesante.",
      tips: [
        "Proteggi il sonno: cerca di andare a dormire e di svegliarti a orari simili, anche nel fine settimana.",
        "Metti in agenda almeno un'attività alla settimana che ti dia piacere o riposo e tratta quel momento come un impegno.",
        "Racconta a una persona di fiducia come stai: condividere il peso aiuta già ad alleggerirlo.",
      ],
    },
  },
  bands: {
    low: {
      label: "Stress basso",
      text: "Le tue risposte indicano un livello basso di stress nell'ultimo mese. Sembri trovare un buon equilibrio tra le richieste della routine e i momenti di recupero. Continua a coltivare le abitudini che sostengono questo equilibrio.",
    },
    moderate: {
      label: "Stress moderato",
      text: "Le tue risposte indicano un livello moderato di stress, cosa comune nei periodi con molte richieste. Il punto di attenzione è quando questo stato diventa la normalità, senza periodi di sollievo. Prova i suggerimenti qui sotto e, se lo stress comincia a influire sul tuo sonno, sulla tua salute o sulle tue relazioni, parlane con un professionista.",
    },
    high: {
      label: "Stress alto",
      text: "Le tue risposte indicano un livello alto di stress nell'ultimo mese, con molta pressione e poco spazio per recuperare. Quando questa situazione si prolunga, può influire sul sonno, sull'umore e sulla salute fisica. Vale la pena chiedere aiuto a un professionista, come uno psicologo o un medico, per capire che cosa ti pesa e trovare modi per alleggerire il carico.",
    },
  },
  resultTitle: "Il tuo livello di stress",
  resultIntro: "Il risultato somma le tue risposte sull'ultimo mese. Nelle frasi su controllo e recupero il conteggio è invertito: meno queste risorse sono comparse, più il risultato sale. Qui sotto trovi la fascia in cui rientri e il tuo punteggio in ciascuna parte.",
  note: "Questo questionario è uno strumento di conoscenza di sé, basato sulla tua percezione dell'ultimo mese. Non è una diagnosi e non sostituisce la valutazione di un professionista qualificato. Il livello di stress, inoltre, varia molto da una fase della vita all'altra.",
  help: "Se lo stress sta influendo sulla tua salute, sul sonno o sulle relazioni, rivolgiti a uno psicologo o al tuo medico di base. I servizi sanitari della tua zona possono orientarti e, se necessario, indirizzarti verso i servizi di salute mentale. Se stai attraversando un momento di sofferenza intensa, puoi contattare una linea di ascolto e supporto emotivo del tuo paese. In caso di emergenza, chiama il 112.",
};

export default t;
