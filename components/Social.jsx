import Link from "next/link";

import{FaGithub, FalinkedinIn, FaTwitter} from 'react-icons/fa';

const socials =[
    {icon: <FaGithub/>,path: ''},
    {icon: <FalinkedinIn/>,path: ''},
    {icon: <FaTwitter/>,path: ''},

];
    
const Social = ({contoinerStyles,iconStyles}) =>{
    return <div className={contoinerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
        </div>;
    
};

export default Social;  