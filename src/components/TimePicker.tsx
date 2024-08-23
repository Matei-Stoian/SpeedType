
import { setLocalStorage } from '../utils/localStorage'
import {BiTimer } from 'react-icons/bi';


interface TimePickerProps {
    time: number;
    setTime: (value: number) => void;
    reset: () => void;
}


const TimePicker = ({ time, setTime, reset }: TimePickerProps) => {
    return (
        <div className='flex items-center justify-center gap-3'>
            <BiTimer className='text-3xl text-slate-600'/>
            <div className="flex gap-4 rounded-lg text-slate-600" style={{background: "rgb(0, 29, 46)"}}>
                <span
                    className={`category ${time === 15000 ? 'font-bold underline text-emerald-400 hover:text-emerald-200' : 'hover:text-slate-200'}`}
                    onClick={() => {
                        setTime(15000);
                        setLocalStorage('time', 15000);
                        reset();
                    }}
                >15s
                </span>
                <span
                    className={`category ${time === 30000 ? 'font-bold underline text-emerald-400 hover:text-emerald-200' : 'hover:text-slate-200'}`}
                    onClick={() => {
                        setTime(30000);
                        setLocalStorage('time', 30000);
                        reset();
                    }}
                >30s
                </span>
                <span
                    className={`category ${time === 60000 ? 'font-bold underline text-emerald-400 hover:text-emerald-200' : 'hover:text-slate-200'}`}
                    onClick={() => {
                        setTime(60000);
                        setLocalStorage('time', 60000);
                        reset();
                    }}
                >60s
                </span>
            </div>
        </div>
    )
}


export default TimePicker;