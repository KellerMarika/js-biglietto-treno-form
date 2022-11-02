
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

const paperFolder_El = document.getElementById("post-folder");

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
let discount50

/* quando clicco il bottone get discount */
btnGetDiscount.addEventListener("click", function () {

    console.log(`${discount_El}${discount_El.className}`);//controllo classi disponibili da discount_El
    discount_El.classList.remove("opacity-0");//rendo visobile 
    btnGetDiscount.classList.add("opacity-0");//rendo invisibile
});

/* FUNZIONE ADD DISCOUNT ***********/
/* creo una variabile di sconto 50% sul totale. Da applicare solo se nel prompt aperto con buttonadddiscount inseriamo il testo di discount_El */

//attraverso la seguente funzione modifico le classi di questo elemento. 
//sucessivamente, potrò recuperare il dato di questa funzione ed utilizzarlo in un'altra attraverso l'indagine che farò sulle classi modificate in precedenza.
const discount50Marker = document.getElementById("discount-50-marker");
console.log(discount50Marker, discount50Marker.classList);

/* quando clicco il bottone add discount */
btnAddDiscount.addEventListener("click", function () {
    /* viene lanciato un prompt */
    let discount50 = prompt("inserisci qui il tuo codice:");

    console.log(` discount50 = ${discount50}  
    discount_El-innerHTML = ${discount_El.innerHTML}`);//controllo valore
    //SE il dato inserito nel prompt dall'utente equivale al contenuto di discount_el


    /* devo mettere nella funzione di stampa tiket  che se discount50=true allora devo fare tiket-price/2 */

    /* ESCAMOTAGE!
    non so come estrarre il dato dalla funzione ma con essa posso modificare l'HTML
    lascio un segno nell'html (aggiungo un'icona con classe d-none */

    /*  const discount50Marker = document.getElementById("discount-50-marker");
     console.log(discount50Marker, discount50Marker.classList); */




    if (discount50 === discount_El.innerHTML) {
        //lancio un alert di sconto 50 all'utente
        alert("YOU GAIN 50% DISCOUNT!");

        discount50 = true;
        console.log(discount50);
        //aggiungo la piuma marker-discount
        discount50Marker.classList.toggle("d-none", false);

    } else {
        //altrimenti lo insulto
        alert("muggle, get out of here!");

        discount50 = false;
        console.log(discount50);
        //aggiungo la piuma marker-discount
        discount50Marker.classList.toggle("d-none", true);
    }
});

console.log(discount50);//controllo ma viene eseguito prima della funzione ovviamente, la sintassi va cambiata

/**** AGE COUNTER ***************************************************/

/* Avrei probabilmente dovuto usare un array (querySelectorAll?) ma poi non riesco a capire come selezionare gli elementi[?] e indagarne le classi per selezionarli ulteriormente. */

/* intanto facciamolo nel piccolo */
/****** ADULT **************************/

const adultMinus = document.querySelector(".btn-minus.adult");//MENO
const adultPlus = document.querySelector(".btn-plus.adult");//PIU'
const adultCounter_El = document.querySelector(".counter.adult")//counter printer paper */
let adultCounter = 0;  //counter valore */

console.log(`${adultMinus} 
${adultPlus}
${adultCounter} 
${adultCounter_El}`);


/* FUNZIONE MINUS */
//quando clicco sottraggo "1" e lo stampo in contantore_El

adultMinus.addEventListener("click", function () {
    adultCounter -= 1
    console.log(adultCounter)

    /* non scende sotto 0 */
    if (adultCounter < 0) {
        adultCounter = 0
    }

    adultCounter_El.innerHTML = adultCounter
});


