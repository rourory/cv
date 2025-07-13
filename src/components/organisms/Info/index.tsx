import {
  javaScriptStack,
  javaStack,
  additionalSkills,
  languagesStack,
} from "../../../db/info";
import { useI18nContext } from "../../../i18n/i18n-react";
import Scrollable from "../../atoms/Scrollable";
import InfoBlock from "../../molecules/InfoBlock";
import { motion } from "framer-motion";

const Info: React.FC<AnimationPresenceSectionProps> = ({
  initial,
  animate,
  exit,
}) => {
  const { LL } = useI18nContext();

  return (
    <motion.section
      key={"info"}
      initial={initial}
      animate={animate}
      exit={exit}
      className="relative z-20 h-[calc(100vh-210px)] sm:h-[calc(100vh-230px)] min-w-[320px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10"
    >
      <Scrollable />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-14 z-30 ">
        <InfoBlock
          icon="icons/javascript.svg"
          localizedTitleId="infoJsHeader"
          techlologies={javaScriptStack}
          className="z-30"
        >
          {LL.infoJsContent()}
        </InfoBlock>
        <InfoBlock
          icon="icons/java.svg"
          localizedTitleId="infoJavaHeader"
          techlologies={javaStack}
          className="z-30"
        >
          {LL.infoJavaContent()}
        </InfoBlock>
        <InfoBlock
          icon="icons/skills.svg"
          localizedTitleId="infoAdditionalHeader"
          techlologies={additionalSkills}
          className="z-30"
        >
          {LL.infoAdditionalContent()}
        </InfoBlock>
        <InfoBlock
          icon="icons/languages.png"
          localizedTitleId="infoLanguagesHeader"
          techlologies={languagesStack}
          className="z-30"
        >
          {LL.infoLanguagesContent()}
        </InfoBlock>
      </div>
    </motion.section>
  );
};

export default Info;
