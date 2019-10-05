# Оглавление
[Сборка](#Сборка)  
[Доступные команды](#Доступные-команды)  
[Структура](#Структура)  
[Мини документация](#Мини-документация)  

# Сборка
1. Установить [NodeJS](https://nodejs.org/en/download/) или [обновить](https://ru.stackoverflow.com/a/632989) NodeJS.
1. Установить [Python 2.7](https://www.python.org/downloads/ "Выбрать из списка внизу сайта"). Необходим для node-sass.
1. Установить [Visual Studio Build Tools 2017](https://docs.microsoft.com/ru-ru/visualstudio/msbuild/msbuild). Там должна быть ссылка [Скачать MSBuild без Visual Studio](https://visualstudio.microsoft.com/downloads/?q=build+tools), скачиваем и устанавливаем
"Visual C++ Build Tools" (Основные настройки и "Пакет SDK для Windows 10 (x.x.x.x)")
1. Открываем терминал под админом
1. `npm rm gulp -g` - Удалить глобальную версию gulp (если установлена)
1. `npm install gulp-cli -g` - Нужен для Gulp v4+

# Доступные команды
`npm install` - Установить все зависимости.  
`npm start` - Режим разработчика  
`npm run build` - Production (В основном для внедряющего)  
`npm run bundle` - Production (Оптимизация по кол-ву обращений к файлам на сервере)  
**Отличия `build` от `start` :** 
1. Вырезается код из сборки, обернутый следующим образом: 
    ```
      //removeIf(production)
      ...код, который будет вырезан из production сборки...
      //endRemoveIf(production)
    ```
1. Удаление всех `console.log()` сообщений из сборки
1. Минификация изображений
1. Разовая сборка без наблюдения за изменениями и LiveReload  

**`bundle` (расширенная версия `build`):** 
1. Все плагины и кастомный js собираются и минифицируются в одном файле `bundle.min.js`

# Структура
**`./config.json` - Настройки проекта и порядок подключения файлов**  
`.browserslistrc` - Настройки AutoPrefixer  
`.babelrc` - Настройки Babel  
`./src/bootstrap_custom.scss` - Кастомная сборка Bootstrap  
`./src/index.scss` - Точка входа SCSS для Gulp  
`./src/index.js` - Точка входа JS для Gulp  
`./src/css/` - CSS сторонних библиотек  
`./src/fonts_icons/` - Бэкап для IcoMoon  
`./src/scss/__archive.scss` - Стили которые могут пригодиться  
`./src/scss/bootstrap/` - SCSS исходники Bootstrap  
`./src/js/third/` - JavaScript сторонних библиотек  
`./src/js/_archive.js` - Функции которые могут пригодиться  
`./dist/` - Папка с готовой сборкой  

# Мини документация
`window.elijah` - Объект с полезными функциями  
<!-- `bootstrap.min.css` - Дефолтный Bootstrap   -->
<!-- `bootstrap_custom.min.css` - Bootstrap с вырезанными стилями, которые не использовались в проекте.   -->
<!-- Для добавления сущности раскомментировать нужный `@import` в `./src/bootstrap_custom.scss` и пересобрать (если использвалась команда `build`)   -->