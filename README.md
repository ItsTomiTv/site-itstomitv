# ItsTomiTv - Site Oficial

Site oficial do streamer **ItsTomiTv** com identidade visual gaming premium, dark mode, Twitch OAuth e integração com redes sociais.

## 🚀 Tecnologias

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipagem segura
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones SVG
- **Next Auth** - Autenticação OAuth Twitch (preparado)

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos

```bash
# Clonar o repositório
git clone https://github.com/ItsTomiTv/site-itstomitv.git
cd site-itstomitv

# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.local.example .env.local

# Correr em desenvolvimento
npm run dev
```

Aceder a `http://localhost:3000`

## 🔧 Configuração

### Variáveis de Ambiente

Criar ficheiro `.env.local` na raiz do projeto:

```env
# Twitch OAuth
NEXT_PUBLIC_TWITCH_CLIENT_ID=seu_client_id_aqui
TWITCH_CLIENT_SECRET=seu_client_secret_aqui
NEXTAUTH_SECRET=sua_secret_aqui
NEXTAUTH_URL=http://localhost:3000

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📂 Estrutura de Ficheiros

```
site-itstomitv/
├── app/
│   ├── layout.tsx          # Layout principal com Header e Footer
│   ├── page.tsx            # Homepage/Página inicial
│   ├── globals.css         # Estilos globais
│   ├── stream/
│   │   └── page.tsx        # Página da stream
│   ├── jogos/
│   │   └── page.tsx        # Página de jogos
│   ├── parcerias/
│   │   └── page.tsx        # Página de parcerias
│   ├── redes/
│   │   └── page.tsx        # Página de redes sociais
│   └── sobre/
│       └── page.tsx        # Página sobre mim
├── components/
│   ├── site-shell.tsx      # Header e Footer
│   └── twitch-connect-button.tsx  # Botão Twitch com dropdown
├── data/
│   └── siteData.ts         # Dados centralizados (jogos, parcerias, etc)
├── public/                 # Imagens e assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Design Visual

### Paleta de Cores
- **Fundo**: `#050505` (Preto profundo)
- **Painéis**: `#101010` a `#111111`
- **Vermelho Neon**: `#ff0000` (Destaque principal)
- **Texto**: `#f5f5f5` (Branco soft)
- **Muted**: `#a7a7a7` (Cinzento)

### Características
- Dark mode premium
- Neon glow effects moderados
- Tipografia agressiva (Arial Black)
- Animações suaves (Framer Motion)
- Totalmente responsivo

## 📄 Páginas Disponíveis

- **Início** (`/`) - Homepage com hero, estado de stream, jogos destaque e redes sociais
- **Stream** (`/stream`) - Página dedicada à transmissão ao vivo
- **Jogos** (`/jogos`) - Jogos atuais e jogos em breve
- **Parcerias** (`/parcerias`) - Marcas parceiras e formulário de contacto
- **Redes Sociais** (`/redes`) - Links centralizados para todas as plataformas
- **Sobre** (`/sobre`) - Biografia e informações pessoais

## 🔐 Autenticação Twitch (OAuth)

O site tem preparação completa para OAuth Twitch. Para ativar:

1. Ir a https://dev.twitch.tv/console/apps
2. Criar uma nova aplicação
3. Obter `Client ID` e `Client Secret`
4. Adicionar `http://localhost:3000/api/auth/callback/twitch` como OAuth Redirect URL
5. Preencher `.env.local` com as credenciais
6. Implementar NextAuth com configuração Twitch

O botão "Ligar com a Twitch" já tem interface pronta (no estado de mockup).

## 🚀 Deploy na Netlify

### Opção 1: Git Push (Recomendado)

1. **Fazer push do código para GitHub**
   ```bash
   git add .
   git commit -m "Deploy do site ItsTomiTv"
   git push origin main
   ```

2. **Conectar a Netlify**
   - Ir a https://app.netlify.com
   - Clicar em "New site from Git"
   - Selecionar GitHub e autorizar
   - Escolher o repositório `site-itstomitv`

3. **Configurar Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 ou superior

4. **Adicionar Variáveis de Ambiente**
   - Na dashboard da Netlify, ir a Site settings > Build & deploy > Environment
   - Adicionar as mesmas variáveis do `.env.local`

5. **Deploy automático**
   - Cada push para `main` vai fazer deploy automático

### Opção 2: Deploy Manual (Rápido)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Fazer build
npm run build

# Deploy
netlify deploy --prod
```

## 📊 Gestão de Conteúdo

Todo o conteúdo está centralizado em `data/siteData.ts`. Para atualizar:

- **Jogos**: Editar `games` e `upcomingGames`
- **Parcerias**: Editar array `partners`
- **Redes Sociais**: Editar `socialLinks`
- **Estado de Stream**: Editar `streamStatus`
- **Informações Pessoais**: Editar `about`

Não é necessário recompilar - o site atualiza automaticamente.

## 🔗 Links Importantes

- **GitHub**: https://github.com/ItsTomiTv/site-itstomitv
- **Twitch**: https://twitch.tv/ItsTomiTv
- **Instagram**: https://instagram.com/itstomitv
- **YouTube**: https://youtube.com/@itstomi_tv

## 📞 Suporte

Para questões sobre o site, contactar através das redes sociais oficiais.

## 📝 Licença

© 2026 ItsTomiTv. Todos os direitos reservados.
