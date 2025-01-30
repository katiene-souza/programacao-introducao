# SQL e Modelagem de Dados: Construindo Bases Sólidas para Informações

## O Desafio da Modelagem de Dados

A criação de um banco de dados eficiente é um desafio que transcende o simples domínio técnico de SQL. **Uma modelagem de dados bem-feita é a espinha dorsal de qualquer sistema robusto e escalável**, funcionando como a ponte que conecta o mundo real ao universo digital. Ela envolve a criação de uma representação abstrata das informações que serão armazenadas, independentemente do sistema específico ou da entidade envolvida.

Nesta etapa crucial, o foco migra da tecnologia em si, como o Sistema Gerenciador de Banco de Dados (SGBD) a ser utilizado, para a **organização lógica e a estrutura fundamental dos dados**. Essa fase reflete o entendimento profundo do analista sobre as nuances do negócio e estabelece as regras necessárias para garantir a qualidade, a integridade e a consistência das informações. Em suma, a modelagem de dados coloca a **visão estratégica da informação em primeiro plano, antes mesmo de sua implementação técnica**.

## Bancos de Dados Relacionais: Organização e Eficiência

**Bancos de dados relacionais são estruturas projetadas para organizar dados de forma que se possa manipulá-los e recuperá-los com rapidez e segurança.** Eles representam um dos modelos mais utilizados para organizar e gerenciar informações, permitindo consultas complexas e garantindo a integridade dos dados.

Embora existam diversos tipos de bancos de dados, como os baseados em lista invertida, orientados a objetos, de rede, hierárquicos, e os NoSQL (não relacionais), este documento se concentrará na **modelagem de dados aplicada a bancos de dados relacionais**, que são amplamente utilizados em uma variedade de aplicações.

### Duas Perspectivas: Informal e Formal

A estrutura de um banco de dados relacional pode ser compreendida de duas maneiras: **informal e formal**.

*   **Abordagem Informal:** Foca nos aspectos práticos e na usabilidade do banco de dados. Utiliza termos mais intuitivos como **tabela**, **linha** e **coluna**, facilitando a compreensão para aqueles que estão iniciando na área.
*   **Abordagem Formal:** Adota uma perspectiva mais rigorosa, preocupando-se com a semântica formal do modelo. Emprega termos técnicos como **relação** (para tabela), **tupla** (para linha) e **atributo** (para coluna). Essa abordagem é crucial para a compreensão teórica e para a implementação de algoritmos complexos relacionados ao banco de dados.

Em um banco de dados relacional (BDR), todos os dados são armazenados em **tabelas**, estruturas simples compostas por linhas e colunas. A verdadeira potência deste modelo reside na capacidade de **associar tabelas entre si por meio de relacionamentos**, que são estabelecidos ao conectar um ou mais atributos de uma tabela a um ou mais atributos de outra.

## Componentes Fundamentais de um Banco de Dados Relacional

Vamos detalhar os principais componentes que constituem a estrutura de um banco de dados relacional:

### 1. Entidade (Tabela)

A **entidade** é o alicerce do banco de dados relacional, representando um conjunto de elementos semelhantes, sejam eles pessoas, objetos concretos ou conceitos abstratos. Cada **tabela** em um banco de dados representa uma entidade específica. Por exemplo, em um banco de dados de uma loja, poderíamos ter entidades como `Clientes`, `Produtos` e `Pedidos`.

Cada **linha** (ou registro) dentro de uma tabela representa uma instância única da entidade. Por exemplo, na tabela `Clientes`, cada linha corresponderia a um cliente específico, com seus dados individuais.

**Representação Visual:** Em diagramas de modelagem de dados, como o Diagrama Entidade-Relacionamento (DER), as entidades são frequentemente representadas por retângulos.

### 2. Atributos (Colunas)

Os **atributos** definem as propriedades ou características de uma entidade. Eles correspondem às **colunas** de uma tabela e descrevem os dados que podem ser armazenados sobre cada instância da entidade.

Cada atributo possui um **tipo de dado** associado, que define o tipo de valor que ele pode conter (por exemplo, texto, número, data). Na tabela `Clientes`, os atributos poderiam incluir `Nome`, `CPF`, `Email`, `Telefone`, e `Data de Nascimento`.

#### Tipos de Atributos

Os atributos podem ser classificados de acordo com suas características:

*   **Simples:** Atributos atômicos, ou seja, indivisíveis em partes menores com significado próprio. Exemplo: `CPF` de uma pessoa.
*   **Compostos:** Atributos que podem ser decompostos em partes menores com significado independente. Exemplo: `Endereço` (composto por `Rua`, `Número`, `Bairro`, `Cidade`, `Estado`).
*   **Monovalorados:** Atributos que assumem apenas um valor para cada instância da entidade. Exemplo: `Data de Nascimento`.
*   **Multivalorados:** Atributos que podem assumir múltiplos valores para cada instância da entidade. Exemplo: `Telefone` (uma pessoa pode ter vários números de telefone).
*   **Chave (ou Identificador):** Atributos que identificam unicamente cada instância da entidade. Veremos mais sobre chaves na próxima seção.

### 3. Chaves: Garantindo a Unicidade e Relacionamentos

**Chaves** são atributos ou conjuntos de atributos que desempenham um papel crucial na integridade e na estrutura dos dados em um banco de dados relacional. Elas garantem a unicidade dos registros e permitem estabelecer relacionamentos entre as tabelas.

*   **Chave Primária (Primary Key - PK):** Um atributo (ou conjunto de atributos) que **identifica unicamente cada registro** em uma tabela. A chave primária é **obrigatória** e **não pode conter valores nulos**. Ela garante que não haja duplicidade de registros na tabela. Exemplo: Na tabela `Clientes`, o `CPF` poderia ser utilizado como chave primária, pois cada cliente possui um CPF único.
*   **Chave Estrangeira (Foreign Key - FK):** Um atributo (ou conjunto de atributos) em uma tabela que **faz referência à chave primária de outra tabela**. A chave estrangeira estabelece um **relacionamento** entre as duas tabelas, garantindo a integridade referencial. Por exemplo, em uma tabela `Pedidos`, um atributo `CPF_Cliente` (chave estrangeira) poderia referenciar o `CPF` (chave primária) da tabela `Clientes`, indicando qual cliente realizou aquele pedido.

