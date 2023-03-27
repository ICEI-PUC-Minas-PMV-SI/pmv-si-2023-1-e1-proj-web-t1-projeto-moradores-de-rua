# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Ana Flavia tem 21 anos é solteira, está no 4° perído de enfermagem na Estácio e mora com os pais.
Ela é muito simpática gosta de passear no parque da cidade e gosta muito de ajudar as pessoas em sua volta, seu dia não é muito cheio sempre tem um tempinho livre.
Ela gostaria de ajudar de uma forma mais abrangente essas pessoas em situação de vulnerabilidade que ela sempre encontra a caminho do parque, ela quer fazer algo mais por essas pessoas então decide que além de doações ela quer se voluntariar em uma ONG mais proxima possível a sua casa.
Seu obstáculo é a falta de informações, como não saber como e onde se cadastrar para ser tornar uma voluntária dessas ONGs.


Marcelo tem 38 anos é casado, formado em administração e é gerente em uma empresa de tamanho médio que atua na área de telecomunicações.
Ele é observador, focado, vai a academia frequentemente e faz caminhadas 3 vezes por semana e tem uma agenda um pouco apertada.
Ele gostaria de ajudar mais os moradores em situação de rua que encontra pelo caminho quando está indo praticar seus exercícios, ele sempre da algumas moedas mas no fundo ele quer fazer algo mais por essas pessoas, então lembra que tem muitas roupas e cobertores em casa que não usa mais e gostaria de doar também alguns alimentos para uma ONG que ajuda as pessoas em situação de vulnerabilidade.
A dificuldade que o Marcelo encontra para realizar essas doações é não saber se tem alguma ONG próxima a sua casa pois ele não tem muito tempo livre em sua agenda, outra dificuldade é saber quais alimentos podem ou não ser doados para ajudar essas pessoas.


Aridelson tem 32 anos é casado, tem 2 filhas e tem formação tecnica em eletrôenicos, ele está iniciando sua própria empresa que fornece segurança residencial realizando instalações de câmeras e alarmes.
Ele quer começar a aumentar seu fluxo de instalações já que trabalha sozinho e para isso precisa de um ajudante para agilizar suas instalações, então ele resolve dar essa oportunidade para uma pessoa em situação de vulnerabilidade.
O obstaculo do Aridelson é encontrar ONGs onde essas pessoas que estão em situação de vulnerabilidade estejam capacitadas para a vaga que ele está oferecendo.


Marilia tem 29 anos é casada e é gerente do departamento da prefeitura que tem como objetivo ajudar as pessoas e situação de vulnerabilidade.
Ela é uma pessoa analítica e focada em seu trabalho e gostaria de ter um mcontrole melhor das informações sobre ONGs, moradores de rua e doadores, afim de melhorar as tomadas de decisões do departamento.
A dificuldade de Marilia é obter e manipular essas informações de maneira prática para que a prefeitura possa tomar decisões melhores sobre novas políticas e projetos na cidade que auxiliam as pessoas em situação de rua.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`              |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------------------|----------------------------------------|
|EU COMO: Ana Flavia uma estudante universitária de 21 anos que gosta de ajudar as pessoas em sua volta|QUERO/PRECISO: me tornar voluntária em uma ONG que atue com pessoas em situação de vulnerabilidade     FUNCIONALIDADE PARA: obter informações sobre como e onde me cadastrar para ser voluntária|MOTIVO/VALOR: quero fazer mais por essas pessoas em situação de vulnerabilidade que encontro a caminho do parque e contribuir com a minha energia e habilidades para ajudar na transformação da vida dessas pessoas.|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Disponibilizar o cadastramento dos moradores de rua | ALTA | Assistente social e ONGs |
|RF-002| Disponibilizar a alteração do cadastro dos moradores de rua | ALTA | Assistente social e ONGs |
|RF-003| Disponibilizar a exclusão do cadastro dos moradores de rua | ALTA | Assistente social e ONGs |
|RF-004| Disponibilizar o cadastro dos responsáveis pelo cadastramento dos moradores de rua | ALTA | Assistente social e ONGs |
|RF-005| Disponibilizar o login dos usuários | ALTA | Assistente social e ONGs  |
|RF-006| Disponibilizar relatório de moradores de rua por localicades  | ALTA | Assistente social e ONGs |
|RF-007| Disponibilizar relatório de moradores de rua adultos por localicades  | ALTA | Assistente social e ONGs |
|RF-008| Disponibilizar relatório de moradores de rua crianças por localicades  | ALTA | Assistente social e ONGs |
|RF-009| Disponibilizar relatório de moradores de rua geral por cidade  | ALTA | Assistente social e ONGs |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Aplicação deve ser desenvolvida em HTML, CSS e JavaScript |  ALTA | 
|RNF-003| Aplicação deve apresentar um layout simples e de fácil utilização |  MÉDIA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A abrangência do projeto limita-se a Minas Gerais |
|02| Cada usuário poderá cadastrar no máximo 1 conta por endereço de e-mail |
|03| Cada morador de rua poderá ser cadastrado somente uma vez, não podendo ter duplicidade no cadastro |


