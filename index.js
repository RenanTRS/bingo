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
    //document.getElementById("cartela").innerHTML = numeros + "<br>";
    var cartela = document.querySelector('#cartela');
    cartela.innerHTML = numeros;
        
    
    
}
function aleatorio(min, max){
    let num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}
function ordem(a, b){
    return a - b;
}