### 4. Domínio: Definindo Valores Válidos

O **domínio** de um atributo define o conjunto de valores válidos que ele pode assumir. Ele restringe os dados que podem ser inseridos em uma coluna, garantindo a consistência e a qualidade das informações.

Por exemplo, o domínio do atributo `Sexo` poderia ser definido como o conjunto `{Masculino, Feminino}`, impedindo a inserção de valores inválidos como "Indefinido".

### 5. Relacionamentos: Conectando as Entidades

**Relacionamentos** definem as conexões lógicas entre as entidades (tabelas) em um banco de dados. Eles representam como as informações de uma tabela se associam às informações de outra tabela.

Os relacionamentos são definidos por meio das chaves primárias e estrangeiras e são classificados de acordo com a **cardinalidade**, que especifica quantas instâncias de uma entidade podem estar relacionadas a quantas instâncias de outra entidade. Os tipos mais comuns de cardinalidade são:

*   **Um para Um (1:1):** Uma instância de uma entidade se relaciona com apenas uma instância de outra entidade, e vice-versa.
*   **Um para Muitos (1:N) ou Muitos para Um (N:1):** Uma instância de uma entidade pode se relacionar com várias instâncias de outra entidade, mas uma instância da segunda entidade se relaciona com apenas uma instância da primeira.
*   **Muitos para Muitos (N:M):** Uma instância de uma entidade pode se relacionar com várias instâncias de outra entidade, e vice-versa. Este tipo de relacionamento geralmente requer uma tabela intermediária (também chamada de tabela associativa) para ser implementado.

### 6. Registros (Tuplas ou Linhas)

Cada **linha** em uma tabela representa um **registro** (ou **tupla**, na terminologia formal), contendo um conjunto específico de valores para os atributos da entidade. Cada registro representa uma instância única da entidade.

Por exemplo, na tabela `Clientes`, um registro poderia conter os valores: `Nome: João da Silva`, `CPF: 123.456.789-00`, `Email: joao.silva@email.com`, `Telefone: (11) 99999-9999`, `Data de Nascimento: 1990-05-15`.

## Modelos de Dados: Conceitual, Lógico e Físico - Uma Jornada do Abstrato ao Concreto

A construção de um banco de dados é uma jornada que se inicia com a **compreensão profunda das necessidades do negócio** e culmina na implementação de uma solução tecnológica robusta. Essa jornada é guiada por três modelos fundamentais: **Conceitual, Lógico e Físico**, cada um desempenhando um papel crucial em diferentes estágios do processo.

O ponto de partida é a **análise de requisitos**. Nessa fase, mergulhamos no universo do cliente, buscando entender a fundo as regras de negócio, os processos envolvidos e as necessidades dos usuários. É um momento de escuta ativa, onde buscamos capturar a essência do sistema que será construído, seus objetivos e como ele se encaixa no dia a dia da organização.

### 1. Modelo Conceitual: A Essência do Negócio em um Esboço

Com a compreensão das necessidades do negócio em mãos, entramos na fase do **Modelo Conceitual**. Esse modelo representa a **primeira tentativa de organizar e estruturar as informações**, criando um esboço de alto nível que captura a essência do sistema. É como o primeiro rascunho de um arquiteto, ainda distante da planta final, mas que já delineia os principais elementos e suas interconexões.

Através de um processo de **abstração**, o Modelo Conceitual transforma a análise de requisitos em uma representação visual das **entidades** (conceitos-chave do negócio) e seus **relacionamentos**.  Imagine-o como um mapa simplificado do sistema, onde cada entidade é um ponto de interesse e os relacionamentos são os caminhos que os conectam.

Neste modelo, focamos nos **conceitos fundamentais do negócio**. Por exemplo, em um sistema acadêmico, as entidades poderiam ser "Professor", "Turma" e "Aluno". Definimos também alguns **atributos essenciais** para cada entidade, como o "Nome" do professor, o "Código" da turma e a "Matrícula" do aluno.

Os **relacionamentos** indicam como as entidades interagem entre si. Um professor "ministra" várias turmas, uma turma é "composta" por vários alunos, e um aluno "está matriculado" em uma turma.

**Em resumo, o Modelo Conceitual:**

*   É uma visão de **alto nível**, independente de tecnologia.
*   Foca nos **conceitos-chave** e suas **relações**.
*   É **facilmente compreensível** por todos os envolvidos, inclusive aqueles sem conhecimento técnico aprofundado.
*   Serve como base para a comunicação e validação do entendimento do negócio.

### 2. Modelo Lógico: Definindo as Regras do Jogo

Após a validação do Modelo Conceitual, avançamos para o **Modelo Lógico**. Aqui, começamos a detalhar as entidades e seus relacionamentos, adicionando **regras e restrições** que garantem a integridade e a consistência dos dados. É como se estivéssemos definindo as regras do jogo, preparando o terreno para a implementação do sistema.

Um aspecto crucial dessa fase é a definição das **chaves primárias**.  Essas chaves são atributos (ou conjuntos de atributos) que **identificam unicamente** cada registro dentro de uma tabela. No exemplo de um cadastro de clientes, o CPF poderia ser a chave primária, garantindo que não haja dois clientes com o mesmo número.

