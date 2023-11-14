const fatBurger = document.getElementById("fat-burger")
const burger = document.getElementById("btn-burger")


burger.addEventListener("click", ()=> {
        fatBurger.classList.toggle("close-burger")
    }
)

const about = document.querySelector("swiper-container");
const mision = document.getElementsByClassName("mision")
const vision = document.getElementsByClassName("vision")
const valores = document.getElementsByClassName("valores");

// console.log(about.firstElementChild.attributes.class)

// setInterval(() => {console.log(about.firstElementChild)},0.500)
// about.addEventListener("change", (event) =>{
    
// })

// setTimeout(function(){
//     console.log("Hola Mundo");
// }, 2000);

// console.log("setTimeout() Ejemplo...");


about.addEventListener("click", () => {
    if(about.firstElementChild.attributes.class == "about_div mision"){
        console.log("hola desde mision")
    }else if(about.firstElementChild.attributes.class == "about_div vision" ){
        console.log("hola desde vision")
    }else{
        console.log("valores")
    }
})