# Calistenia — v1 (PWA)

Sistema próprio, em pt-BR, inspirado (sem copiar) em Calisteniapp, Calistree, Thenics, Virtuagym, HoloFit e Cali.

## O que tem na v1
- 13 exercícios com boneco animado próprio (SVG + CSS), passos e erro comum
- 5 treinos prontos com filtro por nível e equipamento
- Player interativo: séries, descanso com timer, próximo exercício, concluir treino
- 5 skills com escada de progressão (barra, muscle-up, parada de mão, front lever, planche)
- Progresso salvo no navegador (localStorage): treinos, séries, sequência, mapa muscular, histórico

## O que falta para a v2 (decisão do usuário)
- Vídeos reais: gravações próprias, não vídeos copiados de outros apps
- Conta / nuvem e sincronização (hoje é local)
- Deploy Railway + GitHub, como os outros sistemas
- Notificações de treino e plano semanal adaptativo

## Como abrir
Abra `index.html` no navegador do celular ou PC. Para instalar como app, use "Adicionar à tela inicial" no navegador.

## Deploy Railway
Servidor estático sem dependências (`server.js`, `package.json start`, `railway.json` com healthcheck em `/health`). Não precisa de volume: o progresso fica no localStorage do navegador de cada usuário, não no servidor.
