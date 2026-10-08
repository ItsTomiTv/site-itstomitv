# Instruções de Deploy no Netlify

## Opção 1: Deploy Direto (Recomendado)

1. Vai a https://app.netlify.com
2. Clica em "Add new site"
3. Seleciona "Import an existing project"
4. Escolhe GitHub e autoriza
5. Seleciona o repo: `ItsTomiTv/site-itstomitv`
6. Em Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Clica "Deploy site"

## Opção 2: Download e Upload Manual

1. Faz download desta pasta
2. Abre o terminal
3. Entra na pasta: `cd site-itstomitv`
4. Executa: `npm install`
5. Executa: `npm run build`
6. Faz upload da pasta `.next` para Netlify

## Ficheiros Importantes

- `package.json` - Dependências do projeto
- `app/` - Páginas principais
- `components/` - Componentes reutilizáveis
- `data/siteData.ts` - Conteúdo centralizado
- `tailwind.config.js` - Configuração de estilos
- `next.config.js` - Configuração do Next.js

## Atualizar Conteúdo

Para mudar jogos, parcerias, redes sociais:
- Edita apenas: `data/siteData.ts`
- Sem necessidade de recompilar o projeto

## Suporte

Se tiveres dúvidas, verifica o README.md incluído.
