FROM node:22

RUN mkdir /home/drp57
WORKDIR home/drp57/

RUN apt-get update

RUN mkdir src
RUN mkdir public
COPY src/ src/
COPY package.json .
COPY vite.config.js .
COPY index.html .
COPY app.js .

RUN npm install
RUN npm run build

ENV PORT=8080

ENTRYPOINT ["node", "app.js"]

EXPOSE 8080