# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que tu aplicación estará corriendo
EXPOSE 3000

# Define el comando por defecto que se ejecutará cuando el contenedor se inicie
CMD ["npm", "start"]

