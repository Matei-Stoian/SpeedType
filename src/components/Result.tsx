import React from 'react';
import {ResultType} from '../types'

interface ResultProps{
    result: ResultType;
    setFinished: React.Dispatch<React.SetStateAction<boolean>>;
};


const Result = ({result,setFinished}:ResultProps) =>{
    return(
        <div className='flex items-center justify-center'>
            <div className=' text-3xl text-emerald-400'>
                Your accuracy was: {result.accuracy.toFixed(2)}%
                <br/>
                Your WPM was: {result.wpm}
                <br/>
                <button className='block ml-20 mt-5 hover:underline' onClick={() => setFinished(false)}> Try Again </button>
            </div>
        </div>
    )
}

export default Result;