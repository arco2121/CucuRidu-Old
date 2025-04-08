const {Deck,Card} = require('./Deck')
const {Guest, Admin} = require('./User')
//Tags : #nomino,
const QuestionsArr = [
    [
        "_ è buono, ma _ è molto meglio!",
        2
    ],
    [
        "_ è un ottimo rimedio per il cancro",
        1
    ],
    [
        "La felicità è _",
        1
    ],
    [
        "Pensare a _ ti farà solo soffrire",
        1
    ],
    [
        "_ è stata la cosa più bella della mia vita",
        1
    ],
    [
        "Non raggiungo l'orgasmo senza pensare a _",
        1
    ],
    [
        "Hai mai provato a _ ? Ti cambia la vita da così a così!",
        1
    ],
    [
        "Ti voglio bene ma capirai che _ non è una cosa accettabile",
        1
    ],
    [
        "_ è una cosa che viene tramandata con amore da padre in figlio da generazioni",
        1
    ],
    [
        "Il mio love language è _",
        1
    ],
    [
        "Chi cerca il benessere lo trova in _",
        1
    ],
    [
        "Pensare a _ è l'unica cosa che mi fa dormire seren*",
        1
    ],
    [
        "_ è un'esperienza che mi ha cambiato la vita",
        1
    ],
    [
        "Non ero attent* a lezione perché pensavo a _",
        1
    ],
    [
        "Ho piacevolmente discusso di _ con il mio prof di religione",
        1
    ],
    [
        "Per risolvere il suo problema ha solo bisogno di _",
        1
    ],
    [
        "Pensi che _ sia una leggitimazione per combattere _ ?",
        2
    ],
    [
        "Se fossi re donerei _ a tutta la popolazione",
        1
    ],
    [
        "Quando c'era lui bastava _ per essere felici",
        1
    ],
    [
        "Se continui ad evitare _ la conseguenza sarà _",
        2
    ],
    [
        "Nello spettacolo di ieri io ho interpretato _ che aveva il ruolo di _ , il pubblico è stato così commosso che ha deciso di _",
        3
    ],
    [
        "La mancia della nonna mi permetterà di prendere _",
        1
    ],
    [
        "Non capisco la lingua dei segni, non è che per caso potresti _?",
        1
    ],
    [
        "Penso che _ sia un fattore fondante della società moderna, ma senza _ questa non sarebbe nata",
        2
    ],
    [
        "È inutile che mi dici di _ , la mia idea di _ è sempre la migliore",
        2
    ],
    [
        "Dovevi esserci quando Michael Jackson ha fatto la sua iconica performance con _",
        1
    ],
    [
        "Dovevo studiare, ma ho preferito _",
        1
    ],
    [
        "_ , i soldi sono soldi",
        1
    ],
    [
        "_ è il nemico della società, basterebbe _ e il mondo sarebbe migliore",
        2
    ],
    [
        "Come osi criticare _ , senza non saresti qui",
        1
    ],
    [
        "La NASA ha inviato nello spazio _",
        1
    ],
    [
        "Quella ragazza trema, deve aver visto _",
        1
    ],
    [
        "Preferiresti _ per tutta la vita oppure avere _ nell'armadio",
        2
    ],
    [
        "Quando andavo all'asilo mi divertivo a _",
        1
    ],
    [
        "Come compito per casa devo _",
        1
    ],
    [
        "Ieri ho visto _ , sembrava più felice del solito",
        1
    ],
    [
        "Il mio roman empire è _",
        1
    ],
    [
        "Secondo l'oroscopo è l'ora di _ , ma preferisco rimanere a casa mia con  _",
        2
    ],
    [
        "_ è un modo per fermare la guerra",
        1
    ],
    [
        "Non mi piace il pene ma per _ un pompino lo farei",
        1
    ],
    [
        "Il bottone rosso nella Casa Bianca serve per _",
        1
    ],
    [
        "Sei così stupid* che saresti in grado di _",
        1
    ],
    [
        "_ . Aura +9999",
        1
    ],
    [
        "Venderei la prof di inglese per _",
        1
    ],
    [
        "Ardua scelta: _ o _",
        2
    ],
    [
        "Per lavarmi la coscienza ho deciso di _",
        1
    ],
    [
        "Per essere il migliore serve _",
        1
    ],
    [
        "Il nemico numero uno di Carlo Conti è _",
        1
    ],
    [
        "_ è stata la cosa più brutta degli ultimi tempi",
        1
    ],
    [
        "Non è un venerdì sera senza _",
        1
    ],
    [
        "Questo weekend il solito: venerdì sera _ , sabato _ e domenica mattina _",
        3
    ],
    [
        "_ : i ricordi del Vietnam",
        1
    ],
    [
        "Contattare c'è Posta Per Te per _",
        1
    ],
    [
        "_ è andat* ad Amici",
        1
    ],
    [
        "_ dovrebbe essere integrato nel programma scolastico ",
        1
    ],
    [
        "_ ! Ne hanno parlato a Forum",
        1
    ],
    [
        "Soluzione per un appuntamento perfetto? _",
        1
    ],
    [
        "Dopo 30 anni di matrimonio io e mio marito abbiamo trovato un modo per mantenere viva la passione: _",
        1
    ],
    [
        "Ogni brava moglie cristiana sa che è necessario _",
        1
    ],
    [
        "_ ha causato l'esplosione del Titan",
        1
    ],
    [
        "_ è il motivo per cui dio ha fatto estinguere i dinosauri",
        1
    ],
    [
        "Sono cresciut* con Pokémon, Yu-Gi-Oh e _",
        1
    ],
    [
        "Ho scoperto un subreddit a tema _ . Quante risate!",
        1
    ],
    [
        "Spareresti al tuo migliore amico in cambio di _",
        1
    ],
    [
        "_ può capitare",
        1
    ],
    [
        "La cosa che amo più delle ragazze è _",
        1
    ],
    [
        "_ lo dico tutte le mattine appena svegliat*!",
        1
    ],
    [
        "Spendida giornata per _",
        1
    ],
    [
        "Amanda mi ha regalato il nuovo profumo di chanel e _",
        1
    ],
    [
        "L'imputato, colpevole di _ , era in realtà innocente",
        1
    ],
    [
        "Nel nuovo film di inside out 3 l'emozione principale sarà _",
        1
    ],
    [
        "_ . Disse il mostro di Firenze in tribunale",
        1
    ],
    [
        "'Vai al supermercato, prendimi _ e _ , poi compra quel che vuoi' 'va bene, anche _?' 'va bene, i bisogni sono bisogni'",
        3
    ],
    [
        "Usare _ come giocattolo anale non è molto conveniente",
        1
    ],
    [
        "Divorzio di Chiara Ferragni e Fedez, sentiamo cosa ne pensa _ !",
        1
    ],
    [
        "Voglio _ adesso! In questo esatto istante!",
        1
    ],
    [
        "Se non hai mai provato _ , dovresti chiedere a suor Claudia, è un'esperta",
        1
    ],
    [
        "L'undicesimo comandamento, mai citato nei libri di chiesa, dice di _ .",
        1
    ],
    [
        "I libri di storia descrivono l'ascesa di Mussoli come _",
        1
    ],
    [
        "Solo un vero critico letterario può capire che dietro la figura di Leopardi si celava _",
        1
    ],
    [
        "_ : perfetto per quando ho del tempo libero",
        1
    ],
    [
        "_ è una brutta abitudine",
        1
    ],
    [
        "Per buttare giù un po' di chili dovresti iniziare a _",
        1
    ],
    [
        "In Georgia usano _ per mangiare la zuppa",
        1
    ],
    [
        "'Topolino e _' il nuovo fumetto a soli 3,50€ in edicola",
        1
    ],
    [
        "_ , disse il poeta guardando il cielo stellato",
        1
    ],
    [
        "Ogni stagione ha i propri bisogni: primavera: _ , estate: _ , autunno:  _ e inverno: _",
        4
    ],
    [
        "Ho preso 3 perchè non ho saputo come _",
        1
    ],
    [
        "Il medico consiglia _ come lubrificante prima di un rapporto anale",
        1
    ],
    [
        "_ a 90° sul letto della pimpa",
        1
    ],
    [
        "_ , da aggiungere alla smash cake",
        1
    ],
    [
        "Ma solo io mi ricordo quell'episodio di Dora l'esploratrice intitolato _",
        1
    ],
    [
        "Sulla mis tomba voglio sia scritto 'ha vissuto una vita fatta di sesso, droga e _'",
        1
    ],
    [
        "Il mio cane non smette di _",
        1
    ],
    [
        "Per problemi come _ digitare 1, se invece ha bisogno di _ digitare 2",
        2
    ],
    [
        "_ ... MA È INACETTABILE, DISONESTO, IL PEGGIO DEL PEGGIO!",
        1
    ],
    [
        "Non riesci a toglierti dalla mente _? Semplice, Bevi per dimenticare",
        1
    ],
    [
        "L'italia ha inviato _ per aiutare i bimbi afghani",
        1
    ],
    [
        "_ , è questo il motivo della mia diarrea dottore",
        1
    ],
    [
        "Non c'è pace prima di _",
        1
    ],
    [
        "Qual è il mio superpotere? _",
        1
    ],
    [
        "_ , il premio nobel per la scienza di quest'anno",
        1
    ],
    [
        "Il cast del film che ha vinto gli Oscar aveva _ e _ . Era una storia d'amore, finita male",
        2
    ],
    [
        "Ho trovato _ come sorpresa nell'uovo di pasqua",
        1
    ],
    [
        "Prendo l'happy meal solo per _",
        1
    ],
    [
        "_ , testato dai bambini, approvato dalle madri",
        1
    ],
    [
        "La voce nella mia testa mi dice di _",
        1
    ],
    [
        "I vicini continuano a _ da stamattina",
        1
    ],
    [
        "Alla fiera dell'est per due soldi _ mio padre comprò",
        1
    ],
    [
        "Il nuovo regolamento scolastico stabilisce che è vietato _",
        1
    ],
    [
        "Non sono riuscito a studiare per colpa di _",
        1
    ],
    [
        "Per mostrare solidarietà dopo le partite di calcio, il gesto dei calciatori è _",
        1
    ],
    [
        "Se la vita ti dà dei limoni, facci _",
        1
    ],
    [
        "Papà, io da grande voglio essere _",
        1
    ],
    [
        "Il tempo è _",
        1
    ],
    [
        "_ mi sembra un po' too much",
        1
    ],
    [
        "_ è demure",
        1
    ],
    [
        "_ è brat",
        1
    ],
    [
        "_ - core",
        1
    ],
    [
        "_ non è demure, ma Brat",
        1
    ],
    [
        "_ non può mancare a Natale",
        1
    ],
    [
        "_ mi rende eccitatissim*",
        1
    ],
    [
        "Non ho tempo di cucinare, prenderò _ d'asporto",
        1
    ],
    [
        "Invece del carbone la befana porta ora ai bambini cattivi _",
        1
    ],
    [
        "_ buono fino all'ultima goccia",
        1
    ],
    [
        "_ fece finire la mia ultima relazione",
        1
    ],
    [
        "Allerta meteo! Sulla penisola potrebbe arrivare _",
        1
    ],
    [
        "Le persone anziane odorano di _",
        1
    ],
    [
        "Salvini preferirebbe _ ai neri",
        1
    ],
    [
        "_ fu la chiave di volta per il caso Orlandi",
        1
    ],
    [
        "Non so con cosa verrà combattuto la terza guerra mondiale, ma nella quarta si userà _",
        1
    ],
    [
        "_ . Raccomando da 9 dentisti su 10",
        1
    ],
    [
        "Prossimamente su Rai sport 2: i mondiali di _",
        1
    ],
    [
        "Se dovesse finire il mondo vorrei solo un'ultima cosa: _",
        1
    ],
    [
        "Nel kit di soppravvivenza non può mancare _",
        1
    ],
    [
        "La scuola insegna anche a _",
        1
    ],
    [
        "Quali sono i 3 desideri che chiederesti al genio della lampada? _ , _ e _",
        3
    ],
    [
        "Mi son dimenticat* di _",
        1
    ],
    [
        "_ . Così è come voglio morire!",
        1
    ],
    [
        "In un mondo depredato da _ , il nostro unico conforto è _",
        2
    ],
    [
        "Ho un sacco di problemi, ma _ non è fra questi",
        1
    ],
    [
        "_ è la cosa più emo che abbia mai fatto",
        1
    ],
    [
        "_ non esiste, non può farti del male",
        1
    ],
    [
        "Dimenticate la ruota! L'invenzione più rivoluzionaria è _",
        1
    ],
    [
        "_ sarà il focus del prossimo DLC di The Sims 4",
        1
    ],
    [
        "Hear me out! _ e _",
        2
    ],
    [
        "_ . Link in bio <3",
        1
    ],
    [
        "PLOT TWIST: _ !",
        1
    ],
    [
        "_ . Per il meme",
        1
    ],
    [
        "_ mi ha fatto capire di essere omosessuale",
        1
    ],
    [
        "_ ... La migliore esperienza sessuale della mia vita",
        1
    ],
    [
        "_ . Il capitolo segreto del diario di Anna Frank",
        1
    ],
    [
        "_ . Triste come un cane cieco che si schianta contro un muro",
        1
    ],
    [
        "_ come repellente per i testimoni di geova alla porta",
        1
    ],
    [
        "_ ... un'icona!",
        1
    ],
    [
        "_ per rimandare gli albanesi a casa loro",
        1
    ],
    [
        "_ . Aiutiamoli a casa loro!",
        1
    ],
    [
        "_ ! QUALCUNO CHIAMI IL 118!",
        1
    ],
    [
        "_ scritto in grande sui manifesti cittadini.",
        1
    ],
    [
        "_ non è considerabile una molestia, è sotto i 10 secondi",
        1
    ],
    [
        "La definizione di ' _  ' nel dizionario Treccani è ' _ '",
        2
    ],
    [
        "_ : SMASH!",
        1
    ],
    [
        "_ : lo insegnavano ad educazione sessuale",
        1
    ],
    [
        "'C'era una volta _ ... '. Che storia memorabile!",
        1
    ],
    [
        "_ : healing my inner child.",
        1
    ],
    [
        "Il più bel ricordo d'infanzia che ho? _",
        1
    ],
    [
        "_ è stra una cosa che farebbero i 7 nani",
        1
    ],
    [
        "_ quello che dico sempre quando non riesco a cagare",
        1
    ],
    [
        "_ , i miei suoceri sono i primi in classifica in questo ambito",
        1
    ]
]
const QuestionsArrSafe = [
  ["_ è buono, ma _ è molto meglio!", 2],
  ["_ è un ottimo rimedio per il raffreddore", 1],
  ["La felicità è _", 1],
  ["Pensare a _ ti farà solo distrarre", 1],
  ["_ è stata la cosa più bella della mia infanzia", 1],
  ["Non riesco a concentrarmi senza _", 1],
  ["Hai mai provato a _? Ti cambia la giornata!", 1],
  ["Ti voglio bene ma capirai che _ non si fa", 1],
  ["_ è una cosa che viene tramandata con amore da generazioni", 1],
  ["Il mio modo di dimostrare affetto è _", 1],
  ["Chi cerca la serenità la trova in _", 1],
  ["Pensare a _ è l'unica cosa che mi fa dormire seren*", 1],
  ["_ è un'esperienza che mi ha cambiato la vita", 1],
  ["Non ero attent* a lezione perché pensavo a _", 1],
  ["Ho parlato di _ con il mio prof di religione", 1],
  ["Per risolvere il suo problema ha solo bisogno di _", 1],
  ["Pensi che _ sia una giusta motivazione per combattere _?", 2],
  ["Se fossi re donerei _ a tutta la popolazione", 1],
  ["Quando c'era lui bastava _ per essere felici", 1],
  ["Se continui ad evitare _ la conseguenza sarà _", 2],
  ["Nello spettacolo di ieri io ho interpretato _ che aveva il ruolo di _ , il pubblico è stato così commosso che ha deciso di _", 3],
  ["La mancia della nonna mi permetterà di prendere _", 1],
  ["Non capisco la lingua dei segni, non è che per caso potresti _?", 1],
  ["Penso che _ sia un pilastro della società moderna, ma senza _ non ci sarebbe", 2],
  ["È inutile che mi dici di _ , la mia idea di _ è sempre la migliore", 2],
  ["Dovevi esserci quando Michael Jackson ha fatto la sua iconica performance con _", 1],
  ["Dovevo studiare, ma ho preferito _", 1],
  ["_ , i soldi sono soldi", 1],
  ["_ è un problema della società, basterebbe _ e tutto migliorerebbe", 2],
  ["Come osi criticare _ , senza non saresti qui", 1],
  ["La NASA ha inviato nello spazio _", 1],
  ["Quella ragazza trema, deve aver visto _", 1],
  ["Preferiresti _ per tutta la vita oppure avere _ nell'armadio", 2],
  ["Quando andavo all'asilo mi divertivo a _", 1],
  ["Come compito per casa devo _", 1],
  ["Ieri ho visto _ , sembrava più felice del solito", 1],
  ["Il mio roman empire è _", 1],
  ["Secondo l'oroscopo è il momento di _ , ma preferisco restare a casa con _", 2],
  ["_ è un modo per costruire la pace", 1],
  ["Il bottone rosso nella Casa Bianca serve per _", 1],
  ["Sei così distratt* che saresti in grado di _", 1],
  ["_ . Aura +9999", 1],
  ["Venderei il mio snack preferito per _", 1],
  ["Ardua scelta: _ o _", 2],
  ["Per sentirmi in pace ho deciso di _", 1],
  ["Per essere il migliore serve _", 1],
  ["Il nemico numero uno della noia è _", 1],
  ["_ è stata la cosa più deludente degli ultimi tempi", 1],
  ["Non è un venerdì sera senza _", 1],
  ["Questo weekend il solito: venerdì sera _ , sabato _ e domenica mattina _", 3],
  ["_ : i ricordi delle medie", 1],
  ["Contattare C'è Posta Per Te per _", 1],
  ["_ è andat* a Italia’s Got Talent", 1],
  ["_ dovrebbe essere materia scolastica", 1],
  ["_ ! Ne hanno parlato anche in TV", 1],
  ["Soluzione per un appuntamento perfetto? _", 1],
  ["Dopo 30 anni di matrimonio io e mio marito abbiamo trovato un modo per tenerci uniti: _", 1],
  ["Ogni persona gentile sa che è necessario _", 1],
  ["_ ha causato un piccolo disastro", 1],
  ["_ è il motivo per cui i dinosauri si sono estinti (forse)", 1],
  ["Sono cresciut* con Pokémon, Yu-Gi-Oh e _", 1],
  ["Ho scoperto un forum a tema _ . Quante risate!", 1],
  ["Daresti via il tuo gioco preferito in cambio di _", 1],
  ["_ può capitare", 1],
  ["La cosa che amo più delle persone è _", 1],
  ["_ lo dico tutte le mattine appena svegliat*", 1],
  ["Splendida giornata per _", 1],
  ["Amanda mi ha regalato il nuovo profumo e _", 1],
  ["L'imputato, colpevole di _ , era in realtà innocente", 1],
  ["Nel nuovo film di Inside Out 3 l’emozione principale sarà _", 1],
  ["_ . Disse l’imperatore guardando la folla", 1],
  ["'Vai al supermercato, prendimi _ e _ , poi compra quel che vuoi' 'va bene, anche _?' 'va bene, i bisogni sono bisogni'", 3],
  ["Divorzio di due star della TV, sentiamo cosa ne pensa _ !", 1],
  ["Voglio _ adesso! In questo esatto istante!", 1],
  ["Se non hai mai provato _ , dovresti chiedere a zio Mario, è un esperto", 1],
  ["L'undicesimo comandamento dimenticato dice: _", 1],
  ["I libri di storia descrivono l'ascesa di Napoleone come _", 1],
  ["Solo un vero esperto può capire che dietro la figura di Dante si celava _", 1],
  ["_ : perfetto per il tempo libero", 1],
  ["_ è una brutta abitudine", 1],
  ["Per buttare giù qualche chilo dovresti iniziare a _", 1],
  ["In Georgia usano _ per mangiare la zuppa", 1],
  ["'Topolino e _' il nuovo fumetto a soli 3,50€ in edicola", 1],
  ["_ , disse il poeta guardando il cielo stellato", 1],
  ["Ogni stagione ha i propri bisogni: primavera: _ , estate: _ , autunno: _ e inverno: _", 4],
  ["Ho preso 3 perché non ho saputo come _", 1],
  ["_ , da aggiungere alla torta di compleanno", 1],
  ["Ma solo io mi ricordo quell'episodio di Dora l’esploratrice intitolato _", 1],
  ["Sulla mia tomba voglio sia scritto: 'ha vissuto una vita fatta di risate, amicizia e _'", 1],
  ["Il mio cane non smette di _", 1],
  ["Per problemi come _ digitare 1, se invece hai bisogno di _ digitare 2", 2],
  ["_ ... MA È INACCETTABILE, IMPROBABILE, IL PEGGIO DEL PEGGIO!", 1],
  ["Non riesci a toglierti dalla mente _? Semplice: canta una canzone allegra", 1],
  ["L'Italia ha inviato _ per aiutare i bimbi afghani", 1],
  ["_ , è questo il motivo per cui non ho fatto i compiti", 1],
  ["Non c'è pace prima di _", 1],
  ["Qual è il mio superpotere? _", 1],
  ["_ , il premio Nobel per la scienza di quest’anno", 1],
  ["Il cast del film che ha vinto gli Oscar aveva _ e _ . Era una storia d’amicizia indimenticabile", 2],
  ["Ho trovato _ come sorpresa nell'uovo di Pasqua", 1],
  ["Prendo l’Happy Meal solo per _", 1],
  ["_ , testato dai bambini, approvato dalle mamme", 1],
  ["La voce nella mia testa mi dice di _", 1],
  ["I vicini continuano a _ da stamattina", 1],
  ["Alla fiera dell’est per due soldi _ mio padre comprò", 1],
  ["Il nuovo regolamento scolastico stabilisce che è vietato _", 1],
  ["Non sono riuscito a studiare per colpa di _", 1],
  ["Dopo le partite di calcio, il gesto dei calciatori è _", 1],
  ["Se la vita ti dà dei limoni, facci _", 1],
  ["Papà, io da grande voglio essere _", 1],
  ["Il tempo è _", 1],
  ["_ mi sembra un po' esagerato", 1],
  ["_ è davvero elegante", 1],
  ["_ è molto trendy", 1],
  ["_ - style", 1],
  ["_ non è elegante, ma molto audace", 1],
  ["_ non può mancare a Natale", 1],
  ["_ mi rende felice", 1],
  ["Non ho tempo di cucinare, prenderò _ d’asporto", 1],
  ["Invece del carbone, la befana porta ora ai bambini cattivi _", 1],
  ["_ , buono fino all’ultima goccia", 1],
  ["_ ha causato la mia ultima figuraccia", 1],
  ["Allerta meteo! Sulla penisola potrebbe arrivare _", 1],
  ["Le persone anziane odorano di _", 1],
  ["_ fu la chiave di volta per risolvere il mistero", 1],
  ["Non so con cosa verrà combattuta la terza guerra mondiale, ma nella quarta si userà _", 1],
  ["_ . Raccomandato da 9 dentisti su 10", 1],
  ["Prossimamente su Rai Sport 2: i mondiali di _", 1],
  ["Se dovesse finire il mondo vorrei solo un'ultima cosa: _", 1],
  ["Nel kit di sopravvivenza non può mancare _", 1],
  ["La scuola insegna anche a _", 1],
  ["Quali sono i 3 desideri che chiederesti al genio della lampada? _ , _ e _", 3],
  ["Mi son dimenticat* di _", 1],
  ["_ . Così è come voglio ricordarmi della vita!", 1],
  ["In un mondo depredato da _ , il nostro unico conforto è _", 2],
  ["Ho un sacco di problemi, ma _ non è fra questi", 1],
  ["_ è la cosa più creativa che abbia mai fatto", 1],
  ["_ non esiste, è solo nella tua immaginazione", 1],
  ["Dimenticate la ruota! L'invenzione più rivoluzionaria è _", 1],
  ["_ sarà il focus del prossimo DLC di The Sims 4", 1],
  ["Hear me out! _ e _", 2],
  ["_ . Link in bio <3", 1],
  ["PLOT TWIST: _!", 1],
  ["_ . Per il meme...", 1]
]
const AnswerArr = [
    [
      "Una partita a Mario Cart irl con Stephen Hawkins",
      0
    ],
    [
      "Un aborto spontaneo",
      0
    ],
    [
      "La 104",
      0
    ],
    [
      "Un sex-toy per cani",
      0
    ],
    [
      "La mentalità ISIS",
      0
    ],
    [
      "Gli ebrei",
      0
    ],
    [
      "Lo sperma",
      0
    ],
    [
      "Un gelato allo sperma",
      0
    ],
    [
      "Il colpo di grazia ",
      0
    ],
    [
      "I bambini operai di shein",
      0
    ],
    [
      "Il governo meloni",
      0
    ],
    [
      "La tratta degli schiavi",
      0
    ],
    [
      "La morte di Bossetti ",
      0
    ],
    [
      "Essere sulla lista di PDiddy e non saperlo",
      0
    ],
    [
      "La borra",
      0
    ],
    [
      "Brumotti picchiato nelle periferie",
      0
    ],
    [
      "Andare a puttane",
      0
    ],
    [
      "Vendere dischi illegali di Gigi D'Alessio",
      0
    ],
    [
      "Un dito in culo",
      0
    ],
    [
      "Iniziare con un dito e finire con tutto il braccio",
      0
    ],
    [
      "La cappella del papa",
      0
    ],
    [
      "La salumeria privata del clero",
      0
    ],
    [
      "Ringraziare Beyoncé ",
      0
    ],
    [
      "La zia Ermenegilda",
      0
    ],
    [
      "I rom",
      0
    ],
    [
      "Un'esplorazione rettale",
      0
    ],
    [
      "Un limone appassionato dal dubbio consenso",
      0
    ],
    [
      "Lanciare una sedia al compagno di classe speciale",
      0
    ],
    [
      "Il ricatto sessuale",
      0
    ],
    [
      "Manomettere i freni di una sedia a rotelle",
      0
    ],
    [
      "Il comunismo",
      0
    ],
    [
      "Nani da giardino che mostrano il culo ai passanti",
      0
    ],
    [
      "Il discorso di mussolini",
      0
    ],
    [
      "I campi di cotone ripopolati",
      0
    ],
    [
      "Mettere i fiori sulla tomba di Mussolini ",
      0
    ],
    [
      "Bestemmiare in chiesa",
      0
    ],
    [
      "Chiedere a un bambino cieco quante dita alzate ho",
      0
    ],
    [
      "Diffondere il verbo di Geova in un ospedale di malati di cancro",
      0
    ],
    [
      "Dare fuoco ad una scuola materna",
      0
    ],
    [
      "Una gruccia al posto della pillola abortiva",
      0
    ],
    [
      "L'economia africana",
      0
    ],
    [
      "Lo sbarco in Normandia",
      0
    ],
    [
      "Rievocare la marcia su Roma",
      0
    ],
    [
      "Premere il bottone rosso sulla scrivania di Kim Jong-Un",
      0
    ],
    [
      "Lo sverginamento anale brutale",
      0
    ],
    [
      "Riportare il fascismo in Italia",
      0
    ],
    [
      "Baciare il mio Bro senza omosessualità",
      0
    ],
    [
      "Pisciare dal buco del culo",
      0
    ],
    [
      "Le mani di Gianni Morandi",
      0
    ],
    [
      "lo scandalo Ferragni",
      0
    ],
    [
      "Aprire un Only Fans con i video della tua ex",
      0
    ],
    [
      "Una pillola di Viagra",
      0
    ],
    [
      "Sborrarsi accidentalmente in bocca",
      0
    ],
    [
      "Gerry Scotty che spara al Gabibbo",
      0
    ],
    [
      "Il rapimento di Aldo Moro",
      0
    ],
    [
      "La vera identità del Gabibbo",
      0
    ],
    [
      "Ritrovarsi a partorire in un cesso pubblico ",
      0
    ],
    [
      "Volersi scopare la propria figlia adolescente",
      0
    ],
    [
      "Servire una merda bollita a un ristorante stellato",
      0
    ],
    [
      "Sverginare la suora novizia nel confessionale",
      0
    ],
    [
      "Offrire una sigaretta a un delfino",
      0
    ],
    [
      "Essere molestato da un piccione curioso",
      0
    ],
    [
      "Il pizzo",
      0
    ],
    [
      "Considerare terrone chi vive sotto il Po'",
      0
    ],
    [
      "Insultare i neri per moda",
      0
    ],
    [
      "Criticare l'outfit di un barbone",
      0
    ],
    [
      "Affittare un pony con la sindrome di down",
      0
    ],
    [
      "Un pigiama con le righe e una stella gialla",
      0
    ],
    [
      "Non andare a prendere la propria fidanzata alle elementari perché ti ha tradito",
      0
    ],
    [
      "Lezione pratica di educazione sessuale con un prete",
      0
    ],
    [
      "Un'orgia di frati benedettini",
      0
    ],
    [
      "Vivere come in 1984",
      0
    ],
    [
      "Salvare i pesci dall'annegamento",
      0
    ],
    [
      "Tagliare i capelli a qualcuno con una mietitrebbia",
      0
    ],
    [
      "Il genocidio degli armeni",
      0
    ],
    [
      "Il cancro alla prostata all'ultimo stadio",
      0
    ],
    [
      "Avere la mononucleosi e sputare dal balcone",
      0
    ],
    [
      "Riscrivere la bibbia",
      0
    ],
    [
      "Fare il chierichetto per fare colpo su una suora",
      0
    ],
    [
      "L'undici settembre 2001",
      0
    ],
    [
      "Scoprire che il tuo idolo si è suicidato mentre stai guardando un documentario sulla seconda guerra mondiale ",
      0
    ],
    [
      "Andare in coma etilico bevendo l'ACE Gentile",
      0
    ],
    [
      "Il comeback di Mozart prima di GTA VI",
      0
    ],
    [
      "La scissione dell'impero romano",
      0
    ],
    [
      "Fare il saluto al sole",
      0
    ],
    [
      "Infornare il tuo figlio gay con patate e rosmarino",
      0
    ],
    [
      "Normalizzare sparare alle persone nere",
      0
    ],
    [
      "Reprimere con la violenza i flashmob",
      0
    ],
    [
      "Comprare un crocifischio dalla LIDL",
      0
    ],
    [
      "Dire di essere sieropositivo dopo essere venuto dentro",
      0
    ],
    [
      "Tingersi i peli pubici",
      0
    ],
    [
      "Comprare un tanga con la faccia di Obama",
      0
    ],
    [
      "Usare il naso di pinocchio per altri scopi",
      0
    ],
    [
      "Una pastiglia di cianuro alla fragola per una dolce morte",
      0
    ],
    [
      "Il progetto Bavaro",
      0
    ],
    [
      "Finanziare il ponte sullo stretto",
      0
    ],
    [
      "Asfaltare le coste per evitare gli sbarchi di immigrati",
      0
    ],
    [
      "Matteo Salvini",
      0
    ],
    [
      "La crescita di uno xenomorpho nel buco del culo",
      0
    ],
    [
      "Convincere l'Unione Europea a finanziare un filmino porno amatoriale",
      0
    ],
    [
      "Evadere le tasse per comprare bimbi all'ingrosso",
      0
    ],
    [
      "Dei transgender sieropositivi",
      0
    ],
    [
      "Picchiare il mare per far arrivare le onde",
      0
    ],
    [
      "Scoprire tua madre ad un orgia di suore in una casa di riposo",
      0
    ],
    [
      "Applicare un razzo a motore ad una sedia a rotelle",
      0
    ],
    [
      "Essere belli come un cesso a pedali",
      0
    ],
    [
      "Ingravidare una donna col fertilizzante per piante",
      0
    ],
    [
      "Fingersi normali alla cassa mentre si ha un vibratore in culo",
      0
    ],
    [
      "Mettersi un velo in testa e urlare: \"Allah okbar\" in aereo",
      0
    ],
    [
      "Accendere una sigaretta sul tetto di Notre Dame",
      0
    ],
    [
      "Il trapassato presente",
      0
    ],
    [
      "Dichiarare guerra alla ex Jugoslavia",
      0
    ],
    [
      "Causare accidentalmente un omicidio di massa",
      0
    ],
    [
      "Una zuppa di fagioli mentre si ha la diarrea fulminante",
      0
    ],
    [
      "Toodles che porta a Topolino una pizza con pesto, rucola e cocaina",
      0
    ],
    [
      "Lavorare con la colla di amianto",
      0
    ],
    [
      "Determinare la massa del sole usando Ruffini",
      0
    ],
    [
      "L'amianto",
      0
    ],
    [
      "Infilarsi un termometro a mercurio nel culo",
      0
    ],
    [
      "Sciogliere i ghiacciai con un phon",
      0
    ],
    [
      "Urlare \"Pikachu scelgo te!\" lanciando un criceto",
      0
    ],
    [
      "Sbattere la testa sul pavimento da neonati",
      0
    ],
    [
      "Perry l'ornitorinco",
      0
    ],
    [
      "L'ipotenusa del triangolo rettangolo",
      0
    ],
    [
      "Il grande teorema di Pitagora",
      0
    ],
    [
      "Sfidare leggi della fisica dall'ultimo piano del palazzo",
      0
    ],
    [
      "Leggere il Mein Kamf in piazza ad alta voce",
      0
    ],
    [
      "Il trenino Thomas",
      0
    ],
    [
      "L'aspirapolvere  del Teletubbies",
      0
    ],
    [
      "L'infinita vastità del cazzo che me ne frega",
      0
    ],
    [
      "Le tailandesi",
      0
    ],
    [
      "Duffy Duck che canticchia il motivetto fascista",
      0
    ],
    [
      "Usare la nutella come lubrificante",
      0
    ],
    [
      "Il revenge porn",
      0
    ],
    [
      "Il tumore al seno",
      0
    ],
    [
      "L'egemonia dell'Inghilterra sul mare",
      0
    ],
    [
      "Fare la fine di Yara",
      0
    ],
    [
      "Attentati violenti in casa di riposo",
      0
    ],
    [
      "Il cavallo di troia",
      0
    ],
    [
      "Avere dei busti di dubbia provenienza in casa",
      0
    ],
    [
      "Usare i soldi pubblici per insabbiare gli atti di pedofilia nella chiesa",
      0
    ],
    [
      "Fingersi un allievo dell'asilo quando si ha 60 anni",
      0
    ],
    [
      "Evocare il drago shenron",
      0
    ],
    [
      "Avere 3 cromosomi 21",
      0
    ],
    [
      "Vantarsi di avere cromosomi in più",
      0
    ],
    [
      "Mettere un cavallo al governo",
      0
    ],
    [
      "Fare un film porno con un cavallo",
      0
    ],
    [
      "Il dottore degli orifizi",
      0
    ],
    [
      "Pucciare i biscotti nel latte materno",
      0
    ],
    [
      "L'attentato all'arciduca Francesco Ferdinando",
      0
    ],
    [
      "Usare una palla di cannone in una partita di ping pong",
      0
    ],
    [
      "Una cosa a 3 con Loredana Bertè e Tiziano Ferro",
      0
    ],
    [
      "Attuare un genocidio per il meme",
      0
    ],
    [
      "Il ventennio fascista",
      0
    ],
    [
      "Praticare sadomaso con Darth Vader",
      0
    ],
    [
      "Tirare fuori excalibur a letto",
      0
    ],
    [
      "Un monaco amanuense",
      0
    ],
    [
      "Cantare faccetta nera davanti al parlamento",
      0
    ],
    [
      "Una torsione testicolare",
      0
    ],
    [
      "Le lesbiche",
      0
    ],
    [
      "I froci",
      0
    ],
    [
      "Accusare un trans di essere un transformer",
      0
    ],
    [
      "Usare i dolci per rapire i bimbi in un parco",
      0
    ],
    [
      "Investire bitcoin in una pornoattrice",
      0
    ],
    [
      "Peppa pig alla griglia",
      0
    ],
    [
      "Buttarsi da un pallazzo per testare l'aerodinamicità del proprio corpo",
      0
    ],
    [
      "Essere bravi a infornare come i tedeschi negli anni 40",
      0
    ],
    [
      "I bravi di don Rodrigo",
      0
    ],
    [
      "bottiglie di baby oil",
      0
    ],
    [
      "Il mostro di Firenze",
      0
    ],
    [
      "Usare un calibro per misurarsi il cazzo",
      0
    ],
    [
      "Sperimentare il paradosso del gatto di Schrodinger con il tuo cuginetto",
      0
    ],
    [
      "I compagni di merende",
      0
    ],
    [
      "Dare un grissino sporco di merda a un bambino spacciandolo per un Mikado",
      0
    ],
    [
      "Fare l'elicottero col cazzo",
      0
    ],
    [
      "Evocare Belzebub",
      0
    ],
    [
      "Vestirsi da nazista ad un gay pride",
      0
    ],
    [
      "Mettere I BTS a capo della Corea del Nord",
      0
    ],
    [
      "Un allegro weekend a Catanzaro",
      0
    ],
    [
      "Sborrare nella bocca di un'antilope",
      0
    ],
    [
      "La teoria dell'evoluzionismo",
      0
    ],
    [
      "Essere l'assassino di Hitler",
      0
    ],
    [
      "Usare la moltiplicazione del corpo di Naruto per entrare in tutti i buchi",
      0
    ],
    [
      "Vivere tutta la vita con un vibratore nel culo",
      0
    ],
    [
      "Anna calda a 3 cm da te",
      0
    ],
    [
      "Quando c'era lui i treni arrivavano in orario",
      0
    ],
    [
      "La madonna caraibica",
      0
    ],
    [
      "Invadere la Polonia",
      0
    ],
    [
      "L'impresa dei mille",
      0
    ],
    [
      "Nuclearizzare Foggia",
      0
    ],
    [
      "Il Vesuvio che erutta a Napoli",
      0
    ],
    [
      "L'amore incondizionato dei fiorentini per i pisani",
      0
    ],
    [
      "Il comune emiliano di Sesso",
      0
    ],
    [
      "Rapire e uccidere Yara",
      0
    ],
    [
      "Essere innocente come Bossetti",
      0
    ],
    [
      "Jack lo Squirtatroie",
      0
    ],
    [
      "IT'S OVER NINE THOUSAND!!!!!",
      0
    ],
    [
      "Trovare un arto umano a casa del tipo conosciuto su tinder",
      0
    ],
    [
      "Evadere il fisco come Jeff Bezoz",
      0
    ],
    [
      "Sussurrare all'orecchio del vicino di urinatoio",
      0
    ],
    [
      "Occuparsi della fauna locale come il Trentino Alto Adige",
      0
    ],
    [
      "Le suffragette ",
      0
    ],
    [
      "Sessualizzare il demogorgone",
      0
    ],
    [
      "Il cast della melevisione in un video porno",
      0
    ],
    [
      "Circoncidersi con una pinzatrice rosa",
      0
    ],
    [
      "Bombardare il Vietnam col napalm",
      0
    ],
    [
      "Infilarsi un plug anale nella cappella",
      0
    ],
    [
      "Strizzare i capezzoli ad un toro",
      0
    ],
    [
      "Mungere il prof di matematica napoletano per la sufficienza ",
      0
    ],
    [
      "ll processo di Norimberga",
      0
    ],
    [
      "Esplodere come tuo zio musulmano ",
      0
    ],
    [
      "Rizzare le dodicenni ",
      0
    ],
    [
      "Diventare luterani per un giorno",
      0
    ],
    [
      "I diritti delle donne",
      0
    ],
    [
      "La fiera dell'est",
      0
    ],
    [
      "Vote Kamala for president ",
      0
    ],
    [
      "Trump come nuovo protagonosta di Matrix ",
      0
    ],
    [
      "Giocare a Risiko con eserciti veri",
      0
    ],
    [
      "Fare un bagno termale nel Vesuvio",
      0
    ],
    [
      "La durezza del mio pene quando canta Annalisa",
      0
    ],
    [
      "Calcolare la dilatazione anale dopo il fisting con il teorema di Pitagora",
      0
    ],
    [
      "Una cenetta romantica ispirata a Jeffrey Dahmer",
      0
    ],
    [
      "Usare la borra al posto della crema pasticcera",
      0
    ],
    [
      "Chiedere a un bimbo orfano dove sono i suoi genitori",
      0
    ],
    [
      "Le rule 34 di JoJo Siwa",
      0
    ],
    [
      "Liberare i bimbi dallo scantinato",
      0
    ],
    [
      "Raggiungere l'uguaglianza schiarendo la pelle ai neri",
      0
    ],
    [
      "Raggiungere l'orgasmo con due dita nel naso",
      0
    ],
    [
      "Ficcarsi due dita e una matita negli occhi",
      0
    ],
    [
      "Sciacquarsi le palle nella bacinella dell'acqua santa",
      0
    ],
    [
      "Disegnare forme falliche sulle lapidi al cimitero",
      0
    ],
    [
      "Un chilo di bamba",
      0
    ],
    [
      "Dei lecca lecca al gusto gonorrea ",
      0
    ],
    [
      "Un clitoride placcato oro",
      0
    ],
    [
      "Tagliare il cordone ombelicale sbagliato al neonato",
      0
    ],
    [
      "Chiara Facchetti che salda il debito pubblico italiano",
      0
    ],
    [
      "Trombare un lampione in pieno giorno",
      0
    ],
    [
      "Bere le cristalline acque del Brenta",
      0
    ],
    [
      "Eiaculare tanto da farsi venire un'ernia ai coglioni",
      0
    ],
    [
      "Inzuppare il tampax nella vodka",
      0
    ],
    [
      "Togliersi il preservativo prima di venire",
      0
    ],
    [
      "Regalare preservativi bucati",
      0
    ],
    [
      "Le zingare che rubano nella metro di Milano",
      0
    ],
    [
      "Cagare a spruzzo in un vicolo buio e malfamato",
      0
    ],
    [
      "Portare la classe dei bambini speciali in gita a Chernobyl",
      0
    ],
    [
      "Fingersi gay per toccare una tetta",
      0
    ],
    [
      "Disegnare cazzi anatomicamente accurati",
      0
    ],
    [
      "Ruttare sui polli",
      0
    ],
    [
      "Usare un tubo di pringles come sex toy",
      0
    ],
    [
      "Dirigere un bombardamento aereo contro la Moldavia",
      0
    ],
    [
      "Risolvere il problema dell'immigrazione in Italia cancellando Lampedusa",
      0
    ],
    [
      "I bambini nascosti sotto il letto di Michael Jackson",
      0
    ],
    [
      "L'umidità della mia figa quando vedo Conte",
      0
    ],
    [
      "Scambiare pedopornografia nel parchetto cittadino",
      0
    ],
    [
      "Scopare con il datore di lavoro",
      0
    ],
    [
      "Lavarsi i genitali con vodka alla fragola e nitroglicerina",
      0
    ],
    [
      "Arrivare in ritardo al proprio funerale",
      0
    ],
    [
      "Un pupazzo dei My Little Pony con un buco speciale",
      0
    ],
    [
      "Un elefante tandem psichico da guerra",
      0
    ],
    [
      "Far cadere la saponetta di proposito nelle docce della prigione",
      0
    ],
    [
      "Succhiare un cazzo fino a che non sborra",
      0
    ],
    [
      "Ficcarsi 3 bei procioni nel culo",
      0
    ],
    [
      "Usare la calcolatrice per fare 1+1",
      0
    ],
    [
      "Bere Jager dal bidè a casa della prozia",
      0
    ],
    [
      "Morire di diarrea fulminea",
      0
    ],
    [
      "Tornare indietro nel tempo solo per farsi fare un autografo da Hitler",
      0
    ],
    [
      "Tornare indietro nel tempo per farsi fare un pompino da Marilyn Monroe",
      0
    ],
    [
      "Fumare la marijuana dal culo",
      0
    ],
    [
      "Sniffare le ceneri della nonna",
      0
    ],
    [
      "Usare le ceneri del cane come parmigiano",
      0
    ],
    [
      "Praticare tuffi olimpici nella vasca da bagno",
      0
    ],
    [
      "Praticare il Kamasutra al pranzo di natale",
      0
    ],
    [
      "Togliersi le costole per fare come D'Annunzio",
      0
    ],
    [
      "Orietta Berti",
      0
    ],
    [
      "Anna Frank",
      0
    ],
    [
      "Malgioglio",
      0
    ],
    [
      "Rocco Siffredi",
      0
    ],
    [
      "Maria de Filippi",
      0
    ],
    [
      "Alberto Angela",
      0
    ],
    [
      "Inserire tua sorella nel database degli SCP",
      0
    ],
    [
      "Spiegare l'apologia cristiana suonando una vuvuzela",
      0
    ],
    [
      "Fabrizio Corona che si incula con un complesso sistema di leve e specchi",
      0
    ],
    [
      "Una ninna nanna suonata con un flauto dolce nel naso",
      0
    ],
    [
      "Uno spiedino di topi fritti in pastella",
      0
    ],
    [
      "Strozzarsi con una mozzarella aromatizzata all'uranio",
      0
    ],
    [
      "Prendere 3 pastiglie di viagra per inchiappettare un puffo",
      0
    ],
    [
      "Le attività extraconiugali",
      0
    ],
    [
      "L'astinenza",
      0
    ],
    [
      "Gesù inculato dalla Madonna con un dildo rosa",
      0
    ],
    [
      "Usare la cocaina al posto della farina per preparare una torta per la vendita di beneficenza",
      0
    ],
    [
      "L'ospedale pediatrico sotto attacco di israele",
      0
    ],
    [
      "Un Charizard con tendenze neonaziste",
      0
    ],
    [
      "Sparare mensole dagli occhi",
      0
    ],
    [
      "Kaaaaaamehaaaaamehaaaaaa",
      0
    ],
    [
      "Fare sesso non protetto con la propria madre",
      0
    ],
    [
      "Unboxare falli di gomma su youtube kids",
      0
    ],
    [
      "Uscire le tette per curare i malati di Alzheimer",
      0
    ],
    [
      "Mussolini che fa l'ahegao",
      0
    ],
    [
      "Lavarsi i capelli con l'olio della friggitrice",
      0
    ],
    [
      "Shrek",
      0
    ],
    [
      "Chiudere tua moglie incinta in balcone d'inverno",
      0
    ],
    [
      "La fede in dio di Germano Mosconi",
      0
    ],
    [
      "Clara di Heidi",
      0
    ],
    [
      "Il discorso del duce",
      0
    ],
    [
      "Bazinga",
      0
    ],
    [
      "Usare il mantello dell'invisibilità per segarsi nello spogliatoio delle ragazze",
      0
    ],
    [
      "Accorgersi di avere tendenze necrofile",
      0
    ],
    [
      "Attraversare l'autostrada per catturare un Pikachu",
      0
    ],
    [
      "Uccidere il proprio figlio a badilate perché gli piace Peppa Pig",
      0
    ],
    [
      "Presentarsi armati ad un convegno di monache austriache",
      0
    ],
    [
      "Organizzare la corrida con i comunisti",
      0
    ],
    [
      "Far dichiarare bancarotta a un sexy shop",
      0
    ],
    [
      "Farsi un piercing al cazzo",
      0
    ],
    [
      "Infilare il proprio braccio nel culo",
      0
    ],
    [
      "Terrorizzare i bambini col costume di Berlusconi",
      0
    ],
    [
      "Proclamare lo stato d'assedio",
      0
    ],
    [
      "Avere un orgasmo dopo aver assaggiato la torta alle mele",
      0
    ],
    [
      "Un cosplay hentai",
      0
    ],
    [
      "Michael Jackson che si stringe le mani per ricreare la pubblicità dei ringo",
      0
    ],
    [
      "Igniettarsi la candeggina in vena per combattere il covid",
      0
    ],
    [
      "Il mio cazzo come emoji",
      0
    ],
    [
      "L'occhio di Sauron",
      0
    ],
    [
      "Organizzazione la corrida in un asilo nido",
      0
    ],
    [
      "Fare sogni bagnati su una Babooshka",
      0
    ],
    [
      "Farsi segare da una persona col parkinson",
      0
    ],
    [
      "Saetta McQueen",
      0
    ],
    [
      "Dio Portatore di Tuoni",
      0
    ],
    [
      "Usare Stephen Hawking per il live action di cars",
      0
    ],
    [
      "Dio bestia da soma in minia toma in minia soma in minia mosa in miniatura",
      0
    ],
    [
      "Utilizzare una moka per costruire un reattore nucleare",
      0
    ],
    [
      "L'odore di pube di topo",
      0
    ],
    [
      "I dossi davanti all'asilo",
      0
    ],
    [
      "Chiara Facchetti",
      0
    ],
    [
      "L'impero asburgico",
      0
    ],
    [
      "Le 23 pugnalate di Giulio Cesare",
      0
    ],
    [
      "Il nonnismo",
      0
    ],
    [
      "L'encefalite acuta",
      0
    ],
    [
      "Accendere il riscaldamento come Nerone ha fatto a Roma",
      0
    ],
    [
      "Diventare sborraman",
      0
    ],
    [
      "Infilarsi le due torri gemelle in culo",
      0
    ],
    [
      "Fare sesso non protetto con la nonna dei croods",
      0
    ],
    [
      "Il trono di cazzi",
      0
    ],
    [
      "Perry l'ornitorinco",
      0
    ],
    [
      "Scopare il gemello del tuo fidanzato",
      0
    ],
    [
      "Scopare il gemello della tua fidanzata",
      0
    ],
    [
      "Lo sciopero contro i diritti delle donne",
      0
    ],
    [
      "Rifarsi le tette per fare un titjob migliore",
      0
    ],
    [
      "Tua madre",
      0
    ],
    [
      "Biancaneve e i 7 cazzi",
      0
    ],
    [
      "Armando (della Pimpa)",
      0
    ],
    [
      "Dormire in un letto da mezza piazza per evitare il sesso a sorpresa",
      0
    ],
    [
      "Freddy fazbear",
      0
    ],
    [
      "Kermit la rana",
      0
    ],
    [
      "Il bastone di Jack frost",
      0
    ],
    [
      "Un'ustione di quinto grado",
      0
    ],
    [
      "Svenire dopo aver visto una figa",
      0
    ],
    [
      "Una sega con i piedi",
      0
    ],
    [
      "Lucia Mondella",
      0
    ],
    [
      "Torquato Tasso",
      0
    ],
    [
      "Raggiungere le note di Ariana Grande mentre cavalchi un cazzo",
      0
    ],
    [
      "Sganciare una mega scoreggia in un'ascensore affollato",
      0
    ],
    [
      "Gumball Watterson",
      0
    ],
    [
      "Giocare a mosca cieca in autostrada",
      0
    ],
    [
      "Andare a disoneste",
      0
    ],
    [
      "Mettere in punizione i tuoi amici perché sono troppo freaky",
      0
    ],
    [
      "Il dissing dei me contro te",
      0
    ],
    [
      "Tatuarsi l'occhio degli illuminati sul buco del culo",
      0
    ],
    [
      "Dio aeroplano nella valle delle torri",
      0
    ],
    [
      "Riprendere fiume",
      0
    ],
    [
      "Il secondo triumvirato",
      0
    ],
    [
      "Raccontare le proprie esperienze sessuali al club del libro",
      0
    ],
    [
      "Assaggiare i reagenti colorati nel laboratorio di chimica",
      0
    ],
    [
      "Avere un duello al funerale di tuo nonno",
      0
    ],
    [
      "Essere investiti da un aereo",
      0
    ],
    [
      "Eccitare il clitoride fino all'orgasmo",
      0
    ],
    [
      "L'ergastolo per aver rubato un pacchetto di carte pokemon",
      0
    ],
    [
      "Una lesbica futurista",
      0
    ],
    [
      "Essere ingravidati da Mahmood con lo sguardo",
      0
    ],
    [
      "Rosario muniz",
      0
    ],
    [
      "Un pandoro farcito con la sborra",
      0
    ],
    [
      "Dichiarare a guerra all'Algeria",
      0
    ],
    [
      "Un orgasmo a mani libere",
      0
    ],
    [
      "Impalato dal dio bestia",
      0
    ],
    [
      "Un satanasso molto promiscuo",
      0
    ],
    [
      "Ruttare come una principessa camionista",
      0
    ],
    [
      "Essere calpestato da un cazzone",
      0
    ],
    [
      "Un bagno termale nel Vesuvio",
      0
    ],
    [
      "Napoli a fuoco",
      0
    ],
    [
      "Castrare i terroni",
      0
    ],
    [
      "Correre scalzi nei prati sotto l'effetto di droghe pesanti",
      0
    ],
    [
      "Infilare le palle in un orologio a pendolo che ha al posto del pendolo un ascia",
      0
    ],
    [
      "Smerdarsi nei calzoni in classe",
      0
    ],
    [
      "Pomiciare con i paramedici venuti a soccorrere tuo padre",
      0
    ],
    [
      "Vomitare vodka e funghetti allucinogeni in corsia 2 al conad",
      0
    ],
    [
      "Togliersi la vita con una bottiglietta di plastica",
      0
    ],
    [
      "\"Eh sì eh Marco eh B porterai minecreft?\"",
      0
    ],
    [
      "Infilarsi del potassio puro su per il culo per diventare un razzo",
      0
    ],
    [
      "Evocare un demone per passare una seratina esotica",
      0
    ],
    [
      "Svegliarsi senza un rene dopo una seratina romantica",
      0
    ],
    [
      "Farsi frati per non essere chiamati alle armi",
      0
    ],
    [
      "Farsi suora per non finire a letto con altri casi umani",
      0
    ],
    [
      "Gerry Scotti",
      0
    ],
    [
      "Un catetere",
      0
    ],
    [
      "Sniffare cocaina dal buco del culo",
      0
    ],
    [
      "Giocare a rugby usando un neonato come palla",
      0
    ],
    [
      "Un'orgia con Meloni, Di Maio e Salvini",
      0
    ],
    [
      "Mangiare un peperoncino piccante per sputare fiamme dal culo",
      0
    ],
    [
      "Maurizio Merluzzo in drag",
      0
    ],
    [
      "Eccitarsi alla vista del necrologio del giorno",
      0
    ],
    [
      "Usare il proprio jet privato per fare una passeggiatina con il cane",
      0
    ],
    [
      "Wanna Marchi",
      0
    ],
    [
      "Elenoire ferruzzi",
      0
    ],
    [
      "Pulirsi il culo con delle unghie da 50 cm",
      0
    ],
    [
      "Il phon accesso nella vasca da bagno",
      0
    ],
    [
      "Adorare le donne che sanno di merluzzo",
      0
    ],
    [
      "Il sesso non protetto nel giardino dell'Eden",
      0
    ],
    [
      "Portare ad ebollizione la sborra",
      0
    ],
    [
      "Francesca cipriani",
      0
    ],
    [
      "Paolo Bonolis",
      0
    ],
    [
      "Donatella versace",
      0
    ],
    [
      "Blanco",
      0
    ],
    [
      "Peppe Brescia",
      0
    ],
    [
      "Peppe Fetish",
      0
    ],
    [
      "Rita de Crescenzo",
      0
    ],
    [
      "Il gelato al profilattico",
      0
    ],
    [
      "Essere dissati da Favij",
      0
    ],
    [
      "Avere il primo orgasmo con un video di Favij",
      0
    ],
    [
      "Lo scandalo di Chiara Ferragni e il pandoro",
      0
    ],
    [
      "Le emorroidi a colazione",
      0
    ],
    [
      "Lo strumentopolo misterioso di Topolino",
      0
    ],
    [
      "Essere picchiati da papa Francesco",
      0
    ],
    [
      "Una sfida a super smash bros con Baby K",
      0
    ],
    [
      "Urlare \"maledettiiii!\" davanti a un giornalista",
      0
    ],
    [
      "Urlare \"Teresaaaa\" davanti a un giornalista",
      0
    ],
    [
      "I preti che vengono sui bambini",
      0
    ],
    [
      "Urlare \"BAAAAAM... SCOIATTOLO\" a un funerale in un momento di silenzio",
      0
    ],
    [
      "Girare tutti i crocifissi di un convento durante la notte e mettere un vinile di Nicky Minaj sull'altare",
      0
    ],
    [
      "Segarsi in classe davanti al professore di matematica",
      0
    ],
    [
      "Il dissidio interiore di Petrarca ",
      0
    ],
    [
      "Essere formaggino",
      0
    ],
    [
      "La titolante del mc donalds",
      0
    ],
    [
      "Le alette di pollo nella salsa sborra",
      0
    ],
    [
      "Una nuova legge di bilancio che abolisce l'acquisto di sex toys",
      0
    ],
    [
      "La marmitta di Saetta McQueen ",
      0
    ],
    [
      "Ricreare le torri gemelle con le frecce tricolore",
      0
    ],
    [
      "Lo scisma d'oriente",
      0
    ],
    [
      "Annusare le mutandine della vicina e venir colti in flagrante",
      0
    ],
    [
      "Tradire il proprio partner con stephen Hawking",
      0
    ],
    [
      "Stephen hawking",
      0
    ],
    [
      "Il biennio rosso",
      0
    ],
    [
      "Comprare un reattore nucleare da Temu",
      0
    ],
    [
      "Sostenere che il cambiamento climatico è solo una scusa per nascondere che gli gnomi sono ai vertici della società",
      0
    ],
    [
      "Greta thumberg in perizoma",
      0
    ],
    [
      "Curare il mal di gola con shottini di vodka",
      0
    ],
    [
      "Il sadomaso come forma di apprendimento",
      0
    ],
    [
      "Kim Jong-Un che stanna le Blackpink",
      0
    ],
    [
      "Essere arrestati per spaccio di goleador",
      0
    ],
    [
      "Usare i soldi del governo per costruire un megazord a dimensione reale",
      0
    ],
    [
      "Il crollo di Wall Street del 1929",
      0
    ],
    [
      "Il maestro tartaruga di Kung Fu Panda",
      0
    ],
    [
      "I capelli di Marge Simpson",
      0
    ],
    [
      "Divaricare le gambe per ricreare il segno della pace in un asilo",
      0
    ],
    [
      "Instaurare un dittatura",
      0
    ],
    [
      "I patti lateranensi",
      0
    ],
    [
      "Un ordigno nucleare costruito da me e mio nonno",
      0
    ],
    [
      "Scorreggiare così tanto da far scattare l’allarme anti gas",
      0
    ],
    [
      "Annusare il culo ai passanti credendosi un cane",
      0
    ],
    [
      "Un quadro dipinto da una scimmia con le emorroidi",
      0
    ],
    [
      "Una collezione di porno con protagonisti nani ben dotati",
      0
    ],
    [
      "Un cane che leccail gelato spalmato sulle tue palle",
      0
    ],
    [
      "Istigare le nuove generazioni alla bulimia",
      0
    ],
    [
      "Scambiare di culla i neonati all'ospedale",
      0
    ],
    [
      "Sganciare un'altra bomba atomica su Hiroshima",
      0
    ],
    [
      "Ted Bundy e le sue mirabolanti avventure",
      0
    ],
    [
      "Una scoreggia bagnata e letale",
      0
    ],
    [
      "Il gran cazzone di satana",
      0
    ],
    [
      "La vagina della madonna che gocciola arcobaleno liquido",
      0
    ],
    [
      "La propaganda neonazista",
      0
    ],
    [
      "Praticare BDSM con Matteo Salvini",
      0
    ],
    [
      "Il sesso non protetto con le nutrie di parco Querini",
      0
    ],
    [
      "Sentirsi una vera baddie quando si ha la ciola",
      0
    ],
    [
      "Il sesso non protetto con i malati di AIDS ",
      0
    ],
    [
      "La Pimpa che apre le gambe",
      0
    ],
    [
      "Papa Francesco che fa il cosplay di Stephen Hawking ",
      0
    ],
    [
      "Essere ebreo ed entrare nel lettino abbronzante sbagliato ",
      0
    ],
    [
      "I neri",
      0
    ],
    [
      "I bianchi",
      0
    ],
    [
      "Reintrodurre la pena di morte",
      0
    ],
    [
      "Un pitbull in un parco giochi per bambini",
      0
    ],
    [
      "Il passaggio dalla cocaina al crack",
      0
    ],
    [
      "Violentare una capra",
      0
    ],
    [
      "Eliminare San Marino dalla mappa",
      0
    ],
    [
      "La parità uomo-donna",
      0
    ],
    [
      "Un nero, una puttana, un nordista e un omosessuale",
      0
    ],
    [
      "La mafia rumena",
      0
    ],
    [
      "Una storia d'amore con un parroco di 62 anni",
      0
    ],
    [
      "Un parto prematuro",
      0
    ],
    [
      "Avvinare il biberon con l'acido ",
      0
    ],
    [
      "Usare la vodka alla menta come collutorio",
      0
    ],
    [
      "Un cinese caduto dall'alto",
      0
    ],
    [
      "Casualmente piombare dal piano superiore rompendo il soffitto ",
      0
    ],
    [
      "Inculare #nomino con un trapano acceso",
      0
    ],
    [
      "Rendere #nomino uno schiavo sessuale ",
      0
    ],
    [
      "Maritare #nomino con un furry",
      0
    ],
    [
      "Madonna binaria",
      0
    ]
]
const AnswerArrSafe = [
  ["Una partita a Mario Kart in versione reale", 0],  
  ["Una festa a sorpresa", 0],  
  ["Il numero 104", 0],  
  ["Un giocattolo per cani", 0],  
  ["La mentalità da puzzle", 0],  
  ["Un barattolo di caramelle", 0],  
  ["Un gelato alla vaniglia", 0],  
  ["Un cono gelato con panna", 0],  
  ["Il colpo di scena finale", 0],  
  ["I bambini che costruiscono una capanna", 0],  
  ["Un piatto di spaghetti", 0],  
  ["Un tiro alla fune", 0],  
  ["Un calzino sparito nella lavatrice", 0],  
  ["Scoprire di essere nella lista dei buoni di Babbo Natale", 0],  
  ["Un bagno di bolle", 0],  
  ["Una gara di saltelli", 0],  
  ["Andare a comprare le caramelle", 0],  
  ["Vendere limonata fatta in casa", 0],  
  ["Un buffetto amichevole", 0],  
  ["Iniziare con un biscotto e finire con tutta la scatola", 0],  
  ["Un coro di Natale", 0],  
  ["Una scampagnata", 0],  
  ["Ringraziare la buona sorte", 0],  
  ["La zia che porta sempre i dolci", 0],  
  ["Un ballo improvvisato", 0],  
  ["Una caccia al tesoro", 0],  
  ["Un limone troppo acido", 0],  
  ["Lanciare un aeroplanino di carta in classe", 0],  
  ["Un gioco di indovinelli", 0],  
  ["Aggiustare le rotelle di una bicicletta", 0],  
  ["Condividere è meglio", 0],  
  ["Nani da giardino sorridenti", 0],  
  ["Un discorso motivazionale", 0],  
  ["Un campo di girasoli", 0],  
  ["Mettere fiori sulla tomba del nonno", 0],  
  ["Bisbigliare in chiesa", 0],  
  ["Giocare a 'indovina il numero'", 0],  
  ["Diffondere gentilezza", 0],  
  ["Preparare biscotti per una vendita di beneficenza", 0],  
  ["Una gruccia nell'armadio", 0],  
  ["L'economia delle caramelle", 0],  
  ["Uno scontro di cuscini", 0],  
  ["Rievocare una scena di un film", 0],  
  ["Premere il tasto 'snooze' della sveglia", 0],  
  ["Un compito in classe a sorpresa", 0],  
  ["Riportare in auge i vecchi giochi da cortile", 0],  
  ["Un cinque alto tra amici", 0],  
  ["Un gioco del telefono senza fili", 0],  
  ["Un pugno amichevole", 0],  
  ["Un errore sui social media", 0],  
  ["Aprire un canale YouTube con il proprio gatto", 0],  
  ["Una caramella gommosa", 0],  
  ["Rovesciare per sbaglio il succo di frutta", 0],  
  ["Una partita a nascondino", 0],  
  ["Un libro giallo", 0],  
  ["Il segreto della torta della nonna", 0],  
  ["Ritrovare un giocattolo perduto", 0],  
  ["Voler insegnare a tuo figlio ad andare in bici", 0],  
  ["Servire un piatto strano a una cena tra amici", 0],  
  ["Un gioco di mosca cieca", 0],  
  ["Offrire una carota a un coniglio", 0],  
  ["Essere seguito da uno scoiattolo curioso", 0],  
  ["Una partita a scacchi", 0],  
  ["Litigare su chi ha finito l'ultima fetta di pizza", 0],  
  ["Fare battute sciocche", 0],  
  ["Criticare un disegno fatto dai bambini", 0],  
  ["Noleggiare un pony per una festa", 0],  
  ["Un pigiama a stelle e strisce", 0],  
  ["Dimenticare di prendere un amico perché distratti", 0],  
  ["Una lezione su come allacciarsi le scarpe", 0],  
  ["Un abbraccio di gruppo", 0],  
  ["Vivere come negli anni '90", 0],  
  ["Salvare i pesci rossi in una boccia", 0],  
  ["Un taglio di capelli mal riuscito", 0],  
  ["Una lezione di storia", 0],  
  ["Uno starnuto che non smette", 0],  
  ["Avere il raffreddore e bere una tisana", 0],  
  ["Riscrivere il proprio diario segreto", 0],  
  ["Fare il bravo per fare colpo sulla ragazza che ti piace", 0],  
  ["Un giorno memorabile", 0],  
  ["Scoprire che il tuo idolo ha cambiato lavoro", 0],  
  ["Bere troppa aranciata", 0],  
  ["Il ritorno di Mozart prima di un nuovo videogioco", 0],  
  ["Una discussione su un evento storico", 0],  
  ["Fare stretching al mattino", 0],  
  ["Cuocere biscotti con tuo figlio", 0],  
  ["Una partita a palla avvelenata", 0],  
  ["Fermare un flash mob con barzellette", 0],  
  ["Comprare un giocattolo al mercatino", 0],  
  ["Dire 'ti ho fregato!' dopo uno scherzo", 0],  
  ["Colorarsi i capelli di blu", 0],  
  ["Mutande con sopra scritto 'supereroe'", 0],  
  ["Usare il naso di Pinocchio come puntatore", 0],  
  ["Una caramella alla fragola", 0],  
  ["Un progetto segreto nel garage", 0],  
  ["Costruire una casa sull'albero", 0],  
  ["Fare castelli di sabbia in spiaggia", 0],  
  ["Un vicino di casa simpatico", 0],  
  ["Un sogno strambo", 0],  
  ["Convincere gli amici a fare un video divertente", 0],  
  ["Comprare caramelle all'ingrosso", 0],  
  ["Un arcobaleno dopo la pioggia", 0],  
  ["Saltare nelle pozzanghere", 0],  
  ["Trovare tua mamma in un club del libro", 0],  
  ["Mettere le rotelle alla bici", 0],  
  ["Vestirsi in modo buffo", 0],  
  ["Piantare semi nell'orto", 0],  
  ["Cercare di non ridere in silenzio", 0],  
  ["Indossare un cappello ridicolo in aereo", 0],  
  ["Accendere una candela profumata", 0],  
  ["Una lezione di grammatica", 0],  
  ["Dichiarare guerra ai cuscini", 0],  
  ["Causare una battaglia di cibo per sbaglio", 0],  
  ["Una zuppa troppo calda", 0],  
  ["Topolino che consegna una pizza", 0],  
  ["Lavorare con la colla stick", 0],  
  ["Risolvere un'equazione matematica", 0],  
  ["Un esperimento scientifico", 0],  
  ["Misurarsi la febbre", 0],  
  ["Sciogliere il ghiaccio con il phon", 0],  
  ["Urlare 'Pikachu, scelgo te!' lanciando un peluche", 0],  
  ["Sbattere la testa da piccoli", 0],  
  ["Perry l'ornitorinco", 0],  
  ["L'ipotenusa di un triangolo", 0],  
  ["Il teorema di Pitagora", 0],  
  ["Sfidare la gravità saltando sul letto", 0],  
  ["Leggere un libro di avventure", 0],  
  ["Il trenino Thomas", 0],  
  ["L'aspirapolvere dei Teletubbies", 0],  
  ["La vastità del cielo stellato", 0],  
  ["Le avventure di una principessa", 0],  
  ["Paperino che canta una canzone stonata", 0],  
  ["Usare la nutella per decorare una torta", 0],  
  ["Una foto imbarazzante", 0],  
  ["Un raffreddore fastidioso", 0],  
  ["La regina dei mari", 0],  
  ["Fare la fine di un personaggio dei cartoni", 0],  
  ["Una partita a carte in casa di riposo", 0],  
  ["Il cavallo di Troia (quello dei Lego)", 0],  
  ["Avere una collezione di pietre strane", 0],  
  ["Usare i soldi della paghetta per comprare dolci", 0],  
  ["Fingere di essere uno studente alle superiori", 0],  
  ["Evocare un genio della lampada", 0],  
  ["Avere un cromosoma in più di entusiasmo", 0],  
  ["Vantarsi di aver vinto a un gioco da tavolo", 0],  
  ["Mettere un cane al comando", 0],  
  ["Fare un film con un cane", 0],  
  ["Il dottore dei bambini", 0],  
  ["Inzuppare i biscotti nel latte", 0],  
  ["Un evento storico famoso", 0],  
  ["Usare una palla di gomma in una partita di ping pong", 0],  
  ["Una serata con amici", 0],  
  ["Organizzare una festa per il meme", 0],  
  ["Un decennio di musica anni '80", 0],  
  ["Giocare a Star Wars con i pupazzi", 0],  
  ["Tirare fuori una spada di cartone", 0],  
  ["Un monaco che copia libri", 0],  
  ["Cantare una canzone in coro", 0],  
  ["Un crampo al polpaccio", 0],  
  ["Le avventure di due amiche", 0],  
  ["Un gruppo di amici", 0],  
  ["Scambiare un collega per un robot", 0],  
  ["Usare caramelle per attirare i bambini a una festa", 0],  
  ["Investire in un negozio di dolci", 0],  
  ["Peppa Pig che fa un picnic", 0],  
  ["Saltare dal divano per testare il volo", 0],  
  ["Essere bravi a cucinare come la nonna", 0],  
  ["I bravi del quartiere", 0],  
  ["Bottiglie di succo di frutta", 0],  
  ["Il mistero della torta scomparsa", 0],  
  ["Misurarsi con un righello", 0],  
  ["Fare un esperimento con un gattino", 0],  
  ["I compagni di scuola", 0],  
  ["Dare un biscotto un po' strano a un bambino", 0],  
  ["Fare l'elicottero con le braccia", 0],  
  ["Evocare un fantasma per una festa", 0],  
  ["Vestirsi da pirata a una festa in maschera", 0],  
  ["Mettere una boy band a capo di un paese", 0],  
  ["Un weekend avventuroso in montagna", 0],  
  ["Una nuotata in piscina", 0],  
  ["La teoria della pizza perfetta", 0],  
  ["Essere l'eroe di una storia", 0],  
  ["Usare i poteri di un cartone per risolvere problemi", 0],  
  ["Vivere con un peluche nel letto", 0],  
  ["Un personaggio dei cartoni a pochi passi", 0],  
  ["Quando c'era la nonna, la torta era più buona", 0],  
  ["La madonna di un paese lontano", 0],  
  ["Invadere la cucina per uno spuntino", 0],  
  ["L'impresa di pulire la cameretta", 0],  
  ["Una tempesta in un bicchier d'acqua", 0],  
  ["Il vulcano che erutta in un esperimento", 0],  
  ["L'amore tra due gatti", 0],  
  ["Un paese dal nome buffo", 0],  
  ["Una gita in bicicletta", 0],  
  ["Essere innocente come un bambino", 0],  
  ["Jack lo spaccalegna", 0],  
  ["Un punteggio da record", 0],  
  ["Trovare un oggetto strano a casa di un amico", 0],  
  ["Risparmiare per comprare un gelato", 0],  
  ["Sussurrare una barzelletta in bagno", 0],  
  ["Occuparsi degli animali del quartiere", 0],  
  ["Le suffragette dei diritti dei bambini", 0],  
  ["Dare un nome buffo a un peluche", 0],  
  ["Il cast di un cartone in un video divertente", 0],  
  ["Tagliarsi le unghie con le forbici", 0],  
  ["Una battaglia con i cuscini", 0],  
  ["Mettere un adesivo su un libro", 0],  
  ["Dare da mangiare a un cavallo", 0],  
  ["Chiedere al prof un voto migliore", 0],  
  ["Un processo per chi ha mangiato l'ultimo biscotto", 0],  
  ["Esplodere di risate", 0],  
  ["Far ridere i bambini", 0],  
  ["Diventare detective per un giorno", 0],  
  ["I diritti dei giochi in cortile", 0],  
  ["La fiera del paese", 0],  
  ["Votare per il miglior gelato", 0],  
  ["Un nuovo protagonista in un film", 0],  
  ["Giocare a Risiko con i pupazzi", 0],  
  ["Fare un bagno caldo", 0],  
  ["La felicità di ascoltare la propria canzone preferita", 0],  
  ["Calcolare quanto ci vuole per finire i compiti", 0],  
  ["Una cena a lume di candela", 0],  
  ["Usare la panna al posto della crema", 0],  
  ["Chiedere a un bambino cosa vuole fare da grande", 0],  
  ["Le avventure di un personaggio dei cartoni", 0],  
  ["Liberare i giocattoli dalla scatola", 0],  
  ["Raggiungere l'uguaglianza condividendo i giochi", 0],  
  ["Ridere fino a non respirare", 0],  
  ["Mettere due dita negli occhi per fare le corna", 0],  
  ["Sciacquarsi le mani nella fontanella", 0],  
  ["Disegnare cuori sui quaderni", 0],  
  ["Un chilo di caramelle", 0],  
  ["Dei lecca-lecca alla frutta", 0],  
  ["Un braccialetto brillante", 0],  
  ["Tagliare la fetta di torta sbagliata", 0],  
  ["Chiara che organizza una festa", 0],  
  ["Dare un abbraccio a un amico", 0],  
  ["Bere una spremuta d'arancia", 0],  
  ["Ridere così tanto da far male la pancia", 0],  
  ["Inzuppare un biscotto nel tè", 0],  
  ["Togliersi le scarpe prima di entrare", 0],  
  ["Regalare un libro usato", 0],  
  ["Le avventure di un gruppo di amici", 0],  
  ["Fare una corsa sotto la pioggia", 0],  
  ["Portare la classe in gita al museo", 0],  
  ["Fingere di essere un supereroe", 0],  
  ["Disegnare fumetti", 0],  
  ["Soffiare sulle candeline", 0],  
  ["Usare un rotolo di carta per fare un megafono", 0],  
  ["Dichiarare una battaglia di palloncini", 0],  
  ["Risolvere il problema dei compiti copiandoli", 0],  
  ["I giochi preferiti da bambini", 0],  
  ["L'umidità dopo la pioggia", 0],  
  ["Scambiarsi figurine nel parco", 0],  
  ["Fare i compiti insieme", 0],  
  ["Lavarsi le mani con il sapone profumato", 0],  
  ["Arrivare in ritardo alla festa", 0],  
  ["Un peluche con un bottone speciale", 0],  
  ["Un elefante di peluche", 0],  
  ["Far cadere il sapone sotto la doccia", 0],  
  ["Soffiare una bolla di sapone", 0],  
  ["Fare un puzzle con tre pezzi", 0],  
  ["Usare la calcolatrice per fare 1+1", 0],  
  ["Bere una tisana dalla tazza preferita", 0],  
  ["Morire dalle risate", 0],  
  ["Tornare indietro nel tempo per rivivere un momento felice", 0],  
  ["Tornare indietro nel tempo per mangiare di nuovo la torta", 0],  
  ["Fare bolle di sapone giganti", 0],  
  ["Annusare un fiore", 0],  
  ["Usare lo zucchero a velo come neve finta", 0],  
  ["Fare tuffi nella piscinetta", 0],  
  ["Praticare yoga sul tappeto", 0],  
  ["Togliersi le scarpe per correre più veloce", 0],  
  ["Orietta Berti che canta", 0],  
  ["Un personaggio storico", 0],  
  ["Un presentatore tv", 0],  
  ["Un attore famoso", 0],  
  ["Una conduttrice tv", 0],  
  ["Un divulgatore scientifico", 0],  
  ["Inserire il tuo animale nel registro degli amici", 0],  
  ["Spiegare una teoria con una filastrocca", 0],  
  ["Un personaggio che fa acrobazie", 0],  
  ["Una ninna nanna cantata male", 0],  
  ["Uno spiedino di frutta", 0],  
  ["Mangiare una caramella troppo piccante", 0],  
  ["Prendere tre caramelle per restare svegli", 0],  
  ["Le attività del tempo libero", 0],  
  ["L'astinenza da dolci", 0],  
  ["Un presepe vivente", 0],  
  ["Usare lo zucchero al posto del sale per errore", 0],  
  ["Un ospedale giocattolo", 0],  
  ["Un drago dei cartoni animati", 0],  
  ["Sparare coriandoli", 0],  
  ["Urlare 'alla carica!'", 0],  
  ["Fare una torta con la mamma", 0],  
  ["Aprire un canale per bambini", 0],  
  ["Fare magie con le mani", 0],  
  ["Un personaggio che fa una smorfia buffa", 0],  
  ["Lavarsi i capelli con lo shampoo alla fragola", 0],  
  ["Shrek che balla", 0],  
  ["Chiudere la porta per giocare a nascondino", 0],  
  ["La fede nella magia", 0],  
  ["Clara la bambina dei cartoni", 0],  
  ["Un discorso motivazionale", 0],  
  ["Una battuta divertente", 0],  
  ["Usare un mantello per giocare a supereroi", 0],  
  ["Accorgersi di avere un talento nascosto", 0],  
  ["Attraversare la strada per prendere un gelato", 0],  
  ["Sgridare il figlio per aver mangiato troppi dolci", 0],  
  ["Presentarsi a una festa in pigiama", 0],  
  ["Organizzare una festa a tema", 0],  
  ["Far fallire un negozio di caramelle", 0],  
  ["Farsi un tatuaggio temporaneo", 0],  
  ["Infilare la mano in un barattolo di biscotti", 0],  
  ["Spaventare i bambini con una maschera", 0],  
  ["Proclamare il giorno del gelato", 0],  
  ["Avere un orgasmo gustativo con la torta", 0],  
  ["Un costume di carnevale", 0],  
  ["Un personaggio che fa una mossa buffa", 0],  
  ["Bere una bevanda strana per scommessa", 0],  
  ["Il mio disegno preferito", 0],  
  ["L'occhio del ciclone", 0],  
  ["Organizzare una corsa nei sacchi", 0],  
  ["Fare sogni d'oro", 0],  
  ["Farsi fare il solletico", 0],  
  ["Saetta McQueen in versione giocattolo", 0],  
  ["Un dio della mitologia", 0],  
  ["Usare un personaggio famoso in un gioco", 0],  
  ["Un animale fantastico", 0],  
  ["Utilizzare una pentola per fare rumore", 0],  
  ["L'odore della pioggia", 0],  
  ["I dossi sulla strada", 0],  
  ["Chiara che vince un premio", 0],  
  ["Un impero immaginario", 0],  
  ["Le avventure di Giulio Cesare", 0],  
  ["Il nonno che racconta storie", 0],  
  ["Un raffreddore forte", 0],  
  ["Accendere il camino", 0],  
  ["Diventare un supereroe per un giorno", 0],  
  ["Costruire due torri con i Lego", 0],  
  ["Fare una torta con la nonna", 0],  
  ["Un trono di cuscini", 0],  
  ["Perry l'ornitorinco in missione", 0],  
  ["Scoprire di avere un gemello segreto", 0],  
  ["Scoprire che la tua migliore amica ha una sorella gemella", 0],  
  ["Lo sciopero dei compiti", 0],  
  ["Rifarsi il letto in modo perfetto", 0],  
  ["Tua madre che ti sgrida", 0],  
  ["Biancaneve e i sette nani", 0],  
  ["Armando il cagnolino", 0],  
  ["Dormire in un letto a castello", 0],  
  ["Freddy il peluche", 0],  
  ["Kermit la rana che canta", 0],  
  ["Il bastone da passeggio del nonno", 0],  
  ["Un'eruzione cutanea da allergia", 0],  
  ["Svenire per la troppa emozione", 0],  
  ["Una sega a dondolo", 0],  
  ["Lucia la pastorella", 0],  
  ["Torquato Tasso il poeta", 0],  
  ["Cantare a squarciagola sotto la doccia", 0],  
  ["Soffiarsi il naso rumorosamente", 0],  
  ["Gumball che fa una smorfia", 0],  
  ["Giocare a palla in giardino", 0],  
  ["Andare a fare la spesa", 0],  
  ["Mettere in punizione il peluche", 0],  
  ["Il dissing tra due personaggi dei cartoni", 0],  
  ["Tatuarsi un cuore sulla guancia", 0],  
  ["Un dio dei cartoni animati", 0],  
  ["Riprendere un fiume in piena", 0],  
  ["Il trio di amici inseparabili", 0],  
  ["Raccontare una barzelletta al club del libro", 0],  
]
const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890"
const points = 1

