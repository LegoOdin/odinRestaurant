import homePage from "./home";
import contactPage from "./contacts";
import menuPage from "./menu";

const header = document.getElementById("header");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");


const shopName = document.createElement("h1");
shopName.textContent = "Doggy Drop"
header.appendChild(shopName);



homePage();


homeBtn.addEventListener("click", ()=>{
    homePage();
})

contactBtn.addEventListener("click", ()=>{
    contactPage();
})

menuBtn.addEventListener("click", ()=>{
    menuPage();
})