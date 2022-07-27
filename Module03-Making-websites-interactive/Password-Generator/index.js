const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];



let passwordLengthEl = document.getElementById("password-length");
let checkSymbolsEl = document.getElementById("check-symbols");
let checkNumbersEl = document.getElementById("check-numbers");
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");

function generatePasswords(){
  let characters = [...alphabet];
  let passwordLength = Number(passwordLengthEl.value) ;
  let hasSymbol = checkSymbolsEl.checked;
  let hasNumber = checkNumbersEl.checked;
  let password1 = "";
  let password2 = "";
  
  if(hasSymbol){
    characters = characters.concat(symbols);
  }
  if(hasNumber){
    characters = characters.concat(numbers);
  }
  
  for(let i=0; i< passwordLength; i++){
    password1 += characters[Math.floor(Math.random() * characters.length)]
  }
  password1El.textContent = password1;

  
  for(let i=0; i< passwordLength; i++){
    password2 += characters[Math.floor(Math.random() * characters.length)]
  }
  password2El.textContent = password2;
  
}