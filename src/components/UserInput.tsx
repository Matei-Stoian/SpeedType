import React from "react";
import { useMemo } from "react";
import Chraracter from './Charachter'

interface UserInputProps {
    charTyped: string;
    check: (index: number) => boolean;
    word: string;
}


const UserInput = ({ charTyped, check, word }: UserInputProps) => {
    const characters = useMemo(() => {
        return charTyped.split('');
    }, [charTyped]);


    return (
        <div className="character md:character absolute left-0 top-0 z-10 break-all font-mono text-xl lg:text-2xl" >
            {characters.map((_, index) => {
                return (<Chraracter character={word.charAt(index)} state={check(index)}/>);
            })}
        </div>
    )

};



export default UserInput;