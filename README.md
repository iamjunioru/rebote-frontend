# 🏐 rebote

este é o repositório do front-end para o **rebote**, um sistema de replay instantâneo.

## 🚀 funcionalidades

- **capturacontínua:** simula uma gravação em loop de segundos/minutos atrás.
- **gatilho de replay:** um botão na tela aciona o salvamento da jogada.
- **playback imediato:** Após o gatilho, o vídeo é exibido na tela.
- **QR Code para download:** Gera um QR code para baixar o vídeo no celular.

## 🛠️ tecnologias (frontend)

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**

---

## 💻 como Rodar o Projeto

### pré-requisitos

para rodar este projeto, você precisará ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado em sua máquina.

### passos para Execução

1.  **instale as dependências:**
    no terminal, dentro da pasta do projeto, execute o comando:
    ```bash
    npm install
    ```

2.  **inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **acesse a aplicação:**
    abra seu navegador e acesse [http://localhost:9002](http://localhost:9002).

---

## ⚙️ simulação

o projeto funciona de forma independente, sem a necessidade de hardware (câmera ou botão físico) por enquanto. todo o fluxo de gravação e geração de vídeo é simulado:

- a **tela inicial** representa o modo de "gravando".
- o **botão laranja** na tela funciona como o gatilho para salvar o replay.
- após o clique, o sistema exibe uma tela de **processamento** e, em seguida, o **vídeo de replay** com um QR Code para download.
