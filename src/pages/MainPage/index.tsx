import { useShuffle } from "../../hooks/useShuffle";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Main from "../../components/organisms/Main";
import Info from "../../components/organisms/Info";
import { AnimatePresence } from "framer-motion";
import { useInfoPageStore } from "../../store/info-page-store";
import React from "react";
import PortfolioPage from "../../components/organisms/PortfolioPage";
import { backendProjects } from "../../db/backend-projects";
//@ts-ignore
import { frontendProjects } from "../../db/frontend-projects";
import FloatingButton from "../../components/molecules/FloatingButton";

const initialTransition = { type: "spring", duration: 1, delay: 0 };
const animateTransition = { type: "spring", duration: 1, delay: 1 };
const exitTransition = { type: "spring", duration: 1, delay: 0 };

const infoConfig: AnimationPresenceSectionProps = {
  initial: { opacity: 0, transition: initialTransition },
  animate: { opacity: 1, transition: animateTransition },
  exit: { opacity: 0, transition: exitTransition },
};
const frontendPageConfig: AnimationPresenceSectionProps = {
  initial: { x: 100, opacity: 0, transition: initialTransition },
  animate: { x: 0, opacity: 1, transition: animateTransition },
  exit: { x: -100, opacity: 0, transition: exitTransition },
};
const backendPageConfig: AnimationPresenceSectionProps = {
  initial: { x: -100, opacity: 0, transition: initialTransition },
  animate: { x: 0, opacity: 1, transition: animateTransition },
  exit: { x: 100, opacity: 0, transition: exitTransition },
};

const MainPage = () => {
  const { connectors, click } = useShuffle();
  const { selectedBlock } = useInfoPageStore();

  const SelectedBlock = React.useMemo(() => {
    switch (selectedBlock) {
      case "info":
        return <Info key={"info"} {...infoConfig} />;
      case "frontend":
        return (
          <PortfolioPage
            projects={frontendProjects}
            key={"frontend"}
            {...frontendPageConfig}
          />
        );
      case "backend":
        return (
          <PortfolioPage
            projects={backendProjects}
            key={"backend"}
            {...backendPageConfig}
          />
        );
      default:
        return <Info key={"info"} {...infoConfig} />;
    }
  }, [selectedBlock]);
  return (
    <div className="h-[100vh] w-[100vw] min-w-[375px]" onClick={click}>
      <div className="relative h-full w-full">
        <Main connectors={connectors} />
        <div className="flex flex-col">
          <Header />
          <AnimatePresence>{SelectedBlock}</AnimatePresence>
          <FloatingButton />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
