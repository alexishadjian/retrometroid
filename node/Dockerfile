# Utiliser une image officielle Node.js comme image de base
FROM node:22-slim

# Définir le répertoire de travail
WORKDIR /home/node/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le contenu du projet dans le conteneur
COPY . .

# Compiler le code TypeScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3001

# Démarrer l'application
CMD ["node", "dist/app.js"]
