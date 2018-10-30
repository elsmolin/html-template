# Git
Добавляем локальную ветку, которая отслеживает изменения удаленной ветки:
    
`git branch --track <local_branch_name> origin/<remote_branch_name>`

Чтобы получить весь список доступных веток:
    
`git branch --all`

И выбрать `origin/<remote_branch_name>` нужную ветку при необходимости. Более подробно смотри [здесь](https://githowto.com/ru/adding_a_tracking_branch)

# Сборка
1. Установить [NodeJS](https://nodejs.org/en/download/ "Скачать LTS"), если нет. Как обновить NodeJS смотреть [здесь](https://ru.stackoverflow.com/questions/632988/%D0%9A%D0%B0%D0%BA-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-nodejs))
2. `npm install / yarn install` Установить все зависимости (запустить команду из директории, где расположен `package.json`)
3. Запустить команду из списка [Доступные команды](#Доступные-команды)
4. Готовые файлы будут расположены в папке `./dist`

# Доступные команды
1. `npm start`

# Зависимости проекта
1. [jquery 3.3.1](#link)
1. [jquery ui 1.12.1](#link)
1. [slick-carousel 1.9.0](#link)
1. [fancybox 3.5.2](#link)
1. [bootstrap 4.1.3](#link)
1. [ion-rangeslider 2.2.0](#link)
1. [air-datepicker 2.2.3](#link)
1. [modernizr 2.8.3](#link)
1. [yandex map kit 2.1](#link)
