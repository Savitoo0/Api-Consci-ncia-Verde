API Consciência Verde
O que é?
A API Consciência Verde é uma aplicação simples feita com Node.js e Express que entrega conteúdos educativos sobre ecologia e sustentabilidade. Os usuários podem curtir, comentar e organizar conteúdos em listas para promover engajamento e consciência ambiental.

Como funciona?
Estrutura Básica
Express: Usamos o Express para criar a API.
body-parser: Middleware que ajuda a analisar o corpo das requisições em JSON.
Dados Simulados: Temos duas listas principais:
conteudos: Armazena conteúdos como artigos, vídeos e podcasts.
listas: Armazena listas criadas pelos usuários.
Endpoints
Aqui estão os principais endpoints da API:

Listar Conteúdos

Método: GET
Rota: /conteudos
Descrição: Retorna uma lista de todos os conteúdos disponíveis.
Resposta: Um array de objetos com detalhes dos conteúdos.
Ver Detalhes de um Conteúdo

Método: GET
Rota: /conteudos/:id
Descrição: Retorna os detalhes de um conteúdo específico, baseado no ID.
Resposta: Um objeto com os detalhes do conteúdo ou um erro 404 se não encontrado.
Curtir um Conteúdo

Método: POST
Rota: /conteudos/:id/curtir
Descrição: Incrementa o número de curtidas de um conteúdo específico.
Resposta: O objeto do conteúdo atualizado.
Comentar sobre um Conteúdo

Método: POST
Rota: /conteudos/:id/comentar
Descrição: Adiciona um comentário a um conteúdo específico.
Corpo da Requisição: JSON com o comentário.
Resposta: Mensagem de confirmação e o conteúdo atualizado.
Ver Comentários de um Conteúdo

Método: GET
Rota: /conteudos/:id/comentarios
Descrição: Retorna todos os comentários de um conteúdo específico.
Resposta: Um array de comentários ou um erro 404 se o conteúdo não for encontrado.
Criar uma Lista de Conteúdos

Método: POST
Rota: /listas
Descrição: Cria uma nova lista de conteúdos.
Corpo da Requisição: JSON com o título da lista.
Resposta: O objeto da nova lista criada.
Adicionar Conteúdo à Lista

Método: POST
Rota: /listas/:id/adicionar/:conteudoId
Descrição: Adiciona um conteúdo específico a uma lista.
Resposta: A lista atualizada ou erro 404 se a lista ou conteúdo não forem encontrados.
Ver o Conteúdo da Lista

Método: GET
Rota: /listas/:id
Descrição: Retorna todos os conteúdos de uma lista específica.
Resposta: Um array de conteúdos ou um erro 404 se a lista não for encontrada.

Obrigabo pela paciência <3