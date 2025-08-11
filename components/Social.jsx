import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Sashika-Dilmina' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/feed/' },
  { icon: <FaInstagram />, path: 'https://ig.me/2WfaGOyCzCIgnd4' },
  { icon: <FaTwitter />, path: '' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path || "#"}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
