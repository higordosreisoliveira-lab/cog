import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Profilo di personalità",
  "desc": "Scopri come ti collochi nei cinque grandi tratti della personalità, uno dei modelli più studiati in psicologia.",
  "intro": "Questo questionario misura cinque tratti generali della personalità: apertura mentale, coscienziosità, estroversione, amicalità e stabilità emotiva. Le 50 frasi sono adattate dall'IPIP, una banca di item di pubblico dominio usata nella ricerca. Per ogni frase, indica quanto descrive come sei oggi, non come vorresti essere. Non ci sono risposte giuste o sbagliate, e nessun tratto è migliore di un altro. Rispondi con sincerità e senza pensarci troppo: di solito la prima impressione è la più fedele.",
  "scale": [
    "Completamente in disaccordo",
    "In disaccordo",
    "Neutrale",
    "D'accordo",
    "Completamente d'accordo"
  ],
  "items": [
    "Sono l'anima della festa.",
    "Mi preoccupo poco degli altri.",
    "Mi preparo sempre in anticipo.",
    "Mi stresso facilmente.",
    "Ho un vocabolario ricco.",
    "Non parlo molto.",
    "Mi interessano le persone.",
    "Lascio le mie cose in giro.",
    "Per la maggior parte del tempo mantengo la calma.",
    "Faccio fatica a capire le idee astratte.",
    "Mi sento a mio agio in mezzo alla gente.",
    "Faccio commenti che offendono le persone.",
    "Faccio attenzione ai dettagli.",
    "Tendo a preoccuparmi per le cose.",
    "Ho una fervida immaginazione.",
    "Preferisco restare in secondo piano.",
    "Mi importa di ciò che provano gli altri.",
    "Finisco per mettere tutto in disordine.",
    "Raramente mi sento giù.",
    "Le idee astratte non mi interessano.",
    "Di solito sono io ad avviare una conversazione.",
    "I problemi degli altri non mi interessano.",
    "Sbrigo subito i miei compiti, senza rimandare.",
    "Mi turbo facilmente.",
    "Ho idee eccellenti.",
    "Di solito ho poco da dire.",
    "Ho il cuore tenero.",
    "Spesso dimentico di rimettere le cose al loro posto.",
    "Mi agito facilmente.",
    "Non ho molta immaginazione.",
    "Alle feste parlo con molte persone diverse.",
    "In fondo, gli altri non mi interessano molto.",
    "Mi piacciono le cose in ordine.",
    "Il mio umore cambia spesso.",
    "Capisco le cose rapidamente.",
    "Non mi piace attirare l'attenzione.",
    "Trovo il tempo per aiutare gli altri.",
    "Mi sottraggo ai miei doveri.",
    "Ho spesso sbalzi d'umore.",
    "Uso parole difficili.",
    "Non mi dispiace essere al centro dell'attenzione.",
    "Percepisco le emozioni degli altri.",
    "Seguo una routine pianificata.",
    "Mi irrito facilmente.",
    "Dedico tempo a riflettere sulle cose.",
    "Parlo poco con le persone che non conosco.",
    "Metto le persone a loro agio.",
    "Sono esigente con la qualità del mio lavoro.",
    "Mi sento spesso giù.",
    "Ho sempre la testa piena di idee."
  ],
  "dims": {
    "openness": {
      "label": "Apertura mentale",
      "desc": "Misura la curiosità, l'immaginazione e l'interesse per idee nuove, astratte o diverse da quelle abituali.",
      "high": "Ti piace esplorare idee, imparare cose diverse e immaginare possibilità. Questo ti aiuta a trovare soluzioni originali e ad adattarti ai cambiamenti. Il punto di attenzione è disperderti tra troppi interessi e lasciare progetti a metà.",
      "low": "Preferisci ciò che è concreto, conosciuto e già messo alla prova. Questo ti dà concentrazione, buon senso ed efficienza nelle attività di tutti i giorni. Il punto di attenzione è scartare le idee nuove troppo presto, prima di capire che cosa possono offrire.",
      "tips": [
        "Prova qualcosa di nuovo ogni tanto, come un libro di un genere diverso o una strada diversa per tornare a casa.",
        "Davanti a un'idea diversa, chiediti «che cosa c'è di utile qui?» prima di decidere.",
        "Se hai molti interessi, scegline uno alla volta e portalo fino in fondo."
      ]
    },
    "conscientiousness": {
      "label": "Coscienziosità",
      "desc": "Misura quanto pianifichi, rispetti gli impegni e curi i dettagli, cioè la tua disciplina e il tuo senso di responsabilità.",
      "high": "Di solito pianifichi, rispetti le scadenze e curi i dettagli, e le persone sanno di poter contare su di te. Il punto di attenzione è pretendere troppo: il perfezionismo e la difficoltà con gli imprevisti possono stancarti.",
      "low": "Affronti i compiti in modo flessibile e spontaneo, senza legarti a piani rigidi. Questo ti aiuta a improvvisare e ad adattarti quando qualcosa cambia. Il punto di attenzione è lasciare le cose importanti all'ultimo momento o perdere di vista le scadenze.",
      "tips": [
        "Dividi i compiti grandi in piccoli passi e dai una scadenza a ciascuno.",
        "Usa una lista o un'agenda semplice e rivedila all'inizio della giornata.",
        "Prima di cominciare, stabilisci che cosa è «abbastanza buono», per non bloccarti nel perfezionismo."
      ]
    },
    "extraversion": {
      "label": "Estroversione",
      "desc": "Misura quanto cerchi la compagnia degli altri, la conversazione e gli ambienti vivaci, e quanto questo ti ricarica.",
      "high": "Prendi energia dallo stare con le persone, attacchi discorso con facilità e ti trovi bene negli ambienti vivaci. Questo ti aiuta a creare legami e a esporti in pubblico. Il punto di attenzione è parlare più che ascoltare o fare fatica con le attività che richiedono tempo in solitudine.",
      "low": "Preferisci piccoli gruppi, conversazioni più profonde e momenti di silenzio per ricaricarti. Questo favorisce la concentrazione, l'ascolto e la riflessione prima di agire. Il punto di attenzione è non mostrare le tue idee e il tuo lavoro per evitare di attirare l'attenzione.",
      "tips": [
        "Osserva che cosa ti ricarica, stare con le persone o stare per conto tuo, e riservagli del tempo.",
        "Nelle riunioni, se parli molto, fai una domanda prima di dare la tua opinione; se parli poco, prova a condividere almeno un'idea.",
        "Essere una persona riservata non significa essere timida: si può amare il silenzio e comunicare benissimo."
      ]
    },
    "agreeableness": {
      "label": "Amicalità",
      "desc": "Misura quanto ti importa degli altri, quanto ti fidi delle persone e quanto preferisci cooperare piuttosto che competere.",
      "high": "Sei una persona attenta, accogliente e disponibile ad aiutare. Questo crea rapporti di fiducia e un buon clima ovunque tu vada. Il punto di attenzione è mettere sempre i bisogni degli altri davanti ai tuoi e fare fatica a dire di no.",
      "low": "Tendi a essere una persona diretta, concreta e critica, che non ha paura di dissentire. Questo ti aiuta a negoziare, difendere le tue posizioni e prendere decisioni difficili. Il punto di attenzione è dare un'impressione di durezza senza volerlo e allontanare persone che potrebbero collaborare con te.",
      "tips": [
        "Prima di dissentire, mostra di aver capito il punto di vista dell'altra persona.",
        "Esercitati a rifiutare con gentilezza le richieste che ostacolano le tue priorità.",
        "Ricorda che gentilezza e fermezza possono andare insieme."
      ]
    },
    "stability": {
      "label": "Stabilità emotiva",
      "desc": "Misura quanto mantieni la calma di fronte a pressioni, preoccupazioni e frustrazioni. Un punteggio alto indica più serenità; un punteggio basso, più sensibilità allo stress.",
      "high": "Di solito mantieni la calma sotto pressione e ti riprendi in fretta dagli imprevisti. Questo trasmette sicurezza alle persone e ti aiuta a pensare con lucidità nei momenti difficili. Il punto di attenzione è minimizzare problemi reali o non accorgerti quando qualcuno vicino a te sta soffrendo.",
      "low": "Vivi le emozioni con intensità e noti rischi e problemi prima di molte altre persone. Questa sensibilità ti aiuta a prepararti e a prendere le cose sul serio. Il punto di attenzione è il logoramento: preoccupazioni e stress frequenti stancano, e vale la pena avere delle strategie per gestirli.",
      "tips": [
        "Cura le basi: sonno, alimentazione e attività fisica fanno la differenza sull'umore.",
        "Quando arriva la preoccupazione, scrivi che cosa stai pensando e quale potrebbe essere il prossimo passo possibile.",
        "Se lo stress o la tristezza interferiscono con la tua quotidianità, parlane con un professionista della salute mentale."
      ]
    }
  },
  "resultTitle": "Il tuo profilo di personalità",
  "resultIntro": "Ogni barra mostra dove ti collochi tra i due estremi di un tratto. Punteggi alti o bassi non sono né buoni né cattivi: ogni lato ha i suoi vantaggi e i suoi punti di attenzione.",
  "note": "Questo risultato è uno strumento di conoscenza di sé basato sulle tue risposte. Non è una diagnosi e non sostituisce la valutazione di uno psicologo. Inoltre, la personalità cambia nel corso della vita e a seconda del contesto."
};

export default t;
