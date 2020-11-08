# web-handbook

![Image of Alfa Code](https://raw.githubusercontent.com/alfa-code/web-handbook/master/src/assets/images/logo-for-readme.png?token=AE6ZXO33LHKZKVKR6BMSKAK7VAMVG)

Сервис для подготовки IT специалистов (Основная платформа для пользователей);

## Команды (Запуск и сборка)

Установить зависимости

```javascript
npm i
```

В проекте не используется webpack-dev-server. Сборка может происходить как в dev так и в prod режиме. Сначала прочитайте команды, ниже будет команды на старт dev разработки.

Сборка клиентской части в dev режиме:

```javascript
npm run build:client:dev
```

Сборка клиентской части в dev режиме + мониторинг изменений:

```javascript
npm run build:client:dev:watch
```

Сборка клиентской части в prod режиме:

```javascript
npm run build:client:prod
```

Сборка серверной части в dev режиме:

```javascript
npm run build:server:dev
```

Сборка серверной части в dev режиме + мониторинг изменений:

```javascript
npm run build:server:dev:watch
```

Сборка серверной части в prod режиме:

```javascript
npm run build:server:prod
```

Запуск сервера с помощью nodemon (Рестарт при изменении сервера)

```javascript
start:server:nodemon
```

Запуск css и js линтинга

```javascript
npm run lint
```

## Запуск для разработки

Необходимо запустить:

- Клиентскую сборку в режиме watch
- Серверную dev сборку в режиме watch
- После сборки сервера запустить сервер через nodemon

Эти команды можно запустить в разных окнах терминала. Для удобства терминал можно разделить на несколько окон.

```javascript
npm run build:client:dev:watch
npm run build:server:dev:watch
start:server:nodemon
```

![Image of Terminal](https://raw.githubusercontent.com/alfa-code/web-handbook/master/src/assets/images/localhost.jpg?token=AE6ZXO5ZUDCCNNYYH6BEMYC7VAPZ2)

Таким образом возможно наблюдать за сборкой Клиентской и Серверной части отдельно.

### Почему не используется webpack-dev-server?

webpack-dev-server - не компилирует файлы, а держит их в памяти. Стартует виртуальный сервер на порту 8080. Если бы проект состоял только из клиентской части, то этого вполне хватило. Но проект содержит сервер, который тоже нужно собирать/пересобирать и запускать. Сервер запускается на порту 3000.
В результате приходится проксировать все запросы с порта 8080 на порт 3000. Появляется некая прослойка которой нет в продакшене, а это может повлиять на рабату боевой версии. Проект же стремится к однообразию и консистентности.

## Именования

Создатели экшенов (Action Creators) именуются двумя заглавными буквами на конце **AC** - например fetchAllPreviewPostsAC
Готовая функция dispatch в замыкании которой хранится готовый экшен помечается **DA** - например fetchAllPreviewPostsDA

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
