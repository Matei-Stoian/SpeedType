import React from "react";


interface CharactherProps {
    state?: boolean;
    character: string;
    className?: string;
};


const Character = ({ state, character, className }: CharactherProps) => {
    return (
        <span
            style={{
                color:
                    state === undefined
                        ? ''
                        : state === true
                            ? '#00E980'
                            : '#BD0101',
                backgroundColor: state === false && character === ' ' ? '#BD0101' : '',
            }}
            className={`${className}`}>
            {character}
        </span>
    )
}

export default Character;