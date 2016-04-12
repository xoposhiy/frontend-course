# Туториал по нескольким фронтенд-технологиям

nodejs, webpack, babel, react, material-ui, firebase

# React

React — библиотека для реализации View из паттерна MVC.
Virtual DOM, JSX, ... 

1. `npm i babel-preset-react --save-dev`, не забудьте добавить установленный пресет "react" в список пресетов babel в package.json.
2. `npm i react react-dom --save`
3. Измените в webpack.config.js module так, чтобы jsx-файлы тоже обрабатывались babel.  
Там же поменяйте entry на index.jsx
4. Соберите проект, все должно заработать!
5. Изучите App.jsx и MessageList.jsx. 
Так определяются React-компоненты на языке jsx. Babel 
с соответствующим пресетом умеет превращать jsx в js.
6. Изучите index.jsx — так компонент можно рендерить в html.
7. Подробнее про реакт: https://facebook.github.io/react/docs/getting-started.html

# Стили компонентов

Раньше было принято отделять стиливые файлы от html-кода, 
чтобы стили не загромождали верстку.

Компонентный подход предлагает носить стили рядом с компонентами.
Как это делать?

1. `npm i style-loader css-loader`
2. В webpack.config.js добавьте в массив loaders такой объект `{ test: /\.css$/, loader: "style!css?modules" }`
3. Раскомментируйте подключение подготовленных файлов стилей в App.jsx и MessageList.jsx.
4. В MessageList.jsx измените класс у div на такой: `<div className={styles.message} ...`
5. Соберите проект и изучите стили в инспекторе браузера. 
Имена классов испортились, чтобы гарантированно не конфликтовать с одноименными классами других компонентов.
6. Вынесите код рендеринга одного сообщения в отдельный React компонент Message.jsx

http://survivejs.com/webpack_react/introduction/

Результат выполнения задания — `git checkout react-finished`. 

Следующий шаг туториала — `git checkout material`

