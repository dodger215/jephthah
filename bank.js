
var balance = "100";
let rate = "0.05";


function balbtn(){
  if(balance == ""){
    document.getElementById("result-balance").value = "************";
  }
  else{
    document.getElementById("result-balance").value = "GHA " + balance + ".00";
  }
}
function intbtn(){
  let intrest = balance * rate;
 document.getElementById("result-intrest").value = "GHA " + intrest + ".00";
}

let depo = document.getElementById("amount").value;
let number = document.getElementById("number").value;
let pass = document.getElementById("pass1").value;
let nd_pass = document.getElementById("pass2").value;

if(pass1 !== pass2){
 alert("Incorrect password");
}else{

}

function deposite(){
  balance = balance - depo;
}