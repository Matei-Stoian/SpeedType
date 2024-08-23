import Footer from './components/Footer'
import Character from './components/Charachter'
import WordContainer from './components/WordContainer'
import { useGame } from './hooks/useGame';
import { getWord } from './utils';
import WordWrapper from './components/WordWrapper'
import { useState } from 'react';
import Counter from './components/Conter'
import Header from './components/Header'
import TimePicker from './components/TimePicker'
import { getLocalStorage } from './utils/localStorage';
import Reset from './components/Reset'
function App() {
  const word = getWord(30);
  const [focused,setFocus] = useState();
  const [time, setTime] = useState(() => getLocalStorage('time') || 15000);
  return (
    <>
      <div className='h-screen w-full overflow-y-auto'>
        <main className='mx-auto flex h-full max-w-5xl flex-col gap-4 xl:px-0'>
            <Header/>
            <TimePicker time={time} setTime={setTime} reset={()=>{}}/>
            <Counter counter={time} reset={()=>{}}/>
            <WordContainer word={word}/>
            <Reset reset={()=>{}}/>
            <Footer/>
        </main>
      </div>
    </>
  )
}

export default App
