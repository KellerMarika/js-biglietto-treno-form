
/* QUALI VARIABILI MI SERVONO */


/**** INPUT ***************/
/* dichiaro le funzioni  globali ma ne cambio il valore nella funzione del btntiketprinter (scope) */

const userId_El = document.getElementById("user-id"); //  Elemento  (input text) user Id 
/* console.log(`userId = ${userId} typeof ${typeof userId} parseint ${parseInt(userId)};`);//controllo valore */

const userTravelWidth_El = document.getElementById("user-travel-width"); // Elemento ( input number)  user Km

const userFamiliar_El = document.getElementById("user-familiar");// Elemento (select) user familiar */
console.log(userFamiliar_El);



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


/**** AGE COUNTER ***************************************************/

/* intanto facciamolo nel piccolo */
/****** ADULT **************************/

const adultMinus = document.querySelector(".btn-minus.adult");//MENO
const adultPlus = document.querySelector(".btn-plus.adult");//PIU'
const adultCounter_El = document.querySelector(".counter.adult")//counter */
let adultCounter = 0;  //counter valore */

console.log(`${adultMinus} 
${adultPlus}
${adultCounter} 
${adultCounter_El}`);


/* FUNZIONE MINUS */
adultMinus.addEventListener("click", function () {
    //quando clicco sottraggo "1" e lo stampo in contantore_El
    adultCounter -= 1
    adultCounter_El.innerHTML = adultCounter
});

/* quando clicco aggiungo "1"  */
adultPlus.addEventListener("click", function () {

    adultCounter += 1
    adultCounter_El.innerHTML = adultCounter
});

/**** STUDENT ********************************/

const studentMinus = document.querySelector(".btn-minus.student");//MENO
const studentPlus = document.querySelector(".btn-plus.student");//PIU'
const studentCounter_El = document.querySelector(".counter.student")//counter */
let studentCounter = 0;  //counter valore */

console.log(`${studentMinus} 
${studentPlus}
${studentCounter} 
${studentCounter_El}`);


/* FUNZIONE MINUS */
studentMinus.addEventListener("click", function () {
    //quando clicco sottraggo "1" e lo stampo in contantore_El
    studentCounter -= 1
    studentCounter_El.innerHTML = studentCounter
});

/* quando clicco aggiungo "1"  */
studentPlus.addEventListener("click", function () {

    studentCounter += 1
    studentCounter_El.innerHTML = studentCounter
});

/***** ANCIENT *************************/

const ancientMinus = document.querySelector(".btn-minus.ancient");//MENO
const ancientPlus = document.querySelector(".btn-plus.ancient");//PIU'
const ancientCounter_El = document.querySelector(".counter.ancient")//counter */
let ancientCounter = 0;  //counter valore */

console.log(`${ancientMinus} 
${ancientPlus}
${ancientCounter} 
${ancientCounter_El}`);


/* FUNZIONE MINUS */
ancientMinus.addEventListener("click", function () {
    //quando clicco sottraggo "1" e lo stampo in contantore_El
    ancientCounter -= 1
    ancientCounter_El.innerHTML = ancientCounter
});

/* quando clicco aggiungo "1"  */
ancientPlus.addEventListener("click", function () {

    ancientCounter += 1
    ancientCounter_El.innerHTML = ancientCounter
});


/* INIZIO FUNZIONE  CANCEL****************************************************/
//la scrivo prima, così il valore dei userId, userTravelWidth, userAge non sono ancora modificati nella funzione successiva
btnCancel.addEventListener("click", function () {

    /* TRAIN tiket */
    //deve sempre esserci mai la classe d-none
    trainTiket_El.classList.toggle("d-none", true);


    /* reset UserId_Element **********/

    console.log("userId_El", userId_El, userId_El.value);
    userId_El.value = "";

    /* reset UserTravelWidth_Element *************************/
    console.log("userTravelWidth_El", userTravelWidth_El, userTravelWidth_El.value);
    userTravelWidth_El.value = "";

    /* reset UserAge_Element **********/

    console.log("userFamiliar_El", userFamiliar_El, userFamiliar_El.value);
    userFamiliar_El.value = ""

    /* RESET AGE COUNTER */

    adultCounter = 0
    adultCounter_El.innerHTML = adultCounter
    studentCounter = 0
    studentCounter_El.innerHTML = studentCounter
    ancientCounter = 0
    ancientCounter_El.innerHTML = ancientCounter
});

