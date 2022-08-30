# to-do

## Как запустить server

1) Установить все пакеты - ``npm install``

2) Заполнить и переименовать файл `.env.sample` в `.env`

3) Cделать миграцию - `npx sequelize-cli db:migrate`
4) Сделать сиды - `npx sequelize-cli db:seed:all`
4) Запустить проект - `npm run start`


## Как запустить client

1) Установить все пакеты - `npm install`, 
2)  Изменить `config/endPoints.js` 
```bash
REACT_APP_HOST=http://localhost:5555
```
3) Запустить проект - `npm run start`
