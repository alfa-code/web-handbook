# alpine + nginx + node
FROM hydrock/frontend:v2

# Создать директорию app
WORKDIR /app

# Скопировать исходники приложения
COPY ./.build /app/.build

# Скопировать зависимости
COPY ./node_modules /app/node_modules

# указываем какие порты будем использовать
EXPOSE 443/tcp 80/tcp

# Скопировать скрипт для старта сервера nodeJS
COPY ./start.sh /app
RUN chmod +x /app/start.sh

ENTRYPOINT ["sh", "/app/start.sh"]
