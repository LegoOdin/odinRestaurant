import homePage from "./home";
import contactPage from "./contacts";
import menuPage from "./menu";
import logo from "./img/logoOne.png";
import "./styles.css";

const header = document.getElementById("header");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

const logoAndName = document.createElement("div");
logoAndName.classList.add("banner")
const shopName = document.createElement("h1");
shopName.textContent = "Doggy Drop"
const logoImg = document.createElement("img");
logoImg.src = logo;

logoAndName.append(logoImg);
logoAndName.append(shopName);

header.prepend(logoAndName);





homePage();
homeBtn.disabled=true;

homeBtn.addEventListener("click", ()=>{
    homePage();
    homeBtn.disabled=true;
    contactBtn.disabled=false;
    menuBtn.disabled=false;
})

contactBtn.addEventListener("click", ()=>{
    contactPage();
    homeBtn.disabled=false;
    contactBtn.disabled=true;
    menuBtn.disabled=false;
})

menuBtn.addEventListener("click", ()=>{
    menuPage();
    homeBtn.disabled=false;
    contactBtn.disabled=false;
    menuBtn.disabled=true;
})