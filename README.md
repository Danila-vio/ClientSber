# Начало

Для сборки и запуска приложения Вам понадобится скачать два проекта из репозиториев:

Клиентская часть приложения - https://github.com/Danila-vio/ClientSber.git         

Серверная часть приложения - https://github.com/Danila-vio/sberKP.git

# Клиентская часть

## Запуск клиентской части
Для удобства взаимодействия с кодом вом понадобится Visual Studio Code.
В терминале данной IDE введите следующие команды:

### `cd bank`
### `npm start`

## Завершение работы клиентской части

Для завершения работы клиентской части приложения нажмите, находясь в терминале, сочетание славиш

### `Ctrl + C`

И нажмите

### `y`

# Серверная часть

## Рекомендуется:
jdk 11 (или новее)
maven 3.8.6 (или новее)

## Как создать схему базы данных и запустить приложение:
mvn clean compile -U -Pdev
mvn -Pdev jpa-schema:generate
mvn -Pdev sql:execute
mvn spring-boot:run