class RoomPool
{
    constructor()
    {
        this.rooms = []
    }

    Create(adminName,adminid,img,safe)
    {
        while(true)
        {
            const room = new Room(adminName,adminid,img,safe)
            if(this.Find(room.id) == -1)
            {
                this.rooms.push(room)
                return room
            }
        }
    }

    Destroy(roomid)
    {
        const i = this.Find(roomid)
        if(i != -1)
        {
            let temp = []
            for(let j = 0; j<this.rooms.length;j++)
            {
                if(j != i)
                {
                    temp.push(this.rooms[j])
                }
            }
            this.rooms = temp
        }
    }

    Find(roomid)
    {
        for(let i = 0; i<this.rooms.length;i++)
        {
            if(roomid == this.rooms[i].id)
            {
                return i
            }
        }
        return -1
    }

    FindRoom(roomid)
    {
        for(let i = 0; i<this.rooms.length;i++)
        {
            if(roomid == this.rooms[i].id)
            {
                return this.rooms[i]
            }
        }
        return null
    }

    FindRoomByUser(socketId) 
    {
      for (let i = 0; i<this.rooms.length;i++)
      {
          const user = this.rooms[i].FindUser(socketId)
          if (user) 
          {
              return this.rooms[i]
          } 
      }
      return null
    }