Além disso, estabelecemos formalmente os **relacionamentos entre as entidades** através das **chaves estrangeiras**. Essas chaves são atributos em uma tabela que fazem referência à chave primária de outra tabela. Em um sistema de vendas, cada item vendido precisa estar associado a um pedido específico. Essa ligação é feita por meio de uma chave estrangeira na tabela de "Itens Vendidos" que referencia a chave primária da tabela "Pedidos". Por sua vez, um pedido está associado a um cliente específico, sendo esse relacionamento feito por uma chave estrangeira que referencia a chave primária da tabela "Clientes".

**O Modelo Lógico, portanto:**

*   Detalha as entidades, atributos e relacionamentos.
*   Define **chaves primárias e estrangeiras**.
*   Especifica **regras de integridade**.
*   Ainda é **independente da tecnologia** específica de banco de dados que será utilizada.
*   Serve como um guia para a construção do Modelo Físico.

### 3. Modelo Físico: A Implementação em Detalhes Técnicos

Finalmente, chegamos ao **Modelo Físico**.  É nessa fase que os detalhes técnicos do projeto são definidos, levando em conta a **tecnologia específica** que será utilizada para implementar o banco de dados. Aqui, a visão abstrata dos modelos anteriores se transforma em uma especificação concreta, pronta para ser implementada.

No Modelo Físico, definimos:

*   O **Sistema Gerenciador de Banco de Dados (SGBD)** que será utilizado (por exemplo, MySQL, PostgreSQL, Oracle, SQL Server).
*   Os **tipos de dados** específicos para cada atributo, levando em conta as características do SGBD escolhido.
*   A **estrutura física** das tabelas, incluindo índices, views e outros objetos do banco de dados.
*   As **políticas de backup e segurança** que serão implementadas para garantir a proteção dos dados.

Nesta fase, são gerados os **scripts SQL** (DDL - Data Definition Language) que serão utilizados para criar a estrutura do banco de dados no SGBD escolhido.

**Em resumo, o Modelo Físico:**

*   É a **especificação detalhada** para a implementação do banco de dados.
*   Leva em conta a **tecnologia específica** do SGBD.
*   Define a **estrutura física** das tabelas e outros objetos.
*   Gera os **scripts SQL** para a criação do banco de dados.
*   Estabelece as **políticas de segurança e backup**.

## DER e MER: Representações Visuais para Facilitar o Entendimento

Para facilitar a compreensão e a comunicação dos modelos de dados, especialmente os modelos Conceitual e Lógico, utilizamos representações gráficas como o **Diagrama Entidade-Relacionamento (DER)** e o **Modelo Entidade-Relacionamento (MER)**.

### Diagrama Entidade-Relacionamento (DER): Um Mapa do Banco de Dados

O **DER** funciona como um mapa visual que ilustra a estrutura do banco de dados de forma clara e objetiva. Ele representa as **entidades**, seus **atributos** e os **relacionamentos** entre elas, permitindo uma compreensão rápida e intuitiva do sistema.

**Como funciona?**

Imagine que estamos projetando um banco de dados para uma biblioteca. As entidades principais poderiam ser "Livro", "Autor" e "Empréstimo". No DER:

*   Cada **entidade** é representada por um **retângulo**.
*   Cada **atributo** é representado por um **círculo** (ou elipse) conectado à sua respectiva entidade.
*   Os **relacionamentos** são representados por **linhas** que conectam as entidades, com **losangos** indicando o tipo de relacionamento.

**Benefícios do DER:**

*   **Comunicação Eficaz:** Facilita a comunicação entre a equipe de desenvolvimento, analistas e clientes, garantindo que todos tenham uma compreensão comum da estrutura do banco de dados.
*   **Visão Geral do Sistema:** Oferece uma visão geral da estrutura do banco de dados, permitindo identificar rapidamente as entidades e seus relacionamentos.
*   **Identificação de Problemas:** Ajuda a identificar potenciais problemas de modelagem, como redundâncias e inconsistências, em estágios iniciais do projeto.
*   **Documentação Clara:** Serve como documentação visual do projeto, facilitando a manutenção e futuras alterações no banco de dados.

### Modelo Entidade-Relacionamento (MER): Detalhando as Entidades e Relacionamentos

O **MER** é uma evolução do DER, proporcionando uma visão **mais detalhada e rica** do modelo de dados. Ele complementa o DER, especificando informações adicionais sobre as entidades, atributos e relacionamentos, incluindo as **cardinalidades**.

**Cardinalidade:** Define a quantidade de instâncias de uma entidade que podem estar relacionadas a uma instância de outra entidade. As cardinalidades mais comuns são:

*   **1:1 (Um para Um):** Uma instância de uma entidade se relaciona com apenas uma instância de outra entidade, e vice-versa.
*   **1:N (Um para Muitos) ou N:1 (Muitos para Um):** Uma instância de uma entidade pode se relacionar com várias instâncias de outra entidade, mas uma instância da segunda entidade se relaciona com apenas uma instância da primeira.
*   **N:M (Muitos para Muitos):** Uma instância de uma entidade pode se relacionar com várias instâncias de outra entidade, e vice-versa.

No MER, além dos elementos presentes no DER, encontramos:

*   **Tipos de dados** para cada atributo.
*   **Chaves primárias e estrangeiras** destacadas.
*   **Cardinalidades** explicitamente representadas nas linhas de relacionamento.

**Em resumo, o MER:**

*   Refina o DER, adicionando detalhes essenciais.
*   Especifica **cardinalidades**, **tipos de dados** e **chaves**.
*   Fornece uma visão mais completa e precisa do modelo de dados.
*   É fundamental para a transição para o Modelo Lógico e, posteriormente, para o Modelo Físico.

**Exemplo:**

A imagem que você forneceu ilustra a diferença entre um DER e um MER para um sistema simples. No MER, podemos ver os tipos de dados dos atributos ("varchar", "int") e as cardinalidades dos relacionamentos (1:N, por exemplo).

## Cardinalidade: Definindo a Quantidade de Relacionamentos entre Tabelas

