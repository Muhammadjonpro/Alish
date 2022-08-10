var elTex = document.querySelector(".tex");

const money = +prompt("Pulingiz qancha")

const USD = 500;

const elUsD = 250;

const EURO = 120; 

const Ticket = USD * 10650.34;

const Hotel = elUsD * 10650.34;

const museum = EURO * 11650.03; 

const expenses = Ticket + Hotel + museum;

const buladi = "Alish Brat Go";

const UyinQima = "BITTA AYLANIB KEL ALISH!!!";

const bumadi = "Alish Brat hali ishlash kere"
if (expenses <= money) {
    elTex.textContent = buladi;
} else if (money <= 0) {
    elTex.textContent = UyinQima;
} else {
    elTex.textContent = bumadi;
}