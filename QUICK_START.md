# Site ItsTomiTv - Pronto para Deploy

Este é o projeto completo do site oficial do ItsTomiTv, pronto para publicar na Netlify.

## 📦 O Que Inclui

✅ Homepage com hero visual
✅ 6 páginas principais (Stream, Jogos, Parcerias, Redes, Sobre)
✅ Botão "Ligar com a Twitch" com perfil de utilizador
✅ Design dark gaming com vermelho neon
✅ Totalmente responsivo (mobile, tablet, desktop)
✅ Otimizado para performance
✅ Pronto para OAuth Twitch
✅ Conteúdo centralizado e fácil de atualizar

## 🚀 Como Usar

### Local (Testes)

```bash
npm install
npm run dev
```
Acede a `http://localhost:3000`

### Deploy na Netlify

1. Vai a https://app.netlify.com
2. Clica "Add new site from Git"
3. Conecta o GitHub
4. Seleciona este repositório
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy

## 📝 Atualizar Conteúdo

Edita `data/siteData.ts`:
- Jogos atuais e futuros
- Parcerias
- Redes sociais
- Informações pessoais
- Estado de stream

## 🎨 Personalização

### Cores
- Edita `tailwind.config.js` para mudar vermelho neon ou outros tons

### Texto
- Edita `data/siteData.ts` para toda a informação
- Edita componentes em `app/` para layouts específicos

### Logo/Avatar
- Substitui o avatar "IT" em `components/twitch-connect-button.tsx`
- Adiciona imagem real em `public/`

## 📂 Estrutura

```
site-itstomitv/
├── app/
│   ├── page.tsx (Homepage)
│   ├── stream/page.tsx
│   ├── jogos/page.tsx
│   ├── parcerias/page.tsx
│   ├── redes/page.tsx
│   ├── sobre/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── site-shell.tsx (Header + Footer)
│   └── twitch-connect-button.tsx
├── data/
│   └── siteData.ts (Conteúdo centralizado)
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🔐 Variáveis de Ambiente (Opcional)

Se quiseres OAuth Twitch real, adiciona em Netlify:
```env
NEXT_PUBLIC_TWITCH_CLIENT_ID=seu_id
TWITCH_CLIENT_SECRET=seu_secret
NEXTAUTH_SECRET=sua_secret
NEXTAUTH_URL=https://seu-site.netlify.app
```

## ✨ Próximos Passos

1. Deploy na Netlify (5 min)
2. Testa todas as páginas
3. Personaliza com logo/avatar real
4. Configura OAuth Twitch se desejar
5. Adiciona domínio customizado

## 📞 Suporte

Para questões técnicas:
- Verifica README.md
- Consulta o código comentado
- Contacta o desenvolvedor

---

**Site pronto para ir ao ar! 🚀**
