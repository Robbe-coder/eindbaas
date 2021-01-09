$(document).ready(function(){
    $(".banner").snowfall({round : true, minSize: 5, maxSize:10});
});

$(function () {
    $('.box').fadeInScroll();
});

$(window).scroll(function () {
    var draai = $(window).scrollTop() / 50 % Math.PI;
    $('.dragon').css({ transform: 'rotate(' + draai + 'rad)' });
});






let form = document.querySelector("#submit");

form.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    let nameGroup = document.querySelector(".form__group--name");
    let surnameGroup =document.querySelector(".form__group--surname");
    let emailGroup = document.querySelector(".form__group--email");
    let questionGroup = document.querySelector(".form__group--question");
    let nameInput = document.querySelector("#name");
    let name = nameInput.value;
    let surnameInput = document.querySelector("#surname");
    let surname = surnameInput.value;
    let emailInput = document.querySelector("#email");
    let email = emailInput.value;
    let questionInput = document.querySelector("#question");
    let question = questionInput.value;

    nameGroup.classList.remove("error");
    surnameGroup.classList.remove("error");
    emailGroup.classList.remove("error");
    questionGroup.classList.remove("error");

    let nameError = false;
    let surnameError = false;
    let emailError = false;
    let questionError = false;
    
    if(name.length<3){
        nameError = true;
        nameGroup.classList.add("error");
    }
    if(surname.length<4){
        surnameError = true;
        surnameGroup.classList.add("error");
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError = true;
        emailGroup.classList.add("error");
      }
    if(question===""){
        questionError = true;
        questionGroup.classList.add("error");
    }
    if(!nameError && !surnameError && ! emailError && !questionError){
        submit();
    }


    function submit(){
        document.querySelector("form").classList.add("hidden");
        document.querySelector(".vallidate").classList.remove("hidden");
    }
    
    

}