import { useCallback, useEffect, useState } from "react"
import { ResultType } from "../types"
import { useWords } from "./useWords";
import { useKeyDown } from "./useKeyDown";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";
import { useCounter } from "./useCounter";
import { computeAccuracy, computeErrorPercentage, computeWPM } from "../utils";

export const useGame = () => {

    const [result, setResult] = useState<ResultType>({
        accuracy: 0,
        wpm: 0,
        cpm: 0,
        error: 0,
    });
    const [isFinished,setFinished] = useState(false);
    const [wordContainerFocused, setWordConteinerFocused] = useState(false);
    const { word, updateWord, totalWords } = useWords(30);
    const [time, setTime] = useState(() => getLocalStorage('time') || 15000);
    const { counter, startCounter, resetCounter } = useCounter(time);
    const {
        charTyped,
        typingState,
        cursorPosition,
        totalCharacterTyped,
        resetCharTyped,
        resetCursorPointer,
        setTotalCharacterTyped,
        setTypingState,
    } = useKeyDown(wordContainerFocused);

    const resetGame = useCallback(() => {
        resetCounter();
        updateWord(true);
        resetCursorPointer();
        resetCharTyped();
        setTypingState('idle');
        setTotalCharacterTyped('');
    }, [resetCounter,
        updateWord,
        resetCursorPointer,
        resetCharTyped,
        setTypingState,
        setTotalCharacterTyped,
    ]);

    const checkCharacter = useCallback((index: number) => {
        if (charTyped[index] === word[index]) {
            return true;
        }
        else {
            return false;
        }
    }, [charTyped, word]);

    // Use useEffect to handle updates based on dependencies
    useEffect(() => {
        if (word.length === charTyped.length) {
            updateWord();
            resetCharTyped();
            resetCursorPointer();
        }
    }, [charTyped, word, updateWord, resetCharTyped, resetCursorPointer]);

    useEffect(() => {
        if (typingState === 'start') {
            startCounter();
            setTypingState('typing');
        }
    }, [typingState, startCounter, setTypingState]);

    useEffect(() => {
        if (counter === 0) {
            const { accuracy } = computeAccuracy(totalWords, totalCharacterTyped);
            const { wpm, cpm } = computeWPM(totalCharacterTyped, accuracy, time);
            const error = computeErrorPercentage(accuracy);
            setFinished(true);
            setWordConteinerFocused(false);
            setResult({
                accuracy,
                wpm,
                cpm,
                error,
            });

            resetGame();
        }
    }, [counter, totalWords, totalCharacterTyped, time, resetGame]);
    return {
        isFinished,
        setFinished,
        charTyped,
        counter,
        cursorPosition,
        result,
        time,
        history,
        word,
        wordContainerFocused,
        setWordConteinerFocused,
        setTime,
        resetCounter,
        setLocalStorage,
        updateWord,
        resetGame,
        checkCharacter,
    };
}