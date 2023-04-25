// Criad uma variável para armazenar a string informada pelo usuário
let string = prompt("Digite uma string: ");

// Criada uma variável para armazenar a string invertida
let stringInvertida = "";

// Criado um laço de repetição for para percorrer a string de trás para frente e armazenar os caracteres na variável stringInvertida
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

// Exibida a string invertida no console
console.log("A string invertida é:", stringInvertida);
