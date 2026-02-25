🚀 GUIA DE INÍCIO RÁPIDO - SJ SIMBA STORE
======================================

Siga estes passos para iniciar o projeto:

1️⃣ ADICIONAR O LOGO
-------------------
- Copie a imagem do logo da Sj Simba Store
- Salve como: d:\Projectos\Simba\public\images\logo.png
- (Veja instruções em LOGO_README.txt)


2️⃣ INSTALAR DEPENDÊNCIAS
------------------------
Abra o terminal na pasta do projeto e execute:

    npm install

Este comando instalará todas as bibliotecas necessárias:
- React e React DOM
- React Router para navegação
- React Icons para ícones
- Vite para desenvolvimento rápido


3️⃣ INICIAR O SERVIDOR
---------------------
Após a instalação, execute:

    npm run dev

O site abrirá automaticamente em:
    http://localhost:3000


4️⃣ NAVEGAR NO SITE
------------------
Explore as páginas:
- Início (/) - Página principal com produtos em destaque
- Loja (/loja) - Catálogo completo com filtros
- Produto (/produto/:id) - Detalhes de cada produto
- Carrinho (/carrinho) - Produtos selecionados
- Checkout (/checkout) - Finalização de compra
- Sobre (/sobre) - Informações da empresa
- Contacto (/contacto) - Formulário de contacto


5️⃣ FUNCIONALIDADES IMPLEMENTADAS
--------------------------------
✅ Design responsivo (mobile, tablet, desktop)
✅ Carrinho com localStorage (persiste ao recarregar)
✅ Filtros por categoria
✅ Ordenação de produtos
✅ Sistema de avaliações
✅ Formulário de checkout
✅ Paleta de cores elegante baseada no logo


6️⃣ PRÓXIMOS PASSOS (BACKEND)
----------------------------
Para tornar o site totalmente funcional, você precisará:
- Desenvolver API backend
- Configurar banco de dados
- Implementar processamento de pagamentos
- Criar painel administrativo
- Configurar hospedagem


💡 DICAS
--------
- Use Ctrl+C no terminal para parar o servidor
- Todos os dados de produtos estão em: src/data/products.js
- Para modificar cores: src/index.css (variáveis CSS)
- Para adicionar novos produtos: edite src/data/products.js


📧 SUPORTE
----------
Para dúvidas sobre o código:
- Leia o README.md completo
- Consulte a estrutura em src/
- Use o React DevTools para debug


Bom desenvolvimento! 🎉
