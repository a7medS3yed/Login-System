
 var currentName = JSON.parse(localStorage.getItem('currentName'));



var names = currentName;



var con = `<div class="caption w-75 p-5">
            <h2 class="text-center secound-color">Welcome ${names}</h2>
        </div>`;
document.getElementById('container').innerHTML = con;