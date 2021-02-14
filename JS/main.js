
if (localStorage.getItem('account') == null && location.pathname == "/index.html") {

    console.log('tuscia!~!!!!!!!!!!!!!!!!');
    console.log(location.pathname);

    location.replace("account.html");
}





let numberArray = [];


console.log(numberArray);

let quantity = document.getElementById('quantity');



//statistika generavimas vertes ir atvaizdavimas

setInterval(function () {

    let newNumberEco = Math.floor((Math.random() * 100) + 1);
    console.log(newNumberEco);


    if (numberArray.length >= 12) {


        numberArray.pop();
        numberArray.unshift(newNumberEco);


        // localStorage.setItem("data", numberArray);
        console.log(numberArray);

    } else {

        numberArray.unshift(newNumberEco);


        // localStorage.setItem("data", numberArray);
        console.log(numberArray);

    }




 

    chartView();

    function chartView() {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [{
                    label: 'Price',
                    data: [
    
                        numberArray[11], numberArray[10], numberArray[9], numberArray[8], numberArray[7], numberArray[6], numberArray[5], numberArray[4], numberArray[3], numberArray[2], numberArray[1], numberArray[0]],
                    fill: false,
                    backgroundColor: [

                        '#4DC3FF'
                        // 'rgba(255, 206, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [

                        '#4DC3FF'
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
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

}, 2000);

let buttonBuy = document.getElementById('button-buy');
let buttonSell = document.getElementById('button-sell');

//kuriant akounta pinigai

if (localStorage.getItem('cash') == null) {
    localStorage.setItem('cash', '500');
    localStorage.setItem('storehouse', 100);

} else {
    localStorage.setItem('cash', '2000');
}


//pinigai puslapio virsuje


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




//pirkimas obuoliai

buttonBuy.onclick = function () {

    if (myAccountDeserialized.cash >= numberArray[0] * numberOfThings
        && myAccountDeserialized.storehouse >= myAccountDeserialized.apple + numberOfThings) {

        myAccountDeserialized.cash -= (numberArray[0] * numberOfThings);
      
             myAccountDeserialized.apple += JSON.parse(numberOfThings);


        let myAccountSerialized = JSON.stringify(myAccountDeserialized);
        localStorage.setItem('account', myAccountSerialized);

        // localStorage.setItem('cash',
        //     JSON.parse(localStorage.getItem('cash')) - (numberArray[0] * numberOfThings)
        // )



        // if (localStorage.getItem('apple') == null) {

        //     localStorage.setItem('apple', JSON.stringify(numberOfThings));
        // } else {

        //     let nubmerApples = JSON.parse(localStorage.getItem('apple'));

        //     localStorage.setItem('apple', ((nubmerApples) + numberOfThings));

        // }

    }
    cashView.textContent = myAccountDeserialized.cash + ' $';
    storeView.textContent = myAccountDeserialized.apple + '/' + myAccountDeserialized.storehouse;
}

//pardavimai obuoliai
buttonSell.onclick = function () {

    if (myAccountDeserialized.apple - numberOfThings >= 0) {

        myAccountDeserialized.cash += numberArray[0] * numberOfThings; 
        myAccountDeserialized.apple -= numberOfThings; 


        // localStorage.setItem('cash',
        //     JSON.parse(localStorage.getItem('cash')) + (numberArray[0] * numberOfThings)
        // )


        // let nubmerApples = JSON.parse(localStorage.getItem('apple'));

        // localStorage.setItem('apple', ((nubmerApples) - numberOfThings));

    }
    cashView.textContent = myAccountDeserialized.cash + ' $';
storeView.textContent = myAccountDeserialized.apple + '/' + myAccountDeserialized.storehouse;
}


CSS.registerProperty({
    name: '--p',
    syntax: '<integer>',
    initialValue: 0,
    inherits: true
});





window.addEventListener("scroll", function(){
                        var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0 );
                        
                        })





