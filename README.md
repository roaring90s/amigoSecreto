# Amigo Secreto

Este é um simples site de **Amigo Secreto** desenvolvido com HTML, CSS e JavaScript. O objetivo é permitir que os usuários insiram os nomes de seus amigos e, em seguida, sorteiem um amigo secreto aleatório entre os participantes.

## Funcionalidades

1. **Adicionar Amigos**: Permite adicionar amigos à lista de participantes.
2. **Verificar Nome Vazio**: Garante que o usuário não possa adicionar um nome vazio à lista.
3. **Listar Amigos**: Exibe a lista de amigos que foram adicionados.
4. **Sortear Amigo Secreto**: Sorteia aleatoriamente um amigo secreto e exibe o nome sorteado na tela.

## Como Usar

1. **Adicionar Participantes**:
   - Insira o nome de um amigo no campo de texto e clique em "Adicionar".
   - O nome será adicionado à lista de amigos.
   - Não será permitido adicionar nomes vazios.

2. **Sortear Amigo Secreto**:
   - Após adicionar os amigos, clique em "Sortear Amigo Secreto".
   - O nome de um amigo aleatório será exibido como o amigo secreto sorteado.

## Como Funciona

- **Verificação de Nomes Vazios**: Quando um usuário tenta adicionar um amigo sem preencher o campo de texto, o sistema exibe um alerta pedindo que o campo seja preenchido corretamente.
  
- **Adição e Listagem**: Os nomes dos amigos são armazenados em uma lista interna (array) e são atualizados em tempo real na interface do usuário.

- **Sorteio Aleatório**: O sorteio é feito de maneira simples utilizando a função `Math.random()` para selecionar um amigo aleatoriamente da lista.

## Tecnologias Usadas

- **HTML**: Para a estrutura da página web.
- **CSS**: Para estilização da página (não mostrado no código, mas pode ser adicionado facilmente).
- **JavaScript**: Para implementar a lógica de adicionar amigos e realizar o sorteio.

## Como Rodar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Insira os nomes dos seus amigos e clique em "Adicionar".
4. Clique em "Sortear Amigo Secreto" para realizar o sorteio.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Basta fazer um fork deste repositório, realizar suas alterações e enviar um pull request.
