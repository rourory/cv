import Devider from "../../atoms/Devider";
import SocialMediaLink from "../../atoms/SocialMediaLink";

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
    <footer>
      <div className="absolute text-app w-full h-[20vh] top-[80vh] lg:h-[15vh] lg:top-[85vh] left-0 z-50 backdrop-blur p-3 overflow-scroll shadow-[1px_-5px_10px_rgba(255,255,255,0.1)]">
        <p className="text-3xl text-center">Contact me:</p>
        <Devider />
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
          {socialMedia.map((item) => (
            <SocialMediaLink key={item.link} {...item} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
