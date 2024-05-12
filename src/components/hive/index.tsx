import { Cell } from '../cell'
import './style.scss'

export type HiveProp = {
  letters: string[]
  middle: string
  onCLick?: (letter: string) => void
}

export const positions = [
  { transform: 'translate(0, -100%)' },
  { transform: 'translate(75%, -50%)' },
  { transform: 'translate(75%, 50%)' },
  { transform: 'translate(0, 100%)' },
  { transform: 'translate(-75%, 50%)' },
  { transform: 'translate(-75%, -50%)' },
]

export const Hive = ({ letters, middle, onCLick }: HiveProp) => {
  return (
    <div className="hive">
      {letters.length === 6 &&
        letters.map((letter, index) => (
          <Cell
            key={index}
            style={{ position: 'absolute', ...positions[index] }}
            onClick={onCLick}
          >
            {letter}
          </Cell>
        ))}
      <Cell
        style={{ position: 'absolute', transform: 'translate(0%%, 0%)' }}
        color="yellow"
        onClick={onCLick}
      >
        {middle}
      </Cell>
    </div>
  )
}
