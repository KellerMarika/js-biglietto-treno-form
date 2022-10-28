/* dichiaro variabili all'inizio*/

/*****VARIABILI TRATTA ************************************/

//km inseriti da utente
let userTravelWidth = prompt(`Please,
enter the number of kilometers you wish to travel`);
console.log("n km = ", userTravelWidth, typeof userTravelWidth);

/**** VARIABILI ETA'************************************/

//recupero data corrente:
const currentData = new Date; //______________________________
//____________________________potrei stamparla sul biglietto!!!!
console.log (currentData);

//estraggo solamente l'anno dalla data corrente
const currentYear = (new Date).getFullYear();
console.log(currentYear);


/**** VARIABILI PREZZO ************************************/
/* calcolo prezzo base €/km */
const price = (userTravelWidth * .21);
console.log(price);

/* dichiaro priceList ma assegno il valore dentro le if/else */
let priceList

//KM.............................................................

if (isNaN(userTravelWidth)) {
    alert("please, enter a correct value");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
    //se valore <1
} else if (userTravelWidth < 1) {
    alert("this trip is too short! please, try again");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
} else {
    userTravelWidth = parseInt(userTravelWidth);
    console.log("n km= ", userTravelWidth, typeof userTravelWidth);
}

//ANNO DI NACITA....................................................... 
//anno di nascita 
let userBirthYear = prompt(`Please,
enter your year of birth in extended form`);
console.log(`userBirthYear typeoff = ${typeof userBirthYear}`);

//ottengo l'età effettiva dell'utente sottraendo dall'anno corrente il dato inserito dall'utente
const userAge = currentYear - userBirthYear;
console.log(userAge);


if (isNaN(userBirthYear)) {
    alert("please, enter a correct value");
    /* 130 è l'età massima che immagino possa avere l'utente che si sta interfacciando al mio sito*/
} else if (userBirthYear < (currentYear - 150)) {
    alert(`incorrect value.
    sorry,
    you are too ancient to travel with us, find a carriage!`);
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt   
} else if (userBirthYear > currentYear) {
    alert(`incorrect value.
    we doubt you are comeing from the future, try again!`);
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt   
} else {
    userBirthYear = parseInt(userBirthYear);
    console.log(`userBirthYear con parseINt typeoff= ${typeof userBirthYear}`);
}

//PREZZO...................................................

//condizioni  
//se utente minorenne : sconto 20%
//calc: x:price=%:100  

if (userAge < 18) {
    //price - price * 20 /100
    priceList = (price - price * .2);
    console.log("priceList miniorenne =", priceList);

    //se utente over65 : sconto 40%  
} else if (userAge >= 65) {

    priceList = (price - price * .4);
    console.log("priceList over65 =", priceList);

    /* tutti coloro che non sono nè minorenni nè over 65 */
} else {

    priceList = price
    console.log("priceList 65>user>18=", priceList);
}

//a tutti aggiungo l'euro e tolgo i decimali in eccesso
//per fatrlo ho bisogno che la voariabile uscente abbia lo stesso nome per tutti gli if
22
const userPrice = `${(priceList.toFixed(2))} €`;
console.log(userPrice);
alert(`the final price for your trip is ${(priceList.toFixed(2))} €. Have a nice trip!`);