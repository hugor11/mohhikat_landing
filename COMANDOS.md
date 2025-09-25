# 🚀 COMANDOS DE DESARROLLO - MOHHIKAT

## 📋 Comandos principales:

### Desarrollo local:
```bash
npm install          # Instalar dependencias (solo la primera vez)
npm run dev         # Iniciar servidor de desarrollo
```

### Git workflow:
```bash
git add .                                    # Agregar cambios
git commit -m "descripción del cambio"      # Hacer commit
git push                                     # Subir a GitHub (deploy automático)
```

### URLs importantes:
- **Desarrollo local:** http://localhost:3000
- **GitHub repo:** https://github.com/hugor11/mohhikat_landing
- **Netlify deploy:** [tu-url-netlify].netlify.app

## 📁 Estructura de archivos:

```
app/
├── public/images/          # ← AQUÍ van tus imágenes
├── components/            # Componentes de la página
│   ├── hero-section.tsx   # Sección principal
│   ├── benefits-section.tsx
│   └── ...
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Template HTML
│   └── globals.css       # Estilos CSS
└── package.json          # Configuración del proyecto
```

## 🎯 Workflow recomendado:

1. **Hacer cambios localmente**
2. **Ver en http://localhost:3000**
3. **Cuando esté listo: git add, commit, push**
4. **Netlify hace deploy automático**

## 🔧 Comandos útiles:

```bash
# Ver la página local
start-dev.bat           # (Windows - doble click)
# o
npm run dev

# Deploy manual
npm run build           # Construir proyecto
```