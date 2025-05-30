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

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]

EXPOSE 5173
