import Divider from "../../atoms/Divider";
import SocialMediaLink from "../../atoms/SocialMediaLink";
import { motion } from "framer-motion";
import FloatingButton from "../../molecules/FloatingButton";
import { FormattedMessage } from "react-intl";

const socialMedia: Array<{
  icon: string;
  link: string;
  name: string;
  disabled: boolean;
}> = [
  {
    icon: "github.svg",
    link: "https://github.com/rourory",
    name: "GitHub",
    disabled: false,
  },
  {
    icon: "telegram.svg",
    link: "https://t.me/vasiliyvasiliev177",
    name: "Telegram",
    disabled: false,
  },
  {
    icon: "linkedin.svg",
    link: "https://linkedin.com/in/vasiliyvasiliev177",
    name: "LinkedIn",
    disabled: true,
  },
  {
    icon: "whatsapp.svg",
    link: "https://whatsapp.com/vasiliyvasiliev177",
    name: "WhatsApp",
    disabled: true,
  },
  {
    icon: "instagram.svg",
    link: "https://instagram.com/vasiliyvasiliev177",
    name: "Instagram",
    disabled: true,
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 4, delay: 2.5 }}
      className="absolute left-0 bottom-0 h-[130px] flex flex-col sm:flex-row justify-center items-center z-50 w-full backdrop-blur shadow-[1px_-5px_10px_rgba(255,255,255,0.1)]"
    >
      <div className="relative text-app w-full left-0 z-50 p-1">
        <p className="text-3xl text-center">
          <FormattedMessage id={"footer.header"} />
        </p>
        <Divider />
        <div className="flex justify-evenly mt-4">
          {socialMedia.map((item) => (
            <SocialMediaLink key={item.link} {...item} />
          ))}
        </div>
      </div>
      <FloatingButton />
    </motion.footer>
  );
};

export default Footer;
