FROM node:22

RUN mkdir -p /home/drp57
WORKDIR /home/drp57/

RUN apt-get update

COPY src/ ./src/
COPY public/ ./public/
COPY package.json ./
COPY vite.config.js ./
COPY index.html ./
COPY app.js ./

RUN npm install
RUN npm run build

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["node", "app.js"]
