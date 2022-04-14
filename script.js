const home = document.getElementById("home");
const homeBtn = document.querySelector('.home');
const product = document.getElementById("product");
const productBtn = document.querySelector('.product');
const contact = document.getElementById("contact");
const contactBtn = document.querySelector('.contact');

function handleClickHome() {
    home.scrollIntoView({block: "end", behavior: "smooth", inline: "nearest"});
}
function handleClickProduct() {
    product.scrollIntoView({block: "center", behavior: "smooth"});
}
function handleClickContact() {
    contact.scrollIntoView({block: "center", behavior: "smooth"});
}
homeBtn.addEventListener('click', handleClickHome);
productBtn.addEventListener('click', handleClickProduct);
contactBtn.addEventListener('click', handleClickContact);
