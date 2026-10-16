# Link in Bio | Matheus Amorim

Página de links profissional para Instagram, desenvolvida para apresentar o trabalho, os canais sociais e os principais pontos de contato de Matheus Amorim em uma única experiência responsiva.

<p align="center">
   <a href="https://antigravity.google/product/antigravity-ide">
      <img src="assets/icons/antigravity.svg" alt="Pictograma autoral do Google Antigravity IDE" width="52">
   </a>
   <br>
   <strong>Desenvolvido com Google Antigravity IDE e Gemini</strong>
</p>

<p align="center">
   <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
   <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
   <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=18191C">
   <img alt="Gemini" src="https://img.shields.io/badge/Gemini-4285F4?style=flat-square&logo=googlegemini&logoColor=white">
   <img alt="Python 3" src="https://img.shields.io/badge/Python%203-3776AB?style=flat-square&logo=python&logoColor=white">
</p>

<p align="center"><sub>O pictograma do Antigravity é uma ilustração original deste repositório, não um logotipo oficial do Google.</sub></p>

O projeto combina uma identidade visual em grafite, tipografia editorial e navegação objetiva. A estrutura pode ser adaptada para outros profissionais, criadores de conteúdo e pequenos negócios.

## Visão geral

A página inclui perfil, biografia, links de destaque, redes sociais e compartilhamento do perfil. Os endereços dos botões e das redes podem ser personalizados no HTML.

## Recursos

- Layout responsivo para celular e desktop.
- Perfil com imagem, nome e apresentação profissional.
- Links de destaque para site, loja, orçamento e materiais.
- Atalhos para redes sociais.
- Compartilhamento com a API nativa do navegador e alternativa para copiar o link.
- Notificação visual após copiar o endereço.
- Metadados básicos para mecanismos de busca e compartilhamento social.

## Tecnologias e arquitetura

| Camada | Arquivo ou recurso | Utilização |
| --- | --- | --- |
| Marcação | `index.html` / HTML5 | Estrutura semântica, conteúdo, metadados e acessibilidade. |
| Estilos | `style.css` / CSS3 | Layout responsivo, identidade visual, animações e efeitos. |
| Interações | `script.js` / JavaScript ES6+ | Compartilhamento, cópia do endereço, notificações e ano do rodapé. |
| Tipografia | Google Fonts | Playfair Display e Plus Jakarta Sans. |
| Ícones | SVG | Ícones vetoriais leves, incluindo o pictograma autoral em `assets/icons/`. |

O projeto não requer framework ou instalação de dependências. As fontes são carregadas do Google Fonts; o restante da interface usa recursos nativos da plataforma web.

## Ferramentas de criação

- **[Google Antigravity IDE](https://antigravity.google/product/antigravity-ide)**: ambiente de desenvolvimento baseado em agentes, usado para implementar e revisar o projeto.
- **Gemini**: assistência de IA durante a criação e o refinamento do código.
- **Navegador web**: visualização da página e conferência das interações em diferentes tamanhos de tela.
- **Python 3 `http.server`**: servidor local leve para testar o site sem instalar dependências.

O Antigravity combina ferramentas de desenvolvimento com recursos de agentes e compreensão da base de código. O pictograma exibido neste README foi criado para representar essa ferramenta no contexto do projeto; não é uma reprodução de sua identidade visual oficial.

## Executar localmente

1. Clone este repositório ou baixe os arquivos.
2. Na pasta do projeto, inicie um servidor local:

   ```bash
   python -m http.server 8085
   ```

3. Acesse [http://localhost:8085](http://localhost:8085).

Também é possível abrir `index.html` diretamente em um navegador moderno.

## Publicar e colocar na bio do Instagram

Como este repositório é público, você pode hospedar a página gratuitamente no GitHub Pages:

1. Abra [Configurações do GitHub Pages](https://github.com/matheus2k221/template-de-link-in-bio-para-o-instagram/settings/pages).
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/(root)`, depois clique em **Save**.
4. Aguarde a publicação e abra: [matheus2k221.github.io/template-de-link-in-bio-para-o-instagram](https://matheus2k221.github.io/template-de-link-in-bio-para-o-instagram/).
5. No Instagram, acesse **Perfil > Editar perfil > Links > Adicionar link externo**, cole o endereço publicado e salve.
6. Abra o perfil público e teste o link.

Sugestão de bio:

> Desenvolvimento Web &amp; Mobile<br>
> Sites e experiências digitais sob medida<br>
> Portfólio e orçamento no link abaixo ↓

**Antes de divulgar:** substitua os `href` de exemplo dos botões e das redes sociais em `index.html` pelos seus endereços reais. O [guia detalhado](DOCUMENTACAO.md) traz sugestões para cada botão, inclusive WhatsApp, loja e materiais gratuitos.

## Personalização

- Edite os textos, URLs dos botões e redes sociais em `index.html`.
- Substitua `assets/images/profile.jpg` para usar outra foto de perfil.
- Ajuste cores, espaçamentos e tipografia em `style.css`.
- Altere a lógica de compartilhamento em `script.js`.

## Estrutura

```text
.
├── assets/
│   ├── icons/
│   │   └── antigravity.svg
│   └── images/
│       ├── reference_profile.jpg
│       └── profile.jpg
├── DOCUMENTACAO.md
├── index.html
├── script.js
├── style.css
└── README.md
```

Os arquivos HTML, CSS e JavaScript permanecem na raiz para que o projeto continue funcionando sem compilação, tanto ao abrir `index.html` quanto em hospedagens estáticas como GitHub Pages. Os recursos visuais ficam agrupados em `assets/`.

Para detalhes técnicos adicionais, consulte [DOCUMENTACAO.md](DOCUMENTACAO.md).

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE) para ver os termos.
