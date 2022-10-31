
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

/**** ELEMENTI SWITCH ****************/

const bookingForm_El = document.getElementById("booking-form")//elemento paper booking + jambo

const trainTiket_El = document.getElementById("train-tiket"); //Elemento biglietto


