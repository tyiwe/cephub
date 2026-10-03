# CepHub

Aplicação web simples que busca um endereço a partir de um CEP, usando a [API ViaCEP](https://viacep.com.br/).

## O que faz

- Digite um CEP e veja rua, bairro, cidade e estado
- Mostra uma mensagem quando o CEP não existe ou é inválido
- Funciona direto no navegador, sem instalação

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript (fetch, async/await, try/catch)

## Como rodar

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` no navegador

Não precisa de servidor nem de instalação de dependências.

## API utilizada

[ViaCEP](https://viacep.com.br/) — API pública e gratuita de consulta de CEPs do Brasil.

## Aprendizados

Este projeto foi feito como exercício de consumo de API, incluindo tratamento de dois tipos de erro: falha de rede (`response.ok`) e CEP inexistente, que a própria API retorna como um objeto `{ erro: true }` em vez de um status de erro HTTP.