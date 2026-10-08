// procrastination — Italian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Procrastinazione",
  "desc": "Scopri che cosa ti porta di solito a rimandare i compiti e conosci strategie pratiche per ogni motivo.",
  "intro": "Quasi tutti rimandano qualche compito ogni tanto, ma i motivi cambiano da persona a persona. Questo questionario valuta quattro motivi comuni: evitare il disagio, la paura di non fare le cose alla perfezione, la distrazione e la mancanza di chiarezza nella pianificazione. Sono 16 frasi. Pensa alle ultime settimane e indica con che frequenza ti capita ogni situazione. Non ci sono risposte giuste: l'obiettivo è capire che cosa pesa di più nel tuo caso, per scegliere le strategie giuste.",
  "scale": [
    "Mai",
    "Raramente",
    "A volte",
    "Spesso",
    "Sempre"
  ],
  "items": [
    "Rimando i compiti che mi mettono ansia, anche se so che sono importanti.",
    "Ci metto molto a cominciare perché sento che tutto deve venire perfetto fin dall'inizio.",
    "Prendo il telefono per guardare qualcosa al volo e finisco per passarci molto più tempo del previsto.",
    "Rimando un compito perché non so esattamente da dove cominciare.",
    "Rimando telefonate, messaggi o conversazioni che potrebbero essere difficili.",
    "Continuo a rivedere e ritoccare un lavoro così a lungo che finisco per consegnarlo in ritardo.",
    "A metà di un compito, passo a qualcos'altro appena compare qualcosa di più interessante.",
    "Ho così tante cose da fare che non so quale fare per prima.",
    "Evito di aprire e-mail, bollette o messaggi per timore di ciò che potrei trovare.",
    "Preferisco non cominciare piuttosto che rischiare di fare qualcosa al di sotto di ciò che mi aspetto da me.",
    "Notifiche, conversazioni o rumori intorno a me mi distolgono facilmente da ciò che sto facendo.",
    "Calcolo male quanto tempo richiederà un compito e mi ritrovo con meno tempo di quello che mi serviva.",
    "Quando un compito mi sembra noioso o sgradevole, cerco qualcos'altro di più piacevole da fare.",
    "Aspetto il momento ideale, con molto tempo ed energia, per cominciare i compiti importanti.",
    "Faccio ciò che ho voglia di fare sul momento, anche se so che dovrei fare altro.",
    "Quando un compito è grande o vago, faccio fatica a trasformarlo in passi concreti."
  ],
  "dims": {
    "avoidance": {
      "label": "Evitare il disagio",
      "desc": "Rimandare i compiti perché portano noia, ansia, paura o altre sensazioni sgradevoli.",
      "high": "Buona parte dei tuoi rinvii sembra nascere dal desiderio di sfuggire a sensazioni sgradevoli, come l'ansia, la noia o la paura di una risposta negativa. Questo indica che vivi le emozioni con intensità, cosa che ti aiuta anche a capire ciò che conta. Il punto di attenzione è che il sollievo del rinvio dura poco, e dopo il compito di solito diventa ancora più pesante.",
      "low": "Il disagio legato a un compito raramente ti impedisce di cominciarlo. Questa capacità di affrontare ciò che è noioso o difficile è un grande vantaggio. Il punto di attenzione è forzarti ad andare avanti anche quando la stanchezza o il sovraccarico chiedono una pausa.",
      "tips": [
        "Comincia con soli due minuti: apri il file o scrivi la prima frase. Dopo, se vuoi, puoi fermarti. Cominciare è spesso la parte più difficile.",
        "Dai un nome a ciò che provi, per esempio «ho paura di ricevere una critica». Riconoscere l'emozione di solito ne riduce la forza.",
        "Fai il compito più sgradevole all'inizio della giornata, prima di aprire le e-mail o i social."
      ]
    },
    "perfectionism": {
      "label": "Perfezionismo",
      "desc": "Rimandare i compiti per paura di non farli abbastanza bene o perché si aspetta il momento ideale per cominciare.",
      "high": "Sembri rimandare le cose perché vuoi che vengano perfette o perché aspetti di avere il tempo e l'energia ideali per cominciare. Questa cura mostra che prendi il lavoro sul serio e hai standard alti. Il punto di attenzione è che il momento ideale arriva di rado, e la paura di sbagliare può ritardare o impedire consegne importanti.",
      "low": "Di solito cominci anche senza avere tutto perfetto e accetti di fare aggiustamenti strada facendo. Questo ti dà rapidità e ti aiuta a imparare con la pratica. Il punto di attenzione è consegnare qualcosa con meno cura di quanta la situazione richiedesse, soprattutto nei compiti importanti.",
      "tips": [
        "Prima di cominciare, scrivi che cosa significa «abbastanza buono» per quel compito.",
        "Fai una prima versione veloce, sapendo che la migliorerai in seguito.",
        "Stabilisci un limite di tempo per le revisioni e consegna quando scade."
      ]
    },
    "distraction": {
      "label": "Distrazione e impulso",
      "desc": "Rimandare i compiti perché l'attenzione viene attirata da stimoli più immediati, come il telefono, le conversazioni o attività più piacevoli.",
      "high": "La tua attenzione sembra farsi attirare facilmente da notifiche, conversazioni o attività più interessanti del compito del momento. Questa sensibilità agli stimoli nuovi può anche portare rapidità e creatività. Il punto di attenzione è che tante piccole interruzioni, sommate, consumano ore della tua giornata senza che te ne accorga.",
      "low": "Riesci a mantenere la concentrazione anche con stimoli intorno a te e resisti bene alla voglia di lasciare un compito per qualcosa di più piacevole. È un grande vantaggio nei lavori che richiedono concentrazione. Il punto di attenzione è chiuderti troppo nel compito e non accorgerti di richieste o cambiamenti importanti intorno a te.",
      "tips": [
        "Lascia il telefono in un'altra stanza o in modalità silenziosa mentre lavori a qualcosa di importante.",
        "Lavora a blocchi di 25 minuti, con pause di 5 minuti tra un blocco e l'altro.",
        "Annota le idee e le voglie che ti vengono durante il compito per occupartene dopo, invece di interrompere ciò che stai facendo."
      ]
    },
    "planning": {
      "label": "Mancanza di chiarezza e pianificazione",
      "desc": "Rimandare i compiti perché non è chiaro da dove cominciare, che cosa fare per primo o quanto tempo richiederà ogni cosa.",
      "high": "Spesso rimandi non per mancanza di voglia, ma perché il compito sembra grande, vago o confuso. Questo mostra che cogli la complessità delle cose. Il punto di attenzione è che, senza passi concreti, anche i compiti semplici sembrano difficili e finiscono per essere rimandati.",
      "low": "Di solito sai da dove cominciare e riesci a trasformare i compiti grandi in passi pratici. Questo ti aiuta a mantenere il ritmo e a rispettare le scadenze. Il punto di attenzione è pianificare con una precisione tale da rendere difficile adattarti quando qualcosa cambia.",
      "tips": [
        "Dividi ogni compito grande in passi di 30 minuti al massimo e scrivi qual è il primo.",
        "Decidi in anticipo quando e dove farai il compito, per esempio: «Martedì alle 9, alla mia scrivania, scriverò l'introduzione della relazione».",
        "Stima quanto tempo richiederà ogni compito e aggiungi un margine di almeno il 50%."
      ]
    }
  },
  "resultTitle": "Perché rimandi le cose",
  "resultIntro": "Ogni barra mostra quanto un motivo emerge dalle tue risposte. Più alto è il punteggio, più quel fattore contribuisce ai tuoi rinvii. Comincia dalle strategie del motivo con il punteggio più alto.",
  "note": "Questo questionario è uno strumento di conoscenza di sé e non una diagnosi. Se la difficoltà a cominciare o a finire i compiti è costante e sta ostacolando i tuoi studi, il tuo lavoro o la tua vita privata, vale la pena parlarne con un professionista della salute, perché potrebbe essere legata a questioni come ansia, depressione o ADHD."
};

export default t;
