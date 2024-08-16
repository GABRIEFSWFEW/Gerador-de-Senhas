const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button'); 
const sizePassword = document.querySelector('#valor'); 
const passwordElement = document.querySelector('#password'); 
const containerPassword = document.querySelector('#container-password'); 
const charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let novaSenha = "";

// Inicializando o valor do slider
if (sliderElement && sizePassword) {
    sizePassword.innerHTML = sliderElement.value;

    sliderElement.oninput = function () {
        sizePassword.innerHTML = this.value;
    }
}

function generatePassword(){
    let generatedPassword = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    passwordElement.innerHTML = generatedPassword;
}

if (buttonElement) {
    buttonElement.addEventListener('click', generatePassword);
}

// Função para copiar a senha gerada para a área de transferência (opcional)
function copyToClipboard() {
    const textarea = document.createElement('textarea');
    textarea.value = passwordElement.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
}

// Adiciona o evento de clique ao container para copiar a senha
containerPassword.addEventListener('click', copyToClipboard);
