import * as technologies from "./technologies";


// PrintiqueApp — это современная веб‑платформа на React/Next.js с TypeScript и Shadcn UI, дополненная интерактивной 3D‑визуализацией товаров с помощью React‑Three‑Fiber. Вдохновлённая принципами «зелёной экономики», система печати по требованию минимизирует отходы. Модель «длинного хвоста» позволяет предложить клиентам широкий ассортимент уникальных продуктов — аналогичный подходу Amazon для нишевых рынков. UI выполнен через гибкие и настраиваемые компоненты Shadcn UI . 3D‑визуализация реализована на React‑Three‑Fiber, позволяющем декларативно создавать сцену и объекты, оптимально взаимодействующие с React‑экосистемой
// . Благодаря этому пользователи могут визуально взаимодействовать с моделями товаров перед покупкой. Заложена архитектура для масштабирования, адаптивности и бесшовной интеграции API печати и доставки.Deployment выполнен на Vercel, при полной автоматизации CI/CD.

const printiqueApp: PortfolioProject = {
  title: "Printique",
  language: "JavaScript",
  projectLink: "https://printiqueapp.vercel.app/services/sweatshot",
  icon: "apps/printique.webp",
  technologies: [
    technologies.typescript,
    technologies.nextJs,
    technologies.reactJs,
    technologies.shadcn,
    technologies.zustand,
    technologies.blender,
    technologies.threeJs,
    technologies.vscode,
    technologies.postgresql,
    technologies.prisma,
  ],
  description:
    'PrintiqueApp is a modern web platform based on React/Next.js with TypeScript and Shadcn UI, complemented by interactive 3D visualization of products using React‑Three‑Fiber. Inspired by the principles of the "green economy", the on-demand printing system minimizes waste. The long—tail model allows us to offer customers a wide range of unique products, similar to Amazon\'s approach for niche markets. The UI is implemented through flexible and customizable ShadCN components. 3D visualization is implemented on React‑Three‑Fiber, which allows declaratively creating a scene and objects that optimally interact with the React ecosystem. This allows users to visually interact with product models before making a purchase. The architecture is laid out for scaling, adaptability, and seamless integration of the printing and delivery APIs.The deployment is performed on Vercel, with full CI/CD automation.',
};

//Telephony — мощное кроссплатформенное десктоп‑приложение на Electron.js, построенное с использованием React, DevExtreme React и Material UI. Структура приложения оптимизирована с помощью Redux Toolkit (RTK) для надёжного управления состоянием, а взаимодействие с удалёнными машинами реализовано через WebSocket‑соединения, обеспечивающие мгновенный обмен командами и данными. Встроенный VNC‑клиент позволяет операторам безопасно управлять чужими рабочими столами в реальном времени, а модуль аудио‑ и видеокоммуникаций поддерживает удалённый набор абонентов в Skype, Telegram и MicroSIP, предлагая запись разговоров, живой мониторинг, трансляцию голоса оператора и хранение аудио‑видео архивов. Система логирования фиксирует детальные данные о каждом звонке, предоставляя гибкие отчёты и дашборды со статистикой по операторам, каналам связи и продолжительности сессий. Безопасность гарантируется аутентификацией через JWT: после логина все последующие запросы проходят верификацию токеном. Администрирование реализовано через ролевую модель доступа: можно создавать произвольные роли, настраивать для них разрешения на уровне функциональных блоков и ресурсов, а также регистрировать новых пользователей в соответствии с корпоративными политиками. Telephony сочетает в себе высокую производительность, масштабируемость и безопасность, предоставляя операторам единый удобный интерфейс для полного контроля над сетью удалённых машин.

const telephonyApp: PortfolioProject = {
  title: "Telephony",
  language: "JavaScript",
  projectLink: "https://rourory.github.io/telephony-demo",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.typescript,
    technologies.electronJs,
    technologies.reactJs,
    technologies.reduxToolkit,
    technologies.devExtremeUI,
    technologies.materialUI,
    technologies.vscode,
  ],
  description:
    "Telephony is a powerful cross‑platform desktop application for Electron.js built using React, DevExtreme React, and Material UI. The application structure is optimized using the Redux Toolkit (RTK) for reliable state management, and interaction with remote machines is implemented through WebSocket connections that provide instant command and data exchange. The built‑in VNC client allows operators to securely manage other people's desktops in real time, and the audio and video communications module supports remote dialing to Skype, Telegram, and MicroSIP, offering conversation recording, live monitoring, operator voice transmission, and audio and video archive storage. The logging system captures detailed data about each call, providing flexible reports and dashboards with statistics on operators, communication channels, and session duration. Security is guaranteed by authentication via JWT: after login, all subsequent requests are verified with a token. Administration is implemented through a role-based access model: you can create arbitrary roles, configure permissions for them at the level of functional blocks and resources, and register new users in accordance with corporate policies. Telephony combines high performance, scalability and security, providing operators with a single user-friendly interface for full control over a network of remote machines.",
};

export const frontendProjects: Array<PortfolioProject> = [
  printiqueApp,
  telephonyApp,
];
