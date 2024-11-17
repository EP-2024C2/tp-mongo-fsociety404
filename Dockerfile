FROM node:20-alpine
RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app
USER node
COPY package.json ./
RUN npm install
COPY --chown=node:node ./src ./src
EXPOSE 3000
CMD [ "node", "src/app.js" ]