    FindRoomBySocket(socketId) 
    {
      for (let i = 0; i<this.rooms.length;i++)
      {
          const user = this.rooms[i].FindSocket(socketId)
          if (user) 
          {
              return this.rooms[i]
          }
      }
      return null
    }
}

class Room
{
    constructor(adminName,socketid,img,safe) 
    {
        this.id = this.RandomId(6)
        this.admin = new Admin(adminName,socketid,img)
        let temp = []
        if(!safe)
        {
            for(let i = 0; i<QuestionsArr.length;i++)
            {
              temp[i] = new Card(QuestionsArr[i][0],i,QuestionsArr[i][1])
            }
        }
        else
        {
            for(let i = 0; i<QuestionsArr.length;i++)
            {
              temp[i] = new Card(QuestionsArrSafe[i][0],i,QuestionsArrSafe[i][1])
            }
        }
        this.Questions = new Deck(temp)
        temp = []
        if(!safe)
        {
            for(let i = 0; i<AnswerArr.length;i++)
            {
              temp[i] = new Card(AnswerArr[i][0],i,AnswerArr[i][1])
            }
        }
        else
        {
            for(let i = 0; i<AnswerArr.length;i++)
            {
              temp[i] = new Card(AnswerArrSafe[i][0],i,AnswerArrSafe[i][1])
            }
        }
        this.Answers = new Deck(temp)
        this.Questions.Shuffle()
        this.Answers.Shuffle()
        this.admin.cards.Insert(this.Answers.Pick(11))
        this.users = [this.admin]
        this.RoundNumber = 1;
        this.Asker = this.admin
        this.LastAsker = this.admin
        this.Bin = new Deck()
        this.CurrentRound = {
            count: 0,
            question: null,
            answers: [],
            isRound: false,
        }
    }

