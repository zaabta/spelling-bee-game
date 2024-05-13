'use client'
import { useState } from 'react'
import { Controls, Timer, WordList } from '@/components'
import { shuffleArray } from '@/utils'

export default function TurkishPage() {
  const [input, setInput] = useState<string>('')
  const [seconds, setSeconds] = useState(60)
  const [data, setData] = useState({
    words: [
      'BARDA',
      'BAKRA',
      'BACAK',
      'KARA',
      'KABAR',
      'KADAR',
      'KAR',
      'KAYA',
      'RADAR',
      'RADYAN',
      'YARA',
      'YARAK',
      'ABRA',
      'ABRAK',
      'ACAYIP',
      'ACIK',
      'ADA',
      'ARA',
      'ARABA',
      'ADAM',
      'ADAY',
      'KABARDA',
      'KADIN',
      'KARDA',
      'KARAR',
      'KARARLI',
      'KARDAŞ',
      'KARYA',
      'KAYA',
      'KAYRA',
      'KAYNAK',
      'RAY',
      'RAYIHA',
      'YAKAR',
      'YAKARIK',
      'YAKLAŞ',
      'YAKRAY',
      'YAKA',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YARAK',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YAKMA',
      'YAKALI',
      'YAKI',
      'YAKICI',
      'YAKIN',
      'YAKMA',
      'YAKMAK',
      'YAKIŞ',
      'YAKUP',
      'YAKUT',
      'YAKUTIYE',
      'YAKUŞ',
      'YAKA',
      'YAKALAMA',
      'YAKAR',
      'YAKARIK',
      'YAKLAŞ',
      'YAKRAY',
      'YAKA',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YAKMA',
      'YAKALI',
      'YAKI',
      'YAKICI',
      'YAKIN',
      'YAKMA',
      'YAKMAK',
      'YAKIŞ',
      'YAKUP',
      'YAKUT',
      'YAKUTIYE',
      'YAKUŞ',
      'YAKA',
      'YAKALAMA',
      'YAKAR',
      'YAKARIK',
      'YAKLAŞ',
      'YAKRAY',
      'YAKA',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YAKMA',
      'YAKALI',
      'YAKI',
      'YAKICI',
      'YAKIN',
      'YAKMA',
      'YAKMAK',
      'YAKIŞ',
      'YAKUP',
      'YAKUT',
      'YAKUTIYE',
      'YAKUŞ',
      'YAKA',
      'YAKALAMA',
      'YAKAR',
      'YAKARIK',
      'YAKLAŞ',
      'YAKRAY',
      'YAKA',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YAKMA',
      'YAKALI',
      'YAKI',
      'YAKICI',
      'YAKIN',
      'YAKMA',
      'YAKMAK',
      'YAKIŞ',
      'YAKUP',
      'YAKUT',
      'YAKUTIYE',
      'YAKUŞ',
      'YAKA',
      'YAKALAMA',
      'YAKAR',
      'YAKARIK',
      'YAKLAŞ',
      'YAKRAY',
      'YAKA',
      'YAKUP',
      'YAKUŞ',
      'YAKUT',
      'YAKMA',
      'YAKMAK',
      'YAR',
      'YARAK',
      'YARALI',
      'YARAR',
      'YARDIM',
      'YARIM',
      'YARIK',
      'YARKA',
      'YARMA',
      'YARIMADA',
      'YAYA',
      'YAYLA',
      'YAY',
      'YAK',
      'YAKMA',
      'YAKALI',
      'YAKI',
      'YAKICI',
      'YAKIN',
      'YAKMA',
      'YAKMAK',
    ],
    letters: ['B', 'C', 'K', 'D', 'Y', 'R'],
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
          <p>Ali Almanea tarafından düzenlendi</p>
        </div>
        <h1
          style={{
            textAlign: 'end',
            width: 'fit-content',
          }}
        >
          {data.foundWords.length * 15} Gol
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
