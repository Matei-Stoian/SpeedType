import React from "react";



interface WordWrapperProps {
    children: React.ReactNode;
    focused: boolean;
    setFocust: React.Dispatch<React.SetStateAction<boolean>>;
}




const WordWrapper = ({ children, focused, setFocust }: WordWrapperProps) => {
    return (<>
        <div
            className={`${focused ? 'opacity-0' : 'opacity-100'
                } flex items-center justify-center gap-3 transition-all duration-500 `}
        >
            
            <span className={`text-center font-mono text-lg text-slate-600`}>
                Focus to start typing
            </span>
        </div>
        <div
            className={`relative mt-5 focus:border-0 focus:border-none focus:outline-none ${focused ? 'blur-none' : 'cursor-pointer blur-md'
                } `}
            tabIndex={0}
            onFocus={() => { setFocust(true) }}
            onBlur={() => { setFocust(false) }}
        >
            {children}
        </div>
    </>)
}


export default WordWrapper;