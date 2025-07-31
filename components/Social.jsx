import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Sashika-Dilmina'},
    {icon: <FaLinkedinIn/>, path: 'http://www.linkedin.com/in/sashika-dilmina-87550134a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {icon: <FaInstagram/>, path: 'https://ig.me/2WfaGOyCzCIgnd4'},
    {icon: <FaTwitter/>, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item,index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>;
};

export default Social;