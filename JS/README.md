# Revisão Javascript

## O que é Javascript?

É uma linguaguem de programação de alto nível, leve e interpretada. É uma das três principais tecnologias para web, juntamente com HTML(linguaguem de marcação de hipertexto) e CSS(Folhas de estilo em cascata), juntas elas são usadas para criar páginas web.

A principal finalidade do JavaScript é melhorar a experiência do usuário em páginas da web, adicionando interatividade e dinamismo. Ele pode ser usado para manipular o conteúdo de uma página, responder a eventos do usuário, validar formulários, criar efeitos visuais, entre outras funcionalidades.

Javascript evoluiu e continua evoluindo ao longo do tempo, sendo utilizado também em outros ambientes, como servidores (NodeJS) e em aplçicativos móveis. Permitindo uma ampla variedade de aplicaçãoes. 

## Diferença de Sintaxe e Semântica

São dois conceitos muito importantes da programação, e eles descrevem aspectos diferentes do código fonte.

1. **Sintaxe:**
   -  A sintaxe se refere à estrutura gramatical e às regras específicas de como você deve escrever o código em uma linguagem de programação, por exemplo: `if (idade > 18 console.log('Maior de idade');`, falta um parêntese de fechamento na condição do `if`, resultando em erro de sintaxe.
2. **Semântica:**
   - A semântica, por outro lado, está relacionada ao significado do código, ou seja, o que o código realmente faz, por exemplo, se você tentar dividir uma string por outra `("abc" / "def")`, a sintaxe pode estar correta, mas a semântica não faz sentido porque a divisão não é uma operação válida para strings.

Se a sintaxe não estiver correta, o código não funciona. No entanto, mesmo com uma sintaxe correta, problemas semânticos podem levar a resultados indesejados ou a programas que não fazem o que você espera. Então, ambos se tornam importantes para o desenvolvimento e "andam" juntos.

## Primeiros passos

O primeiro passo é criar um arquivo com o que termine em `.js`, como por exemplo `script.js`.

Para utilizar o `Javascript` com `HTML`, precisamos referenciá-lo no arquivo `HTML`, normalmente, ele é referenciado no final do arquivo, dentro da TAG `<body>`, dessa forma:

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
             <!-- corpo da página que será mostrado na tela -->
            <script src="./script.js"></script>
        </body>
    </html>
```

## Conceitos do Javascript

### Comentários no código

Basicamente existe duas formas de comentar no código, em linha e em blocos de código, fazemos dessa forma: 

```Javascript
    // comentário em linha

    /* Comentário
       em bloco de 
       código
    */
```

### Variáveis

As variáveis desempenham o papel de "recipientes" fundamentais para o armazenamento e manipulação de dados. Elas retêm valores em espaços de memória designados, sendo acessíveis posteriormente por meio dos nomes atribuídos a essas variáveis. No contexto do Javascript, há três palavras reservadas específicas para a declaração de variáveis: `var`, `let` e `const`.

#### Escopo de Função vs. Escopo de Bloco
- `var`: Tem escopo de função, o que significa que a variável é visível em toda a função, mesmo fora dos blocos de código.
- `let` e `const`: Têm escopo de bloco, limitando a visibilidade da variável ao bloco em que foram declaradas. Isso ajuda a evitar problemas de poluição no escopo.

#### Declaração de variáveis 
Ao declarar uma variável, é necessário iniciar com uma das palavras reservadas mencionadas (`var`, `let` ou `const`), seguida pelo nome desejado. Em seguida, utiliza-se o operador de atribuição `=` para, finalmente, associar o valor ou dado que se pretende armazenar na memória a essa variável.

1. `var` (atualmente seu uso é evitado) 
```Javascript
   var nome = Katiene;
