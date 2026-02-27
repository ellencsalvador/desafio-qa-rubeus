# Desafio QA - Rubeus

Este repositório contém a estratégia de testes e automação para o portal de certificação da Rubeus.

## 📋 Cenários de Teste (Gherkin)

**Funcionalidade:** Formulário de Inscrição para Certificação
**Cenário:** Impedimento de avanço por falta de Base Legal (Bug Crítico)
- **Dado** que acesso a página de certificação `https://qualidade.apprbs.com.br/certificacao`
- **E** preencho os campos obrigatórios (Nome, Telefone, Email)
- **Quando** clico no botão "AVANÇAR"
- **Então** o sistema deve exibir a mensagem de erro "É necessário informar a base legal"
- **E** a inscrição não deve prosseguir para a próxima etapa.

## 🚀 Tecnologias Utilizadas
- Cypress 15.11.0
- Node.js
- JavaScript

## 🛠️ Como executar os testes
1. Clone o repositório: `git clone https://github.com/ellencsalvador/desafio-qa-rubeus.git`
2. Instale as dependências: `npm install`
3. Execute os testes em modo headless: `npx cypress run`

> **Nota Técnica:** Devido a limitações de dependências gráficas (`Xvfb`) no ambiente de desenvolvimento em nuvem (GitHub Codespaces), a execução local pode exigir a instalação prévia de bibliotecas de interface do Linux.