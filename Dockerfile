FROM node:22

RUN mkdir /home/drp57
WORKDIR home/drp57/

RUN apt-get update

RUN mkdir src
RUN mkdir public
COPY src/ src/
COPY public/ public/
COPY package.json .
COPY vite.config.js .

RUN npm install

ENV PORT=5173
EXPOSE 5173

RUN npm run dev -- --host