```
- A palavra reservada `var` foi a maneira original de declarar variáveis em JavaScript e atualmente é recomendado que se use `let` ou `const`. O `var` tem algumas características que podem levar a comportamentos inesperados e dificultar o desenvolvimento de código seguro e previsível, algumas das razões são:  
   - Tem escopo de função.
   - **Hoisting:** É elevada (hoisted) para o topo do escopo da função ou do contexto global, o que pode resultar em comportamentos. inesperados.
     ```javascript
         console.log(a); // retorna undefined, e não um erro de ReferenceError
         var a = 5;
     ```
2. `let` (usada para variáveis que podem ser reatribuídas, ou seja, ter seus valores alterados após a inicialização, sua inicialização  não é obrigatória)
   ```javascript
         let nome;
         nome = Katiene;
         nome = Ana;
     ```
3. `const` (usada para constantes, ou seja, o valor não pode ser reatribuído após a atribuição inicial, sua inicialização é obrigatória)
    ```javascript
         const nome; //Isso resultaria em um erro, pois uma constante deve ser inicializada
    
         const nome = Katiene;
         nome = Ana; //resultaria em um erro, pois nome não pode ser reatribuído 
     ```
    
Use `let` quando precisar de uma variável que pode ser reatribuída. Use `const` quando quiser garantir que o valor da variável permaneça constante após a inicialização.

Em geral, é uma boa prática usar `const` sempre que possível, pois promove imutabilidade, o que pode tornar o código mais previsível e menos propenso a erros. Use `let` apenas quando souber que precisará reatribuir valores.

#### Palavras reservadas
São palavras que têm um significado específico na sintaxe e na semântica da linguagem, e não devem ser usadas como nomes de variáveis, funções ou qualquer outro identificador em seu código, pois isso pode resultar em erros, como por exemplo:
```javascript
   let const = Katiene;
