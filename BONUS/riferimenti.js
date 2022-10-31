/* QUALI VARIABILI MI SERVONO */

/* dichiaro le funzioni  globali ma ne cambio il valore nella funzione del btntiketprinter (scope) */

/* const userId_El = document.getElementById("user-id"); */ //  Elemento  (input text) user Id 
/* console.log(`userId = ${userId} typeof ${typeof userId} parseint ${parseInt(userId)};`);//controllo valore */

/* const userTravelWidth_El = document.getElementById("user-travel-width");  */// Elemento ( input number)  user Km

/* const userAge_El = document.getElementById("user-age"); */// Elemento (select) user Age


/* 
const trainTiket_El = document.getElementById("train-tiket"); */ //Elemento biglietto

/**** BOTTONI ***************/
/* const btnTiketPrinter = document.getElementById("btn-tiket-printer"); */// Bottone stampa biglietto
 //Bottone annulla

 

/* INIZIO FUNZIONE  CANCEL****************************************************/
//la scrivo prima, così il valore dei userId, userTravelWidth, userAge non sono ancora modificati nella funzione successiva
btnCancel.addEventListener("click", function () {

    /* TRAIN tiket */
    //deve sempre esserci mai la classe d-none
    trainTiket_El.classList.toggle("d-none", true);


    /* reset UserId_Element **********/

    console.log("userId_El", userId_El, userId_El.value)
    userId_El.value = "";

    /* reset UserTravelWidth_Element *************************/
    console.log("userTravelWidth_El", userTravelWidth_El, userTravelWidth_El.value)
    userTravelWidth_El.value = "";

    /* reset UserAge_Element **********/
    console.log("userAge_El", userAge_El, userAge_El.value)
    userAge_El.value = "disc0"
});





/* INIZIO FUNZIONE PRINTER TIKET ****************************************************/
//evento:click
btnTiketPrinter.addEventListener("click", function () {

    /**** NOME UTENTE  *******************/
    // al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userId
    const userId = userId_El.value//valore user Id
    console.log(`userId = ${userId} typeof ${typeof userId} parseint ${parseInt(userId)};`);//controllo valore

    //CONTROLLI USERID::

    // 1) il parseint di una stringa alfanumerica isNaN = true.
    // 2)"" isNaN 

    if (isNaN(parseInt(userId))) {

        // tiket user id 
        const tiketUserId_El = document.getElementById("tiket-user-id");
        tiketUserId_El.innerHTML = (`${userId}`);

    } else {
        alert("please, enter a correct value");
    }

    /*** USER KM ************************/
    //  al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userTravelWidth

    const userTravelWidth = parseInt(userTravelWidth_El.value) //valore user Km input number 
    console.log(`userTravelWidth = ${userTravelWidth} ${typeof userTravelWidth}`);//controllo valore

    //CONTROLLI SUI KM::

    // il valore lo estraggo da un input type = number, perciò non credo sia necessario il passaggio if(isNaN)
    // (e "esponenziale" eccezzione)
    if (isNaN(userTravelWidth)) {
        alert("please, enter a correct value");
    } else if (userTravelWidth < 1) {
        alert("this trip is too short! please, try again");
        //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
    }

    /*** USER AGE  ************************/
    // al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userAge
    const userAge = userAge_El.value;
    console.log(`userAge = ${userAge}`);//controllo valore


    /*** PREZZO ************************/
    /* calcolo prezzo base €/km */
    const price = (userTravelWidth * .21);
    console.log(price);

    /* dichiaro priceList ma assegno un valore diverso a seconda della fascia d'età dentro le if/else */
    let priceList

    /* tiket  offer= vi stampo(innerHTML) un valore differente in base alla fascia d'età dentro le if/else */
    const tiketUserOffer_El = document.getElementById("tiket-user-offer");

    /* condizioni  
    se utente minorenne : sconto 20% ; se utente over65: sconto 40%   
    calc: x:price=%:100  
    invece di sottrarre la percentuale ottenuta all'intero, moltiplico direttamente per la percentuale complementare allo sconto.*/

    //minorenni
    if (userAge == "disc20-100") {

        priceList = (price * .8);
        tiketUserOffer_El.innerHTML = "scono 20% Minorenni";
        //over65
    } else if (userAge == "disc40-100") {

        priceList = (price * .6);
        tiketUserOffer_El.innerHTML = "scono 40% Over65";
        //tutti gli altri
    } else {
        priceList = price;
        tiketUserOffer_El.innerHTML = "prezzo intero adulti";
    }


    //a tutti aggiungo l'euro e tolgo i decimali in eccesso
    //per fatrlo ho bisogno che la voariabile uscente abbia lo stesso nome per tutti gli if
    const userPrice = `${(priceList.toFixed(2))} €`;
    console.log(userPrice);


    const tiketUserPrice_El = document.getElementById("tiket-user-price");
    tiketUserPrice_El.innerHTML = `${(priceList.toFixed(2))} €`

    /**** HTML insert value + PRINTER *************************************/
    //creo le variabili-etichetta all'interno della funzione e poi le stampo.
    //esistono solo nell'arco di tempo in cui la funzione viene eseguita. 


    // tiket  carriage
    const tiketUserSpot_El = document.getElementById("tiket-user-spot");
    tiketUserSpot_El.innerHTML = Math.floor(Math.random() * 11);//n intero max 10

    // tiket  CP code 
    const tiketUserCp_El = document.getElementById("tiket-user-CP");
    tiketUserCp_El.innerHTML = Math.floor(Math.random() * 100000); //n intero max 99999


    /* TRAIN tiket */
    //non deve esserci mai la classe d-none
    trainTiket_El.classList.toggle("d-none", false);

});





