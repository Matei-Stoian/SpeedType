import React from "react";
import { useDebugValue, useEffect } from "react";


interface CounterProps {
    counter: number;
    reset: () => void;
}



const Counter = ({ counter, reset }: CounterProps) => {
    useEffect(() => {
        reset();
    }, [reset]);


    const formatCounter = {
        minutes: new Date(counter).getUTCMinutes(),
        seconds: new Date(counter).getUTCSeconds(),
    };

    return (
        <div className="flex justify-end">
            <div

                className=" rounded-lg p-3 bg-slate-800"
            >
                <span className="text-right text-emerald-400 font-mono text-lg lg:text-xl">
                    {formatCounter.minutes < 10
                        ? `0${formatCounter.minutes}`
                        : formatCounter.minutes}
                    :
                    {formatCounter.seconds < 10
                        ? `0${formatCounter.seconds}`
                        : formatCounter.seconds}
                </span>
            </div>
        </div>
    )
}

export default Counter;