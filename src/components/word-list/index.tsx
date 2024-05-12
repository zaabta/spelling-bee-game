import './style.scss'

export type WordListProps = {
  count: number
  words: string[]
}

export const WordList = ({ count, words }: WordListProps) => {
  return (
    <div className="word-list">
      <h1>You have found {count || 0} words</h1>
      <ul>
        {words?.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  )
}
