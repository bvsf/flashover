# flashover
Frontend para SIGCAW

Se instala de la siguiente forma:
xport P
Primero hay que instalar curl (si es que no lo tenemos) para poder instalar Node.JS (de paso sirve para probar consultas html por consola):
```
sudo apt-get install curl
```
Instalar Node.JS. Esto también instala npm (es como pip pero para Node.JS) para instalar vue:
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - 
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```
Configurar NPM para que use como carpeta de instalacion una carpeta en nuestro projecto... asi no toca los archivos de nuestro linux (como si fuera virtualenv):
https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory
```
mkdir ~/workspace/projects/p_flashover/.npm-global
npm config set prefix '~/workspace/projects/p_flashover/.npm-global'
```
Llegado a este punto, copiamos la siguiente línea al final del archivo ~/.profile
```
PATH=~/workspace/projects/p_flashover/.npm-global/bin:$PATH
```
Para ello, ejecutar
```
nano ~/.profile
```
Luego de editar el archivo .profile, ejecutar
```
source ~/.profile
```
Cerrar sesión en Ubuntu y volver a entrar.

Ahora sí instalamos vue y vue-cli:
https://vuejs.org/v2/guide/installation.html
```
cd ~/workspace/projects/p_flashover/
npm install vue
npm install --global vue-cli
```
Aquí importamos el proyecto desde el repositorio.
```
git clone https://github.com/bvsf/flashover.git
cd flashover
git checkout develop
```
Luego, instalamos las extensiones y ejecutamos.
```
npm install
npm run dev
```
