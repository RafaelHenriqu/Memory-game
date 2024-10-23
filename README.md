# Card-Memory

Um jogo clássico, também conhecido como jogo da memória.

## Objetivo

O objetivo do jogo é encontrar todas as cartas em pares, memorizar as posições e revelar as cartas correspondentes.

## Como Jogar?

Para jogar, siga os passos abaixo:

1. Selecione uma carta/div/caixa na tela. Ao fazer isso, você verá uma imagem oculta.
2. Seu próximo objetivo é encontrar a carta correspondente.
3. Se você escolher uma carta errada, não se preocupe! O jogo não resetará completamente, mas a seleção atual será anulada. As cartas permanecerão na mesma ordem, a menos que você decida reiniciar o jogo.

### Ordem das Imagens
- A ordem das imagens é aleatória. Cada vez que você clica no botão "Reset", a ordem muda. Assim, ao errar, a sequência não muda e o jogo permanece desafiador, permitindo que você memorize a localização das cartas.
- O estado do jogo, incluindo a ordem das imagens, é salvo no `localStorage`, garantindo que você possa continuar a partir de onde parou.

## Como Ganhar?

Para vencer, você deve encontrar todos os pares de imagens. O primeiro a revelar todos os pares será o vencedor!

Divirta-se jogando e treine sua memória!