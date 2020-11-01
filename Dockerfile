# alpine + nginx + node
FROM nginx

# Копируем статические файлы
COPY src /usr/share/nginx/html
