# Туториал по нескольким фронтенд-технологиям

nodejs, webpack, babel, react, material-ui, firebase

# Firebase

Firebase — это сервис, предоставляющий простой готовый бэкенд-хранилище для вашего веб-приложения.
Используя Firebase вы можете делать простые веб-приложения вообще без хостинга:
верстку и скрипты хостить, например, на github.io, а в качестве бэкенда использовать Firebase  

1. `npm i firebase --save`
2. Прочитайте Quick start. https://www.firebase.com/docs/web/quickstart.html
3. Добавьте в конструктор App.jsx создание объекта Firebase с адресом https://front-lesson.firebaseio.com/messages
4. Подпишитесь на последние 10 сообщений по этому адресу 
(см методы limitToLast и on("value" ...) в [докуметации Firebase](https://www.firebase.com/docs/web/api/))
5. В addMessage добавьте сообщение методом push. 
6. Запустите, все должно работать!

https://www.firebase.com/docs/web/quickstart.html

https://www.firebase.com/docs/web/api/

Результат выполнения задания — `git checkout firebase-finished`.