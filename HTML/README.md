# Revisão HTML

Um ponto importante, é que a maioria das TAG's são declaras utilizando os sinais de `<` e `>`. Temos as TAG's de abertura e fechamento `<exemplo></exemplo>` e algumas TAG's são de auto fechamento `<exemplo/>`.

A primeira coisa que colocamos no arquivo é `DOCTYPE` que serve para indicar ao navegador que ele deve utilizar a última versão do HTML, ele é colocado no inicio do arquivo dessa forma: 

```HTML 
    <!DOCTYPE html>
 ```

Depois da declaração do `DOCTYPE`, a primeira TAG que colocamos no arquivo é `html`, ela é usada para indicar o inicio de um documento HTML e o seu escopo, e para informar ao navegador que o conteúdo do arquivo é um documento HTML. Sempre importante que essa TAG seja acompanhanda do atributo `lang` que indica o idioma da página. Todas as outras TAG's devem ser colocadas dentro dela, a definição é feita dessa forma:

```HTML
    <html lang="pt">
    </html>
```

Em seguida, colocamos o `head` que é o cabeçalho da página e contém informações sobre o documento, como título da página, links para arquivos CSS e Javascript, e outras informações importantes como as `Meta Tags`, elas fornecem informações da página web que ajudam os mecanismos de busca a indexar o conteúdo da página, existe vários tipos de `Meta Tags` para fornecer informações adicionais sobre a página, como o autor, descrição, palavras-chave, etc. Exemplo do `head` com algumas das TAG's principais:

```HTML
    <html lang="pt">
        <head>
            <title>Página exemplo</title> 
            <meta charset="UTF-8"> <!-- O charset=UTF-8 indica o uso de caracteres especiais -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- controla as dimensões e a escala da página web em diferentes dispositivos. Ele é útil para criar páginas responsivas, que se adaptam ao tamanho e à orientação da tela do usuário. -->

             <!-- Informações úteis para os mecanismos de busca -->
            <meta name="author" content="Katiene Souza">
            <meta name="description" content="Página exemplo">
            <meta name="keywords" content="desenvolvimento, ti, html">
            <link rel="stylesheet" href="./style.css"> <!-- sempre importante se atentar se o caminho está certo -->
        </head>
    </html>
```

A TAG `body`, corresponde ao corpo da página e todo o conteúdo que for colocado aqui dentro, será mostrando na tela, ele fica logo abaixo do `head` e é definido dessa forma: 

```HTML
    <html lang="pt">
        <head>
            <title>Página exemplo</title> 
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="Katiene Souza">
            <meta name="description" content="Página exemplo">
            <meta name="keywords" content="desenvolvimento, ti, html">
        </head>
        <body> 
            <!-- conteúdo que será mostrado na tela -->
        </body>
    </html>
```

Vale se atentar que o arquivo `Javascript` é normalmente chamado no final do documento dentro da TAG body, ficando da seguinte forma: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
             <!-- conteúdo que será mostrado na tela -->
            <script src="./script.js"></script>
        </body>
    </html>
```

## Principais TAG's utilizadas no body/corpo da página

### Título

Vamos começar por uma TAG normalmente utilizada em títulos, que é chamada de `<h1>`, porém, ela pode ir até o `<h6>`, é uma TAG de abertura e fechamento e utilizada da seguinte forma: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
             <h1>Título principal</h1>
             <h2>Subtítulo 1</h2>
             <h3>Subtítulo 2</h3>
              <!-- e assim por diante ate o </h6> -->
        </body>
    </html>
```

### Parágrafo

Temos também a TAG `<p>` que é utilizada quando vamos colocar um parágrafo em nossa página, também é uma TAG de abertura e fechamente e utilizamos assim: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
             <p>Lorem ipsum dolor sit amet.</p>
        </body>
    </html>
```

### Links

Para utilizar links em nossas páginas, utilizamos a TAG `<a>`, nela também utilizamos o atributo `<alt>` para descrever o link:

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <a href="#" alt="página de exemplo">Página 1</a>      
        </body>
    </html>
```

