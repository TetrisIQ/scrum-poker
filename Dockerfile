FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

RUN echo docker --version
# Remove the dev dependencys
RUN npm install --omit=dev

EXPOSE 8765
CMD ["node","server/index.js"]