    Add(name,socketid,pfp)
    {
        if(this.CurrentRound.isRound)
        {
            return null
        }
        while(true)
        {
            const user = new Guest(name,socketid,pfp)
            if(this.Find(user.unicid) == -1)
            {
              user.cards.Insert(this.Answers.Pick(11))
              this.users.push(user)
              return user
            }
        }
    }

    StartRound()
    {
        if(this.users.length > 2)
        {
          this.RoundNumber++
          this.CurrentRound.isRound = true
          const question = this.Questions.Pick(1)
          if(!question)
          {
            return null
          }
          this.CurrentRound.question = question[0]
          return true
        }
        else
        {
          return false
        }
    }

    GetAnswers()
    {
        if(this.CurrentRound.count == this.users.length-1 && this.CurrentRound.isRound)
        {
            return this.CurrentRound.answers
        }
        else 
        {
            return null
        }
    }

    EndRound(idunic)
    {
        if(this.CurrentRound.isRound)
        {
          const user = this.FindUser(idunic)
          if(!user)
          {
            return null
          }
          user.point += points
          this.Asker.IsAsking = false
          this.LastAsker = this.Asker
          user.IsAsking = true
          this.Asker = user
          const card = this.CurrentRound.answers[this.CurrentRound.answers.findIndex(ele => ele[0].unicid == idunic)][1]
          this.CurrentRound = {
              count: 0,
              question: null,
              answers: [],
              isRound: false,
          }
          return card
        }
        return null
    }

