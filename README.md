# alfa-code-platform

![Image of Alfa Code](https://avatars1.githubusercontent.com/u/64861429?s=200&v=4)

Сервис для подготовки IT специалистов (Основная платформа для пользователей);

## Запуск и сборка

Установить зависимости

```javascript
yarn
```

Для разработки приложения в dev режиме запустите команду

```javascript
yarn start:dev
```

Запуск css и js линтинга

```javascript
yarn lint
```

## Общие правила

---------------------

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

NODE_ENV = development | production - тип сборки проекта (сборка)
JWT_SECRET_KEY - секретный ключ для jwt токена (сборка | старт)
DATABASE_URL - адрес базы данных postgresql (сборка | старт) - например postgres://postgres:postgres@localhost/postgres

### Репозиторий для практики

<https://github.com/nar3k/yc-public-tasks/>
