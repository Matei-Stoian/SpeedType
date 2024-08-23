import ToolTip from './ToolTip'
import { MdRestartAlt } from 'react-icons/md';

interface ResetProps {
    reset: () => void;
}



const Reset = ({reset}:ResetProps) => {


    return (
        <div className="mt-10 flex justify-center">
            <ToolTip tooltipId='Reset' delayHide={200}>
                <div className='felex items-center justify-center'>
                    <div className='rounded-full hover:bg-gray-700'></div>
                    <MdRestartAlt className='text-2xl lg:text-3xl text-slate-700 ease-linear duration-300 hover:text-green-500' data-tooltip-id='Reset'
                        data-tooltip-content='Restart Test'
                        data-tooltip-place='bottom' 
                        onClick={reset}
                    />
                </div>
            </ToolTip>
        </div>
    );

}


export default Reset;