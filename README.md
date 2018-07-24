# Git
Добавляем локальную ветку, которая отслеживает изменения удаленной ветки:
    
`git branch --track <local_branch_name> origin/<remote_branch_name>`

Чтобы получить весь список доступных веток:
    
`git branch --all`

И выбрать `origin/<remote_branch_name>` нужную ветку при необходимости. Более подробно смотри [здесь](https://githowto.com/ru/adding_a_tracking_branch)

# Сборка
1. Установить [NodeJS](https://nodejs.org/en/download/ "Можете скачать LTS/Current, конфликтов пока не наблюдал (моя node v9.2.0)"), если нет. (Был обнаружен конфликт с версиями NodeJS (нужна v9.x.x). Как обновить NodeJS смотреть [здесь](https://ru.stackoverflow.com/questions/632988/%D0%9A%D0%B0%D0%BA-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-nodejs))
2. `npm install / yarn install` Установить все зависимости (запустить команду из директории, где расположен `package.json`)
3. Запустить команду из списка [Доступные команды](#Доступные-команды)
4. Готовые файлы будут расположены в папке `./dist` и `./build`

# Доступные команды
1. `npm start` - для живой разработки
2. `npm run build` - для прода

# Зависимости проекта
1. [jquery 3.x.x](#link)
1. [jquery ui 1.12.1](#link)
1. [slick-carousel 1.8.1](#link)
1. [fancybox 3.x.x](#link)
1. [bootstrap 4.x.x](#link)
1. [yandex map kit 2.1](#link)


# Зависимости Gulp
1. [babel-core](#link)
1. [babel-preset-es2015-rollup](#link)
1. [gulp](#link)
1. [gulp-autoprefixer](#link)
1. [gulp-clean](#link)
1. [gulp-copy](#link)
1. [gulp-html-beautify](#link)
1. [gulp-image](#link)
1. [gulp-imagemin](#link)
1. [gulp-pug](#link)
1. [gulp-rollup](#link)
1. [gulp-sass](#link)
1. [node-sass](#link)
1. [pug](#link)
1. [rollup-plugin-babel](#link)
