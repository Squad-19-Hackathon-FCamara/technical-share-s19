# Technical Share - SQUAD 19 💻📈

![Cover_projeto_Github](https://user-images.githubusercontent.com/102814217/163628600-18763a33-dd69-4f47-9663-c00b05a6592b.png)

<ol>
    <li><a href="#sobre">Sobre</a></li>
        <li> <a href="#especificacoes">Especificações</a></li>
        <li> <a href="#comorodaroprojeto">Como Rodar o Projeto?</a> </li>
        <li> <a href="#resultados"> Resultados de Desenvolvimento</a> </li>
        <li> <a href="#features">Features</a> </li>
        <li> <a href="#conteudoexterno">Conteúdo externo</a></li>
        <li> <a href="#nossosquad">Nossa Equipe</a></li>
        <li> <a href="#license">Licença</a></li>
</ol>

<h2 id="sobre">Sobre</h2>
  
  <p>A Technical Share é a plataforma ideal para auxiliar o time #SangueLaranja a encontrar mentores em suas variadas áreas de conhecimento, de modo que a troca de conhecimentos e experiências contribua na evolução e desenvolvimento profissional de todos!</p>
  <p>A plataforma foi orgulhosamente desenvolvida pelo Squad 19 durante o Hackathon do Programa de Formação Season 3, da [FCamara](https://digital.fcamara.com.br/programadeformacao).</p>
  
<h2 id="especificacoes">Especificações</h2>
  
  <p>Nosso front-end foi construído na linguagem JavaScript, com uso da biblioteca React para construção das interfaces de usuário de forma dinâmica, utilizando a biblioteca Styled-Components para estilização, que seguiu o padrão mobile-first. Para as chamadas realizadas ao back-end, foi utilizada a biblioteca Axios. Para gerenciamento da renderização de acordo com as rotas, foi utilizado React-Router. Para o chat em tempo real, foi utilizada a biblioteca Socket.io-client, que interage em tempo real com a Socket-io que roda no back-end.</p>
  
<h2 id="comorodaroprojeto">Como rodar o projeto?</h2>
  
Realizamos o deploy da nossa solução na plataforma Heroku. Você pode acessá-la através do seguinte [link](https://hackathon-frontend-ts19.herokuapp.com/)! 🤓✨
  
Para acessar nossa plataforma em ambiente de desenvolvimento, siga os passos a seguir:
  
  ``` bash
  #Faça o clone dos repositórios Front-end e Back-end:
  ##Front-end
  $ git clone https://github.com/Squad-19-Hackathon-FCamara/technical-share-s19.git
  ##Back-end
  $ git clone https://github.com/Squad-19-Hackathon-FCamara/technical-share-s19-api.git
  
  #Em seguida, entre na pasta do front-end e instale as dependências:
  
  $ npm install
  
  #Ainda na pasta do front-end, crie um arquivo .env na raiz, utilizando as variáveis de ambiente informadas no Notion do projeto:
  
  $ REACT_APP_BACK_URL="(chave disponível no Notion)"
  
  #Feita a configuração da pasta do front-end, entre na pasta do back-end e instale as dependências:
  
  $ npm install
  
  #Crie um arquivo .env na raiz da pasta do back-end, utilizando as variáveis de ambiente informadas no Notion do projeto:
  
  $ SECRET_KEY="(chave disponível no Notion)"

  $ MONGO_URL="(chave disponível no Notion)"

  $ FRONT_URL="(chave disponível no Notion)"
  
  
  # Após instalar as dependências e configurar as variáveis de ambiente, entre na pasta do Back-end e rode: 
  
  $ npm run dev
  
  # Com o servidor back-end rodando, entre na pasta front-end e rode o comando:
  
  $ npm start
  
  ```
  
  <h2 id="resultados">Resultados de desenvolvimento</h2>
  
  * Implementação de design responsivo seguindo padrão mobile-first;
  * Visualização dos profissionais da FCamara por área, tecnologias, senioridade e segmentos de experiência;
  * Busca através de nome, áreas e tags;
  * Chat em tempo real com integrantes da FCamara para mentorias, solução de dúvidas e desenvolvimento de novos conhecimentos;
  * Armazenamento dos chats em banco de dados para consultas posteriores.
  <br/>
  Para maiores detalhes acerca dos resultados de desenvolvimento, consulte este [readme]() específico.
  
  <h2 id="features">Futuras implementações</h2>
  
  Para o futuro da nossa aplicação, planejamos as seguintes implementações:
  * Recuperação de senha na tela de login;
  * Permitir adoção de foto de perfil;
  * Criação de página perfil para cada usuário, onde será possível ler mais informações sobre o mentor, como uma biografia, redes sociais, data de ingresso na FCamara, entre outras;
  * Possibilidade de editar o próprio perfil, para manter sempre atualizado;
  * Integração com agenda do Outlook;
  * Agendamento de vídeochamada a partir da plataforma, efetuando o registro do evento na agenda profissional dos participantes;
  * Ícone com contador de mensagens não lidas no chat;
  * Adição de página para visualizar as mentorias agendadas para o usuário logado;
  
  <h2 id="conteudoexterno">Conteúdo externo</h2>
  
  * Confira de forma prática a utilização da nossa plataforma através do nosso [vídeo de funcionalidades]()!
  * Nosso artigo traz toda a visão do nosso processo de desenvolvimento. Confira ele por [aqui]() :)
  * Não deixe de ver nosso [Pitch]()
  
  <h2 id="nossosquad">Nosso Squad</h2>

  
  |🧡|Nome|*No Programa de Formação eu...*|Contatos|
|--|--|:--:|--|
|<img src="https://user-images.githubusercontent.com/102814217/163625844-e8eae6a9-aa6d-4cbe-b33b-6b55d2239050.png" width="200"><br>*Desenvolvedor*| Henrique Leme de Brito| *""* | [GitHub](https://github.com/henrique-leme) [Linkedin](https://www.linkedin.com/in/henrique-leme/) [Email](henriqueleme.brito@outlook.com)
|<img src="https://user-images.githubusercontent.com/102814217/163625944-dea56cfb-b260-4bd5-bc8e-f6afe6c80dfa.png" width="200"><br>*Desenvolvedor*| João Lourenço | *""* | [Github](https://github.com/joaodslourenco/) [Linkedin](https://www.linkedin.com/in/joaodslourenco/) [Email](joaodslourenco@gmail.com) |
| <img src="https://user-images.githubusercontent.com/102814217/163625962-845d6538-46e9-43f2-966c-7d2b2e292fe4.png" width="200"><br>*Desenvolvedor* | Leonardo Falcão | *""* | [Github](https://github.com/leofalcao10) [Linkedin](https://www.linkedin.com/in/leonardo-plazezwski-falc%C3%A3o/) [Email]() |
| <img src="https://user-images.githubusercontent.com/102814217/163626009-0931eccc-0771-4314-96fe-59375d6221d9.png" width="200"><br>*UX Designer* | Malena Venturini | *""* | [Linkedin](https://www.linkedin.com/in/malenasventurini/) [Email]()
  | <img src="https://user-images.githubusercontent.com/102814217/163625988-a8f2a80b-a7d8-49de-91e0-bbdc936b834f.png" width="200"><br>*UX Designer* | Mayumi Adati | *""* | [Linkedin]() [Email]()
  | <img src="https://user-images.githubusercontent.com/102814217/163626043-df716c50-22f8-4744-972a-fcd9885ce032.png" width="200"><br>*UX Designer* | Samuel Avila | *""* | [Linkedin]() [Email]()
  
  <h2 id="license">Licença</h2>
  
