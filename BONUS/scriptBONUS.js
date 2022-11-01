
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
//console.log(btnAddDiscount);



/**** ELEMENTI SWITCH ****************/

const bookingForm_El = document.getElementById("booking-form");//elemento paper booking + jambo

const trainTiket_El = document.getElementById("train-tiket"); //Elemento biglietto

const discount_El = document.getElementById("leviosa-discount");//elemento a cui togllire visually-hidden al click di btnDiscount
/* console.log(`${discount_El.innerHTML}`) */



/**** SELECT OPTION **********************/
//Select Option Ancient 
const selectOptionAncient = document.querySelector(".select-option.ancient");
//console.log(selectOptionAncient.innerHTML);

//Select Option Student 
const selectOptionStudent = document.querySelector(".select-option.student");
//console.log(selectOptionStudent.innerHTML);


/**** SELECT DROPDOWN *****************************/
//bottone dropdown selectOptionAncient e selectOptionStudent 
const btnAgeDropdown = document.getElementById("btn-age-dropdown");
//console.log(btnAgeDropdown.value);//controllo valore

/* FUNZIONE DROPDOWN */

btnAgeDropdown.addEventListener("click", function () {
    // console.log(btnAgeDropdown.value);

    //tutte le volte che clicco la dropdownArrow deve ruotare
    const dropdownArrow = document.querySelector(".dropdown-arrow");
    console.log(dropdownArrow);

    /* scopriamo come funziona il query selector all (array ?) */
    const selectOptionDropdown = document.querySelectorAll(".select-option.dropdown");
    console.log(selectOptionDropdown);

    //effetto svanimento
    /* per ogni elemento di selectoptiondropdown nella class list
    se è presente la classe "drop-effect" toglila altrimenti mettila */
    selectOptionDropdown.forEach((el) => {
        el.classList.toggle('drop-effect');
    });

    // SE il valore del bottone è === other age group
    if (btnAgeDropdown.value === `other age groups`) {
        // riassegno il valore = hide
        btnAgeDropdown.value = " hide "
        //console.log(btnAgeDropdown.value);
        //e lo scrivo all'interno del bottone 
        btnAgeDropdown.innerHTML = btnAgeDropdown.value

        //rotazione verso l'alto della freccia
        dropdownArrow.style.transform = "rotate(180deg)"


        /* reset dopo averlo tolto in else (toggle funzionava male) */
        selectOptionDropdown.forEach((el) => {
            el.classList.add('transition');
        });

        //altrimenti 
    } else {
        // riassegno il valore = other age groups
        btnAgeDropdown.value = "other age groups"
        // console.log(btnAgeDropdown.value);
        //e lo scrivo all'interno del bottone 
        btnAgeDropdown.innerHTML = btnAgeDropdown.value

        //rotazione verso l'alto della freccia
        dropdownArrow.style.transform = "rotate(360deg)"

        /* fixa il problema della transizione inversa (toggle funzionava male) */
        selectOptionDropdown.forEach((el) => {
            el.classList.remove('transition');
        });
    }
});







/* FUNZIONE GET DISCOUNT ***********/
/* quando clicco il bottone get discount */
btnGetDiscount.addEventListener("click", function () {

    console.log(`${discount_El}${discount_El.className}`);//controllo classi disponibili da discount_El
    discount_El.classList.remove("opacity-0");//rendo visobile 
    btnGetDiscount.classList.add("opacity-0");//rendo invisibile
});



/* FUNZIONE ADD DISCOUNT ***********/
/* creo una variabile di sconto 50% sul totale. Da applicare solo se nel prompt aperto con buttonadddiscount inseriamo il testo di discount_El */


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
});





/*  struttura più e meno */
//riflessione: se faccio un query selector all e prendo tutti i btnminus, non avrò una corrispondenza univoca ma generalizzata su tutti i contatori di span.
//non voglio dare un id per richiamarli tutti
//potrei ridefinire le variabili di selezione nella funzione specificando il percorso di span e btn

/* let btnMinus_El = document.querySelectorAll("btn-minus");
console.log(btnMinus_El);

let btnPlus_El = document.querySelectorAll("btn-plus");
console.log(btnPlus_El);
 */
/* const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
console.log(btnPlus, btnMinus);

let contatoreClik = 0;
console.log(contatoreClik);



 */
