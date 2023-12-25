# Revisão CSS

# O que é CSS?

Significa "Cascading Style Sheets" (Folhas de Estilo em Cascata), é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML. Em termos simples, o CSS é utilizado para controlar a aparência visual de uma página da web, ela é responsável por dar estilo a toda estrutura básica que você fez em HTML. Para fazer isso, você precisa referênciar seu arquivo de estilo no seu arquivo HTML dentro da TAG `<head>` e normalmente, referenciamos as TAG's, Id's ou Classes dentro do CSS para passar os estilos que queremos.

# Primeiros passos

O primeiro passo, é criar seu arquivo `style.css` no seu editor de código e depois referenciar ele no seu arquivo HTML dentro do `<head>` da seguinte forma:

```HTML
    <html lang="pt">
        <head>
             <!-- outras informações do head -->
            <link rel="stylesheet" href="./style.css"> <!-- sempre importante se atentar se o caminho está certo -->
        </head>
    </html>
```