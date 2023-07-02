# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir a index, é esperado que sejam carregados os botões de login e crie sua conta, e a imagem do cad-social. |
|TF-002| Home | Ao clicar em "login", é esperado que o usuário seja direcionado para a página "login" onde poderá logar no sistema usando 4 opções. |
|TF-003| Home | Ao clicar em "Crie sua conta", é esperado que o usuário seja direcionado para a página "Cadastro de usuário". |
|TF-004| Menu Principal | Após se cadastrar ou logar é direcionado para a página "Menu principal". |
|TF-005| Menu Principal | Em "Menu Principal" tem-se as opções cadastrar um morador de rua, cadastrar ONGS, e relatório. |
|TF-006| Menu Principal | Ao clicar no botão "Cadastrar Morador de rua", o usuário é direcionado para a página "Cadastro Morador de rua" e deve inserir os dados da pessoa que deve ser cadastrada. |
|TF-007| Menu Principal | Ao clicar no botão "cadastrar ONGS", o usuário é direcionado para a página "Cadastro de ONG" e deve inserir os dados da ONG que deve ser cadastrada.  |
|TF-008| Menu Principal | Ao clicar no botão "relatório", o usuário é redirecionado para a página "Relatório". |
|TF-009| Relatório | Ao clicar no botão "relatório", o usuário é redirecionado para a página "Relatório". |
|TF-010| Relatório | Na página "Relatório" terão sete opções de relatórios: Pesquisar ONGs (cidade), Listar ONGs (todos), Localizar ONG, Pesquisar por voluntário, Listar moradores de rua (todos), Listar moradores de rua (cidade) e Listar voluntários (todos). |

# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|RTF-001| Home | Ao abrir a index, é esperado que sejam carregados os botões de login e crie sua conta, e a imagem do cad-social. |   NÃO |
|RTF-002| Home | Ao clicar em "login", é esperado que o usuário seja direcionado para a página "login" onde poderá logar no sistema usando 4 opções. | NÃO |
|RTF-003| Home | Ao clicar em "Crie sua conta", é esperado que o usuário seja direcionado para a página "Cadastro de usuário". | NÃO |
|RTF-004| Menu Principal | Após se cadastrar ou logar é direcionado para a página "Menu principal". | NÃO |
|RTF-005| Menu Principal | Em "Menu Principal" tem-se as opções cadastrar um morador de rua, cadastrar ONGS, e relatório. | NÃO |
|RTF-006| Menu Principal | Ao clicar no botão "Cadastrar Morador de rua", o usuário é direcionado para a página "Cadastro Morador de rua" e deve inserir os dados da pessoa que deve ser cadastrada. | SIM |
|RTF-007| Menu Principal | Ao clicar no botão "cadastrar ONGS", o usuário é direcionado para a página "Cadastro de ONG" e deve inserir os dados da ONG que deve ser cadastrada. | SIM |
|RTF-008| Menu Principal | Ao clicar no botão "relatório", o usuário é redirecionado para a página "Relatório". | NÃO |
|RTF-009| Relatório | Ao clicar no botão "relatório", o usuário é redirecionado para a página "Relatório". | NÃO |
|RTF-010| Relatório | Na página "Relatório" terão sete opções de relatórios: Pesquisar ONGs (cidade), Listar ONGs (todos), Localizar ONG, Pesquisar por voluntário, Listar moradores de rua (todos), Listar moradores de rua (cidade) e Listar voluntários (todos). | NÃO |


## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 01 de julho de 2023 às 10AM.

Foram reportados os seguintes bugs:

- (RTF-006) Está incompleto o JSON server e os dados para cadastro não conseguem ser salvos. 

- (RTF-RTF-007) Está incompleto o JSON server e os dados para cadastro não conseguem ser salvos. 

Os bugs ainda não foram resolvidos até a escrita deste documento.

Novos testes serão realizados em breve após a correção dos problemas.