    ResultGame()
    {
        let max = 0
        this.users.forEach(element => {
          if(element.point > max)
          {
            max = element.point
          }
        })
        let resul = []
        for(let i = 0; i<this.users.length;i++)
        {
          if(this.users[i].point == max)
          {
            resul.push(this.users[i])
          }
        }
        return resul
    }

    ReceiveAnswer(idunic,indexcards)
    {
        const use = this.FindUser(idunic)
        if(!use || this.CurrentRound.answers.find(ele => ele[0].unicid == idunic))
        {
            return null
        }
        const card = use.cards.PickCard(indexcards)
        let y = this.Answers.Pick(indexcards.length)
        if(!y)
        {
            this.Answers.Insert(this.Bin.PickAll())
            this.Answers.Shuffle()
            y = this.Answers.Pick(indexcards)
        }
        if(!y)
        {
            return null
        }
        use.cards.Insert(y)
        this.Bin.Insert(card)
        this.CurrentRound.answers.push([use,card])
        this.CurrentRound.count++
    }

    RandomId(len)
    {
        let temp = ""
        let prev = ""
        for(let i = 0; i<len;i++)
        {
            let letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            while(letter == prev)
            {
                letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            }
            temp += letter
            prev = letter
        }
        return temp
    }

    Find(userid)
    {
        for(let i = 0; i<this.users.length;i++)
        {
            if(userid == this.users[i].unicid)
            {
                return i
            }
        }
        return -1
    }

