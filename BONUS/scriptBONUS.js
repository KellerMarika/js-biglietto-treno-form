
/* QUALI VARIABILI MI SERVONO */


/**** INPUT ***************/
/* dichiaro le funzioni  globali ma ne cambio il valore nella funzione del btntiketprinter (scope) */

const userId_El = document.getElementById("user-id"); //  Elemento  (input text) user Id 
/* console.log(`userId = ${userId} typeof ${typeof userId} parseint ${parseInt(userId)};`);//controllo valore */

const userTravelWidth_El = document.getElementById("user-travel-width"); // Elemento ( input number)  user Km

/* const userAge_El = document.getElementById("user-age");// Elemento (select) user Age */


/**** BOTTONI ***************/
const btnTiketPrinter = document.getElementById("btn-tiket-printer");// Bottone stampa biglietto

const btnCancel = document.getElementById("cancel"); //Bottone annulla

const btnGetDiscount = document.getElementById("btn-get-discount");//bottone rivela sconto

const btnAddDiscount = document.getElementById("btn-add-discount");//bottone inser sconto
console.log(btnAddDiscount);



/**** ELEMENTI SWITCH ****************/

const bookingForm_El = document.getElementById("booking-form");//elemento paper booking + jambo

const trainTiket_El = document.getElementById("train-tiket"); //Elemento biglietto

const discount_El = document.getElementById("leviosa-discount");//elemento a cui togllire visually-hidden al click di btnDiscount
/* console.log(`${discount_El.innerHTML}`) */



/*  struttura più e meno */
//riflessione: se faccio un query selector all e prendo tutti i btnminus, non avrò una corrispondenza univoca ma generalizzata su tutti i contatori di span.
//non voglio dare un id per richiamarli tutti
//potrei ridefinire le variabili di selezione nella funzione specificando il percorso di span e btn

/* let btnMinus_El = document.querySelectorAll("btn-minus");
console.log(btnMinus_El);

let btnPlus_El = document.querySelectorAll("btn-plus");
console.log(btnPlus_El);
 */
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
console.log(btnPlus, btnMinus);

let contatoreClik = 0;
console.log(contatoreClik);


/* quando clicco il bottone get discount */
btnGetDiscount.addEventListener("click", function () {

    console.log(`${discount_El}${discount_El.className}`);//controllo classi disponibili da discount_El
    discount_El.classList.remove("opacity-0");//rrendo visobile 
    btnGetDiscount.classList.add("opacity-0");
});


/* creo una variabile di sconto 50% sul totale da applicare se nel prompt aperto con button add discount inseriamo il testo di discount_El */


/* quando clicco il bottone add discount */
btnAddDiscount.addEventListener("click", function () {
    /* viene lanciato un prompt */
    const discount50 = prompt("inserisci qui il tuo codice:");

    console.log(` discount50 = ${discount50}  
    discount_El-innerHTML = ${discount_El.innerHTML}`);//controllo valore
    //SE il dato inserito nel prompt dall'utente equivale al contenuto di discount_el
    if (discount50 === discount_El.innerHTML) {
        //lancio un alert di sconto 50 all'utente
        alert("YOU GAIN 50% DISCOUNT!");

        /* E POI FACCIO UNO SCONTO SUL TOTALE _________________________ */
//________________________________________________ULTIMA OPERAZIONE DA FARE



    } else {
        //altrimenti lo insulto
        alert("muggle, get out of here!");
    }
})


/* quando clicco il bottone add-discount */






