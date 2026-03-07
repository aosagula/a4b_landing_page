# Paso 1: Usar una imagen base ligera de Node.js
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Archivos de caché para acelerar la instalación de dependencias
COPY package.json package-lock.json* ./

# Instalar todas las dependencias
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir la aplicación Next.js para producción
RUN npm run build

# Paso 2: Configurar la imagen final de producción (más ligera)
FROM node:18-alpine AS runner

WORKDIR /app

# Establecer entorno a producción
ENV NODE_ENV production

# Copiar sólo los archivos necesarios desde la imagen de construcción (builder)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js

# Exponer el puerto por el que corre Next.js (por defecto 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
