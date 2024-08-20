import { faker } from '@faker-js/faker'

import { Metrics } from '../types'

export const getWord = (n: number): string => {
    return faker.word.words(n);
}

export const checkCode = (code: string) => {
    return (
        code.startsWith('Key') ||
        code === 'Backspace' ||
        code === 'Space' ||
        code === 'Minus'
    );
};


export const computeAccuracy = (expectedWord: string, typedWord: string) => {
    let correctChars = 0;
    for (let i = 0; i < typedWord.length; i++) {
        if (typedWord[i] === expectedWord[i])
            correctChars++;
    }

    const metrics: Metrics = {
        correctChars,
        inccorectChars: typedWord.length - correctChars,
        accuracy: (correctChars / typedWord.length) * 100,
    }
    return metrics;
}

export const computeWPM = (
    typedWord: string,
    accuracy: number,
    time: number
) => {
    const minutes = time / 60000;
    const wordsTyped = typedWord.length / 5;
    const grossWPM = wordsTyped / minutes;
    const netWPM = Math.round(grossWPM * (accuracy / 100));

    const result = {
        wpm: netWPM,
        cpm: typedWord.length / minutes,
    };
    return result;
}


export const computeErrorPercentage = (accuracy: number) => {
    return 100 - accuracy;
}

