# Technical Share - SQUAD 19 💻📈

![Cover_projeto_Github](https://user-images.githubusercontent.com/102814217/163628600-18763a33-dd69-4f47-9663-c00b05a6592b.png)

<div>
    <a href="#sobre">Sobre</a> - 
    <a href="#especificacoes">Especificações</a> - 
    <a href="#comorodaroprojeto">Como Rodar o Projeto?</a> - 
    <a href="#resultados"> Resultados de Desenvolvimento</a> - 
    <a href="#features">Features</a> </li> - 
    <a href="#conteudoexterno">Conteúdo externo</a> - 
    <a href="#nossosquad">Nossa Equipe</a> - 
    <a href="#license">Licença</a>
</div>

<h2 id="sobre">Sobre</h2>
  
  <p>A Technical Share é a plataforma ideal para auxiliar o time #SangueLaranja a encontrar mentores em suas variadas áreas de conhecimento, de modo que a troca de conhecimentos e experiências contribua na evolução e desenvolvimento profissional de todos!</p>
  <p>A plataforma foi orgulhosamente desenvolvida pelo Squad 19 durante o Hackathon do Programa de Formação Season 3, da FCamara.</p>
  
<h2 id="especificacoes">Especificações</h2>
  
  <p>Nosso front-end foi construído na linguagem JavaScript, com uso da biblioteca React para construção das interfaces de usuário de forma dinâmica, utilizando a biblioteca Styled-Components para estilização, que seguiu o padrão mobile-first. Para as chamadas realizadas ao back-end, foi utilizada a biblioteca Axios. Para gerenciamento da renderização de acordo com as rotas, foi utilizado React-Router. Para o chat em tempo real, foi utilizada a biblioteca Socket.io-client, que interage em tempo real com o Socket-io que roda no back-end.</p>
  
<h2 id="comorodaroprojeto">Como rodar o projeto?</h2>
  
Realizamos o deploy da nossa solução na plataforma Heroku. Você pode acessá-la através do seguinte [link](https://hackathon-frontend-ts19.herokuapp.com/)! 🤓✨



Para acessar nossa plataforma em ambiente de desenvolvimento, siga os passos a seguir:

OBSERVAÇÃO: nosso projeto está dividido em dois repositórios no GitHub. O tutorial abaixo informa como fazer a configuração completa do projeto.
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
  
  
  Para maiores detalhes acerca dos resultados de desenvolvimento, consulte este [readme](readmeDevelopment.md) específico.
  
  
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
  * Nosso artigo traz toda a visão do nosso processo de desenvolvimento. Confira ele por aqui: https://medium.com/@mayumi.adati/technical-share-como-uma-plataforma-digital-pode-formar-l%C3%ADderes-comprometidos-e-capazes-de-2db0e13ed130 
  * Confira de forma prática a utilização da nossa plataforma através do nosso vídeo de funcionalidades: https://youtu.be/CxdYvmqpiOM
  * Não deixe de ver nosso Pitch: https://youtu.be/fvCWYr44PHo
  
  <h2 id="nossosquad">Nosso Squad</h2>

  
  |🧡|Nome|*No Programa de Formação eu...*|Contatos|
|--|--|:--:|--|
|<img src="https://user-images.githubusercontent.com/102814217/163625844-e8eae6a9-aa6d-4cbe-b33b-6b55d2239050.png" width="300">| Henrique Leme de Brito <br>(*Desenvolvedor*)| *"Superei meus limites e minhas expectativas, desenvolvendo do zero um projeto com tecnologias que nunca havia usado, todas as coisas que eu aprendi nessas últimas duas semanas trabalhando em equipe, não tem curso que forneça, enfrentei e superei muitos obstáculos e adquiri uma bagagem de conhecimento enorme, foi uma experiência única e maravilhosa, e tudo isso aprendendo do jeito que funciona melhor pra mim, na prática."* | [GitHub](https://github.com/henrique-leme) [Linkedin](https://www.linkedin.com/in/henrique-leme/) [Email](henriqueleme.brito@outlook.com)
|<img src="https://user-images.githubusercontent.com/102814217/163625944-dea56cfb-b260-4bd5-bc8e-f6afe6c80dfa.png" width="300">| João Lourenço <br>(*Desenvolvedor*) | *"Tive a oportunidade incrível de viver o dia a dia de um squad com uma demanda real para desenvolver uma solução. Todo o processo de planejamento, definição de metas e o do trabalho em equipe foram, sem dúvidas, muito importantes para meu desenvolvimento. Apesar de já ter desenvolvido projetos pessoais anteriormente, minha experiência era limitada ao front-end. Deparar-se com uma demanda de desenvolvimento de uma aplicação fullstack foi um grande desafio, mas considero que as dificuldades encontradas durante o projeto foram o combustível para que continuássemos nos desenvolvendo e, chegando ao último dia, percebo o quanto evoluí desde o início e me sinto motivado a evoluir cada vez mais!"* | [Github](https://github.com/joaodslourenco/) [Linkedin](https://www.linkedin.com/in/joaodslourenco/) [Email](joaodslourenco@gmail.com) |
| <img src="https://user-images.githubusercontent.com/102814217/163625962-845d6538-46e9-43f2-966c-7d2b2e292fe4.png" width="300"> | Leonardo Falcão <br>(*Desenvolvedor*)| *"Durante o programa de formação eu consegui aperfeiçoar muitas técnicas de trabalho em equipe, pois iniciamos o projeto dentro de um grupo o qual ninguém se conhecia e em sua grande maioria não tinham muita experiência técnica. E hoje, quase duas semanas depois, temos um protótipo finalizado, o qual requereu muito esforço e sintonia da equipe, para que fôssemos capazes de dentro do tempo hábil, aprender sobre as tecnologias necessárias, e desenvolver a problemática."* | [Github](https://github.com/leofalcao10) [Linkedin](https://www.linkedin.com/in/leonardo-plazezwski-falc%C3%A3o/) [Email](leonardopfalcao1@gmail.com) |
| <img src="https://user-images.githubusercontent.com/102814217/163626009-0931eccc-0771-4314-96fe-59375d6221d9.png" width="300"> | Malena Venturini <br>(*UX Designer*) | *"Tive a oportunidade de aprender com um time incrível e sentir um pouco como é estar numa empresa de tecnologia! Ao trabalhar com eles, desenvolvi habilidades que, por ser nova na área, eu ainda estava aperfeiçoando, de uma forma muito mais dinâmica. Aprendi a amar muito mais a Experiência do usuário! Acredito que o hackathon Foi um dos primeiros passos para transformar a minha vida profissional."* | [Linkedin](https://www.linkedin.com/in/malenasventurini/) [Email](malenasventurini@gmail.com)
  | <img src="https://user-images.githubusercontent.com/102814217/163625988-a8f2a80b-a7d8-49de-91e0-bbdc936b834f.png" width="300"> | Mayumi Adati <br>(*UX Designer*) | *"Além do tempo limitado, o desafio de definir um mvp me fez refletir sobre várias outras habilidades interdisciplinares do UX, business, marketing, branding, writing… bem como a habilidade de priorização de tarefas que é essencial para um framework de pressão e tempo. Pude desenvolver melhor essas habilidades durante o Hackathon e espero aplicá-las em breve em outros projetos."* | [Linkedin](https://www.linkedin.com/in/mayumiguimar%C3%A3es/) [Email](mayumi.adati@gmail.com)
  | <img src="https://user-images.githubusercontent.com/102814217/163626043-df716c50-22f8-4744-972a-fcd9885ce032.png" width="300">| Samuel Avila <br>(*UX Designer*)| *"Durante o programa de formação eu pude crescer muito. Vi que ainda tenho mto há desenvolver - já que diversos erros foram consequência de coisas que nem imaginava -  e que ainda tenho que praticar muito o uso de algumas ferramentas (figma) para otimizar o trabalho. Apesar disso, foi muito bom ver como o trabalho estava fluindo com minhas companheiras de equipe, vimos que éramos bons em coisas diferentes e nos complementamos e mesmo podendo melhorar bastante estou bem satisfeito com o que conseguimos fazer em 15 dias."* | [Linkedin](https://www.linkedin.com/in/samuelfavila/) [Email](samuel2001.furtadoavila@gmail.com) [Medium](https://medium.com/@samuelfavila) [GitHub](https://github.com/samuelfavila)
  
  <h2 id="license">Licença</h2>
  
