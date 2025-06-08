import { Technology } from "../components/molecules/InfoBlock";
import * as technologies from "./technologies";

interface PortfolioProject {
  title: string;
  language: "JavaScript" | "Java" | "C#";
  technologies?: Array<Technology>;
  projectLink: string;
  icon: string;
  description?: string;
}

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

export const frontendProjects: Array<PortfolioProject> = [printiqueApp];
