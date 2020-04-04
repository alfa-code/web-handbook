# alfa-code-platform

Сервис для подготовки IT специалистов (Основная платформа для пользователей);

## Запуск и сборка

Установить зависимости

```javascript
yarn
```

Для разработки приложения используется скрипт dev.js в корне проекта
Запустите `node ./dev.js`
Скприпт запускает два вызова:
    `yarn build:client --watch`
    `yarn build:server --watch`

Эти команды запускают сборки клиента и сервера в режиме --watch
Так же скрипт запускает сам сервер после его сбоки через nodemon если сервер пересобираля - демон его рестартует
Это я делал для того что бы не использовать webpackdevserver

Логи сборки клиента выводятся спефиксом `stdout server build` - в фиолетовом цвете
Логи сборки клиента выводятся спефиксом `stdout client build:` - в синем цвете

Запуск сборки и дев сервера

```javascript
yarn start
```

Запуск css и js линтинга

```javascript
yarn lint
```

## Общие правила

### Изображения в проекте

Предпочтительно использовать svg. Растровые форматы только в крайних случаях.
Изображения находятся по пути `./src/assets/icons` и `./src/assets/images`
В обеих папках могут находиться как векторные так и растровые изображения

### Стили

В компонентах используем `css modules` - формат `[name].module.scss`.
В проекте используем `scss` + `css modules` либо чистый `css`

## Деплой

Мы работаем с платформой Яндекс.Облако

## ENVIROMENT VARIABLES

Для корректной работы приложения необходимо установить обязательные ENV переменные

JWT_SECRET_KEY - секретный ключ для jwt токена.
PGHOST - хочт postgresql
PGPORT - порт сервера postgresql
PGDATABASE - имя базы данных postgresql
PGUSER - имя пользователя базы данных postgresql
PGPASSWORD - пароль пользователя базы данных postgresql

### Репозиторий для практики

<https://github.com/nar3k/yc-public-tasks/>
