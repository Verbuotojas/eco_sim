// patikrinama ar yra skurtas vartotojas 
// jeigu vartotojas nera sukurtas jis nukreipiamas sukurti vartotoja
if (localStorage.getItem('account') === null && location.pathname == "/index.html") {

    location.replace("account.html");
}


let numberArray = [];


console.log(numberArray);

let quantity = document.getElementById('quantity');

//statistika generavimas vertes, atvaizdavimas
setInterval(function () {

    // sukgeneruojama nauja kaina
    let newNumberEco = Math.floor((Math.random() * 100) + 1);
    console.log(newNumberEco);


    // saugoma tik 12 menesiu kainos
    if (numberArray.length >= 12) {

        numberArray.pop();
        numberArray.unshift(newNumberEco);
        console.log(numberArray);

    } else {
        numberArray.unshift(newNumberEco);
        console.log(numberArray);
    }


    // sukuriama lentele atvazduoti duomenims
    chartView();

    function chartView() {

        var ctx = document.getElementById('ecoTable').getContext('2d');
        var ecoTable = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [{
                    label: 'Price',
                    // idedamos kainos is sugeneruojamu verciu
                    data: [
                        numberArray[11], numberArray[10],
                        numberArray[9], numberArray[8],
                        numberArray[7], numberArray[6],
                        numberArray[5], numberArray[4],
                        numberArray[3], numberArray[2],
                        numberArray[1], numberArray[0]],
                    fill: false,
                    backgroundColor: [
                        '#4DC3FF'
                    ],
                    borderColor: [
                        '#4DC3FF'
                    ],
                    borderWidth: 2
                }]
            },

            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                animation: {
                    duration: 0
                }
            }
        });
    }
    //laikas kas kiek atsinaujina duomenys
}, 2000);

let buttonBuy = document.getElementById('button-buy');
let buttonSell = document.getElementById('button-sell');


//pinigai puslapio virsuje ir vieta saugykloje
let cashView = document.getElementById('cashView');
let storeView = document.getElementById('storeView');

let myAccountDeserialized = JSON.parse(localStorage.getItem('account'));
console.log(myAccountDeserialized);


console.log(localStorage.getItem('cash'));

cashView.textContent = myAccountDeserialized.cash + ' $';
storeView.textContent = myAccountDeserialized.apple + '/' + myAccountDeserialized.storehouse;





//kiekis prekiu
document.getElementsByName("quantity")[0].addEventListener('change', doThing);

let numberOfThings = 1;
function doThing() {

    numberOfThings = JSON.parse(this.value);
    console.log(numberOfThings);
}



//perkamas produktas
buttonBuy.onclick = function () {

    if (myAccountDeserialized.cash >= numberArray[0] * numberOfThings && 
        myAccountDeserialized.storehouse >= myAccountDeserialized.apple + numberOfThings) {

        myAccountDeserialized.cash -= (numberArray[0] * numberOfThings);

        myAccountDeserialized.apple += JSON.parse(numberOfThings);

        let myAccountSerialized = JSON.stringify(myAccountDeserialized);
        localStorage.setItem('account', myAccountSerialized);
    }

    cashView.textContent = myAccountDeserialized.cash + ' $';
    storeView.textContent = myAccountDeserialized.apple + '/' + myAccountDeserialized.storehouse;
};

//parduodami produktai
buttonSell.onclick = function () {

    if (myAccountDeserialized.apple - numberOfThings >= 0) {

        myAccountDeserialized.cash += numberArray[0] * numberOfThings;
        myAccountDeserialized.apple -= numberOfThings;

    }
    cashView.textContent = myAccountDeserialized.cash + ' $';
    storeView.textContent = myAccountDeserialized.apple + '/' + myAccountDeserialized.storehouse;
};


// pasilieka virsuje headeris
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

});
