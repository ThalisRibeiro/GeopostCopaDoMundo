# SIMULADOR DA COPA DO MUNDO

## Projeto que simula os jogos da copa do mundo de forma aleatória

### Algorítimo
O algorítmo começa consumindo a api da geopost https://estagio.geopostenergy.com/WorldCup/GetAllTeams usando os dados para criar um objeto Seleção com
- Nome
- Token
- Vitorias Empates e Derrotas
- Gols feitos, Recebidos e Gols de Pênaltis

Com um array de seleções criado, esse array é dividido em 4 grupos aleatóriamente, todas as equipes do mesmo grupo jogam entre si com 3 jogos no total.

Cada vitória acumula 3 pontos e empate acumula 1. Caso haja empate na pontuação, o critério de desempate será o saldo de gol.

O líder e vice líder de cada grupo se classificam para as oitavas, de um lado da tabela o lider do grupo 'A' irá jogar uma partida com o vice líder do grupo 'B' e do outro o lider do grupo 'B' irá jogar uma partida com o vice líder do grupo 'A'.

Cada jogo dessa segunda fase obrigatóriamente terminará com um vencedor, caso aconteça o empate, a partida irá para os pênaltis e isso irá ocorrer até chegar na final.

Após toda simulação ocorrer, é enviado para a api da geopost https://estagio.geopostenergy.com/WorldCup/InsertFinalResult um json com o resultado da final
- token da equipe A
- token da equipe B
- gols da equipe A
- gols da equipe B
- gols de pênalti da equipe A
- gols de pênalti da equipe B

### UI
A parte visual mostra o caminho da simulação, do lado esquerdo tem a classificação dos grupos, na direita a tabela da copa com o caminho que os times percorreram e na parte de baixo o histórico de todos os jogos separados pela fase que ocorrendo, sendo na fase de grupos, oitavas, quartas, semi ou final.
Há tambêm um botão escrito Calcula Jogos, ele sendo clicado reinicia o algorítimo, criando novos grupos simulando novos jogos.