A **cardinalidade** é um conceito fundamental na modelagem de dados, pois define a **quantidade** de instâncias (registros) de uma entidade (tabela) que podem estar associadas a uma instância de outra entidade. Em outras palavras, ela especifica **quantos registros de uma tabela podem se relacionar com quantos registros de outra tabela**. Compreender a cardinalidade é crucial para construir relacionamentos corretos e garantir a integridade dos dados.

Existem três tipos principais de cardinalidade:

*   **Um para Um (1:1)**
*   **Um para Muitos (1:N) ou Muitos para Um (N:1)**
*   **Muitos para Muitos (N:M)**

Vamos detalhar cada um deles:

### 1. Um para Um (1:1)

Neste tipo de relacionamento, **cada registro de uma tabela está associado a exatamente um único registro em outra tabela, e vice-versa**. É como uma relação de exclusividade.

**Exemplo:**

Considere a relação entre um `Estado` e sua `Capital`.

*   Um `Estado` possui **apenas uma** `Capital`.
*   Uma `Capital` pertence a **apenas um** `Estado`.

Outro exemplo seria a relação entre uma `Pessoa` e seu `Número de Seguro Social` (em países onde esse número é único e obrigatório).

**Representação:**

Em diagramas, o relacionamento 1:1 é geralmente representado por uma linha reta conectando as duas entidades, com o número "1" em ambas as extremidades.

### 2. Um para Muitos (1:N) ou Muitos para Um (N:1)

Aqui, **um registro de uma tabela pode estar associado a vários registros de outra tabela, mas cada registro da segunda tabela está associado a apenas um registro da primeira**. É a relação mais comum em bancos de dados. A perspectiva (1:N ou N:1) depende do ponto de vista, mas a essência é a mesma.

**Exemplo:**

Imagine a relação entre um `Departamento` e seus `Funcionários`.

*   Um `Departamento` pode ter **muitos** `Funcionários`.
*   Cada `Funcionário` pertence a **apenas um** `Departamento`.

Outro exemplo clássico é a relação entre uma `Mãe` e seus `Filhos`. Uma mãe pode ter vários filhos, mas cada filho tem apenas uma mãe biológica.

**Representação:**

Em diagramas, o relacionamento 1:N é frequentemente representado por uma linha com uma "pata de galinha" (ou um símbolo de infinito "∞") no lado "muitos" e o número "1" no lado "um". A ponta com a "pata de galinha" indica a tabela que pode ter vários registros relacionados, enquanto a ponta com o número "1" indica a tabela com apenas um registro relacionado.

### 3. Muitos para Muitos (N:M)

Neste caso, **um registro de uma tabela pode estar associado a vários registros de outra tabela, e vice-versa**.  É uma relação mais complexa, que normalmente exige uma tabela intermediária para ser implementada corretamente.

**Exemplo:**

Considere a relação entre `Alunos` e `Disciplinas`.

*   Um `Aluno` pode estar matriculado em **várias** `Disciplinas`.
*   Uma `Disciplina` pode ter **vários** `Alunos` matriculados.

Outro exemplo seria a relação entre `Atores` e `Filmes`. Um ator pode atuar em vários filmes, e um filme pode ter vários atores.

**Implementação com Tabela Intermediária:**

Relacionamentos N:M **não podem ser implementados diretamente** ligando as duas tabelas principais. Precisamos de uma **tabela intermediária** (também chamada de tabela associativa ou tabela de junção). Essa tabela contém as chaves estrangeiras das duas tabelas envolvidas, criando assim a ligação entre elas.

No exemplo `Alunos` e `Disciplinas`, a tabela intermediária poderia ser chamada de `Matrículas`. Ela teria duas colunas:

*   `Aluno_ID` (chave estrangeira referenciando a tabela `Alunos`)
*   `Disciplina_ID` (chave estrangeira referenciando a tabela `Disciplinas`)

Cada registro na tabela `Matrículas` representaria a matrícula de um aluno em uma disciplina específica.

**Representação:**

Em diagramas, o relacionamento N:M é normalmente representado por uma linha com "patas de galinha" em ambas as extremidades. A tabela intermediária é frequentemente representada por um retângulo com um losango dentro ou conectada às tabelas principais por meio de losangos que indicam os relacionamentos 1:N.

### Cardinalidade Máxima e Mínima: Especificando Obrigatoriedade e Opcionalidade

Além dos tipos principais de cardinalidade, podemos especificar a **cardinalidade mínima e máxima** para definir com mais precisão a obrigatoriedade ou opcionalidade dos relacionamentos.

*   **Cardinalidade Máxima:** Define o **número máximo** de instâncias de uma entidade que podem participar do relacionamento. Geralmente é 1 ou N, como vimos nos exemplos anteriores.
*   **Cardinalidade Mínima:** Define o **número mínimo** de instâncias de uma entidade que devem participar do relacionamento. Pode ser **0** (opcional) ou **1** (obrigatório).

**Exemplo:**

Retomando o exemplo de `Departamento` e `Funcionário`, podemos especificar:

*   **Departamento (1:N) Funcionário:**
    *   Cardinalidade Máxima: Um `Departamento` pode ter **N** (muitos) `Funcionários` (lado N).
    *   Cardinalidade Mínima: Um `Departamento` deve ter **pelo menos 1** (um) `Funcionário` (lado N obrigatório).
*   **Funcionário (N:1) Departamento:**
    *   Cardinalidade Máxima: Um `Funcionário` pode estar associado a **1** (um) `Departamento` (lado 1).
    *   Cardinalidade Mínima: Um `Funcionário` **deve estar associado** a **1** (um) `Departamento` (lado 1 obrigatório).

**Representação:**

A cardinalidade mínima é geralmente representada por um número entre parênteses ou por uma linha perpendicular à linha de relacionamento, próxima à entidade. O número "0" indica opcionalidade, e o número "1" indica obrigatoriedade.

**Dica para Fazer as Perguntas:**

Como a seta vermelha indica, ao analisar a cardinalidade, é útil fazer perguntas em ambas as direções, **começando sempre pelo lado "um"** do relacionamento:

