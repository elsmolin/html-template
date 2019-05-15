# Оглавление
1. [Сборка](#Сборка)
1. [Доступные команды](#Доступные-команды)
1. [Структура](#Структура)
1. [Мини документация](#Мини-документация)

# Сборка
1. Установить [NodeJS](https://nodejs.org/en/download/) или [обновить](https://ru.stackoverflow.com/a/632989) NodeJS.
1. Установить [Python 2.7](https://www.python.org/downloads/ "Выбрать из списка внизу сайта"). Необходим для node-sass.
1. Установить [Visual Studio Build Tools 2017](https://docs.microsoft.com/ru-ru/visualstudio/msbuild/msbuild). Там должна быть ссылка [Скачать MSBuild без Visual Studio](https://visualstudio.microsoft.com/downloads/?q=build+tools), скачиваем и устанавливаем
"Visual C++ Build Tools" (Основные настройки и "Пакет SDK для Windows 10 (x.x.x.x)")
1. Открываем терминал под админом
1. `npm rm gulp -g` - Удалить глобальную версию gulp
1. `npm install gulp-cli -g` - Нужен для Gulp v4+

# Доступные команды
1. `yarn` или `npm install` - Установить все зависимости. [Yarn](https://yarnpkg.com/ru/docs/install "Скачать Yarn")
1. `yarn start` или `npm start` - Режим разработчика
1. `yarn build` или `npm run build` - Production (В основном для внедряющего)

# Структура
`./config.json` - Настройки проекта и порядок подключения файлов
`./dist/` - Папка с готовой сборкой
`./src/css/` - Стили сторонних библиотек
`./src/fonts_icons/` - Бэкап для IcoMoon
`./src/scss/__archive.scss` - Стили которые могут пригодиться
`./src/js/third/` - Сторонние библиотеки
`./src/js/_archive.js` - Функции которые могут пригодиться
`./src/js/_reusableFuntions.js` - Глобальные функции проекта

# Мини документация
ToDo...