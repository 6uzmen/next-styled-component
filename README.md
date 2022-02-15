# ZirconTech Web

## Setup

### Instalar dependencias

`npm install`

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

Con next: `npm dev`

### En producción

Este comando se puede correr sin miedo estando en la branch `dev`, teniendo configurada correctamente la CLI de Netlify para usar `dev-zircon-web`. Se puede corroborar esto corriendo el comando `netlify status`, si dice que current site es `dev-zircon-web`, el deploy se puede correr sin mayores preocupaciones.

Se puede hacer un deploy manual usando el siguiente comando:

`netlify deploy`

Pero lo recomendable es hacer un commit (git commit), y un push (git push), esto hará el deploy automático además de agregar los cambios al repositorio de GitHub. 

## Notas

Es una buena práctica que siempre chequeemos de antemano haciendo una build local, para no hacer un deploy que va a terminar fallando. Para eso correr el comando `netlify build`, si este no tiene errores, hacer el deploy o push tranquilamente.

## Recursos

Documentación de la [CLI de Netlify](https://docs.netlify.com/cli/get-started/)