1.  **Um** `Funcionário` pode trabalhar em **quantos** `Departamentos`? (Resposta: **Um** - cardinalidade máxima 1, mínima 1)
2.  **Um** `Departamento` pode ter **quantos** `Funcionários`? (Resposta: **Muitos** - cardinalidade máxima N, mínima 1)

Essa abordagem ajuda a determinar a cardinalidade correta e a construir relacionamentos consistentes no seu modelo de dados.

## Normalização de Dados: Construindo Bancos de Dados Sólidos e Eficientes

A **normalização** é um processo crucial no design de bancos de dados relacionais. Seu objetivo é organizar os dados de forma eficiente, **eliminando redundâncias e inconsistências**, e garantindo a **integridade** das informações. As **três primeiras formas normais (1FN, 2FN e 3FN)** são os pilares desse processo, estabelecendo regras para a estrutura das tabelas e seus relacionamentos.

### 1ª Forma Normal (1FN): A Base da Organização - Atomicidade

A 1FN estabelece a regra fundamental da atomicidade dos dados. Isso significa que **cada atributo (coluna) de uma tabela deve conter apenas um valor único e indivisível**. Em outras palavras, não podemos ter listas ou grupos de valores em uma única célula.

**Exemplo sem 1FN (Sistema de Vendas):**

| ID Cliente | Nome Cliente | Telefones                       |
| :--------- | :----------- | :------------------------------ |
| 1          | João Silva    | (11) 98765-4321                |
| 2          | Maria Souza   | (21) 91234-5678, (21) 99999-8888 |

**Problema:** O atributo "Telefones" na linha da "Maria Souza" contém mais de um valor, violando a 1FN.

**Exemplo com 1FN (Sistema de Vendas):**

| ID Cliente | Nome Cliente | Telefone        |
| :--------- | :----------- | :-------------- |
| 1          | João Silva    | (11) 98765-4321 |
| 2          | Maria Souza   | (21) 91234-5678 |
| 3          | Maria Souza   | (21) 99999-8888 |

**Solução:** Criamos uma nova linha para cada telefone da "Maria Souza", garantindo que cada célula contenha apenas um valor.

### 2ª Forma Normal (2FN): Eliminando Dependências Parciais

A 2FN se aplica a tabelas com **chaves primárias compostas** (chaves formadas por mais de um atributo). Ela exige que **todos os atributos não-chave dependam funcionalmente de toda a chave primária, e não apenas de parte dela.**

**Exemplo 1 sem 2FN (Sistema de Vendas):**

| ID Pedido | ID Produto | Nome Produto | Preço Unitário | Quantidade |
| :-------- | :--------- | :----------- | :------------- | :--------- |
| 1         | 10        | Camiseta     | 30.00          | 2          |
| 1         | 20        | Calça        | 50.00          | 1          |
| 2         | 10        | Camiseta     | 30.00          | 3          |
| 2         | 30        | Meia         | 10.00          | 5          |

**Problema:** `Nome Produto` e `Preço Unitário` dependem apenas de `ID Produto`, que é parte da chave primária composta (`ID Pedido`, `ID Produto`). Isso causa redundância.

**Exemplo 1 com 2FN (Sistema de Vendas):**

**Tabela Produto**

| ID Produto | Nome Produto | Preço Unitário |
| :--------- | :----------- | :------------- |
| 10        | Camiseta     | 30.00          |
| 20        | Calça        | 50.00          |
| 30        | Meia         | 10.00          |

**Tabela Pedido**

| ID Pedido | ID Produto | Quantidade |
| :-------- | :--------- | :--------- |
| 1         | 10        | 2          |
| 1         | 20        | 1          |
| 2         | 10        | 3          |
| 2         | 30        | 5          |

**Solução:** Criamos uma tabela separada para `Produto`, eliminando a dependência parcial e a redundância.

**Exemplo 2: Sistema de Biblioteca**

**Tabela sem 2FN (Empréstimo)**

| ID Empréstimo | ID Livro | Título Livro | Autor Livro | ID Leitor | Nome Leitor | Data Empréstimo | Data Devolução |
| :------------ | :------- | :----------- | :---------- | :-------- | :---------- | :-------------- | :------------- |
| 1             | 100      | Dom Quixote  | Cervantes   | 25        | João Silva   | 2024-07-01      | 2024-07-15     |
| 2             | 100      | Dom Quixote  | Cervantes   | 30        | Maria Souza  | 2024-07-05      | 2024-07-20     |

**Problema:** `Título Livro` e `Autor Livro` dependem apenas de `ID Livro`, que é parte da chave primária composta.

**Tabelas com 2FN (Livro e Empréstimo)**

**Tabela Livro**

| ID Livro | Título Livro | Autor Livro |
| :------- | :----------- | :---------- |
| 100      | Dom Quixote  | Cervantes   |

**Tabela Empréstimo**

| ID Empréstimo | ID Livro | ID Leitor | Data Empréstimo | Data Devolução |
| :------------ | :------- | :-------- | :-------------- | :------------- |
| 1             | 100      | 25        | 2024-07-01      | 2024-07-15     |
| 2             | 100      | 30        | 2024-07-05      | 2024-07-20     |

**Solução:** Criamos uma tabela separada para `Livro`.

**Exemplo 3: Sistema de Controle de Estoque**

**Tabela sem 2FN (Produto_Fornecedor)**

| ID Produto | Nome Produto | ID Fornecedor | Nome Fornecedor | Preço Compra |
| :--------- | :----------- | :------------ | :-------------- | :----------- |
| 1          | Camiseta     | 10            | Fornecedor A    | 15.00        |
| 1          | Camiseta     | 20            | Fornecedor B    | 14.50        |
| 2          | Calça        | 10            | Fornecedor A    | 30.00        |

**Problema:** `Nome Fornecedor` depende apenas de `ID Fornecedor`.

