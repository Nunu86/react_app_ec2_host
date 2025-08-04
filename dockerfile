FROM node:lts-alpine3.22

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
# This Dockerfile sets up a Node.js environment for a React application.