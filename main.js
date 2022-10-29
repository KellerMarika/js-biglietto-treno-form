/* QUALI VARIABILI MI SERVONO */

/* dichiaro le funzioni come globali ma ne assegno il valore nella funzione (scope) */

let userId; //   NOME UTENTE 
let userTravelWidth; //  USER KM 
let userAge;//  USER AGE

/**** BOTTONI *********************************************************/
//bottone stampa biglietto
const btnTiketPrinter = document.getElementById("btn-tiket-printer");
//bottone annulla
const btnCancel = document.getElementById("cancel");

/* INIZIO FUNZIONE */
//evento:click
btnTiketPrinter.addEventListener("click", function () {

    // NOME UTENTE  al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userId
    userId = document.getElementById("user-id").value;
    console.log(`userId = ${userId} typeof uI ${typeof userId} parseint uI${parseInt(userId)};`);//controllo valore
    /* controlli sul nome 
    se non è nan*/

    //anche il parseint di una stringa alfanumerica isNaN = true.____________________________devo escogitare qualcosa
    if (isNaN(parseInt(userId))) {

        console.log(`${parseInt(userId)} ${typeof userId}`);
        // user id 
        const tiketUserId = document.getElementById("tiket-user-id");
        tiketUserId.innerHTML = (`${userId}`);

    } else {
        console.log(`${parseInt(userId)} ${typeof userId}`);
        alert("please, enter a correct value");
    }
    // USER KM al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userTravelWidth
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



    //PREZZO...................................................




    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::





    /**** HTML insert value + PRINTER *************************************/
    //creo le variabili-etichetta all'interno della funzione e poi le stampo.
    //esistono solo nell'arco di tempo in cui la funzione viene eseguita. 



    // carriage
    const tiketUserSpot = document.getElementById("tiket-user-spot");
    tiketUserSpot.innerHTML = Math.floor(Math.random() * 11);//n intero max 10

    // CP code 
    const tiketUserCp = document.getElementById("tiket-user-CP");
    tiketUserCp.innerHTML = Math.floor(Math.random() * 100000); //n intero max 99999

    /* deve cambiare anche anche la classe di tiket rendendolo visibile _______non ora */
});

/* _________________________________________________________________________________________________ */

//USER AGE al btn-click raccolgo il valore dell'input e lo assegno come valore della variabile userAge
/* userAge = document.getElementById("user-age");
console.log(`userAge = ${userAge.value}`);

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
userAge.addEventListener("change", function () {
    console.log(`userAge = ${userAge}userAge.value = ${userAge.value}`);
    userAge = userAge.value;
    console.log(`userAge = ${userAge}`);
})
 */

/* IL PROBLEMA CHE MI AFFLIGGE: 

quando scelgo l'opzione della select, da console visualizzo l'input correttamente, ma quando tento di costruire una if (sia dentro alla funzione clikbottone, sia dentro alla funzione changeselect, mi imposta sempre come vera la prima condizione dell'if, e mi aggiorna di conseguenza anche l'html anche se un secondo prima mi dava selezionata un'altra pozione. MI SFUGGE QUALCOSA CHE FUNZIONA SIMILMENTE ALLO STUPIDO BUTTON DI PRIMA )



*/
/* _-_-____________________________________________________________________________________________ */









/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/