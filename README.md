# ItsTomiTv

Site oficial com jogos de CS2, painel admin e autenticação via Twitch.

## Instalar

```bash
npm install --legacy-peer-deps
```

## Configurar ambiente

Cria um ficheiro `.env.local` com as variáveis abaixo:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=gera_uma_chave_aleatoria
TWITCH_CLIENT_ID=seu_client_id
TWITCH_CLIENT_SECRET=seu_client_secret
ADMIN_TWITCH_IDS=seu_twitch_id
```

Pode usar também o `.env.local.example` como base.

## Configurar Twitch OAuth

1. Vai para: https://dev.twitch.tv/console
2. Cria uma nova aplicação
3. Define o redirect URI:
   `http://localhost:3000/api/auth/callback/twitch`
4. Copia o `Client ID` e `Client Secret`
5. Coloca-os no `.env.local`

## Administrador

O admin é determinado pelo Twitch ID configurado em `ADMIN_TWITCH_IDS`.

Se o teu Twitch ID estiver nessa lista, consegues entrar em:

```text
http://localhost:3000/admin
```

## Executar

```bash
npm run dev
```

Depois abre:

```text
http://localhost:3000
```

## Aceder ao admin

```text
http://localhost:3000/admin/login
```

## Criar/editar/apagar jogos

1. Faz login no painel admin com Twitch
2. Vai para `/admin/matches`
3. Usa o botão `+ ADICIONAR JOGO`
4. Preenche os dados do jogo
5. Guarda as alterações

## Variáveis necessárias

- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `TWITCH_CLIENT_ID`
- `TWITCH_CLIENT_SECRET`
- `ADMIN_TWITCH_IDS`
