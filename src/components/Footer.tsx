import { BsGithub, BsLinkedin } from 'react-icons/bs';
import ToolTip from './ToolTip';

const Footer = () => {
    return (
        <footer className="mb-3 mt-auto">
            <div className="flex flex-grid gap-6 items-center justify-center ">
                <ToolTip tooltipId="GithubToolTip">
                    <a href='https://github.com/Matei-Stoian' target="_blank" rel="noopener noreferrer">
                    <BsGithub
                        data-tooltip-id='GithubToolTip'
                        data-tooltip-content="Github"
                        className='text-5xl ease-linear duration-300 hover:text-green-500' />
                    </a>
                
                </ToolTip>
                <ToolTip tooltipId="LinkedinToolTip">
                    <a href='https://www.linkedin.com/in/matei-octavian-stoian/' target="_blank" rel="noopener noreferrer">
                    <BsLinkedin
                        data-tooltip-id='LinkedinToolTip'
                        data-tooltip-content="Linkedin"
                        className='text-5xl ease-linear duration-300 hover:text-green-500' />
                    </a>
                </ToolTip>
            </div>
        </footer>
    )
}


export default Footer;