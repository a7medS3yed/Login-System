
var inputs = document.querySelectorAll('.form-control');
var btn = document.querySelector('.btn');
var alert = document.querySelector('.alert');
var mb4 = document.querySelector('.mb-4');
var alert2 = document.querySelector('.alert2');
let currentName = '';

if(localStorage.getItem('users') == null)
    usersList = [];
else{
    usersList = JSON.parse(localStorage.getItem('users'));

}
var flag = false;

function login() {
    var email = inputs[0].value;
    var password = inputs[1].value;
   
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email === email && usersList[i].password === password) {
            flag = true;
            localStorage.setItem('currentName', JSON.stringify(usersList[i].name));
            window.location.href = 'home.html';
        }
    }
    if (!flag) {
        mb4.classList.remove('mb-4');
        alert2.classList.remove('d-none');
    }
}

btn.addEventListener('click', function() {
    if (inputs[0].value === "" || inputs[1].value === "") {
        mb4.classList.remove('mb-4');
        alert.classList.remove('d-none');
       
    } else {
        alert.classList.add('d-none'); 
        login();
    }
});

