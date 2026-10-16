# Link in Bio | Matheus Amorim

Página de links profissional para Instagram, desenvolvida para apresentar o trabalho, os canais sociais e os principais pontos de contato de Matheus Amorim em uma única experiência responsiva.

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

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura semântica, conteúdo e metadados. |
| CSS3 | Layout responsivo, identidade visual, animações e efeitos. |
| JavaScript (ES6+) | Compartilhamento, cópia para a área de transferência e notificações. |
| Google Fonts | Tipografia Playfair Display e Plus Jakarta Sans. |
| SVG | Ícones vetoriais incorporados diretamente na página. |

O projeto não requer framework ou instalação de dependências. As fontes são carregadas do Google Fonts; o restante da interface usa recursos nativos da plataforma web.

## Ferramentas de criação

- **Google Antigravity IDE**: ambiente utilizado para desenvolver e revisar os arquivos do projeto.
- **Gemini**: assistência de IA durante a implementação.
- **Navegador web**: visualização e validação da interface e das interações.
- **Python 3 `http.server`**: opção simples para servir a página localmente durante o desenvolvimento.

## Executar localmente

1. Clone este repositório ou baixe os arquivos.
2. Na pasta do projeto, inicie um servidor local:

   ```bash
   python -m http.server 8085
   ```

3. Acesse [http://localhost:8085](http://localhost:8085).

Também é possível abrir `index.html` diretamente em um navegador moderno.

## Personalização

- Edite os textos, URLs dos botões e redes sociais em `index.html`.
- Substitua `assets/images/profile.jpg` para usar outra foto de perfil.
- Ajuste cores, espaçamentos e tipografia em `style.css`.
- Altere a lógica de compartilhamento em `script.js`.

## Estrutura

```text
.
├── assets/
│   └── images/
├── DOCUMENTACAO.md
├── index.html
├── script.js
├── style.css
└── README.md
```

Para detalhes técnicos adicionais, consulte [DOCUMENTACAO.md](DOCUMENTACAO.md).

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE) para ver os termos.