**Tabelas com 2FN (Produto, Fornecedor e Produto_Fornecedor)**

**Tabela Produto**

| ID Produto | Nome Produto |
| :--------- | :----------- |
| 1          | Camiseta     |
| 2          | Calça        |

**Tabela Fornecedor**

| ID Fornecedor | Nome Fornecedor |
| :------------ | :-------------- |
| 10            | Fornecedor A    |
| 20            | Fornecedor B    |

**Tabela Produto_Fornecedor**

| ID Produto | ID Fornecedor | Preço Compra |
| :--------- | :------------ | :----------- |
| 1          | 10            | 15.00        |
| 1          | 20            | 14.50        |
| 2          | 10            | 30.00        |

**Solução:** Criamos tabelas separadas para `Produto` e `Fornecedor`.

### 3ª Forma Normal (3FN): Removendo Dependências Transitivas

A 3FN exige que **todos os atributos não-chave dependam diretamente da chave primária, e não de outros atributos não-chave**. Isso elimina as **dependências transitivas**.

**Exemplo 1 sem 3FN (Sistema de Vendas):**

| ID Cliente | Nome Cliente | CEP         | Cidade      | Estado |
| :--------- | :----------- | :---------- | :---------- | :----- |
| 1          | João Silva    | 01234-567   | São Paulo   | SP     |
| 2          | Maria Souza   | 01234-567   | São Paulo   | SP     |

**Problema:** `Cidade` e `Estado` dependem de `CEP`, que não é a chave primária.

**Exemplo com 3FN (Sistema de Vendas):**

**Tabela Cliente**

| ID Cliente | Nome Cliente | CEP         |
| :--------- | :----------- | :---------- |
| 1          | João Silva    | 01234-567   |
| 2          | Maria Souza   | 01234-567   |

**Tabela CEP**

| CEP         | Cidade      | Estado |
| :---------- | :---------- | :----- |
| 01234-567   | São Paulo   | SP     |

**Solução:** Criamos uma tabela separada para `CEP`, eliminando a dependência transitiva.

**Exemplo 2: Sistema de Recursos Humanos**

**Tabela sem 3FN (Funcionário)**

| ID Funcionário | Nome Funcionário | Departamento | Gerente Departamento |
| :------------ | :-------------- | :----------- | :----------------- |
| 1             | João Silva       | Vendas       | Maria Souza         |
| 2             | Carlos Santos    | Vendas       | Maria Souza         |

**Problema:** `Gerente Departamento` depende de `Departamento`.

**Tabelas com 3FN (Funcionário e Departamento)**

**Tabela Funcionário**

| ID Funcionário | Nome Funcionário | ID Departamento |
| :------------ | :-------------- | :-------------- |
| 1             | João Silva       | 10              |
| 2             | Carlos Santos    | 10              |

**Tabela Departamento**

| ID Departamento | Departamento | Gerente Departamento |
| :-------------- | :----------- | :----------------- |
| 10              | Vendas       | Maria Souza         |

**Solução:** Movemos `Gerente Departamento` para a tabela `Departamento`.

**Exemplo 3: Sistema de Controle de Pedidos**

**Tabela sem 3FN (Pedido)**

| ID Pedido | ID Cliente | Nome Cliente | Endereço Cliente | Cidade Cliente | Estado Cliente |
| :-------- | :--------- | :----------- | :--------------- | :------------- | :------------- |
| 1         | 100        | João Silva    | Rua A, 123      | São Paulo      | SP             |
| 2         | 100        | João Silva    | Rua A, 123      | São Paulo      | SP             |

**Problema:** `Nome Cliente`, `Endereço Cliente`, `Cidade Cliente` e `Estado Cliente` dependem de `ID Cliente`.

**Tabelas com 3FN (Pedido, Cliente e Endereço)**

**Tabela Pedido**

| ID Pedido | ID Cliente |
| :-------- | :--------- |
| 1         | 100        |
| 2         | 100        |

**Tabela Cliente**

| ID Cliente | Nome Cliente | ID Endereço |
| :--------- | :----------- | :---------- |
| 100        | João Silva    | 1           |

**Tabela Endereço**

| ID Endereço | Endereço Cliente | Cidade Cliente | Estado Cliente |
| :---------- | :--------------- | :------------- | :------------- |
| 1           | Rua A, 123      | São Paulo      | SP             |

**Solução:** Criamos tabelas separadas para `Cliente` e `Endereço`.

# Dominando a Linguagem SQL no MySQL: Da Modelagem à Implementação

Após uma cuidadosa análise e modelagem do seu banco de dados relacional, chega o momento de **implementá-lo**. Para isso, utilizaremos a **linguagem SQL (Structured Query Language)** em conjunto com o **MySQL**, um Sistema Gerenciador de Banco de Dados (SGBD) open-source poderoso e amplamente adotado no mercado.

## Preparando o Ambiente: Instalação do MySQL

Antes de começarmos a escrever código SQL, precisamos preparar o ambiente de desenvolvimento. Isso envolve baixar e instalar o MySQL.

