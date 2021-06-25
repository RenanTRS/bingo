let numeros = [];
function sortear(){
    while(true){
        var numero = aleatorio(1, 99);
        if (numeros.includes(numero) == false){
            document.getElementById("sortear").textContent = numero;
            numeros.push(numero);
            break;
        }
    }
    
    numeros.sort(ordem);
    let numOrdem = [];
    for(var i in numeros){
        if(numeros[i] < 10){
            numOrdem.push('<p>'+'0'+numeros[i]+'</p>')
        }else{
            numOrdem.push('<p>'+numeros[i]+'</p>');
        }
    }
    
    /*for(var c in numOrdem){
        var cartela = document.querySelector('#cartela');
        var caso = numOrdem[c];
        cartela.innerHTML += numOrdem[c];
        caso = null;
    }*/
    var cartela = document.querySelector('#cartela');
    cartela.innerHTML = numOrdem;
    
}
function aleatorio(min, max){
    let num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}
function ordem(a, b){
    return a - b;
}