// Criada uma variável que determina o número a ser verificado, nesse caso usei o 55, se quiser testar outro número basta alterar o valor da variável.
const num = 55;

// Como a sequência de Fibonacci começa com 0 e 1, as variáveis foram iniciadas para os dois primeiros números da sequência
let a = 0;
let b = 1;

// Como é necessário armazenar os números da sequência foi criado um array
const sequencia = [a, b];

// Para armazenar o próximo número da sequência foi criada a variável proxNumero
let proxNumero = a + b;

// Foi criado o laço de repetição while para calcular os próximos números da sequência até chegar ao número informado
while (proxNumero <= num) {
  // Os valores de a, b e proxNumero serão atualizados a cada iteração
  a = b;
  b = proxNumero;
  proxNumero = a + b;

  // A cada iteração o próximo número será adicionado ao array
  sequencia.push(b);
}

// Criada um if/else para verificar se o número informado pertence à sequência ou não
if (proxNumero === num || b === num) {
  console.log(`O número ${num} pertence a Sequência de Fibonacci, a sequência é ${sequencia.join(', ')}.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
