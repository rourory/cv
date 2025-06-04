import Typewriter from "typewriter-effect";
import GoToButton from "../../atoms/GoToButton";
import { motion } from "framer-motion";
import { useInfoPageStore } from "../../../store/info-page-store";

const firstPartText = "Hello! I'm a web";
const secondPartText = "full stack web-developer.";

const Header = () => {
  const { selectedBlock, setSelectedBlock } = useInfoPageStore();

  return (
    <motion.header
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 4, delay: 2.5 }}
      className="flex flex-col sm:flex-row justify-center items-center z-50 w-full h-[150px] backdrop-blur shadow-[1px_5px_10px_rgba(255,255,255,0.1)]"
    >
      <div className="block content-center sm:hidden text-2xl text-[#c4c7ca] text-center flex-grow mx-1">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3000)
              .typeString(firstPartText)
              .pauseFor(500)
              .deleteChars(3)
              .typeString(secondPartText)
              .start();
          }}
        />
      </div>
      <div className="flex justify-evenly align-center w-full h-[30%] px-1 sm:px-6 mb-4 sm:mb-0">
        <GoToButton
          className={selectedBlock === "frontend" ? "invisible" : ""}
          onClick={() => {
            if (selectedBlock === "backend") {
              setSelectedBlock("info");
            } else {
              setSelectedBlock("frontend");
            }
          }}
          direction="left"
        >
          {selectedBlock === "backend" ? "Go back" : "Fontend"}
        </GoToButton>
        <div className="hidden sm:block text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-app text-center content-center flex-grow mx-1 sm:mx-3">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString(firstPartText)
                .pauseFor(500)
                .deleteChars(3)
                .typeString(secondPartText)
                .start();
            }}
          />
        </div>
        <GoToButton
          className={selectedBlock === "backend" ? "invisible" : ""}
          onClick={() => {
            if (selectedBlock === "frontend") {
              setSelectedBlock("info");
            } else {
              setSelectedBlock("backend");
            }
          }}
          direction="right"
        >
          {selectedBlock === "frontend" ? "Go back" : "Backend"}
        </GoToButton>
      </div>
    </motion.header>
  );
};

export default Header;
