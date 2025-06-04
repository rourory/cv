import {
  javaScriptStack,
  javaStack,
  additionalSkills,
  languagesStack,
} from "../../../db/info";
import InfoBlock from "../../molecules/InfoBlock";
import { motion } from "framer-motion";

const Info: React.FC<AnimationPresenceSectionProps> = ({
  initial,
  animate,
  exit,
}) => {
  return (
    <motion.section
      key={"info"}
      initial={initial}
      animate={animate}
      exit={exit}
      className="relative z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10"
    >
      <div
        id="scrollable-left"
        className="absolute left-0 z-10 w-[30vw] h-full pointer-events-auto"
      />
      <div
        id="scrollable-right"
        className="absolute right-0 z-10 w-[30vw] h-full pointer-events-auto"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-14 z-30">
        <InfoBlock
          icon="javascript.svg"
          title="JavaScript"
          techlologies={javaScriptStack}
          className="z-30"
        >
          <b>JavaScript</b> is the main language of frontend development for me.
          I use it both in writing web applications using modern frameworks like{" "}
          <b>React.js</b>, and in desktop development using <b>Electron.js</b> I
          understand well its dynamic nature, closures, asynchrony, and engine
          operation features. I've worked with native JS, as well as{" "}
          <b>TypeScript</b>. I regularly use it to create responsive,
          interactive, and responsive interfaces.
        </InfoBlock>
        <InfoBlock
          icon="java.svg"
          title="Java"
          techlologies={javaStack}
          className="z-30"
        >
          <b>Java</b> is one of the first languages I started working with. I am
          familiar with object-oriented principles, the <b>Gradle</b> build
          system, and the <b>Spring</b> ecosystem. I use Java in developing the
          backend, building a <b>REST API</b>, and working with databases
          through <b>JPA</b>. I appreciate the stability and strict typing of
          this language.
        </InfoBlock>
        <InfoBlock
          icon="skills.svg"
          title="Extra skills"
          techlologies={additionalSkills}
          className="z-30"
        >
          I have strong skills working in the <b>Visual Studio Code</b>,{" "}
          <b>IntelliJ IDEA</b>, and <b>Visual Studio 2022</b> development
          environments. I have experience working in 3D modeling programs{" "}
          <b>SketchUp</b> and <b>Blender</b>. I am familiar with the basic
          stages of preparing datasets for training machine learning models — I
          have worked with the <b>NumPy</b>, <b>Pandas</b> and{" "}
          <b>Scikit-learn</b> libraries. I understand the principles of
          containerization in <b>Docker</b>. I also have good experience working
          with relational databases: I am able to design complex database
          architecture for specific tasks, including using <b>PostgreSQL</b> and
          observing the principles of normalization and scalability.
        </InfoBlock>
        <InfoBlock
          icon="languages.png"
          title="Languages"
          techlologies={languagesStack}
          className="z-30"
        >
          I am fluent in <b>Russian</b>, as it is my native language. I have
          been studying <b>English</b> for several years — at the moment the
          level is <b>B2</b>. I confidently read technical literature,
          communicate on professional topics, and continue to improve my
          conversational practice. I enjoy learning languages, and I plan to
          raise English to a confident <b>C1+/C2</b>
          level and start learning another foreign language, for example,
          german.
        </InfoBlock>
      </div>
    </motion.section>
  );
};

export default Info;

//JavaScript для меня — основной язык фронтенд-разработки. Использую его как в написани web-приложений с ипользованием современных фрейморков вроде React.js, так и в десктопной разработке с использованием Electron.js. Хорошо понимаю его динамическую природу, замыкания, асинхронность и особенности работы движка. Работал с нативным JS, а также с TypeScript. Регулярно использую его при создании адаптивных, интерактивных и отзывчивых интерфейсов.
//Java — один из первых языков, с которыми я начал работать. Знаком с объектно-ориентированными принципами, системой сборки сборки Gradle и экосистемой Spring. Использую Java в разработке серверной части, построении REST API и работе с базами данных через JPA. Ценю стабильность и строгую типизацию этого языка.
//C# использую преимущественно в разработке десктопных и серверных приложений. Знаком с .NET, LINQ, async/await, а также современными возможностями языка. Работал с WPF, ASP.NET и консольными утилитами. В проектах применяю принципы SOLID, использую DI и логирование через Serilog. Удобен как для быстрой разработки, так и для сложных архитектурных решений.
//Я свободно владею русским языком, поскольку он является моим родным. Английский изучаю на протяжении нескольких лет — на данный момент уровень составляет B2. Уверенно читаю техническую литературу, общаюсь на профессиональные темы и продолжаю совершенствовать разговорную практику. Изучение языков доставляет мне удовольствие, и в планах — поднять английский до уверенного уровня C1+/C2 и начать освоение ещё одного иностранного языка.
//Обладаю уверенными навыками работы в средах разработки Visual Studio Code, IntelliJ IDEA и Visual Studio 2022. Имею опыт работы в программах 3D-моделирования SketchUp и Blender. Знаком с базовыми этапами подготовки датасетов для обучения моделей машинного обучения — работал с библиотеками NumPy, Pandas и Scikit-learn. Понимаю принципы контейнеризации в Docker. Также имею хороший опыт работы с реляционными базами данных: умею проектировать сложную архитектуру БД под конкретные задачи, в том числе с использованием PostgreSQL и соблюдением принципов нормализации и масштабируемости.
