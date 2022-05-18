document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let form = event.target;

    // ვალიდაცია კომპანიის სახელზე მაქსიმალური სიმბოლო 25

    let companyTitle = document.getElementById('companyTitle').value;
    if(companyTitle.length>25 || companyTitle== ''){
        errors.companyTitle = 'Name can not be empty and cannot be more than 25 symbols';
    } 

    // ვალიდაცია აღწერაზე მაქსიმალური სიმბოლო 100

    let companyDescription = document.getElementById('companyDescription').value;
    if(companyDescription.length>100 || companyDescription== ''){
        errors.companyDescription = 'Description can not be empty and cannot be more than 100 symbols';
    }

    
    //  ვალიდაცია meilze

    let email = document.getElementById('email').value;
    if(email== ''){
        errors.email = 'Email can not be empty';
    }

    //  ვალიდაცია ჩექბოქსზე

    let checkAgree = document.getElementById('checkAgree').checked;
    if(!checkAgree){
        errors.checkAgree = 'You must agree our terms and conditions';
    }

    //  ვალიდაცია რედიოზე
    
    let socialMedia = false;

    form.querySelectorAll('[name="social"]').forEach(element => {
        if(element.checked){
            socialMedia =true;
        }
    });
        if(socialMedia == false){
            errors.social = 'Please select'
        }


    //  ვალიდაცია პაროლებზე

    form.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML = '';
    });

    let password = document.querySelector('[name="password"]').value;
    let password1 = document.querySelector('[name="password1"]').value;
    // if (password!==password1){
    //     errors.password1 = 'Your Password do not match';
    // }
    // if(password==''){
    //     errors.password = 'Password can not be empty';
    // }
    if (password!=='' && password!==password1){
        errors.password1 = 'Your Password do not match';
        errors.password = 'Your Password do not match';
    }
    if(password==''){
        errors.password1 = 'Password can not be empty';
        errors.password = 'Password can not be empty';
}
    for(let item in errors){
        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
            
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
});


// ვალიდაცია პაროლებზე
let passwordShow = document.getElementById('password');
let toggleIcon = document.getElementById('toggleIcon');

function showHidePassword() {
    if(passwordShow.type == "password"){
        passwordShow.setAttribute('type', 'text');
        toggleIcon.classList.add('fa-eye-slash');
    }else{
        passwordShow.setAttribute('type', 'password');
        toggleIcon.classList.remove('fa-eye-slash');
    }   
}
// showHidePassword = () => {
//     if(passwordShow.type == "password"){
//         passwordShow.setAttribute('type', 'text');
//         toggleIcon.classList.add('fa-eye-slash');
//     }else{
//         passwordShow.setAttribute('type', 'password');
//         toggleIcon.classList.remove('fa-eye-slash');
//     }

// }
toggleIcon.addEventListener('click', showHidePassword);

// იმეილის  მეორე ვალიდაცია

function validation() {
    let emailText = document.getElementById('email').value;
    let spanText = document.getElementById('error_email'); 
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailText.match(emailStructure)){
        spanText.innerHTML = 'Your email is valid';
        spanText.style.color = 'chartreuse';
    }else{
        spanText.innerHTML = 'Your email is not valid';
        spanText.style.color = 'red';
    }
}
