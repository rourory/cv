import { ArrowLeft, ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import GoToButton from "../../atoms/GoToButton";

const Header = () => {
  return (
    <header className="absolute flex flex-col sm:flex-row items-center z-50 w-full top-0 left-0 h-[20vh] backdrop-blur shadow-[1px_5px_10px_rgba(255,255,255,0.1)]">
      <div className="block content-center sm:hidden text-2xl text-[#c4c7ca] text-center flex-grow mx-1">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello! I'm a web")
              .pauseFor(500)
              .deleteChars(3)
              .typeString("full stack web developer.")
              .start();
          }}
        />
      </div>
      <div className="flex justify-evenly align-center w-full h-[30%] px-1 sm:px-6 mb-8 sm:mb-0">
        <GoToButton direction="left">Frontend</GoToButton>
        <div className="hidden sm:block text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-app text-center content-center flex-grow mx-1 sm:mx-3">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello! I'm a web")
                .pauseFor(500)
                .deleteChars(3)
                .typeString("full stack web developer.")
                .start();
            }}
          />
        </div>
        <GoToButton direction="right">Backend</GoToButton>
      </div>
    </header>
  );
};

export default Header;
