import Footer from './components/Footer'
import Character from './components/Charachter'
import WordContainer from './components/WordContainer'
import { useGame } from './hooks/useGame';
import { getWord } from './utils';
import WordWrapper from './components/WordWrapper'
import { useEffect, useMemo, useState } from 'react';
import Counter from './components/Conter'
import Header from './components/Header'
import TimePicker from './components/TimePicker'
import { getLocalStorage } from './utils/localStorage';
import Reset from './components/Reset'
import UserInput from './components/UserInput'
import Result from './components/Result'
function App() {
  const {
    result,
    isFinished,
    setFinished,
    charTyped,
    counter,
    time,
    word,
    wordContainerFocused,
    setWordConteinerFocused,
    setTime,
    resetCounter,
    resetGame,
    checkCharacter } = useGame();

  return (
    <>
      <div className='h-screen w-full overflow-y-auto'>
        <main className='mx-auto flex h-full max-w-5xl flex-col gap-4 xl:px-0'>
          <Header />
          <TimePicker time={time} setTime={setTime} reset={resetGame} />
          <Counter counter={counter} reset={resetCounter} />

          <WordWrapper focused={wordContainerFocused} setFocust={setWordConteinerFocused}>
            <WordContainer word={word} />
            <UserInput
              word={word}
              check={checkCharacter}
              charTyped={charTyped}
            />
          </WordWrapper>
          <Reset reset={resetGame} />

          <div className={`${isFinished ? 'opacity-100' : 'opacity-0'} transition-all ease-linear duration-300`}>
            <Result result={result} setFinished={setFinished} />
          </div>

          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
