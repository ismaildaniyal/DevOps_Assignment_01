FROM node:18-alphine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .

USER node

CMD ["node", "server.js"]
EXPOSE 3000