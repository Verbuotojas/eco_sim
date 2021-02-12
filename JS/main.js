
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




    //lentele obuoliu kainos

    chartView();

    function chartView() {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [{
                    label: 'Price',
                    data: [
                        // { x: 1, y: numberArray[11] },
                        // { x: 2, y: numberArray[10] },
                        // { x: 3, y: numberArray[9] },
                        // { x: 4, y: numberArray[8] },
                        // { x: 5, y: numberArray[7] },
                        // { x: 6, y: numberArray[6] },
                        // { x: 7, y: numberArray[5] },
                        // { x: 8, y: numberArray[4] },
                        // { x: 9, y: numberArray[3] },
                        // { x: 10, y: numberArray[2] },
                        // { x: 11, y: numberArray[1] },
                        // { x: 12, y: numberArray[0] }],
                        numberArray[11], numberArray[10], numberArray[9], numberArray[8], numberArray[7], numberArray[6], numberArray[5], numberArray[4], numberArray[3], numberArray[2], numberArray[1], numberArray[0]],
                    fill: false,
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)'
                        // 'rgba(255, 206, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [

                        'rgba(54, 162, 235, 1)'
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },


            // options: {


            //     annotation: {
            //       annotations: [
            //     //       {
            //     //     type: 'line',
            //     //     mode: 'vertical',
            //     //     yScaleID: 'x-axis-0',
            //     //     value:  '11',
            //     //     // yMax: 12,
            //     //     borderColor: 'rgba(255, 51, 51, 2.25)',
            //     //     borderWidth: 5,
            //     //     backgroundColor: 'rgba(255, 51, 51, 0.25)',
            //     //   },
            //       {
            //         type: 'line',
            //         mode: 'horizontal',
            //         scaleID: 'x-axis-0',
            //         value: '8',
            //         borderColor: 'tomato',
            //         borderWidth: 1
            //     }

            //     // ,



            //     //   {
            //     //     type: 'box',
            //     //     yScaleID: 'y-axis-0',
            //     //     yMin:  -1,
            //     //     yMax: 1,
            //     //     borderColor: 'rgba(255, 255, 0, 0.25)',
            //     //     borderWidth: 1,
            //     //     backgroundColor: 'rgba(255, 255, 0, 0.25)',
            //     //   }, {
            //     //     type: 'box',
            //     //     yScaleID: 'y-axis-0',
            //     //     yMin:  -2,
            //     //     yMax: -1,
            //     //     borderColor: 'rgba(0, 204, 0, 0.25)',
            //     //     borderWidth: 1,
            //     //     backgroundColor: 'rgba(0, 204, 0, 0.25)',
            //     //   }

            //     ],
            //     drawTime: "afterDraw" // (default)
            //     }
            //   }
            // });


            options: {

                scales: {
                    // xAxes: [{
                    //     display: true,
                    //       ticks: {
                    //                 beginAtZero:true
                    //             },        
                    //   }],
                    yAxes: [{
                        // display: true,

                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                // annotation: {
                //     annotations: [
                //         {
                //             type: 'line',
                //             mode: 'vertical',
                //             scaleID: 'x-axis-0',
                //             value: '8',
                //             borderColor: 'tomato',
                //             borderWidth: 5
                //         }
                //     ],
                //     drawTime: "afterDraw"// (default)

                // },

                animation: {
                    duration: 0
                }


            }
        });

    }


}, 1000);

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

console.log(localStorage.getItem('cash'));

cashView.textContent = localStorage.getItem('cash') + ' $';
storeView.textContent = localStorage.getItem('apple');





//kiekis prekiu

document.getElementsByName("quantity")[0].addEventListener('change', doThing);

let numberOfThings = 1;
function doThing() {

    numberOfThings = JSON.parse(this.value);
    console.log(numberOfThings);

}




//pirkimas obuoliai

buttonBuy.onclick = function () {

    if (localStorage.getItem('cash') >= numberArray[0] * numberOfThings
        && localStorage.getItem('storehouse') >= JSON.parse(localStorage.getItem('apple')) + numberOfThings) {
        localStorage.setItem('cash',
            JSON.parse(localStorage.getItem('cash')) - (numberArray[0] * numberOfThings)
        )


        if (localStorage.getItem('apple') == null) {

            localStorage.setItem('apple', JSON.stringify(numberOfThings));
        } else {

            let nubmerApples = JSON.parse(localStorage.getItem('apple'));

            localStorage.setItem('apple', ((nubmerApples) + numberOfThings));

        }

    }
    cashView.textContent = localStorage.getItem('cash') + ' $';
    storeView.textContent = localStorage.getItem('apple');
}

//pardavimai obuoliai
buttonSell.onclick = function () {

    if (localStorage.getItem('apple') - numberOfThings >= 0) {
        localStorage.setItem('cash',
            JSON.parse(localStorage.getItem('cash')) + (numberArray[0] * numberOfThings)
        )


        let nubmerApples = JSON.parse(localStorage.getItem('apple'));

        localStorage.setItem('apple', ((nubmerApples) - numberOfThings));

    }
    storeView.textContent = localStorage.getItem('apple');
    cashView.textContent = localStorage.getItem('cash') + ' $';
}







//storehouse procent

// // progressbar.js@1.0.0 version is used
// // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Circle(container1, {
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     duration: 1400,
//     easing: 'bounce',
//     strokeWidth: 6,
//     from: {color: '#FFEA82', a:0},
//     to: {color: '#ED6A5A', a:1},
//     // Set default step function for all animate calls
//     step: function(state, circle) {
//       circle.path.setAttribute('stroke', state.color);
//     }
//   });

//   bar.animate(1.0);  // Number from 0.0 to 1.0



CSS.registerProperty({
    name: '--p',
    syntax: '<integer>',
    initialValue: 0,
    inherits: true
});




//var ProgressBar = require('progressbar.js')
//var line = new ProgressBar.Line('#container');
//
//
//
//var bar = new ProgressBar.Circle(container, {
//  color: '#FFEA82',
//  trailColor: '#eee',
//  trailWidth: 1,
//  duration: 1400,
//  easing: 'bounce',
//  strokeWidth: 6,
//  from: {color: '#FFEA82', a:0},
//  to: {color: '#ED6A5A', a:1},
//  // Set default step function for all animate calls
//  step: function(state, circle) {
//    circle.path.setAttribute('stroke', state.color);
//  }
//});
//
//bar.animate(1.0);  // Number from 0.0 to 1.0






