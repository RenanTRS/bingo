function aleatorio(min, max){
    let num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}

function ordem(a, b){
    return a - b;
}

let numeros = [];
function sortear(){
    while(true){
        var numero = aleatorio(1, 99);
        if (numeros.includes(numero) == false){
            if(numero < 10){
                document.getElementById("sortear").textContent = '0'+numero;    
            }else{
                document.getElementById("sortear").textContent = numero;
            }
            
            numeros.push(numero);
            break;
        }
        if(numeros.length >= 99){ //flag
            break;
        }
    }
    
    numeros.sort(ordem);
    let listaNum = '';
    for(var i in numeros){
        if(numeros[i] < 10){
            listaNum += '<p>'+'0'+numeros[i]+'</p>';
        }else{
            listaNum += '<p>'+numeros[i]+'</p>';
        }
    }
    var cartela = document.querySelector('#cartela');
    cartela.innerHTML = listaNum;    
}