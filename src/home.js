//hamburger menu
let hamburgerMenu =document.querySelector(".hamburger--menu")
let menu          =document.querySelector(".menu")

hamburgerMenu.addEventListener("click" , e=>{
    menu.classList.add("show-menu")

    let menuClose=document.querySelector(".menu-close")
    menuClose.addEventListener("click", e=> {
    menu.classList.remove("show-menu")
})

})
//popup for sign in
let popupBtn=document.querySelector(".popup-btn")

if(popupBtn){
    var popupWrapper=document.createElement("div")
    popupWrapper.className="popup-wrapper"
    document.body.prepend(popupWrapper)
}

popupBtn.addEventListener("click",e=>{
    let popup=popupBtn.nextElementSibling
    popup.classList.add("show")
    popupWrapper.classList.add("show")

    let popupClose=document.querySelector(".popup-close")
    popupClose.addEventListener("click", e=> {
    popup.classList.remove("show")
    popupWrapper.classList.remove("show")
})
})
/********************************form validation*******************************/
let form        = document.querySelector(".form")
let password    = document.querySelector("#password")
//up=user pattern 
let up =/^[a-zA-Z][\w._]{5,23}$/


//evaluate username
let eu=0

form.addEventListener("keyup" ,e=>{
    if(up.test(e.target.value)){
        eu=true
        e.target.classList.add("is-valid")
        e.target.classList.remove("is-invalid")
    }else{
        eu=false
        e.target.classList.add("is-invalid")
    }
})

//evaluate password
let ep=0

form.password.addEventListener("keyup",e=>{
    if(e.target.value){

        ep=0
        ep+=/[A-Z]/.test(e.target.value) ? 1 : 0;
        ep+=/[a-z]/.test(e.target.value) ? 1 : 0;
        ep+=/[0-9]/.test(e.target.value) ? 1 : 0;
        ep+=/[\W]/.test(e.target.value) ? 1 : 0;
        ep+=e.target.value.length>=6 ? 1 : 0;

        if(ep===5){
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        }else{
            e.target.classList.add("is-invalid")
        }
    }
})
// Submit the form
form.addEventListener("submit", e=>{
    if(!(eu && ep===5)){
     e.preventDefault()
    
      if(!eu){
        form.username.classList.add('is-invalid')
      }
    

      if(ep!==5){
        form.password.classList.add('is-invalid')
      }
    }
})