### Para rodar o repositório é necessário ter o docker instalado

O servidor ficará disponível na porta 4000.

## Para Rodar os testes, va até à pasta raiz do projeto e execute:

- `docker compose run server npm run test`

## Para Inciar o servidor va até à pasta raiz do projeto e execute:

- `docker compose up`

## Para acessar a documentação no swagger, inicie o servidor e visite:

- localhost:4000/api

Para criar um usuário, é necessário o cadastro em `/auth/signup` com `username` e `password`. Tanto o cadastro quanto o login retornam um JWT que é necessário para acessar a api de usuários `/users`.

### Decisões de projeto de software

- Optei por usar o docker com o docker-compose para que o ambiente pudesse ser replicado com facilidade, levando em conta, principalmente, a configuração do banco de dados e a conexão servidor-banco de dados.

- Usei typescript para aproveitar os benefícios da tipagem e pelo padrão de qualidade.

- Para a documentação, usei o swagger com o js-doc, de modo a documentar tanto o código quanto a api para um eventual consumo por outro software.

- Utilizei chave simétrica para codificação do JWT pela simplicidade. Em casos mais críticos, pode-se utilizar uma chave assimétrica.

- Escolhi usar apenas um token com duração de um dia, em vez de um `access_token` combinado com um `refresh_token`, pela simplicidade de execução.

### Decisões de negócio

- Criei endpoints de cadastro e login para que seja possível fazer o controle de acesso ao software sem a necessidade de pré-configurar o banco de dados com uma conta de admin.

- Criei endpoints para verificar o status do servidor e do banco de dados tanto para checagem em desenvolvimento, quanto, eventualmente, em produção.

### Fluxo de autenticação

- O usuário cria uma conta com `username` e um `password`. A biblioteca bcrypt cria um hash da senha e grava no banco de dados para o `username`. A senha real nunca é registrada por questão de segurança. Como guardamos o hash e não simplesmente a senha criptografada, não é possível fazer a engenharia reversa e descobrir a senha real do usuário caso o banco de dados seja comprometido.

- Ao fazer login, o usuário envia um `username` e um `password`. O `username` é `UNIQUE` no banco de dados. O backend recebe esses dados e busca o cadastro correspondente. Com a biblioteca bcrypt, fazemos o hash no servidor da senha que o usuário está tentanto e verificamos se bate com o hash armazenado - em caso positivo, consideramos que a senha está correta, geramos um JWT que contém um identificador e retornamos ao usuário.

- Cada vez que o usuário acessar um endpoint protegido, decodificamos o JWT e usamos o identificador para buscar esse usuário no banco. Uma vez com as informações desse usuário, é possível verificar suas permissões e garantir o nível de acesso correto.

### Pontos de melhora

- A documentação de cada endpoint, assim como os campos aceitos, deveria ser mais granular. Por uma questão de tempo, acabei usando modelos mais genéricos.

- Os testes poderiam ser mais específicos, inclusive levantando um banco de dados para verificação de cada endpoint individualmente. Também seria preciso mais tempo para executar.
