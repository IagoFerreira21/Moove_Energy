# Moove_Energy
Move Fit — Site da Loja

Site institucional de uma linha, feito em HTML, CSS e JavaScript puros (sem frameworks), com todos os botões de compra direcionando para o WhatsApp da loja.

Estrutura de arquivos
movefit-site/
├── index.html      → estrutura e conteúdo do site (textos, seções, links)
├── style.css       → toda a aparência visual (cores, fontes, tamanhos, layout)
├── script.js       → comportamento (slider automático, menu mobile)
└── imagens/        → fotos dos produtos e do hero

Os três arquivos e a pasta imagens precisam ficar sempre juntos, na mesma pasta. Se separar algum deles, o site perde o estilo ou para de funcionar.

Como abrir o site
Rápido: dê duplo clique no index.html — abre direto no navegador.
Recomendado (VSCode): instale a extensão Live Server, clique com o botão direito no index.html e escolha "Open with Live Server". Assim, toda vez que você salvar uma alteração, a página recarrega sozinha.
O que tem no site
Cabeçalho fixo com logo, menu de categorias e botão do WhatsApp.
Hero com slider de destaques (3 fotos que trocam automaticamente a cada 5 segundos, com setas e bolinhas).
Faixa de categorias com atalho rápido para cada seção.
4 categorias de produto: Macacão, Conjunto de Short, Conjunto em Calça e Avulsos — cada uma com cards de produto (foto, nome, descrição e botão "Comprar no WhatsApp").
Chamada final e rodapé com links de contato e Instagram.
Botão flutuante do WhatsApp, fixo no canto da tela.
Como editar as coisas mais comuns
Trocar o número do WhatsApp

Procure por wa.me/557998298485 no index.html (aparece várias vezes) e troque pelo número certo, sempre no formato 55 + DDD + número, só números, sem espaço, traço ou +.

Trocar textos e nomes de produtos

Edite direto no index.html. Cada produto está dentro de um bloco <article class="produto-card">, com o nome em <h3>, a descrição em <p class="produto-card__desc"> e o link de compra no <a>.

Trocar fotos
Coloque a nova foto dentro da pasta imagens.
No index.html, ache o <img src="imagens/nome-antigo.jpeg"> correspondente e troque pelo nome do novo arquivo.
Trocar cores

No topo do style.css, dentro de :root, estão todas as cores nomeadas (--rosa, --dourado, --preto-fundo etc.). Mudar o valor ali reflete no site inteiro.

Ajustar a foto do hero (slider)

No style.css, procure pelas regras .slide--1, .slide--2 e .slide--3:

background-size: cover → preenche a caixa toda, cortando as bordas.
background-size: contain → mostra a foto inteira, sem cortar (pode sobrar espaço nas laterais).
background-position → controla qual parte da foto aparece (center, top center, center 20% etc.).
background-color → cor que aparece atrás da foto, quando sobra espaço vazio.
Ajustar altura do hero

No style.css, na regra .slider, mude o valor de height (por padrão 78vh, ou seja, 78% da altura da tela).

Categorias e âncoras

Cada seção tem um id, usado pelos links do menu (#macacoes, #shorts, #calcas, #avulsos). Se mudar o nome de uma seção, lembre de manter (ou atualizar) o id e o link correspondente no menu.

Observações
O site é responsivo: se ajusta para celular, tablet e desktop.
O menu vira um ícone de hambúrguer em telas pequenas.
Algumas fotos dos cards ainda estão com um fundo em degradê (placeholder), porque faltam fotos reais para preencher todos os espaços — é só seguir o passo "Trocar fotos" acima quando tiver mais imagens.


link: https://moove-energy-tau.vercel.app/