1.  **Download do MySQL:**
    Acesse o site oficial do MySQL [https://www.mysql.com/](https://www.mysql.com/) e baixe a versão mais recente do **MySQL Community Server** compatível com seu sistema operacional.

2.  **Instalação do MySQL:**
    O processo de instalação pode variar um pouco dependendo do sistema operacional. Siga as instruções do instalador. Recomenda-se também instalar o **MySQL Workbench**, uma ferramenta gráfica que facilita a administração e o desenvolvimento de bancos de dados MySQL.

    Para uma instalação guiada, você pode seguir este tutorial em vídeo: [link para o vídeo tutorial](opens in a new tab) (substitua pelo link correto).

## SQL: A Linguagem Universal para Bancos de Dados Relacionais

A **SQL** é a linguagem padrão para interagir com bancos de dados relacionais. Sua **simplicidade, eficiência e poder** a tornam uma ferramenta indispensável para qualquer profissional que lida com dados. A SQL é uma linguagem **declarativa**: você especifica **o que** deseja obter como resultado, e o SGBD (como o MySQL) se encarrega de encontrar a melhor maneira de executar a tarefa.

### Subconjuntos da Linguagem SQL: Organizando os Comandos

A SQL é organizada em subconjuntos de comandos, cada um com uma finalidade específica:

*   **DDL (Data Definition Language):** Responsável por **definir a estrutura** do banco de dados. Comandos DDL criam, modificam e excluem objetos como tabelas, índices, visões (views) e usuários.
    *   `CREATE`: Cria novos objetos (ex: `CREATE TABLE`, `CREATE DATABASE`).
    *   `ALTER`: Modifica objetos existentes (ex: `ALTER TABLE`).
    *   `DROP`: Exclui objetos (ex: `DROP TABLE`, `DROP DATABASE`).

*   **DML (Data Manipulation Language):** Lida com a **manipulação dos dados** dentro das tabelas.
    *   `INSERT`: Insere novos dados (ex: `INSERT INTO`).
    *   `UPDATE`: Modifica dados existentes (ex: `UPDATE`).
    *   `DELETE`: Exclui dados (ex: `DELETE FROM`).

*   **DQL (Data Query Language):** Usada para **consultar dados** no banco de dados.
    *   `SELECT`: Recupera dados (ex: `SELECT * FROM`).

*   **DCL (Data Control Language):** Controla o **acesso e as permissões** dos usuários ao banco de dados.
    *   `GRANT`: Concede privilégios.
    *   `REVOKE`: Remove privilégios.

*   **TCL (Transaction Control Language):** Gerencia **transações**, que são conjuntos de operações que devem ser executadas como uma unidade atômica (ou todas as operações são bem-sucedidas, ou nenhuma é).
    *   `COMMIT`: Confirma uma transação.
    *   `ROLLBACK`: Desfaz uma transação.
    *   `SAVEPOINT`: Define um ponto de salvamento dentro de uma transação.

### Tipos de Dados no MySQL: Definindo a Natureza dos Dados

Ao criar tabelas, é crucial escolher os **tipos de dados corretos** para cada coluna. Isso garante a integridade dos dados, otimiza o armazenamento e melhora o desempenho das consultas. O MySQL oferece uma ampla variedade de tipos de dados, que podem ser agrupados em categorias:

#### 1. Tipos de Texto:

| Tipo        | Descrição                                                                                            | Tamanho Máximo |
| :---------- | :--------------------------------------------------------------------------------------------------- | :------------- |
| `CHAR(n)`   | Armazena uma string de tamanho fixo, com `n` caracteres (0 a 255).                                  | n bytes        |
| `VARCHAR(n)`| Armazena uma string de tamanho variável, com até `n` caracteres (0 a 65.535).                        | n + 1 ou 2 bytes|
| `TEXT`      | Armazena strings longas de tamanho variável.                                                         | 65.535 bytes   |
| `TINYTEXT`  | Armazena strings curtas.                                                                             | 255 bytes      |
| `MEDIUMTEXT`| Armazena strings de tamanho médio.                                                                  | 16.777.215 bytes|
| `LONGTEXT`  | Armazena strings muito longas.                                                                       | 4.294.967.295 bytes|

**Diferença entre `CHAR` e `VARCHAR`:**

*   `CHAR` reserva o espaço total definido, mesmo que a string armazenada seja menor.
*   `VARCHAR` reserva apenas o espaço necessário para a string, mais 1 ou 2 bytes para armazenar o tamanho.
*   Use `CHAR` quando souber que o tamanho da string será sempre o mesmo (ex: siglas de estados).
*   Use `VARCHAR` para strings de tamanho variável (ex: nomes, endereços).

#### 2. Tipos Numéricos:

| Tipo         | Descrição                                                                     | Tamanho       |
| :----------- | :---------------------------------------------------------------------------- | :------------ |
| `TINYINT`    | Inteiro muito pequeno (com sinal: -128 a 127, sem sinal: 0 a 255).            | 1 byte        |
| `SMALLINT`   | Inteiro pequeno (com sinal: -32.768 a 32.767, sem sinal: 0 a 65.535).        | 2 bytes       |
| `MEDIUMINT`  | Inteiro médio (com sinal: -8.388.608 a 8.388.607, sem sinal: 0 a 16.777.215).| 3 bytes       |
| `INT`        | Inteiro padrão (com sinal: -2.147.483.648 a 2.147.483.647, sem sinal: 0 a 4.294.967.295). | 4 bytes       |
| `BIGINT`     | Inteiro grande (com sinal: -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807, sem sinal: 0 a 18.446.744.073.709.551.615). | 8 bytes       |
| `FLOAT`      | Número de ponto flutuante de precisão simples.                               | 4 bytes       |
| `DOUBLE`     | Número de ponto flutuante de precisão dupla.                                  | 8 bytes       |
| `DECIMAL(M,D)`| Número decimal exato, com `M` dígitos no total e `D` dígitos após a vírgula. | M+2 bytes se D>0 |

**Diferença entre `FLOAT`, `DOUBLE` e `DECIMAL`:**

* `FLOAT` e `DOUBLE` armazenam valores aproximados, o que pode levar a erros de arredondamento. São adequados para cálculos científicos onde a precisão extrema não é crítica.
* `DECIMAL` armazena valores exatos e é ideal para aplicações financeiras onde a precisão é fundamental (ex: valores monetários).

#### 3. Tipos de Data e Hora:

| Tipo         | Descrição                                     | Formato          |
| :----------- | :-------------------------------------------- | :--------------- |
| `DATE`       | Armazena uma data.                           | YYYY-MM-DD       |
| `TIME`       | Armazena uma hora.                           | HH:MM:SS         |
| `DATETIME`   | Armazena data e hora combinadas.             | YYYY-MM-DD HH:MM:SS |
| `TIMESTAMP`  | Armazena data e hora, com fuso horário implícito. | YYYY-MM-DD HH:MM:SS |
| `YEAR`       | Armazena um ano.                             | YYYY             |

#### 4. Tipos Booleanos e Outros:
*   **BOOLEAN/BOOL:**  Na verdade, é um sinônimo para `TINYINT(1)`. O valor 0 é considerado falso, e qualquer valor diferente de 0 é considerado verdadeiro.
*   **ENUM('valor1', 'valor2', ...):** Permite escolher um valor de uma lista predefinida de strings.  Exemplo: `ENUM('Masculino', 'Feminino')`. É eficiente para armazenar valores que pertencem a um conjunto fixo e conhecido.
*   **SET('valor1', 'valor2', ...):**  Similar ao `ENUM`, mas permite armazenar múltiplos valores da lista predefinida. Exemplo: `SET('Leitura', 'Escrita', 'Execução')` para armazenar permissões de um arquivo.
* **JSON:** A partir do MySQL 5.7, é possível armazenar dados no formato JSON.

### DDL (Data Definition Language): Criando e Modificando a Estrutura do Banco de Dados

A DDL é a parte da SQL que nos permite **definir e modificar a estrutura do nosso banco de dados**. Vamos focar nos comandos principais: `CREATE`, `ALTER` e `DROP`.

#### Criando o Banco de Dados e as Tabelas

Antes de criar as tabelas, precisamos criar o banco de dados que as conterá. No MySQL, usamos o comando `CREATE DATABASE`:

```sql
CREATE DATABASE IF NOT EXISTS nome_do_banco_de_dados;
O IF NOT EXISTS é opcional, mas recomendado. Ele evita um erro caso o banco de dados já exista.
```

Agora, vamos usar o comando USE para selecionar o banco de dados recém-criado:
```sql
USE nome_do_banco_de_dados;
```
Com base no diagrama entidade-relacionamento apresentado, podemos criar as tabelas em SQL da seguinte forma:

#### Tabela estado
```sql
CREATE TABLE estado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    uf CHAR(2) NOT NULL UNIQUE
);
```
#### Tabela cidade
```sql
CREATE TABLE cidade (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT,
    FOREIGN KEY (estado_id) REFERENCES estado(id)
);
```

Tabela cliente
```sql
CREATE TABLE cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf_cnpj VARCHAR(14) NOT NULL UNIQUE,
    tipo ENUM('PF', 'PJ') NOT NULL,
    cidade_id INT,
    FOREIGN KEY (cidade_id) REFERENCES cidade(id)
);
```

#### Tabela venda
```sql
CREATE TABLE venda (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
```

#### Tabela produto
```sql
CREATE TABLE produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    qtd_estoque INT DEFAULT 0
);
```

Tabela venda_produto
```sql
CREATE TABLE venda_produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    venda_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES venda(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);
```

#### Explicação dos Comandos CREATE TABLE:

CREATE TABLE nome_da_tabela: Inicia o comando para criar uma nova tabela.
nome_da_coluna TIPO_DE_DADO [restrições]: Define uma coluna, seu tipo de dado e, opcionalmente, restrições.
PRIMARY KEY (coluna): Define a coluna como chave primária. AUTO_INCREMENT faz com que o valor da chave primária seja gerado automaticamente pelo MySQL.
NOT NULL: Impede que a coluna aceite valores nulos.
UNIQUE: Garante que todos os valores na coluna sejam únicos.
DEFAULT valor: Define um valor padrão para a coluna.
FOREIGN KEY (coluna_local) REFERENCES tabela_referenciada(coluna_referenciada): Define uma chave estrangeira, estabelecendo um relacionamento com outra tabela.
ALTER TABLE: Modificando a Estrutura de Tabelas Existentes
O comando ALTER TABLE permite modificar a estrutura de tabelas já existentes. Isso é útil quando precisamos adicionar, remover ou modificar colunas, alterar tipos de dados ou gerenciar restrições.

#### Exemplos:

Adicionar uma nova coluna email à tabela cliente:
```sql
ALTER TABLE cliente
ADD COLUMN email VARCHAR(255) AFTER nome; -- Adiciona a coluna após a coluna 'nome'
Modificar o tipo de dado da coluna qtd_estoque na tabela produto para DECIMAL(10,2):
```
```sql
ALTER TABLE produto
MODIFY COLUMN qtd_estoque DECIMAL(10,2);
Remover a coluna descricao da tabela produto:
```
```sql
ALTER TABLE produto
DROP COLUMN descricao;
Renomear a coluna nome para nome_completo na tabela cliente:
```
```sql
ALTER TABLE cliente
CHANGE COLUMN nome nome_completo VARCHAR(255) NOT NULL;
Adicionar uma chave estrangeira à tabela cidade referenciando a tabela estado (caso não tenha sido feito na criação):
```
```sql
ALTER TABLE cidade
ADD CONSTRAINT fk_cidade_estado
FOREIGN KEY (estado_id) REFERENCES estado(id);
Remover uma restrição de chave estrangeira:
```
```sql
ALTER TABLE cidade
DROP FOREIGN KEY fk_cidade_estado;
DROP TABLE: Excluindo Tabelas
```

O comando DROP TABLE remove uma tabela permanentemente do banco de dados. Tenha extrema cautela ao utilizar este comando, pois a ação é irreversível!

Exemplo:
```sql
DROP TABLE IF EXISTS venda_produto;
```

O IF EXISTS é opcional, mas recomendado. Ele evita um erro caso a tabela não exista.


```sql
 DROP DATABASE: Excluindo Bancos de Dados
```
O comando DROP DATABASE remove um banco de dados inteiro e todas as suas tabelas. Use com extrema cautela!

Exemplo:
```sql
DROP DATABASE IF EXISTS nome_do_banco_de_dados;
```
