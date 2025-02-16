## Баги:

- Сайт не требует авторизации

- Создание объявления: нет проверки на корректность url картинки

- Кнопка "Ithems on page:..." влияет на информацию в поле "Найдено:..." при фильтрации

- Кнопки пагинации "Следующая" и "Предыдущая" не работают

- В разделе "Заказы" при смене фильтра статусов 3 раза, приложение выдает страницу с ошибкой 
``` 
Неожиданная ошибка приложения!Не удалось выполнить «removeChild» для «Node»: Узел, который необходимо удалить, не является дочерним для этого узла.
NotFoundError: Не удалось выполнить «removeChild» для «Node»: Узел, который необходимо удалить, не является дочерним для этого узла.
    в removeChild (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:8456:26)
    в commitDeletionEffectsOnFiber (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17510:21)
    в recursivelyTraverseDeletionEffects (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17486:13)
    в commitDeletionEffectsOnFiber (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17577:15)
    в commitDeletionEffects (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17477:13)
    в recursivelyTraverseMutationEffects (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17674:17)
    в commitMutationEffectsOnFiber (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17737:15)
    в recursivelyTraverseMutationEffects (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17685:15)
    в commitMutationEffectsOnFiber (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17699:15)
    в recursivelyTraverseMutationEffects (http://tech-avito-intern.jumpingcrab.com/node_modules/.vite/deps/chunk-6VWAHX6D.js?v=4c7575bb:17685:15)
💿 Привет, разработчик 👋

Вы можете обеспечить гораздо лучший UX, чем этот, когда ваше приложение выдает ошибки, предоставив свой собственный ErrorBoundaryили реквизит на вашем маршруте. errorElement

```

