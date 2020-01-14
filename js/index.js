const register = document.querySelector("#register");
let fields = document.querySelectorAll("input");
let textErro = document.querySelector("#error")
var modal = document.getElementById("myModal");
let textName = document.querySelector("#text-name")
let textPhone = document.querySelector("#text-phone")
let textEmail = document.querySelector("#text-email")
let textPassword = document.querySelector("#text-password")
let textConfirm = document.querySelector("#text-confirm")
var span = document.getElementsByClassName("close")[0];
let dontWork = document.querySelectorAll(".dont-work")
for(let x = 0; x < 4; x++){
  dontWork[x].onclick = function(){
    alert("Sorry, this not working now!")
  }
}
register.onclick = function(){
    for(let i = 0; i < 5; i++) {
        if(fields[i].value === ""){
            fields[i].style.border = "2px solid red"
        }
        else{
            fields[i].style.border = "2px solid #748cd8"
            if(fields[3].value !== fields[4].value){
                fields[4].style.border = "2px solid red"
                textErro.style.display = "block"
            }
        }
    }
    return validateUser()
}

 function validateUser(){
     if(fields[0].value !== "" && fields[1].value !== "" && fields[2].value && fields[3].value !== "" && fields[4].value !== ""){
        textName.innerHTML = `Name: ${fields[0].value}`;
        textPhone.innerHTML = `Phone: ${fields[1].value}`;
        textEmail.innerHTML = `Email: ${fields[2].value}`;
        textPassword.innerHTML = `Password: ${fields[3].value}`;
        textConfirm.innerHTML = `Confirm Password: ${fields[4].value}`;
        modal.style.display = "block";
     }
 }

 window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  span.onclick = function() {
    modal.style.display = "none";
  }