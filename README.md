# Boas vindas ao repositório do projeto uMAP!

## Instruções iniciais
1. Clone o repositório
  * `git clone https://github.com/alexandredamasceno/tracepack-frontend`
2. Entre na pasta do repositório que você acabou de clonar:
  * `cd tracepack`
3. Instale as dependências
  * `npm install`
5. Para rodar o projeto:
 * `npm start`

## Tecnologias

* `HTML`;
* `CSS`;
* `React`;
* `Leaflet`;
* `React-leaflet`;
* `Hooks`;
* `ESlint`;
* `Bootstrap`.

## Experiência com o projeto
Sem dúvidas um dos projetos mais divertidos que já fiz. Foi meu primeiro contato com o formato geoJSON e com as bibliotecas Leaflet e react-leaflet.
Passei grande parte do tempo tentando entender o funcionamento das bibliotecas, busquei ajuda, além da documentação, em artigos, github e vídeos no youtube. Eu acabei simulando uma conexão com um Banco de Dados através do `LocalStorage` para facilitar na hora de rodar o projeto e também, como eu tinha um prazo e meu tempo estava apertado, achei mais sensato fazer assim.

## Rotas
- Login("/"): essa é a tela inicial da aplicação. Para logar você precisa: `email válido(exemplo@email.com)` e `senha válida(string com pelo menos 6 caracteres)`. O botão estará desabilitado até que você coloque os dados corretos. Caso não tenha registro você não será redirecionado para a tela principal, basta clicar em `Cadastrar`;
- Register("register"): para se cadastrar: `userName(string com pelo menos 4 caracteres)`, `email válido(exemplo@email.com)` e `senha válida(string com pelo menos 6 caracteres)`. Clique em `Cadastrar` e será redirecionado para a tela de `Login`;
- Home("home"): essa é a tela principal, onde contém o mapa, o título da aplicação e dois menus(`Cadastrar Posições` e `Cadastrar Polígonos`);
- AddPoints("addPoints"): aqui você pode adicionar as coordenadas da localização(longitude e latitude), assim como um nome para a posição. POde adicionar quantas quiser. Depois basta clicar em `Ver no mapa` para visualização as coordenadas no mapa.