/* quando clicco aggiungo "1"  */
adultPlus.addEventListener("click", function () {

    adultCounter += 1
    console.log(adultCounter)
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
//quando clicco sottraggo "1" e lo stampo in contantore_El
studentMinus.addEventListener("click", function () {

    studentCounter -= 1

    /* non scende sotto 0 */
    if (studentCounter < 0) {
        studentCounter = 0
    }
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
//quando clicco sottraggo "1" e lo stampo in contantore_El
ancientMinus.addEventListener("click", function () {

    ancientCounter -= 1

    /* non scende sotto 0 */
    if (ancientCounter < 0) {
        ancientCounter = 0
    }
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

        // tiket user id printed
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

    /*** PREZZO ************************/
    /* calcolo prezzo base €/km */
    const price = (userTravelWidth * .21);
    console.log(price);

    /* clacolo prezzo per fasce d'età 
    studente : sconto 20% ; 
    anziano: sconto 40%   
    calc: x:price=%:100  
    invece di sottrarre la percentuale ottenuta all'intero, moltiplico direttamente per la percentuale complementare allo sconto.*/
    //    il prezzo x un adulto è uguale a price * numero adulti
    let adultPriceList = price * adultCounter
    console.log(`${adultPriceList}`);


    /* stampo sul biglietto */
    const tiketAdultOffer_El = document.getElementById("tiket-adult-offer");
    console.log(tiketAdultOffer_El);
    tiketAdultOffer_El.innerHTML = `Adult x ${adultCounter}`

    /*   tiketAdultOffer_El.innerHTML=`adulti x ${adultCounter}` */



    //    il prezzo x uno studente è uguale all'80% di price (-20%)* numero studenti
    let studentPriceList = (price * .8) * studentCounter
    console.log(`${studentPriceList}`);

    /* stampo sul biglietto */
    const tiketStudentOffer_El = document.getElementById("tiket-student-offer");
    //console.log(tiketstudentOffer_El)
    tiketStudentOffer_El.innerHTML = `student x ${studentCounter}`


    //    il prezzo x un anziano è uguale al 60% di price (-20%)* numero anziani
    let ancientPriceList = (price * .6) * ancientCounter
    console.log(`${ancientPriceList}`);

    /* stampo sul biglietto */
    const tiketAncientOffer_El = document.getElementById("tiket-ancient-offer");
    //console.log(tiketancientOffer_El)
    tiketAncientOffer_El.innerHTML = `ancient x ${ancientCounter}`

    let userPrice = `${(adultPriceList + studentPriceList + ancientPriceList).toFixed(2)} Gold Galleons`;
    console.log(userPrice);//controllo somma
    //print on tiket
    console.log(discount50Marker.classList);

    /* SE IL MARKER NON HA LA CLASSE D-NONE (visibile) ALLORA APPLICA LO SCONTO 50%!*/
    if (!discount50Marker.classList.contains("d-none")) {
        console.log("DEVE APPLICARE LO SCONTO 50%!");

      userPrice =`${((adultPriceList + studentPriceList + ancientPriceList)/2).toFixed(2)} Gold Galleons`;
      console.log(userPrice);
    };

    /* stampo il prezzo */
    const tiketUserPrice_El = document.getElementById("tiket-user-price");
    tiketUserPrice_El.innerHTML = userPrice

    // tiket  carriage
    const tiketUserSpot_El = document.getElementById("tiket-user-spot");
    tiketUserSpot_El.innerHTML = Math.floor(Math.random() * 61);//n intero max 60

    // tiket  CP code 
    const tiketUserCp_El = document.getElementById("tiket-user-CP");
    tiketUserCp_El.innerHTML = Math.floor(Math.random() * 100000); //n intero max 99999


    /****** TIKET USER FAMILIAR ******************************/
    const userFamiliar = userFamiliar_El.value;
    console.log(userFamiliar);


    //add-icon
    const familiarAdd = document.getElementById("add-icon");
    //owl-icon
    const familiarOwl = document.getElementById("owl-icon");
    //toad-icon
    const familiarToad = document.getElementById("toad-icon");
    //cat-icon
    const familiarCat = document.getElementById("cat-icon");
    //ferret-icon
    const familiarFerret = document.getElementById("ferret-icon");

    /* cambia icona accanto al nome a seconda dell'animale scelto in select */

    if (userFamiliar === "owl") {
        familiarOwl.classList.toggle('d-none');
        familiarAdd.classList.toggle('d-none');

    }
    if (userFamiliar === "toad") {
        familiarToad.classList.toggle('d-none');
        familiarAdd.classList.toggle('d-none');
    }
    if (userFamiliar === "cat") {
        familiarCat.classList.toggle('d-none');
        familiarAdd.classList.toggle('d-none');
    }
    if (userFamiliar === "ferret") {
        familiarFerret.classList.toggle('d-none');
        familiarAdd.classList.toggle('d-none');
    }

    /* TRAIN tiket */
    //non deve esserci mai la classe d-none

    trainTiket_El.classList.toggle("d-none", false);
    paperFolder_El.classList.toggle("d-none", false);
    bookingForm_El.classList.toggle("d-none", true);

});
