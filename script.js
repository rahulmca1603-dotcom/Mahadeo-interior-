// Welcome Message

window.onload = function () {

alert("Welcome to Mahadeo Interior | Design & Decor");

};


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior: "smooth"

});

});

});



// Back To Top Button

let topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "gold";
topButton.style.cursor = "pointer";


topButton.onclick = function () {

window.scrollTo({

top:0,
behavior:"smooth"

});

};
// Premium Image Slider


let images=[

"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",

"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",

"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"

];


let i=0;


setInterval(function(){

i++;

if(i>=images.length){

i=0;

}


document.getElementById("slide-image").src=images[i];


},3000);
// FREE QUOTE FORM
document.getElementById("quoteForm")
.addEventListener("submit", function(e) {

e.preventDefault();

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let city = document.getElementById("city").value;
let service = document.getElementById("service").value;
let budget = document.getElementById("budget").value;
let message = document.getElementById("message").value;

let whatsappMessage = `Hello Mahadeo Interior,

Name : ${name}

Mobile : ${mobile}

City : ${city}

Service Required : ${service}

Preferred Budget : ${budget}

Message : ${message}`;

let url =
"https://wa.me/919122129633?text="
+ encodeURIComponent(whatsappMessage);

window.location.href = url;

document.getElementById("quoteForm").reset();
