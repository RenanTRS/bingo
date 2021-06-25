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
    let listaNum = '';
    for(var i in numeros){
        if(numeros[i] < 10){
            //numOrdem.push('<p>'+'0'+numeros[i]+'</p>')
            listaNum += '<p>'+'0'+numeros[i]+'</p>';
        }else{
            //numOrdem.push('<p>'+numeros[i]+'</p>');
            listaNum += '<p>'+numeros[i]+'</p>';
        }
    }
    
    /*for(var c in numOrdem){
        let cartela = document.querySelector('#cartela');
        let caso = numOrdem[c];
        let teste = caso;
        cartela.innerHTML = teste;
    }*/
    var cartela = document.querySelector('#cartela');
    //cartela.innerHTML = numOrdem;
    cartela.innerHTML = listaNum;
    
}
function aleatorio(min, max){
    let num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}
function ordem(a, b){
    return a - b;
}