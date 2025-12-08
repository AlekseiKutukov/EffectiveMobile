ЗАПУСК: 1) запустить 2 окна в терминале для frontend и backend

    2) в первом терминале перейти в каталог backend и выполнить команду запуска сервера
        npx json-server --watch db_movies.json --port 4000

    3) во втором терминале перейти в каталог frontend
      - если скачали с GitHub установить зависимости (для npm команда: npm i), и создать в корне каталога frontend, файл
        с названием .env.local и содержимым VITE_API_BASE_URL = "http://localhost:4000"
        и запустить проект npm run dev

      - если проект из архива то сразу запускаем npm run dev

РЕЗУЛЬТАТ ТУТ: http://localhost:5173/