```
A palavra `const` é uma palavra reservada e tentar utilizá-la para nomear uma variável, resultara em erro no seo código. 

#### Práticas recomendadas para nomear variáveis 

- Use nomes que descrevam claramente o propósito ou conteúdo da variável.
- Adote uma convenção de nomenclatura consistente, é comum usar o estilo camelCase para nomes de variáveis, dessa forma: `nomeDaVariavel`.
- Evite nomes genéricos como `temp` para `temperatura`, a menos que seja absolutamente claro no contexto o que eles representam.
- Evite abreviações excessivas como `qtdd` para `quantidade`, para manter a clareza.
- Escolha nomes consistentes e de acordo com o objetivo do código.
- Use comentários para esclarecer (O uso é somente se for necessários, comentários excessivos podem poluir a leitura e entendimento do código).

### Tipos de Dados
JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que você não precisa declarar explicitamente o tipo de dados de uma variável antes de usá-la. Os tipos de dados em JavaScript podem ser divididos em dois grupos: tipos primitivos e tipos de objetos.

#### Tipos Primitivos:

São os tipos de dados mais básicos e simples, que representam valores imutáveis. Eles são armazenados diretamente na variável, o que significa que quando você atribui um valor primitivo a uma variável, a própria variável contém o valor real. Os tipos primitivos incluem:

1. Number:
      - Representa números inteiros ou de ponto flutuante.
      ```javascript
            let inteiro = 42;
            let pontoFlutuante = 3.14;   
      ```
2. String:
      - Representa sequências de caracteres.
      ```javascript
         let texto = "Olá, mundo!";            
      ```
3. Boolean:
      - Representa valores lógicos true ou false.
      ```javascript
          let verdadeiro = true;
          let falso = false;           
      ```
4. Null:
      - Representa a ausência de valor intencional.
      ```javascript
         let nulo = null;            
      ```
5. Undefined:
      - Indica que uma variável foi declarada, mas não foi atribuída um valor.
      ```javascript
         let indefinido;            
      ```
6. BigInt:
      - Permite representar inteiros maiores que 2^53 - 1.
      ```javascript
         let numeroGrande = 9007199254740991n;            
      ```
7. Symbol:
      - Introduzido no ECMAScript 6, representa identificadores únicos.
      ```javascript
         let simbolo = Symbol("descrição");           
      ```

#### Tipos de Objetos:

Os tipos de objetos em JavaScript são estruturas de dados mais complexas e podem armazenar coleções de dados e funcionalidades. Ao contrário dos tipos primitivos, os tipos de objetos não armazenam diretamente os valores, mas sim uma referência à localização na memória onde os valores estão armazenados, falerei mais sobre eles depois. Alguns tipos de objetos comuns incluem:

1. Object:
      - Representa um objeto, que é uma coleção de pares chave-valor.
      ```javascript
          let pessoa = { nome: "João", idade: 30 };           
      ```
2. Array:
      - Representa uma lista ordenada de valores.
      ```javascript
         let lista = [1, 2, 3, 4];            
      ```
3. Function:
      - Representa uma função.
      ```javascript
          function somar(numeroUm, numeroDois) {
           return numeroUm + numeroDois;
      }           
      ```
4. Date:
      - Representa uma data e hora.
      ```javascript
           let dataAtual = new Date();          
      ```
É importante entender esses tipos, pois a manipulação adequada deles é crucial para o desenvolvimento eficaz em JavaScript. Além disso, tenha em mente que JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável pode ser alterado durante a execução do programa.

### Operadores
Os operadores são símbolos especiais que realizam operações em variáveis e valores. Eles são essenciais para realizar cálculos, comparações, operações lógicas e manipulações em dados.

#### Operadores aritméticos
1. Adição (`+`): soma dois ou mais valores.
      ```javascript
           let resultado = 2 + 5; // resultado: 7
      ```
2. Subtração (`-`):  Subtrai o segundo valor do primeiro.
      ```javascript
           let resultado = 6 - 2; // resultado: 4    
      ```
3. Multiplicação (`*`) : Multiplica dois valores
      ```javascript
           let resultado = 2 * 6; // resultado: 12    
      ```
4. Divisão (`\`) Divide o primeiro valor pelo segundo.
      ```javascript
           let resultado = 6 \ 2; // resultado: 3    
      ```
5. Módulo (`%`): Retorna o resto da divisão do primeiro valor pelo segundo.
      ```javascript
           let resultado = 5 % 2;  // Resultado: 1 (resto da divisão de 5 por 2)  
      ```
6. Incremento (`++`):  Adiciona 1 ao valor da variável.
      ```javascript
           let contador = 6 ;
           contador++; // resultado: 7    
      ```
7. Decremento (`--`): Subtrai 1 do valor da variável.
      ```javascript
           let contador = 6;
           contador--; // resultado: 5    
      ```

#### Operadores de atribuição 

1. Operador simples (`=`): Atribui um valor a uma variável.
      ```javascript
           let numero = 6;    
      ```
2. Atribuição com Operação (`+=, -=, *=, /=`): Realiza uma operação antes de atribuir o resultado à variável.
      ```javascript
          let numero = 5;
          numero += 3;  // resultado: 8

          let numero = 5;
          numero -= 3;  // resultado: 2

          let numero = 6;
          numero *= 2;  // resultado: 12

          let numero = 6;
          numero /= 2;  // resultado: 3  
      ```
#### Operadores de comparação: compara se dois valores e retornar um resultado booleano (`true` ou `false`).

1. Igualdade (`==`): Compara se dois valores são iguais, mas não verifica o tipo.
      ```javascript
           5 == "5";   // true (compara apenas o valor)  
      ```
2. Igualdade Estrita (`===`): Compara se dois valores são iguais em valor e tipo.
      ```javascript
           5 === "5";  // false (compara valor e tipo)  
      ```
3. Desigualdade (`!=`): Compara se dois valores são diferentes, mas não verifica o tipo.
      ```javascript
           5 != "5";   // false (compara apenas o valor) 
      ```
4. Desigualdade Estrita (`!==`): Compara se dois valores são diferentes em valor ou tipo.
      ```javascript
           5 !== "5";  // true (compara valor e tipo) 
      ```
5. Maior que (`>`): Verifica se o valor da esquerda é estritamente maior que o valor da direita.
      ```javascript
          10 > 5;   // true 
      ```
6. Menor que (<): Verifica se o valor da esquerda é estritamente menor que o valor da direita.
      ```javascript
           5 < 10;   // true 
      ```
7. Maior ou Igual a (>=): Verifica se o valor da esquerda é maior ou igual ao valor da direita.
      ```javascript
           10 >= 10;   // true  
      ```
8. Menor ou Igual a (<=): Verifica se o valor da esquerda é menor ou igual ao valor da direita.
      ```javascript
           5 <= 10;   // true  
      ```
#### Operadores lógicos 
1. AND (`&&`):  Retorna `true` se ambos os operandos forem `true`, caso contrário, retorna `false`.
      ```javascript
           let resultado = (5 > 10) || (10 < 20);   // Resultado: true
      ```
2. OR (`||`): Retorna `true` se pelo menos um dos operandos for `true`, caso contrário, retorna `false`.
      ```javascript
           let resultado = (5 > 10) || (10 < 20);   // Resultado: true 
      ```
3. NOT (`!`): Inverte o valor lógico do operando; se o operando for `true`, retorna `false`, e se for `false`, retorna `true`.
      ```javascript
           let resultado = !(5 > 10);   // Resultado: true 
      ```

