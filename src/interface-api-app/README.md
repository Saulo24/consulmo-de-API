# Interface API App

Este projeto é uma aplicação web responsiva que consome uma API para buscar informações com base no CPF fornecido pelo usuário. A aplicação é construída utilizando React e TypeScript.

## Estrutura do Projeto

- **public/index.html**: Página principal da aplicação, contendo a estrutura HTML básica e referência ao arquivo CSS.
- **public/style.css**: Estilos CSS para garantir que a interface seja responsiva e visualmente agradável.
- **src/App.tsx**: Ponto de entrada da aplicação React, gerenciando o estado global e renderizando os componentes principais.
- **src/components/SearchForm.tsx**: Componente funcional que contém um formulário com um campo de entrada para CPF e um botão para enviar a busca.
- **src/components/Results.tsx**: Componente funcional que exibe os resultados da busca, recebendo dados da API como props.
- **src/types/index.ts**: Exporta interfaces que definem os tipos de dados utilizados na aplicação.
- **tsconfig.json**: Configuração do TypeScript, especificando opções do compilador e arquivos a serem incluídos.
- **package.json**: Configuração do npm, listando dependências e scripts do projeto.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL do repositório>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd interface-api-app
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License.