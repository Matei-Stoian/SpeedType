import { useCallback, useState } from "react"
import { getWord} from "../utils"


export const useWords = (numberOfWords:number) =>{

    const [word,setWord] = useState<string>(() => getWord(numberOfWords) + ' ');
    const [totalWords,setTotalWords] = useState<string>(word);

    const appendWord = useCallback((word:string)=>{
        setTotalWords((prev) => prev+word)
    },[]);

    const eraseWord = useCallback((word:string)=>{
        setTotalWords(word);
    },[]);


    const updateWord = useCallback((erase = false)=>{
        setWord(() =>{
            const genWord = getWord(numberOfWords) + ' ';
            if(erase) eraseWord(genWord);
            else appendWord(genWord)
            return genWord;
        });
    },[numberOfWords,appendWord,eraseWord]);

    return {word,totalWords, setTotalWords, updateWord,appendWord};
}
