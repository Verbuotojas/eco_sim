
let accountName;

// registracija
let form2 = document.querySelector("#form2");

form2.addEventListener("submit", function (e) {
    e.preventDefault();

    accountName = e.target.elements.accountName.value;

    console.log(accountName);
    // console.log(account);


    // konstruktorius
    let accuntNr = {
        name: accountName,
        cash: 500,
        storehouse: 100,
        apple: 0
    };

    let myAccountSerialized = JSON.stringify(accuntNr);

    console.log(myAccountSerialized);


    localStorage.setItem('account', myAccountSerialized);
    location.replace("index.html");


});

console.log(localStorage.getItem('account'));

// c=backgroundo canvas 
var c = document.getElementById("cMatcix");
var ctx = c.getContext("2d");

//canvas padaromas pilnu ekranu
c.height = window.innerHeight;
c.width = window.innerWidth;

//elementai efektui
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//atskiriami simboliai iš stringo
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //kiekis simboliu kolonoje lietaus efekte

var drops = [];

//x kordinaciu asyje
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//uzrasymas
function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#4DC3FF";//texto spalva
    ctx.font = font_size + "px arial";
    //pasikratojimas kritimo
    for (var i = 0; i < drops.length; i++) {
        //generuojami atsitiktiniai simboliai
        var text = matrix[Math.floor(Math.random() * matrix.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //didinama y kordinatė
        drops[i]++;
    }
}
// laiko terminas
setInterval(draw, 35);


