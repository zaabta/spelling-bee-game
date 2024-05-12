'use client'
import { useState } from 'react'
import { Controls, Timer, WordList } from '../components'
import { shuffleArray } from '@/utils'

export default function Home() {
  const [input, setInput] = useState<string>('')
  const [seconds, setSeconds] = useState(60)
  const [data, setData] = useState({
    words: [
      'BACK',
      'BRAD',
      'CARD',
      'CRAB',
      'DARK',
      'YARD',
      'DRY',
      'RACK',
      'BARKY',
      'BARDIC',
      'BRADY',
      'DARCY',
      'BABY',
    ],
    letters: ['C', 'D', 'K', 'Y', 'B', 'R'],
    middle: 'A',
    foundWords: [] as string[],
  })
  const handleOnClickShuffle = () => {
    setData((prev) => ({
      ...prev,
      letters: shuffleArray(data.letters),
    }))
  }
  const handleOnClickEnter = () => {
    const foundWord = data.words.find(
      (word) => word === input && !data.foundWords.includes(word),
    )
    if (foundWord) {
      setData((prev) => ({
        ...prev,
        foundWords: [...prev.foundWords, foundWord],
      }))
      setSeconds(60)
    } else {
      setInput('')
    }
  }
  return (
    <main className="app">
      <header>
        <div>
          <h1>Spelling Bee</h1>
          <p>Edit by Ali Almanea</p>
        </div>
        <h1
          style={{
            textAlign: 'end',
            width: 'fit-content',
          }}
        >
          {data.foundWords.length * 10} Score
        </h1>
      </header>
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        onFinish={() => {
          setData((prev) => ({
            ...prev,
            foundWords: [],
            letters: shuffleArray(prev.letters),
          }))
          setSeconds(60)
        }}
      />
      <div className="canvas">
        <Controls
          letters={data.letters}
          middle={data.middle}
          setInput={setInput}
          input={input || ''}
          onCLickShuffle={handleOnClickShuffle}
          onCLickEnter={handleOnClickEnter}
        />
        <WordList count={data.foundWords.length} words={data.foundWords} />
      </div>
    </main>
  )
}
