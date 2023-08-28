# to-do

## Как запустить server

1. Установить все пакеты - `npm install`

2. Заполнить и переименовать файл `.env.sample` в `.env`
   2.1 Вам понадобится база данных PostgreSQL
3. Cделать миграцию - `npx sequelize-cli db:migrate`
4. Сделать сиды - `npx sequelize-cli db:seed:all`
5. Запустить проект - `npm run start`
6. логин пароль админа - admin 123 вы можете его изменить самостоятельно в `db/seeders`

## Как запустить client

1. Установить все пакеты - `npm install`,
2. Изменить `config/endPoints.js`

3. Запустить проект - `npm run start`
