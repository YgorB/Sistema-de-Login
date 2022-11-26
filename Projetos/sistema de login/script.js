const register = document.getElementById('Register');
const container = document.getElementById('container');
const confirmar = document.getElementById('Confirm')
const clear = document.getElementById('clear')

let NewUser = document.getElementById('NewUser');
let NewPassword = document.getElementById('NewPassword');

function hidden(){
    if(container.style.display === 'flex'){
        container.style.display = 'none'
        register.innerHTML = 'Cadastrar'

    }else{
        container.style.display = 'flex'
        register.innerHTML = 'Cancelar'
    }
}



function SaveDate(){
    NewPassword;
    NewUser;

    let Date = JSON.parse(localStorage.getItem('Date'));

    if(Date == null){
        localStorage.setItem("Date", "[]");
        Date = [];
    }

    let Historic = {
        User: NewUser.value,
        Password: NewPassword.value
    }

    Date.push(Historic);
    localStorage.setItem('Date', JSON.stringify(Date))

    alert('Registrado com sucesso');

    NewUser.value = "";
    NewPassword.value = "";

    
}

function aprove(){
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    NewPassword;
    NewUser;

    if(user === 'NewUser' && password === '123'){
        alert('correto')
    }else{
        alert('incorreto')
    }
}

function DeleteLocalStorage(){
    localStorage.clear()

    if(localStorage == ""){
        alert('Excluido com sucesso!')
    }else{
        alert('falha ao excluir dados')
    }

}

clear.addEventListener('click', DeleteLocalStorage)
register.addEventListener('click', hidden) 
confirmar.addEventListener('click', SaveDate)
submit.addEventListener('click', aprove)

