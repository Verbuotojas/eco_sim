
//if(localStorage.getItem('apple') == null){
//    
//    console.log('tuscia!~!!!!!!!!!!!!!!!!');
//    
////    location.replace("account.html");
//}








let accountName;


// function Account(accountName) {
//     this.accountName = accountName;
//     // this.lastName = last;
//     // this.age = age;
//     // this.eyeColor = eye;
//   }





let form2 = document.querySelector("#form2");

form2.addEventListener("submit", function (e) {
    e.preventDefault();
   
    accountName = e.target.elements.accountName.value;
 
    console.log(accountName);
    // console.log(account);

    let accuntNr = {
        name: accountName,
        cash: 500,
        storehouse:100
    };
    
    let myAccountSerialized = JSON.stringify(accuntNr);
    
    console.log(myAccountSerialized);


localStorage.setItem('account', myAccountSerialized);
location.replace("index.html");


})

console.log(localStorage.getItem('account'));









//account create

// function logSubmit(e) {

//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     console.log(e);


//     event.preventDefault();

//   }
// var form = document.querySelector("form");
// window.onload = function() {

//     form.onsubmit = submitted.bind(form);

// }

// function submitted(e) {
//     e.preventDefault();
//     console.log(form);
// }
// let accountName;

// let account ={
//     accountName=this.accountName,
//     // cash=this.cash
// };
// console.log(account);










//   let form = document.getElementById('form');
//   let log = document.getElementById('log');
//   form.addEventListener('submit', logSubmit);










//kuriant akounta pinigai

if (localStorage.getItem('cash') == null) {
    localStorage.setItem('cash', '500');
    localStorage.setItem('storehouse', 100);

} else {
    localStorage.setItem('cash', '2000');
}


//pinigai puslapio virsuje


console.log(localStorage.getItem('cash'));

