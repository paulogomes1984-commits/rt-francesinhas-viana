# HERO com sequência controlada pelo scroll

## Objetivo
Substituir a imagem estática do HERO da página principal pelos 40 frames enviados, reproduzindo o molho a ser servido à medida que o utilizador faz scroll.

## Implementação
- Extrair os 40 frames pela ordem numérica e alojá-los como recursos do site.
- Criar um HERO alto com imagem fixa durante o percurso do scroll, para a sequência completa ter espaço e ritmo natural.
- Desenhar os frames num canvas responsivo, preservando o enquadramento 16:9 e a nitidez em diferentes ecrãs.
- Converter a progressão do scroll no índice da imagem, com atualização suave e suporte a scroll nos dois sentidos.
- Pré-carregar a sequência e mostrar o primeiro frame imediatamente, evitando flashes ou espaços vazios.
- Manter o logótipo, título, texto e botão atuais sobre a animação, ajustando contraste e transições sem alterar as restantes secções.
- Respeitar a preferência de movimento reduzido, exibindo uma imagem estável quando necessário.

## Validação
- Confirmar a sequência completa do primeiro ao último frame no desktop.
- Verificar enquadramento, legibilidade e ausência de sobreposições em mobile.
- Confirmar que o botão de Take Away e a navegação continuam funcionais.
