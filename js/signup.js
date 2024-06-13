var inputs = document.querySelectorAll('.form-control');
var btn = document.querySelector('.btn');
var alerts = document.querySelectorAll('.alert')
var lastDivInp = document.querySelector('.lastDivInp');


var usersList;

clear();

if(localStorage.getItem('users') == null)
    usersList = [];
else{
    usersList = JSON.parse(localStorage.getItem('users'));

}


function register(){
    if(validationInput(inputs[0]) && validationInput(inputs[1]) && validationInput(inputs[2])){
        user = {
            name: inputs[0].value,
            email: inputs[1].value,
            password: inputs[2].value
        };
        if(checkEmail(user.email)){
            usersList.push(user);
            localStorage.setItem('users', JSON.stringify(usersList));
            if(!alerts[1].classList.contains('d-none'))
                alerts[1].classList.add('d-none');
            alerts[2].classList.remove('d-none');
        }
        else{
            if(!alerts[2].classList.contains('d-none'))
                alerts[2].classList.add('d-none');
            alerts[1].classList.remove('d-none');
        }
        clear();
        clearValidation();
    }
    else{
        alert("Inputs not match with validation");
       }
}

function checkEmail(email){
        for(var i = 0; i < usersList.length; i++){
            if(usersList[i].email === email)
                return false;
            else
                return true;
     }
}

function clear(){
    for(var i = 0;i<inputs.length;i++)
        inputs[i].value = null;
}

if(btn){
btn.addEventListener('click',function(){
    
    if(inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === ""){
        alerts[0].classList.remove('d-none');
        lastDivInp.classList.remove('mb-4');
    }
    else{
        alerts[0].classList.add('d-none');
        lastDivInp.classList.add('mb-4');
        register();
    } 
})

}


function validationInput(element){
    var regex={
        inputName:/^[A-Z][a-z]{2,8}$/,
        inputEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        inputPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    };

    if(regex[element.id].test(element.value)){
        if(element.classList.contains('is-invalid')){
            element.classList.remove('is-invalid');
        }
           element.classList.add('is-valid');
           return true;
        
    }
    else {
        if(element.classList.contains('is-valid'))
            element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        return false;
        
    }
}

for(var i = 0;i<inputs.length;i++){
    if(inputs[i]){
    inputs[i].addEventListener('keyup',function(){
        validationInput(this);
    })
}
}

function clearValidation(){
    for(var i = 0;i<inputs.length;i++){
        inputs[i].classList.remove('is-valid');
    }
}

