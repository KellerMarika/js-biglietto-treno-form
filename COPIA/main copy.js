
/**** VARIABILI ETA'************************************/

//recupero data corrente:
const currentData = new Date; //______________________________
//____________________________potrei stamparla sul biglietto!!!!
console.log(currentData);

//estraggo solamente l'anno dalla data corrente
const currentYear = (new Date).getFullYear();
console.log(currentYear);


/*****VARIABILI TRATTA ************************************/



/**** VARIABILI PREZZO ************************************/
/* calcolo prezzo base €/km */
const price = (userTravelWidth * .21);
/* console.log(price); */

/* dichiaro priceList ma assegno il valore dentro le if/else */
let priceList


/**** HTML insert value *************************************/

//Offer
const tiketUserOffer = document.getElementById("tiket-user-offer");
//carriage (assegnare valore random 2 cifre)
const tiketUserSpot = document.getElementById("tiket-user-spot");
//code CP (assegnare valore random 5 cifre)
const tiketUserCp = document.getElementById("tiket-user-CP");
//tiket price
const tiketUserPrice = document.getElementById("tiket-user-price");


/*** BOTTONI *************************************************/

const btnGenerateTiket = document.getElementById("generate-tiket");
console.log(`btnGenerateTiket ${btnGenerateTiket}`)

const btnCancel = document.getElementById("cancel");

/* questo bottone deve stampare e trasformare variabili */
btnGenerateTiket.addEventListener("click", function () {

    //nome passeggero
    const tiketUserId = document.getElementById("tiket-user-id");
     /* stampo nome utente sul biglietto */
    tiketUserId.innerHTML = (`${userId.value}`);

    console.log(`userTravelWidth ${userTravelWidth}`);
    userTravelWidth = (userTravelWidth.value);
    console.log(`userTravelWidth ${userTravelWidth}`);
})