### Div 
No HTML existe uma TAG frequentemente utilizada para criar contêineres genéricos em uma página da web chamada de`<div>`. A TAG `<div>` por si só não tem significado semântico específico; em vez disso, é usada para agrupar e estruturar outros elementos HTML, proporcionando uma maneira de organizar o conteúdo em seções ou blocos. Ela é usada dessa forma:

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <div>
                <h1>Título 1</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis omnis, nam laborum, architecto totam minus molestiae aliquam asperiores quaerat placeat consequatur quisquam sint incidunt quis eveniet cupiditate ducimus rem dolor.</p>
                <img src="./imagem-exemplo.png" alt="Uma imagem de exemplo" width="250"/>
           </div>    
        </body>
    </html>
```

### Imagem

Uma outra TAG muito utilizada, é a `<img/>`, que serve quando queremos colocar uma imagem em nossa página, é uma TAG de auto fechamento e temos basicamente, duas formas de passar o caminho da imagem: local (imagem baixada na máquina) ou remota (por um link da internet), o caminho é especificado no atributo `src`. A TAG `<img/>` normalmente é acompanhada de mais três atributos, `alt`, `height ` e `width`, o `alt`, é um recurso de acessibilide que permite a leitura de leitores de tela e também é a descrição que aparecerá na sua página caso a imagem não apareça, o `heigth` define a altura da imagem e o `width`a largura, vejamos como fica: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
             <!-- Podemos definir o width ou o height, não precisa ser necessariamente os dois, ainda tem a opção de colocar isso no estilo do CSS. -->
             <img src="./imagem-exemplo.png" alt="Uma imagem de exemplo" width="250"/>
             <img src="https://avatars.githubusercontent.com/u/85809975?v=4" alt="Selfie de uma mulher branca de cabelos cacheados" width="250"/>
        </body>
    </html>
```

### Listas

Podemos também criar listas que podem ser feitas de duas formas, `<ul>` onde você cria uma lista não ordenada (sua lista será mostrada na tela dessa forma - Exemplo) ou `<ol>` que é a criação de uma lista ordenada (ela será mostrada assim 1. exemplo), após escolher a forma que quer criar sua lista, você define o item dela utilizando `<li>`, ficnado dessa forma: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body>
            <!-- Lista não-ordenada -->
            <ul> 
                <li>Manga</li>
                <li>Banana</li>
                <li>Maça</li>
            </ul>

            <!-- Lista ordenada -->
            <ol>
                <li>Varrer a casa</li>
                <li>Alimentar o PET</li>
                <li>Limpar o carro</li>
                <li>Fazer o almoço</li>
            </ol>
        </body>
    </html>
```

### Tabelas

Uma outra coisa que podemos fazer, é criar tabelas, começamos utilizando a TAG `<table>`, que é o elemento raiz que define uma tabela e colocamos as outras TAG's dentro dela, dentro da `<table>` colocamos duas TAG's que armazenaram informações diferentes, uma é a `<thead>` que representa o cabeçalho da tabela e outra é o `<tbody>` que representa o corpo da tabela. Dentro da `<thead>`, colocaremos outras duas TAG's, uma é `<tr>`, que representa uma linha na tabela e dentro dela a `<th>`, que representa uma célula de cabeçalho. Já na `<tbody>`, também utilizaremos o `<tr>`, porém, dentro dela, a TAG utilizada será a `<td>`, que representa uma célula de dados (não cabeçalho). Agora vamos ao exemplo: 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th colspan="4">Cabeçalho 1</th> <!--  O atributo colspan define quantas colunas uma célula de cabeçalho deve se estender -->
                    </tr>
                    <tr>
                        <th>Cabeçalho 2</th>
                        <th>Cabeçalho 3</th>
                        <th>Cabeçalho 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dado 1</td>
                        <td>Dado 2</td>
                        <td>Dado 3</td>
                        <td rowspan="2">Dado com rowspan</td> <!--  O atributo rowspan especifica quantas linhas a célula deve se estender verticalmente, basicamente, ele "mescla" as células. -->
                    </tr>
                    <tr>
                        <td>Dado 4</td>
                        <td>Dado 5</td>
                        <td>Dado 6</td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>
```

## Formulários

Os formulários `<form>` são elementos que permitem aos usuários interagirem com uma página web, enviando dados para o servidor. Formulários são frequentemente utilizados para coletar informações do usuário, como dados de login, detalhes de contato, pesquisas, etc.


