import * as technologies from "./technologies";

//Telephony Demo API — легковесный backend-сервис, реализованный на Next.js (API Routes) и развёрнутый на Vercel специально для демонстрационной версии клиента. Этот сервер предназначен для визуального представления возможностей системы и обрабатывает базовые сценарии аутентификации и работы с данными.
//Аутентификация реализована через логин и пароль с выдачей JWT‑токена, который используется для валидации всех последующих запросов. Это обеспечивает простой, но надёжный механизм защиты и имитирует поведение полноценного корпоративного API.
//Доступ к базе данных организован с помощью Prisma ORM, что позволяет эффективно взаимодействовать с хранимыми данными и поддерживать чистую и типобезопасную структуру модели. API покрывает основные операции: вход, получение пользовательских данных и доступ к демонстрационным сущностям, отражающим реальную логику системы.
//Сервис ориентирован на простоту, скорость отклика и стабильную работу в демонстрационных условиях, предоставляя изолированную среду для тестирования и презентации интерфейса без привязки к боевому окружению.

const telephonyDemoApi: PortfolioProject = {
  title: "Telephony Demo API",
  language: "JavaScript",
  projectLink: "https://rourory.github.io/telephony-demo",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.typescript,
    technologies.nextJs,
    technologies.prisma,
    technologies.postgresql,
    technologies.nodeJs,
    technologies.vscode,
  ],
  description:
    "The Telephony Demo API is a lightweight backend service implemented on Next.js (API Routes) and deployed on Vercel specifically for the demo version of the client. This server is designed to visually represent the capabilities of the system and handles basic authentication and data manipulation scenarios. Authentication is implemented through a username and password with the issuance of a JWT token, which is used to validate all subsequent requests. This provides a simple but reliable protection mechanism and mimics the behavior of a full-fledged enterprise API. Access to the database is organized using Prisma ORM, which allows you to effectively interact with stored data and maintain a clean and type-safe model structure. The API covers the basic operations: logging in, receiving user data, and accessing demo entities that reflect the real logic of the system. The service is focused on simplicity, response speed and stable operation in demo conditions, providing an isolated environment for testing and presentation of the interface without reference to the combat environment.",
};

//Telephony (Backend) — серверная часть приложения, реализованная на Java с использованием Spring Boot 3, Spring Web, Spring Data JPA и PostgreSQL. Она обеспечивает обработку запросов от фронтенда, управляет бизнес-логикой и взаимодействует с базой данных. Для построения типобезопасных и динамических SQL-запросов используется QueryDSL, а версионирование и автоматизация миграций БД реализованы с помощью Liquibase.
//Система аутентификации основана на JWT, что позволяет безопасно управлять сессиями: после логина все API-запросы проходят через верификацию токенов. Реализована гибкая ролевая модель доступа — сервер обрабатывает создание ролей, назначение прав и регистрацию пользователей с учётом их разрешений.
//Backend также отвечает за логирование действий пользователей, хранение записей сессий, работу со статистикой и агрегацию данных для дашбордов. Код организован в виде REST-контроллеров, сервисов и репозиториев, что обеспечивает прозрачную архитектуру и упрощает поддержку проекта.
//Серверная часть работает стабильно под нагрузкой и обеспечивает надёжную основу для всех функций клиентского приложения.

const telephonyServer: PortfolioProject = {
  title: "Telephony Server",
  language: "Java",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.springBoot3,
    technologies.springDataJPA,
    technologies.springWeb,
    technologies.springSecurity,
    technologies.swaggerOpenAPI,
    technologies.gradle,
    technologies.hibernate5,
    technologies.queryDSL,
    technologies.postgresql,
    technologies.liquibase,
    technologies.intellijidea,
  ],
  description:
    "Telephony Server is the server part of the application implemented in Java using Spring Boot 3, Spring Web, Spring Data JPA and PostgreSQL. It handles requests from the front-end, manages business logic, and interacts with the database. QueryDSL is used to build type-safe and dynamic SQL queries, and versioning and automation of database migrations are implemented using Liquibase. The authentication system is based on JWT, which allows secure session management: after login, all API requests go through token verification. A flexible role—based access model has been implemented - the server handles role creation, rights assignment, and user registration based on their permissions. The backend is also responsible for logging user actions, storing session records, working with statistics, and aggregating data for dashboards. The code is organized in the form of REST controllers, services, and repositories, which provides a transparent architecture and simplifies project support. The server side works stably under load and provides a reliable foundation for all functions of the client application.",
};

//Telephony Service — кроссплатформенный сервисный компонент, устанавливаемый на удалённые терминалы и разработанный на C# с использованием .NET 8. Сервис обеспечивает полный контроль над пользовательскими приложениями (MicroSIP, Skype, Telegram) и осуществляет двустороннюю коммуникацию с клиентским приложением через WebSocket‑соединение, реализованное с помощью библиотеки Fleck.
//Функциональность сервиса включает в себя управление пользовательским интерфейсом сторонних приложений через FlaUI, захват и трансляцию аудио с использованием NAudio: сервис передаёт оператору поток звука с терминала и принимает голос оператора для дальнейшей передачи абоненту.
//Дополнительно реализованы видеозапись и аудиозапись с экрана и микрофона с помощью ScreenRecorderLib, с возможностью последующей передачи и хранения этих данных. Встроенная система распознавания речи на базе библиотеки Vosk работает в режиме реального времени, транскрибируя речь абонента и периодически отправляя расшифрованные фрагменты оператору для отображения и дальнейшего сохранения в БД.
//Сервис обеспечивает стабильную работу в условиях реального времени, минимальные задержки при передаче данных и надёжное взаимодействие с клиентским приложением, формируя технологическую основу для удалённого контроля и коммуникации.

const telephonyRemoteTerminal: PortfolioProject = {
  title: "Telephony Service",
  language: "C#",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.vs2022,
    technologies.voskAPI,
    technologies.flaUI,
    technologies.nAudio,
    technologies.fleck,
    technologies.nAudio,
  ],
  description:
    "Telephony Service is a cross—platform service component installed on remote terminals and developed in C# using .NET 8. The service provides full control over user applications (MicroSIP, Skype, Telegram) and performs two‑way communication with the client application via a WebSocket connection implemented using the Fleck library. The functionality of the service includes managing the user interface of third-party applications via FlaUI, capturing and broadcasting audio using NAudio: the service transmits the audio stream from the terminal to the operator and receives the operator's voice for further transmission to the subscriber. Additionally, video and audio recording from the screen and microphone are implemented using ScreenRecorderLib, with the possibility of subsequent transmission and storage of this data. The built-in speech recognition system based on the Vosk library works in real time, transcribing the subscriber's speech and periodically sending the decrypted fragments to the operator for display and further storage in the database. The service provides stable real-time operation, minimal delays in data transmission and reliable interaction with the client application, forming the technological basis for remote monitoring and communication.",
};

export const backendProjects: Array<PortfolioProject> = [
  telephonyDemoApi,
  telephonyServer,
  telephonyRemoteTerminal,
];
