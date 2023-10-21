// On-scroll navbar become dark not transparant
const navE1 = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 56){
        navE1.classList.add('navbar-scrolled');
    } else if(window.scrollY < 56){
        navE1.classList.remove('navbar-scrolled');
    }
})

// Form contact validation
// var nama = document.getElementById("nama").value;
// var email = document.getElementById("email").value;
// var pesan = document.getElementById("pesan").value;

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInput();
// });

// // Set Error message
// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }
// // Set success
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// Regex validasi email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    let validasiNama = document.getElementById("validasiNama");
    
    if(nama === '') {
        validasiNama.innerText = "*Name is required";
        validasiNama.classList.add("border-0", "inputform", "text-danger", "fw-bold");
    } else {
        validasiNama.innerText = '';
        validasiNama.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
    }

    let validasiEmail = document.getElementById("validasiEmail");

    if(email === '') {
        validasiEmail.innerText = "*Email is required";
        validasiEmail.classList.add("border-0", "inputform", "text-danger", "fw-bold");
    } else if (!isValidEmail(email)) {
        validasiEmail.innerText = "*Provide a valid email address";
        validasiEmail.classList.add("border-0", "inputform", "text-danger", "fw-bold");
    } else {
        validasiEmail.innerText = '';
        validasiEmail.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
    }

    let validasiPesan = document.getElementById("validasiPesan");

    if(pesan === '') {
        validasiPesan.innerText = "*Text is required";
        validasiPesan.classList.add("border-0", "inputform", "text-danger", "fw-bold");
    } else if (pesan.length < 8 ) {
        validasiPesan.innerText = "*Text must be at least 8 character.";
        validasiPesan.classList.add("border-0", "inputform", "text-danger", "fw-bold");
    } else {
        validasiPesan.innerText = '';
        validasiPesan.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
    }

    let sendmessage = document.getElementById("sendmessage");

    if(
        validasiNama.innerText === "" &&
        validasiEmail.innerText === "" &&
        validasiPesan.innerText === ""
    ){
        sendmessage.innerText = "Message already sent! Thank you";
        sendmessage.classList.add("border-0", "inputform", "text-success", "fw-bold")
    }
        
};