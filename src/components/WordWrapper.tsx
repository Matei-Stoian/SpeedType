import React from "react";


interface WordWrapperProps{
    children: React.ReactNode;
    focused: boolean;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}




const WordWrapper = ({children,focused,setFocus}: WordWrapperProps) =>{
    return(<>
    
    <div 
        className={`relative mt-7 focus:border-0 focus:border-none focus:outline-none ${focused? 'blur-none' : 'cursor-pointer blur-md'}`}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        >
        {children}
    </div>
    
    
    </>)
}


export default WordWrapper;