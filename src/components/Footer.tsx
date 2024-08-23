import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaBloggerB } from "react-icons/fa";
import ToolTip from './ToolTip';

const Footer = () => {
    return (
        <footer className=" mb-3 mt-auto">
            <div className="flex flex-grid gap-6 items-center justify-start ">
                <ToolTip tooltipId="GithubToolTip">
                    <a href='https://github.com/Matei-Stoian' target="_blank" rel="noopener noreferrer">
                    <BsGithub
                        data-tooltip-id='GithubToolTip'
                        data-tooltip-content="Github"
                        className='text-3xl text-slate-700 ease-linear duration-300 hover:text-green-500' />
                    </a>
                
                </ToolTip>
                <ToolTip tooltipId="LinkedinToolTip">
                    <a href='https://www.linkedin.com/in/matei-octavian-stoian/' target="_blank" rel="noopener noreferrer">
                    <BsLinkedin
                        data-tooltip-id='LinkedinToolTip'
                        data-tooltip-content="Linkedin"
                        className='text-3xl text-slate-700 ease-linear duration-300 hover:text-green-500' />
                    </a>
                </ToolTip>
                <ToolTip tooltipId="BlogToolTip">
                    <a href='https://blog-app-steel-omega.vercel.app/' target="_blank" rel="noopener noreferrer">
                    <FaBloggerB
                        data-tooltip-id='BlogToolTip'
                        data-tooltip-content="If you'd like to see more of my projects"
                        className='text-3xl text-slate-700 ease-linear duration-300 hover:text-green-500' />
                    </a>
                </ToolTip>
            </div>
        </footer>
    )
}


export default Footer;