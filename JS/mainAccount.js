
let accountName;


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


