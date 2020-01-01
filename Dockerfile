FROM node:carbon

# Создать директорию app
WORKDIR /app

# Скопировать исходники приложения
COPY ./.build /app/.build

EXPOSE 80
CMD [ "node", "./.build/server.js" ]
