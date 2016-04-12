# Туториал по нескольким фронтенд-технологиям

nodejs, webpack, babel, react, material-ui, firebase

## Webpack

Модули — это прекрасно, но как потом их использовать на html-страницах?
Попробуйте открыть index.html в браузере. Откройте Dev Tools (F12), вкладка Console показывает ошибку "require is not defined".

require определен только в nodejs. Браузеры ничего не знают про него.
Эту проблему решает webpack.


1. `npm i webpack --save-dev`
2. Создайте в корне файл конфигурации webpack.config.js согласно документации: https://webpack.github.io/docs/configuration.html  
в качестве entry укажите src/index.js, а в качестве output filename — bundle.js
3. Создайте еще один скрипт в packages.json для запуска webpack (без аргументов).
4. `npm run webpack` После этой команды в корне должен появиться bundle.js
5. Подключите в html-файле bundle.js вместо index.js и откройте index.html в браузере. Все должно сработать!
6. Отлаживать непонятный bundle.js в браузере неприятно. Поэтому сгенерируем sourcemap.
Для этого в  webpack.config.js добавьте параметр `devtool: "sourcemap"`.
Запустите еще раз `npm run webpack`. Должен появиться второй файл bundle.js.map.
7. В браузере на вкладке Sources в Dev Tools должны появиться отдельные js модули. 
Попробуйте их поотлаживать.

http://webpack.github.io/docs/

## Dev-Server

Dev-Server — это сервер, удобный при разработке. Он может автоматически перезапускать webpack и перезагружать страницу при изменении исходных файлов.
Воспользуемся им.

1. `npm i webpack-dev-server`
2. Добавьте скрипт dev в package.json для запуска webpack-dev-server без параметров.
3. `npm run dev` и откройте в браузере http://localhost:8080/webpack-dev-server
4. Поменяйте что-ниубдь в исходниках и посмотрите как ведет себя dev-server.


## Babel

Но браузер, возмжоно, ещё не понимает ES2015, разрешенный в NodeJs.
А еще есть функции ES2015, которых нет даже в NodeJs, можно ли их использовать?
Можно с помощью препроцессора Babel, превращающего новый JS в старый.

Хорошая новость — babel можно интегрировать с webpack.

1. `npm i babel-loader babel-preset-es2015 --save-dev`
установит плагин babel-loader в webpack, и набор настроек (preset) 
к нему, чтобы понимать все новинки ES2015. 
2. Сконфигурируйте babel, как сказано в документации: https://babeljs.io/docs/setup/#installation (выберите Webpack в первом пункте)
3. Воспользуйтесь какой-нибудь новинкой ES2015 в коде. 
Например, поменяйте вызовы require и module.exports на новый лад 
(см. http://frontender.info/es6-modules/). 
Посмотрите, в какой код это превратилось внутри bundle.js  
4. Запустите тесты - они перестали работать, 
потому что NodeJS еще не поддерживает новый синтаксис import/export.
5. Как запускать babel еще и перед тестами можно посмотреть все там же
https://babeljs.io/docs/setup/#installation (на этот раз выберите mocha на первом шаге)

[Babel](https://babeljs.io/)

[Babel presets](https://babeljs.io/docs/plugins/)

[Try ES2015 with Babel](https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Creact%2Cstage-2&code=%0Avar%20f%20%3D%20x%20%3D%3E%20x*x%0A%0Aexport%20function%20g(y)%7B%0A%20%20return%20y*y%0A%7D%0A)

Результат выполнения задания — `git checkout webpack-finished`. 

Следующий шаг туториала — `git checkout react`

