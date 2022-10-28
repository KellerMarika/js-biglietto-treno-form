/* QUALI VARIABILI MI SERVONO */

/**** NOME UTENTE *********************************************************/
let userId = document.getElementById("user-id");
console.log(`userId = ${userId} value = ${userId.value}`);


/**** USER KM *********************************************************/
let userTravelWidth = document.getElementById("user-travel-width");
console.log(`userTravelWidth = ${userTravelWidth} value = ${userTravelWidth.value}`);


/**** USER AGE *********************************************************/
let userAge = document.getElementById("user-age");
console.log(`userAge = ${userAge} value = ${userAge.value}`);

/**** BOTTONI *********************************************************/
const btnTiketPrinter = document.getElementById("btn-tiket-printer");

const btnCancel = document.getElementById("cancel");


/* INIZIO FUNZIONE */
btnTiketPrinter.addEventListener("click", function () {

    console.log(`userId = ${userId} value = ${userId.value}`);//controllo valore
    //modifico il valore di userId dentro al buttonClik
    userId = userId.value;
    console.log(`userId = ${userId}`);


    //modifico il valore di userTravelWidth dentro al buttonClik
    console.log(`userTravelWidth = ${userTravelWidth} value = ${userTravelWidth.value}`);
    userTravelWidth = userTravelWidth.value;
    console.log(`userTravelWidth = ${userTravelWidth}`);

    //modifico il valore di userAge dentro al buttonClik
    console.log(`userAge = ${userAge} value = ${userAge.value}`);
    userAge = userAge.value;
    console.log(`userAge = ${userAge}`);

    /**** HTML insert value + PRINTER *************************************/

    //creo le variabili-etichetta all'interno della funzione e poi le stampo.
    //esistono solo nell'arco di tempo in cui la funzione viene eseguita. 

    // user id 
    const tiketUserId = document.getElementById("tiket-user-id");
    tiketUserId.innerHTML = (`${userId}`);

    // carriage
    const tiketUserSpot = document.getElementById("tiket-user-spot");
    tiketUserSpot.innerHTML = Math.floor(Math.random() * 11);//n intero max 10

    // CP code 
    const tiketUserCp = document.getElementById("tiket-user-CP");
    tiketUserCp.innerHTML = Math.floor(Math.random() * 100000); //n intero max 99999

    /* deve cambiare anche anche la classe di tiket rendendolo visibile _______non ora */
});
















/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/
/**** *********************************************************/