const button = document.getElementById ('convert-button')
const select = document.getElementById ('currency-select')


const convertValues = async () => {
    const inputReais = document.getElementById ('input-real').value
    const realValueText = document.getElementById ('real-value-text')
    const currencyValueText = document.getElementById ('currency-value-text')

    // realValueText = inputReais -- era dessa maneira 

    // async e await servem para o javaScript entender que tem que parar para ler o servidor que estou querendo buscar
    // async ele tem que estar dentro de uma function, coloca o async antes do function ----> async function myFunction(){}
    // await --- aonde o java tem q esperar , primeiro o async e depois await
   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json()) // then tem uma arrow function
   
   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high
   const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === 'US$ Dolar Americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar) // formato utilizado pra identificar a moeda que quer
    }
    
    if (select.value === '€ Euro' ){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }
    if(select.value === 'Bitcoin'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT",
        }).format(inputReais / bitcoin)
    }

}
changeCurrency = () =>{
    const currencyName = document.getElementById ('currency-name') 
    const currencyImg = document.getElementById ('currency-img')

    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = "American Dolar"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro" // troca o texto
        currencyImg.src = "./assets/euro.png" // troca a imagem
    }
    convertValues()
}

button.addEventListener('click', convertValues) // quando deu o 'click' , chama a funcao , colocando a 
                                               // virgula , em seguida coloca o nome da funcao (convertValues)   
select.addEventListener('change',changeCurrency)  // toda vez que faz a chance , muda a escolha , ele chama a function(changeCurrency), isso fazendo oq a function ta pedindoo com os Ifs                                               