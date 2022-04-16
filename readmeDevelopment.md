# Detalhamento dos resultados de desenvolvimento do Squad-19

<ol>
    <li><a href="#resultados">O que foi feito?</a></li>
        <li> <a href="#design">Implementação de design responsivo seguindo padrão mobile-first;</a></li>
        <li> <a href="#profissionais">Visualização dos profissionais da FCamara por área, tecnologias, senioridade e segmentos de experiência;</a> </li>
        <li> <a href="#chat">Chat em tempo real com integrantes da FCamara para mentorias, solução de dúvidas e desenvolvimento de novos conhecimentos;</a> </li>
        <li> <a href="#armazenamento"> Armazenamento dos chats em banco de dados para consultas posteriores.
 </a> </li>
</ol>

<h2 id="design">Implementação de design responsivo seguindo padrão mobile-first</h2>

O design das interfaces foi elaborado conforme definido pela equipe de UX para os MVPs mobile e desktop, que pode ser acessado pelo [Figma](https://www.figma.com/file/iC2dKi1CEF2c4LHjJZ9kg4/Technical-Share?node-id=6%3A32). Nossa plataforma utilizou as bibliotecas React como base e Styled-Components, o que permitiu a componentização dos elementos em tela e a adoção de lógica javascript através de props repassadas aos componentes, que chamam comportamentos específicos da estilização.

Resultados:

- **Login:**


![image](https://user-images.githubusercontent.com/90736469/163655513-47f0707b-956f-479b-9823-517ab881be7b.png)
![image](https://user-images.githubusercontent.com/90736469/163655530-a87758e4-af90-4489-a5e5-4223f7d334b3.png)

- **Register**

![image](https://user-images.githubusercontent.com/90736469/163655549-06f6227e-361b-468d-a7db-8570b502a781.png)
![image](https://user-images.githubusercontent.com/90736469/163655557-076545de-9d74-4feb-84ca-1d5094d9045b.png)


- **Home:**

![image](https://user-images.githubusercontent.com/90736469/163655681-07582c28-4009-4b2b-a812-0ce48b2f9bba.png)
![image](https://user-images.githubusercontent.com/90736469/163655694-e19be764-fdc2-4cc1-b358-e17ec45d1cae.png)

- **Chat:**

![image](https://user-images.githubusercontent.com/90736469/163655723-4f4dd10f-659f-489d-9349-4bdbffba91f9.png)
![image](https://user-images.githubusercontent.com/90736469/163655743-7bf2031d-7a35-4389-b3c7-59db3a75e99e.png)
![image](https://user-images.githubusercontent.com/90736469/163655755-7ac85832-1971-4c84-aba6-6e43fd667cb7.png)

<h2 id="profissionais">Visualização dos profissionais da FCamara por área, tecnologias, senioridade e segmentos de experiência</h2>

![image](https://user-images.githubusercontent.com/90736469/163655876-64a74f55-619b-4dee-ab40-f4288636b8a2.png)
Para a visualização dos mentores cadastrados, utilizamos conceitos como useState, useEffect e Context API para, dentro do contexto, executar a função que faz a chamada do banco de dados e atribui ao state users, que é servido globalmente à aplicação. Dentro da page Home, recebemos o state users e, filtrando os usuários para excluir o usuário logado, é realizado um map para renderizar os usuários cadastrados no componente Card.
Cada card gerado permite iniciar uma conversa com o mentor desejado diretamente a partir da Home, redirecionando o usuário para a conversa.

<h2 id="chat">Chat em tempo real com integrantes da FCamara para mentorias, solução de dúvidas e desenvolvimento de novos conhecimentos;</h2>

![image](https://user-images.githubusercontent.com/90736469/163656283-ef71c16a-2ec4-46ac-975d-70fffcc25b3d.png)
O Chat em tempo real foi um grande desafio. A implementação da biblioteca Socket.io permitiu que fosse criada uma requisição contínua estabelecida entre o front-end e o back-end utilizando WebSockets, que permitem uma comunicação bidirecional e de baixa latência. Para tanto, configuramos o Socket.io tanto no front-end, quanto no back-end, havendo a definição de funções a serem chamadas quando determinados eventos eram disparados por alguma das partes. O Socket.io, por conta própria, já permitiria a comunicação entre duas pessoas, mas visando permitir a comunicação assíncrona, fizemos também o registro das mensagens no banco de dados.

<h2 id="armazenamento">Armazenamento dos chats em banco de dados para consultas posteriores.</h2>

O armazenamento dos chats e de todos os dados, de forma geral, também foi uma grande oportunidade de aprendizado. Até então, nenhum dos membros havia tido experiência com o desenvolvimento de uma API para interagir com um banco de dados. Dedicamos muitas horas e aprendemos a estrutura de padrão de projetos em node.js, aplicamos em nosso projeto, definindo rotas para cada requisição para armazenar ou retornar as informações desejadas. Dessa forma, conseguimos armazenar as informações pertinentes à nossa aplicação e prover uma experiência completa de chat que permite conversar em tempo real e consultar posteriormente as conversas, para recuperar informações quando necessário.

<hr />
Isso é tudo! :)
