import { usePathname } from 'next/navigation'
import './style.scss'

export type WordListProps = {
  count: number
  words: string[]
}

export const WordList = ({ count, words }: WordListProps) => {
  const path = usePathname()
  return (
    <div className="word-list">
      <h1>
        {path === '/en'
          ? `You have found ${count || 0} words`
          : `${count || 0} kelime buldunuz`}
      </h1>
      <ul>
        {words?.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  )
}
