import { useShuffle } from "../../hooks/useShuffle";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Main from "../../components/organisms/Main";
import Info from "../../components/organisms/Info";

const MainPage = () => {
  const { connectors, click } = useShuffle();

  return (
    <div className="h-[100vh] w-[100vw] min-w-[375px]" onClick={click}>
      <div className="relative">
        <Header />
        <Info />
        <Main connectors={connectors} />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
