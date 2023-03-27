# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`              |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------------------|----------------------------------------|
|Morador de rua      | Preciso encontrar um abrigo temporário          | Para passar a noite. Eu gostaria de usar um aplicativo que pudesse me mostrar as opções de abrigos disponíveis na cidade, bem como as regras e horários de funcionamento, para que eu possa tomar uma decisão informada sobre onde me abrigar                    |
|Civil               | Quero ajudar moradores de rua                   | Eu gostaria de usar um aplicativo que pudesse me mostrar as organizações locais que trabalham com moradores de rua e os tipos de ajuda que eles precisam, para que eu possa me envolver e contribuir de forma efetiva para ajudar essa população vulnerável |
|Funcionário de uma organização que trabalha com moradores de rua |preciso coletar informações sobre os indivíduos que ajudamos | Eu gostaria de usar um aplicativo que me permita registrar e acompanhar os atendimentos aos moradores de rua, bem como armazenar informações importantes sobre eles, como histórico médico, preferências alimentares e informações de contato de familiares ou amigos.|


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


