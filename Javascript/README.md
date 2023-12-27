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
- A palavra reservada `var` foi a maneira original de declarar variáveis em JavaScript, mas ela tem algumas características que podem levar a comportamentos inesperados e dificultar o desenvolvimento de código seguro e previsível, algumas das razões são:  
   - Tem escopo de função.
   - **Hoisting:** É elevada (hoisted) para o topo do escopo da função ou do contexto global, o que pode resultar em comportamentos. inesperados.
     ```javascript
         console.log(a); // retorna undefined, e não um erro de ReferenceError
         var a = 5;
     ```
- Por isso é recomendado o uso de `let` ou `const`.
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
