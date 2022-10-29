/* QUALI VARIABILI MI SERVONO */

/* dichiaro le funzioni come globali ma ne assegno il valore nella funzione (scope) */

let userId; //   NOME UTENTE 
let userTravelWidth; //  USER KM 
let userAge;//  USER AGE

/**** BOTTONI ***************/
//bottone stampa biglietto
const btnTiketPrinter = document.getElementById("btn-tiket-printer");
//bottone annulla
const btnCancel = document.getElementById("cancel");

/* INIZIO FUNZIONE ****************************************************/
//evento:click
btnTiketPrinter.addEventListener("click", function () {
    
    /**** NOME UTENTE  *******************/
    // al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userId
    userId = document.getElementById("user-id").value;
    console.log(`userId = ${userId} typeof uI ${typeof userId} parseint uI${parseInt(userId)};`);//controllo valore

    //CONTROLLI USERID::

    // 1) il parseint di una stringa alfanumerica isNaN = true.
    // 2)"" isNaN 

    if (isNaN(parseInt(userId))) {

        console.log(`${parseInt(userId)} ${typeof userId}`);

        // tiket user id 
        const tiketUserId = document.getElementById("tiket-user-id");
        tiketUserId.innerHTML = (`${userId}`);

    } else {
        console.log(`${parseInt(userId)} ${typeof userId}`);
        alert("please, enter a correct value");
    }

    /*** USER KM ************************/
    //  al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userTravelWidth
    userTravelWidth = document.getElementById("user-travel-width").value;
    console.log(`userTravelWidth = ${userTravelWidth} ${typeof userTravelWidth}`);

    //CONTROLLI SUI KM::

    // il valore lo estraggo da un input type = number, perciò non credo sia necessario il passaggio if(isNaN)
    // (e "esponenziale" eccezzione)
    if (isNaN(userTravelWidth)) {
        alert("please, enter a correct value");
    } else if (userTravelWidth < 1) {
        alert("this trip is too short! please, try again");
        //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
    } else {
        userTravelWidth = parseInt(userTravelWidth);
        console.log("n km= ", userTravelWidth, typeof userTravelWidth);
    }

//USER AGE al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userAge
userAge = document.getElementById("user-age").value;
console.log(`userAge = ${userAge}`);

if (userAge=="a"){
    console.log(`userAge value = ${userAge}  MINORENNE`);
} else if(userAge=="c"){
    console.log(`userAge value = ${userAge}  OVER65`);
}else{
    console.log(`userAge value = ${userAge}  MAGGIORENNE`);
}

    //PREZZO...................................................




    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::





    /**** HTML insert value + PRINTER *************************************/
    //creo le variabili-etichetta all'interno della funzione e poi le stampo.
    //esistono solo nell'arco di tempo in cui la funzione viene eseguita. 



    // tiket  carriage
    const tiketUserSpot = document.getElementById("tiket-user-spot");
    tiketUserSpot.innerHTML = Math.floor(Math.random() * 11);//n intero max 10

    // tiket  CP code 
    const tiketUserCp = document.getElementById("tiket-user-CP");
    tiketUserCp.innerHTML = Math.floor(Math.random() * 100000); //n intero max 99999

    /* deve cambiare anche anche la classe di tiket rendendolo visibile _______non ora */
});










/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/