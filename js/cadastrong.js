//JavaScript que coloca "()" e "-" no número de telefone para facilitar o input do usario.

const input = document.querySelector("#telefoneONG")

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

//JavaScript que coloca "." e "/" no número do CNPJ para facilitar o input do usario.

const input1 = document.querySelector("#cnpjong")

input1.addEventListener('keypress', () => {
    let inputLength = input1.value.length

    if (inputLength == 2) {

        input1.value += '.'

    }
    
    if (inputLength == 6) {

        input1.value += '.'

    }
    
    if(inputLength == 10){

        input1.value += '/'

    }
    
    if(inputLength == 15){

        input1.value += '-'

    }

    if(inputLength == 9){

        input1.value += ''

    }   
})

const enderecongForm = document.querySelector("#msform");
const cepongInput = document.querySelector("#cepong");
const enderecongInput = document.querySelector("#enderecong");
const cidadongInput = document.querySelector("#cidadong");
const bairrongInput = document.querySelector("#bairrong");
const regiaoONGInput = document.querySelector("#regiaoONG");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");

// Validação do CEP input

cepongInput.addEventListener("keypress", (e) => {

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

cepongInput.addEventListener("keyup", (e) => {

  const inputValue = e.target.value;

  //Checa se temos um CEP

  if (inputValue.length === 8) {

    getenderecong(inputValue);

  }
});

//Obtem endereço da API

const getenderecong = async (cepong) => {

  toggleLoader();
  cepongInput.blur();
  const apiUrl = `https://viacep.com.br/ws/${cepong}/json/`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  console.log(formInputs);
  console.log(data.erro);
  enderecongInput.value = data.logradouro;
  cidadongInput.value = data.localidade;
  bairrongInput.value = data.bairro;
  regiaoONGInput.value = data.uf;
  toggleLoader();

};

// Mostrar ou ocultar o carregador

const toggleLoader = () => {

  const fadeElement = document.querySelector("#fade");
  const loaderElement = document.querySelector("#loader");
  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");

} ;
