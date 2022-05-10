/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array1 = [3, "Tiago", function () {}, { a: 12.6 }, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunction(array1)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ["Tiago", true, [2, 4, 6], { b: 99 }, 12.9];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParams(array2, 0));
console.log(twoParams(array2, 1));
console.log(twoParams(array2, 2));
console.log(twoParams(array2, 3));
console.log(twoParams(array2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var allBooks = {
    "O Mundo de Sofia": {
      quantidadedePaginas: 678,
      autor: "Jostein Gaarder",
      editora: "Companhia das Letras",
    },
    "Os Demônios": {
      quantidadedePaginas: 704,
      autor: "Fiódor Dostoiévski",
      editora: " Editora 34",
    },
    "O Vermelho e o Negro": {
      quantidadedePaginas: 632,
      autor: "Stendhal",
      editora: "Abril",
    },
  };

  return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "O Vermelho e o Negro";
console.log(
  "O livro " +
    bookName +
    " têm " +
    book(bookName).quantidadedePaginas +
    " páginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  "O autor do livro " + bookName + " é " + book(bookName).autor + "."
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "O livro " +
    bookName +
    " foi publicado pela editora " +
    book(bookName).editora +
    "."
);
