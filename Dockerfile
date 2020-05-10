# alpine + nginx + node
FROM hydrock/frontend:v2

# Создать директорию app
WORKDIR /app

# Скопировать конфигурацию nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Скопировать исходники приложения
COPY ./.build /app/.build

# Скопировать зависимости
COPY ./node_modules /app/node_modules

# контейнер должен слушать эти порты
EXPOSE 443/tcp 80/tcp

# Скопировать скрипт для старта сервера nodeJS и nginx
COPY ./start.sh /app
RUN chmod +x /app/start.sh

ENTRYPOINT ["sh", "/app/start.sh"]
