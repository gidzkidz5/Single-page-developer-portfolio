const overlays = document.querySelectorAll('.overlay');
const design = document.querySelector('.design').querySelector('.image');
const elearning =document.querySelector('.e-learning').querySelector('.image');
const todo = document.querySelector('.todo').querySelector('.image');
const entertainment = document.querySelector('.entertainment').querySelector('.image');
const memory = document.querySelector('.memory').querySelector('.image');
const gallery = document.querySelector('.gallery').querySelector('.image');

design.addEventListener('mouseover', () => {
    overlays[0].style.visibility = 'visible';
    console.log("mouse in")
    console.log(overlays[0].style.visibility)

    overlays[0].addEventListener('mouseout', () => {
        overlays[0].style.visibility = 'hidden';
        console.log("mouse out")
        console.log(overlays[0].style.visibility)
        
    });
   
})



elearning.addEventListener('mouseover', () => {
    overlays[1].style.visibility = 'visible';
    overlays[1].addEventListener('mouseleave', () => {
        overlays[1].style.visibility = 'hidden';
    })
})


todo.addEventListener('mouseover', () => {
    overlays[2].style.visibility = 'visible';
    overlays[2].addEventListener('mouseleave', () => {
        overlays[2].style.visibility = 'hidden';
    })
})


entertainment.addEventListener('mouseover', () => {
    overlays[3].style.visibility = 'visible';
    overlays[3].addEventListener('mouseleave', () => {
        overlays[3].style.visibility = 'hidden';
    })
})


memory.addEventListener('mouseover', () => {
    overlays[4].style.visibility = 'visible';
    overlays[4].addEventListener('mouseleave', () => {
        overlays[4].style.visibility = 'hidden';
    })
})


gallery.addEventListener('mouseover', () => {
    overlays[5].style.visibility = 'visible';
    overlays[5].addEventListener('mouseleave', () => {
        overlays[5].style.visibility = 'hidden';
    })
})


// overlay.style.visibility = 'visible';

// form validation //

const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const msg = document.getElementById('input-message');
const submitBtn = document.querySelector('submit');
const form = document.querySelector('form');
const error = document.querySelectorAll('.error');

form.addEventListener('submit', (e) => {
    let errorName = [];
    let errorEmail = [];
    let errorMsg = [];
    let isError = false;
// if inputs blank
    if (name.value === "" || name.value == null) {
        errorName.push("Sorry, can't be blank");
        isError = true;
    } else {
        error[0].classList.add('hide');
        name.classList.remove('error-label')
    }

    if (email.value === "" || email.value == null) {
        errorEmail.push("Sorry, can't be blank");
        isError = true;
    } else {
        error[1].classList.add('hide');
        email.classList.remove('error-label');
    }
    
    if (msg.value === "" || msg.value == null) {
        errorMsg.push("Sorry, can't be blank");
        isError = true;
    } else {
        error[2].classList.add('hide');
        msg.classList.remove('error-label');
    }
    
// if input wrong format
    if (!email.value.includes('@') && email.value !== ""){
        errorEmail.push("Sorry, wrong format");
    } else {
        error[1].classList.add('hide');
        email.classList.remove('error-label');
    }

// making error message appear
    if (errorName.length > 0) {
        e.preventDefault();
        error[0].innerHTML = errorName;
        if (error[0].classList.contains('hide')){
            error[0].classList.remove('hide')
            name.classList.add('error-label')
        }
    }

    if (errorEmail.length > 0) {
        e.preventDefault();
        error[1].innerHTML = errorEmail;
        errorEmail = [];
        if (error[1].classList.contains('hide')){
            error[1].classList.remove('hide')
            email.classList.add('error-label')
        }
    }

    if (errorMsg.length > 0) {
        e.preventDefault();
        error[2].innerHTML = errorMsg;
        if (error[2].classList.contains('hide')){
            error[2].classList.remove('hide')
            msg.classList.add('error-label')
        }
    }
    
 

})