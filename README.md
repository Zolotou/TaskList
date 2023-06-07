Комментарии к требованиям задания:

### 1.✔️ Done.

### 2.✔️ Done.

### 3.Использовал Ant Design 
и выбрал, что буду изменять стили при помощи встроенного пропса style. T.к. Ant Design создаёт колоссальное количество врапперов, которые мешают стилизации, я предпочёл кастомизировать стили только через CSS или SCSS. В качестве значений я использовал пиксели (px), т.к. начал с них и не переходил на em, поскольку придерживался общего стиля.

### 4.MobX используется для хранения всех значений. 
Вместо локального стора, я использовал computed values.

### 5.Это требование немного непонятно. 
Я использовал ESLint и Prettier и считаю, что читабельный код не требует комментариев (кроме одного в фильтрации по имени).

### 6.T.к. решение в стилизации было на чистом Ant Design,
то использовался isMobile брейкпоинт. Опять же, респонсивность я бы делал через обращение к классам в SCSS.

### 7.Поиск и фильтрация выполнены в MobX. 
Я был уверен, что есть draggable компоненты в Ant Design, но ошибался - требование не реализовано.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
