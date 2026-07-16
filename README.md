# Prime Drive Django

## Tailwind CSS

Este projeto usa o Tailwind CSS via standalone CLI, sem Node.js e sem npm.

Baixe o executavel oficial para Windows:

```powershell
New-Item -ItemType Directory -Force bin
Invoke-WebRequest -Uri "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe" -OutFile "bin/tailwindcss.exe"
```

Gerar o CSS uma vez:

```powershell
.\bin\tailwindcss.exe -i .\static\src\input.css -o .\static\css\tailwind.css
```

Assistir alteracoes durante o desenvolvimento:

```powershell
.\bin\tailwindcss.exe -i .\static\src\input.css -o .\static\css\tailwind.css --watch
```

## Deploy no Render

Use estes campos ao criar um Web Service no Render:

```text
Language: Python 3
Branch: main
Root Directory: deixe vazio
Build Command: bash build.sh
Start Command: uv run gunicorn config.wsgi:application
```

Variaveis de ambiente recomendadas:

```text
SECRET_KEY: gere uma chave segura no painel do Render
DEBUG: False
WEB_CONCURRENCY: 4
```

O Render define `RENDER_EXTERNAL_HOSTNAME` automaticamente, entao o dominio
`.onrender.com` ja fica liberado pelo `settings.py`. Quando usar dominio
proprio, adicione esse dominio em `ALLOWED_HOSTS`.
