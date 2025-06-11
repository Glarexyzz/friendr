FROM node:22

RUN mkdir /home/drp57
WORKDIR home/drp57/

RUN apt-get update

COPY package.json .
COPY vite.config.js .
COPY .env .env

# backend
COPY app.js .
COPY db.js .
COPY routes/ routes/

# frontend
RUN mkdir src
RUN mkdir public
COPY src/ src/
COPY index.html .

RUN npm install
RUN npm run build

ENV PORT=8080

ENTRYPOINT ["node", "app.js"]

EXPOSE 8080