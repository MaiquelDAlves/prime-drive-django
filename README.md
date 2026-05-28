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
