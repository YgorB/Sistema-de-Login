const register = document.getElementById('Register');
const container = document.getElementById('container');
const confirmar = document.getElementById('Confirm')
const clear = document.getElementById('clear')

let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let NewEmail = document.getElementById('NewEmail');
let NewPassword = document.getElementById('NewPassword');

let users = []

function SaveDate(){
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'))
    }else{
        localStorage.getItem('users', JSON.stringify(users))
    }

    
}

function login(){
    let loged = false;
    let isUser = false;
    
    users.forEach(user => {
        if(loginEmail.value == user.email && loginPassword == user.password){
            isUser = true;
            loged = true;
        }
    })


    if(loged && isUser){
        alert('logado com sucesso');
        loginEmail = '';
        loginPassword = '';
    }else if( loged && !isUser){
        alert('senha incorreta');
        loginEmail = '';
        loginPassword = '';
    } else{
        alert('usuario não encontrado')
    }
}

function createAccount(){

    if(wrongEmail(NewEmail.value)){

        alert('email mal formatado')
    }else if(weakPassword(NewPassword.value)){
        alert('senha fraca')
    }else { 
        let notUser = true

            users.forEach(user => {
                if(user.email == NewEmail.value){
                    notUser = false
                }
            })

            if(notUser){

                users.push({
                    email: NewEmail.value,
                    password: NewPassword.value
                })

                alert('cadastrado com sucesso')

                NewEmail.value = ''
                NewPassword.value = ''

                localStorage.setItem('users', JSON.stringify(users));
            }else{
                alert('esse email já foi cadastrado')
                NewEmail.value = '';
                NewPassword.value = '';
            }
}

}

function DeleteLocalStorage(){
    if(localStorage.length >= 1){
        localStorage.clear()

        alert('dados apagados')

        if(localStorage.length > 1){
            alert('essa piroca não deletou')
        }else{
            alert('deleto memo sa ai mano')
        }

    }else{
        alert('não foi detectado dados')
    }
}

function hidden(){
    if(container.style.display === 'flex'){
        container.style.display = 'none'
        register.innerHTML = 'Cadastrar'

    }else{
        container.style.display = 'flex'
        register.innerHTML = 'Cancelar'
    }
}

function wrongEmail(email){
    if(email.indexOf('@') < 1){
        return true
    }else{
        return false
    }
}

function weakPassword(password){
    if(password.length < 8 && password.indexOf('123') < 1 ){
        return true
    }else{
        return false
    }
}

clear.addEventListener('click', DeleteLocalStorage)
register.addEventListener('click', hidden) 
confirmar.addEventListener('click', createAccount)
submit.addEventListener('click', login)

SaveDate()

