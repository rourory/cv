import { FormattedMessage } from "react-intl";
import {
  javaScriptStack,
  javaStack,
  additionalSkills,
  languagesStack,
} from "../../../db/info";
import Scrollable from "../../atoms/Scrollable";
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
      <Scrollable />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-14 z-30 ">
        <InfoBlock
          icon="icons/javascript.svg"
          localizedTitleId="info.js.header"
          techlologies={javaScriptStack}
          className="z-30"
        >
          <FormattedMessage id={"info.js.content"} />
        </InfoBlock>
        <InfoBlock
          icon="icons/java.svg"
          localizedTitleId="info.java.header"
          techlologies={javaStack}
          className="z-30"
        >
          <FormattedMessage id={"info.java.content"} />
        </InfoBlock>
        <InfoBlock
          icon="icons/skills.svg"
          localizedTitleId="info.additional.header"
          techlologies={additionalSkills}
          className="z-30"
        >
          <FormattedMessage id={"info.additional.content"} />
        </InfoBlock>
        <InfoBlock
          icon="icons/languages.png"
          localizedTitleId="info.languages.header"
          techlologies={languagesStack}
          className="z-30"
        >
          <FormattedMessage id={"info.languages.content"} />
        </InfoBlock>
      </div>
    </motion.section>
  );
};

export default Info;
