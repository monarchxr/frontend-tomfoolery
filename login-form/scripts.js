let username = document.getElementById("username")
let password = document.getElementById("password")
const form = document.getElementById("forml")
const container = document.getElementById('login-form')

// don't hardcode actual credentials in prod btw :)
let actualuser = "Raunak"
let actualpwd = "prod"

let timer

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(timer){
        clearTimeout(timer)
    }

    const oldmsg = container.querySelector('.form-msg')
    if(oldmsg){
        oldmsg.remove()
    }
    
    const newText = document.createElement('p')
    newText.classList.add('form-msg')

    let isLoginSuccess = false

    if(username.value!==actualuser){
        newText.textContent = 'Incorrect username entered, try again!'
        newText.classList.add('error-style')
    }else if(password.value!==actualpwd){
        newText.textContent = 'Incorrect password entered, try again!'
        newText.classList.add('error-style')
    }else{
        newText.textContent = `Valid credentials! Welcome to your dashboard, ${username.value}!`
        newText.classList.add('success-style')
        isLoginSuccess = true
    }

    container.append(newText)

    if(isLoginSuccess){
        timer = setTimeout(() => {
                    window.location.href = "https://google.com"
                    newText.remove()
                }, 1500);
    }else{
        timer = setTimeout(() => {
                    newText.remove()
                }, 3000);
    }

    username.value = ''
    password.value = ''
})