import { useShuffle } from "../../hooks/useShuffle";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Main from "../../components/organisms/Main";
import React from "react";
import InfoBlock from "../../components/atoms/InfoBlock";

const MainPage = () => {
  const { connectors, click } = useShuffle();

  return (
    <div className="h-[100vh] w-[100vw] min-w-[375px]" onClick={click}>
      <div className="relative">
        <Header />
        <div className="absolute z-10 top-[20vh] h-[60vh] lg:h-[65vh] min-w-[375px] w-[100vw] text-app pointer-events-none grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-20 text-app p-10 md:p-20 overflow-scroll">
          <InfoBlock title="Frontend stack">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            temporibus beatae perspiciatis mollitia sunt, consectetur ab cum
            saepe consequuntur, magnam quam recusandae totam accusamus quas
            porro aliquam soluta commodi nostrum!
          </InfoBlock>
          <InfoBlock title="Backend stack">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            temporibus beatae perspiciatis mollitia sunt, consectetur ab cum
            saepe consequuntur, magnam quam recusandae totam accusamus quas
            porro aliquam soluta commodi nostrum!
          </InfoBlock>
        </div>
        <Main connectors={connectors} />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
