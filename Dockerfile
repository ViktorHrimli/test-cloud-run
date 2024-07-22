FROM node:20

WORKDIR /app

COPY package*.json .

RUN  npm ci

COPY . .

RUN npm run build

ENV PORT=1337

EXPOSE 1337

CMD ["npm", "start"]

