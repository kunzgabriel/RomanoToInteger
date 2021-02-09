const inputRomanos = document.getElementById('romanInput')
const convertButton = document.getElementById('convertButton')
const outputInteiros = document.getElementById('integerOutput')

const romanos = ["I","V","X", "L", "C", "D", "M"]
const inteiros = [1, 5, 10, 50, 100, 500, 1000]
    
console.log(romanos)

const romanToInteger = () =>{
    let arrayRomanos = inputRomanos.value.toString().toUpperCase().split('')
    let tamanho = arrayRomanos.length
    let arrayInteiros = [];
    for(let i in arrayRomanos){
        arrayInteiros.push(inteiros[romanos.indexOf(arrayRomanos[i])])
    }
    console.log(arrayInteiros)
    let soma = 0;

    for(let j = 0; j < tamanho; j++){
        if(j < tamanho - 1){
            if(arrayInteiros[j] >= arrayInteiros[j+1]){
                soma = soma + arrayInteiros[j]
            }
            else{
                soma = soma + (arrayInteiros[j+1] - [arrayInteiros[j]]) 
                j++;
            }
        }else{
            soma = soma + arrayInteiros[j]
        }
        
    }
    outputInteiros.value = soma.toString();
}

convertButton.addEventListener('click', romanToInteger)