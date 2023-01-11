FROM node

WORKDIR /usr/app

COPY package.json ./



RUN npm install

COPY . .


EXPOSE 3150

CMD ["npm", "start"]

CMD ["node","all.js"]

CMD tail -f /dev/null




