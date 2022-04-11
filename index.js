let toggleMenu = document.querySelector('.toggle-menu');
let toggleBars = document.querySelector('.toggle-bars');
let toggleNavbar = document.querySelector('.toggle-navbar');
let navbarMenu = document.querySelector('.navbar-menu');

toggleMenu.addEventListener('click',()=>{
    toggleBars.classList.toggle('toggle');
    toggleNavbar.classList.toggle('display-toggle-navbar');
});
navbarMenu.addEventListener('click',() => {
    toggleNavbar.classList.remove('display-toggle-navbar');
    toggleBars.classList.toggle('toggle');
});
let nameee = document.getElementById('name');
let emailId = document.getElementById('email');
let message = document.getElementById('message');
let response = document.getElementById('response');

let subb = document.getElementById('submitForm').onsubmit = function(e){
        e.preventDefault();
        nameee.value = "";
        email.value = "";
        message.value = "";
        
}