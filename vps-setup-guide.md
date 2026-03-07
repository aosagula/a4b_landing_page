# Guía de Configuración: Despliegue Continuo (CD) con GitHub Actions y VPS

He creado dos archivos en tu proyecto para automatizar los despliegues:
1. [docker-compose.yml](file:///c:/Users/aleja/prg/a4b_landing_page/docker-compose.yml): Facilita la construcción, ejecución y reinicio automático de tu contenedor en el servidor.
2. [.github/workflows/deploy.yml](file:///c:/Users/aleja/prg/a4b_landing_page/.github/workflows/deploy.yml): El script de GitHub Actions que se ejecuta automáticamente cuando haces *push* a `main`.

Para que esta automatización funcione, necesitas realizar los siguientes pasos de configuración de seguridad entre tu VPS y GitHub:

## Paso 1: Generar una clave SSH en tu VPS 🔑
GitHub necesita una llave para entrar a tu servidor de forma segura sin usar contraseñas.

1. Entra a tu VPS por SSH (usualmente con algo como `ssh ubuntu@tu-ip-del-vps`).
2. Genera un nuevo par de claves SSH ejecutando el siguiente comando:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-actions-deploy"
   ```
   *Pulsa **Enter** a todo lo que te pregunte para dejar los valores por defecto (asegúrate de que no pida *passphrase* / contraseña para esta clave).*

3. Autoriza la nueva clave en tu VPS para que permita conexiones:
   ```bash
   cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
   ```

4. Muestra la clave privada en tu consola y **cópiala entera** (desde `-----BEGIN` hasta `END-----`):
   ```bash
   cat ~/.ssh/id_rsa
   ```

## Paso 2: Configurar los Secretos en GitHub 🔒
Ahora debemos darle a GitHub esa clave que acabas de copiar y la dirección de tu servidor.

1. Abre tu repositorio en GitHub desde el navegador.
2. Ve a la pestaña **Settings** > **Secrets and variables** (en el menú izquierdo) > **Actions**.
3. Haz clic en el botón verde **"New repository secret"**.
4. Crea los siguientes 3 secretos:

   * **Nombre:** `VPS_HOST`
     * **Valor:** *[La IP pública de tu servidor VPS]*
   
   * **Nombre:** `VPS_USERNAME`
     * **Valor:** *[El usuario con el que te conectas a tu VPS, por ejemplo `root` o `ubuntu`]*
   
   * **Nombre:** `VPS_SSH_KEY`
     * **Valor:** *[Pega aquí toda la clave privada que copiaste en el Paso 1]*

## Paso 3: Clonar el proyecto en el VPS (Por única vez) 📥
El script de GitHub Actions asume que el proyecto ya existe en una carpeta específica del servidor para poder hacer `git pull`.

1. En tu VPS, ve a la carpeta donde quieres alojar el proyecto (por ejemplo, `/var/www/` o `/home/ubuntu/`):
   ```bash
   cd /var/www
   git clone https://github.com/TU-USUARIO/a4b_landing_page.git
   ```
2. **Importante:** Si decides usar una carpeta distinta a `/var/www/a4b_landing_page`, abre el archivo [.github/workflows/deploy.yml](file:///c:/Users/aleja/prg/a4b_landing_page/.github/workflows/deploy.yml) que te acabo de crear en tu editor de código y cambia la ruta en la línea `cd /var/www/a4b_landing_page` por la tuya antes de hacer un *push*.

## ¡Listo! 🚀
La próxima vez que hagas un `git push origin main` a GitHub, ve a la pestaña **"Actions"** en tu repositorio para ver cómo GitHub se conecta a tu VPS, actualiza el código y levanta tu nueva versión con Docker Compose en el puerto 3000 de forma completamente automática.
