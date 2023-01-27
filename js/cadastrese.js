//JavaScript que coloca "()" e "-" no número de telefone para facilitar o input do usario.

const input = document.querySelector("#telefoneuser")

input.addEventListener('keypress', () => {

    let inputLength = input.value.length

    if (inputLength == 0) {

        input.value += '('

    } 
    
    if (inputLength == 3) {

        input.value += ')'
        
    }
    
    if(inputLength == 9){

        input.value += '-'

    }
})

const enderecouserForm = document.querySelector("#msform");
const cepuserInput = document.querySelector("#cepuser");
const enderecouserInput = document.querySelector("#enderecouser");
const cidadeuserInput = document.querySelector("#cidadeuser");
const bairrouserInput = document.querySelector("#bairrouser");
const regiaouserInput = document.querySelector("#regiaouser");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");

// Validação do CEP input

cepuserInput.addEventListener("keypress", (e) => {

  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);
  console.log(key);
  console.log(onlyNumbers.test(key));

//Permite somente números

  if (!onlyNumbers.test(key)) {

    e.preventDefault();
    return;

  }
});

//Evento para obter endereço

cepuserInput.addEventListener("keyup", (e) => {

  const inputValue = e.target.value;

//Checa se temos um CEP

  if (inputValue.length === 8) {

    getenderecouser(inputValue);

  }
});

//Obtem endereço da API

const getenderecouser = async (cepuser) => {

  toggleLoader();
  cepuserInput.blur();
  const apiUrl = `https://viacep.com.br/ws/${cepuser}/json/`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  console.log(formInputs);
  console.log(data.erro);
  enderecouserInput.value = data.logradouro;
  cidadeuserInput.value = data.localidade;
  bairrouserInput.value = data.bairro;
  regiaouserInput.value = data.uf;

  toggleLoader();
};

// Mostrar ou ocultar o carregador

const toggleLoader = () => {

  const fadeElement = document.querySelector("#fade");
  const loaderElement = document.querySelector("#loader");
  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");

};

// Show or hide message

const toggleMessage = (msg) => {
  const fadeElement = document.querySelector("#fade");
  const messageElement = document.querySelector("#message");
  fadeElement.classList.toggle("hide");
  messageElement.classList.toggle("hide");
};

