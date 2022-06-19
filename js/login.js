const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");


form.addEventListener('submit', (e) =>{
    let message = [];
    if(password.value.length <= 3){
        message.push('Password  must be longer then 3 characters.')
    }
    debugger;
    if(message.length> 0){
        e.preventDefault();
        alert(message.join(", "))
    }
})


