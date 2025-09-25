@echo off
echo =========================================
echo    MOHHIKAT LANDING - DESARROLLO LOCAL
echo =========================================
echo.

echo Verificando Node.js...
node --version
if errorlevel 1 (
    echo ERROR: Node.js no está instalado
    echo Por favor instala Node.js desde: https://nodejs.org
    echo Luego ejecuta este archivo de nuevo
    pause
    exit /b 1
)

echo.
echo Instalando dependencias...
npm install --legacy-peer-deps

echo.
echo Iniciando servidor de desarrollo...
echo La página estará disponible en: http://localhost:3000
echo Presiona Ctrl+C para detener el servidor
echo.

npm run dev