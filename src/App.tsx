import Footer from './components/Footer'
import Character from './components/Charachter'
import WordContainer from './components/WordContainer'
import { useGame } from './hooks/useGame';
import { getWord } from './utils';
function App() {
  const word = getWord(30);
  return (
    <>
      <div className='relative mt-5 focus:border-0 focus:border-none focus:outline-none'>
      <WordContainer word={word} />
      </div>
      <Footer />
    </>
  )
}

export default App
