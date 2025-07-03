import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Sashika-Dilmina'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/sashika-dilmina-87550134a'},
    {icon: <FaTwitter/>, path: ''},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=nzkoavk'},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
        {socials.map((item, index)=> {
            return(
            <Link key={index} href={item.path } className= {iconStyles}>
                {item.icon}
            </Link>
        );
        })}
    </div>
    );
};

export default Social;  