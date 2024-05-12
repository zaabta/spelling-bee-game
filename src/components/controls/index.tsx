import { Dispatch, SetStateAction } from 'react'
import { Hive, HiveProp } from '../hive'
import './style.scss'

type ControlsPros = HiveProp & {
  input?: string
  setInput?: Dispatch<SetStateAction<string>>
  onCLickShuffle?: () => void
  onCLickEnter?: () => void
}

export const Controls = ({
  letters,
  middle,
  input,
  setInput,
  onCLickShuffle,
  onCLickEnter,
}: ControlsPros) => {
  return (
    <div className="controls">
      <input
        type="text"
        value={input}
        placeholder='type or click'
        onChange={(e) => setInput?.(e.target.value.toUpperCase())}
      />
      <Hive
        letters={letters}
        middle={middle}
        onCLick={(letter) =>
          setInput?.((prev) => (prev + letter).toUpperCase())
        }
      />
      <div className="btns">
        <input type="button" value={'Clear'} onClick={() => setInput?.('')} />
        <input
          type="button"
          value={'Shuffle'}
          onClick={() => onCLickShuffle?.()}
        />
        <input type="button" value={'Enter'} onClick={() => onCLickEnter?.()} />
      </div>
    </div>
  )
}
