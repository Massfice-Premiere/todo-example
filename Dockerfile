FROM node:18

WORKDIR /app

COPY . .

RUN npm install --omit=dev

CMD [ "npm", "start" ]
