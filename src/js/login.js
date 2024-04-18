const inpEmail = document.querySelector("#emailInput")
const inpPass = document.querySelector("#passInput")

const entrarBtn = document.querySelector("#entrarBtn")

entrarBtn.addEventListener('click', entrarLogin)

function entrarLogin(){
    if(inpEmail.value == "Anderson" && inpPass.value == "12345678")  {
        console.log("foi")
        window.location.href = "home.html"
    } else {
        console.log("nao foi")
    }
}