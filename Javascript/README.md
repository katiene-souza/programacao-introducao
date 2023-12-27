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
