# ZirconTech Web

## Flujo sugerido

1. `netlify link`

2. `netlify dev`

3. `netlify build`

4. `netlify deploy`
## Setup

### Instalar yarn

`npm i -g yarn`

### Instalar dependencias

`yarn install`

### Netlify

#### Instalar CLI de Netlify

`npm i -g netlify-cli`

#### Configurar CLI de Netlify

Logearse con el siguiente comando, el mismo abrirá la página de Netlify y hay que autorizar su uso: 

`netlify login`

Luego de haberse logeado, correr el comando:

`netlify link`

Seleccionar las opciones:

1. `Choose from a list of recently updated sites`

2. `dev-zircon-web` o `zircon-tech` dependiendo de en donde se quiera trabajar, si se quiere trabajar para la web en desarrollo, seleccionar `dev-zircon-web`, si se quiere trabajar sobre la que está en producción, seleccionar `zircon-tech`

3. Es probable que el comando anterior pida autorizar el uso desde la CLI (se abrirá el navegador y hay que darle permisos)

## Correr web

### En desarrollo

Con netlify (recomendado, así comprobamos que todo vaya a funcionar con un deploy más tarde): `netlify dev`

Con next: `yarn dev`

Estando en la branch dev, también se puede usar el comando `netlify deploy`, el mismo hará deploy en modo preview a una URL dedicada específicamente a los cambios que se hayan realizado (verificar que efectivamente estamos en la branch `dev` y que que el site al que hacemos deploy es a `dev-zircon-web`)

## Notas

Es una buena práctica que siempre chequeemos de antemano haciendo una build local, para no hacer un deploy que va a terminar fallando. Para eso correr el comando `netlify build`, si este no tiene errores, hacer el deploy o push tranquilamente.

## Recursos

Documentación de la [CLI de Netlify](https://docs.netlify.com/cli/get-started/)