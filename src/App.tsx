import Footer from './components/Footer'
import Character from './components/Charachter'
import WordContainer from './components/WordContainer'
import { useGame } from './hooks/useGame';
import { getWord } from './utils';
import WordWrapper from './components/WordWrapper'
import { useState } from 'react';
import Counter from './components/Conter'
import Header from './components/Header'
function App() {
  const word = getWord(30);
  const [focused,setFocus] = useState();
  return (
    <>
    <div className='px-80  h-screen w-full overflow-y-auto'>

      <Header/>
      <Counter counter={100000} reset={()=>{return 1000;}}/>
      <WordContainer word={word} />
      
      
      <Footer />
    </div>
    </>
  )
}

export default App
