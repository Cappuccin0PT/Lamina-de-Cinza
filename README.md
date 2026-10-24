# Lâmina de Cinza

Protótipo de hack and slash: sprites em pixel art dentro de um mundo 3D (three.js), com música e efeitos procedurais.

## Gerar o .exe no GitHub

1. Cria um repositório novo no GitHub e envia todos os ficheiros desta pasta (incluindo a pasta escondida `.github`).
2. Abre o separador **Actions**, escolhe **Gerar exe para Windows** e carrega em **Run workflow**.
3. Quando terminar (cerca de 5 minutos), abre a execução e descarrega o artefacto `lamina-de-cinza-windows`. Tem dois ficheiros:
   - `LaminaDeCinza-0.1.0-portatil.exe`: abre diretamente, sem instalar.
   - `LaminaDeCinza-0.1.0-instalador.exe`: instala no Windows com atalho.

Para criar uma release pública com os exe anexados, cria uma tag que comece por `v`:

```
git tag v0.1.0
git push origin v0.1.0
```

O Windows pode mostrar um aviso do SmartScreen, porque o exe não está assinado. Escolhe "Mais informações" e depois "Executar mesmo assim".

## Testar no computador

Precisas do Node.js 20 ou mais recente.

```
npm install
npm start
```

## Controlos

WASD ou setas para mover, J ou clique para atacar, Espaço ou K para esquivar, Esc para pausa, M para som, G para efeitos de imagem, F11 para ecrã inteiro.

## Estrutura

- `src/index.html`: o jogo inteiro (gráficos, som e lógica).
- `main.js`: janela do Electron.
- `scripts/copy-vendor.js`: copia o three.js para `src/vendor` para o jogo funcionar sem internet.
- `.github/workflows/build.yml`: gera os exe no GitHub Actions.