## Identificação de Elementos únicos ou em grupo

Um recurso muito valiosos do HTML, é a utilização de dois atributos que podemos passar para as TAG's chamadas `id` e `class`, elas podem ser chamadas nos arquivos de CSS para aplicar estilos e também nos de javascript para que possamos manipular os elementos. A `class` é utilizada para agrupar elementos no HTML, podendo ser possível aplicar estilo CSS comuns a esse grupo, um elemento pode ter múltiplas classes separadas por espaços. Já o `id`, é utilizado para identificar um elemento de maneira única em uma página, podendo aplicar estilos ou realizar manipulações com JavaScript de forma específica. Exemplo:

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
            <p class="destaque paragrafo">Este é um parágrafo destacado</p> <!--  aqui, definimos duas classes para esse parágrafo -->

            <p id="principal">Este é um parágrafo principal</p>

            <!-- como chamar cada atributo no arquivo CSS -->
              <style>
                /* para classes */
                .paragrafo {
                    color: tomato;
                }

                /* para ids */
                #principal {
                    color: tomato;
                }
              </style>
        </body>
    </html>
```


## HTML Semântico

Refere-se à prática de usar tags HTML de uma maneira que reflete o significado e a estrutura do conteúdo da página da web. Isso não apenas melhora a legibilidade do código, mas também ajuda os motores de busca e outros agentes de usuário a entenderem melhor a estrutura e o propósito do conteúdo. Apresentando as principais TAG's semânticas:

1. `<header>`: É uma TAG de cabeçalho que utilizamos dentro do `<body>` para colocarmos por exemplo a logo ou nome da página em destaque, não deve portanto ser confudida com a TAG `<head>` que é utilizada para colocarmos informações sobre a página. 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <header>
                <img id="logo" href="./logo-exemplo.png" alt="logo de exemplo da página" width="250"/>
           </header>
        </body>
    </html>
```

1. `<aside>`>: Indica conteúdos laterais ou principal, como menus ou listas.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <aside>
                <ul>  <!-- simulando um menu simples -->
                    <li>Perfil</li>
                    <li>Mensagens</li>
                    <li>Configurações</li>
                </ul>
           </aside>
        </body>
    </html>
```

1. `<section>`: define seções genérica de conteúdos e gerealmente possui um título.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <section>
                <h1>Título 1</h1>
                <p>Lorem ipsum dolor sit amet.</p>  
           </section>
        </body>
    </html>
```
1. `<article>`: destaca um conteúdo independente de um documento, página, aplicação, ou site. Basicamente, ele não depende de outro conteúdo para fazer sentido, por exemplo, um artigo em um blog. 

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <article>
                <h2>Título do artigo 1</h2>
                <p>Lorem ipsum dolor sit amet.</p>  
           </article>
        </body>
    </html>
```

1. `<nav>`: utilizado quando precisamos representar um grupo de links de navegação, que utiliza as TAG's de listas.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <nav>
                <ul> 
                    <li><a href="#">pagina 1</a></li>
                    <li><a href="#">pagina 2</a></li>
                    <li><a href="#">pagina 3</a></li>
                </ul>
           </nav>
        </body>
    </html>
```

1. `<main>`: conteúdo principal da página ou seja de maior relevância, uma página deve ter apenas um conteúdo principal.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
           <main>
                <h1>Conteúdo principal</h1>
                <p>Lorem ipsum dolor sit amet.</p> 
           </main>
        </body>
    </html>
```

1. `<figure>`: marcação de uso específico para a inserção de uma figura.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
            <figure> 
                <img src="https://avatars.githubusercontent.com/u/85809975?v=4" alt="Selfie de uma mulher branca de cabelos cacheados" width="250"/>
            </figure>            
        </body>
    </html>
```

1. `<footer>`: colocado no final da página para representar o rodapé, normalmente utilizado para descrever informações de autoria.

```HTML
    <html lang="pt">
        <head>
            <!-- conteúdo do head/cabeçalho -->
        </head>
        <body> 
            <footer> 
                <p>Katiene Souza</p>
                <p>Publicado em 21/12/2023</p>
            </footer>            
        </body>
    </html>
```
