# Туториал по нескольким фронтенд-технологиям

nodejs, webpack, babel, react, material-ui, firebase

# Material-UI

Это набор готовых react-компонент, реализующих стиль material-design.
Когда хочется красиво, а верстать не хочется, нужно не верстать!

1. `npm i material-ui --save`
2. Изучите App.jsx — там пример использование компонента AppBar (http://www.material-ui.com/#/components/app-bar)
3. Переведите MessageList на использование компонента List внутри Card, а Message — на использование ListItem. (см. http://www.material-ui.com/#/components)
4. Создайте еще один компонент MessageBox.jsx с полем ввода и кнопкой Send.
5. Сделайте так, чтобы по нажатию Send MessageBox генерировал событие onSend.
6. Подпишите на это событие MessageList, так чтобы новое сообещние появлялось в списке.

Результат выполнения задания — `git checkout material-finished`. 

Следующий шаг туториала — `git checkout firebase`