    FindUser(idunic) 
    {
        for(let i = 0; i < this.users.length; i++) 
        {
            if(idunic == this.users[i].unicid) 
            {
                return this.users[i]
            }
        }
        return null
    }

    FindSocket(idunic) 
    {
        for(let i = 0; i < this.users.length; i++) 
        {
            if(idunic == this.users[i].socketid) 
            {
                return this.users[i]
            }
        }
        return null
    }

    DestroyUser(userid)
    {
        const i = this.Find(userid)
        if(i != -1)
        {
            let temp = []
            for(let j = 0; j<this.users.length;j++)
            {
                if(j != i)
                {
                    temp.push(this.users[j])
                }
            }
            this.users = temp
        }
        if(this.CurrentRound.isRound)
        {
            const l = this.CurrentRound.answers.findIndex(ele => ele[0].unicid == userid)
            if(l != -1)
            {
                let temp = []
                for(let j = 0; j<this.CurrentRound.answers.length;j++)
                {
                    if(j != l)
                    {
                        temp.push(this.CurrentRound.answers[j])
                    }
                }
                this.CurrentRound.answers = temp
                this.CurrentRound.count--
            }
        }
    }

    infoJSON()
    {
        return {
            id : this.id,
            users : this.users.map(u => u.toJSON())
        }
    }
}

module.exports = { Room, RoomPool, QuestionsArr, AnswerArr };