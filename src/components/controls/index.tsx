import { Dispatch, SetStateAction } from 'react'
import { Hive, HiveProp } from '../hive'
import './style.scss'
import { useParams, usePathname } from 'next/navigation'

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
  const path = usePathname()
  return (
    <div className="controls">
      <input
        type="text"
        value={input}
        placeholder={path === '/en' ? 'type or click' : 'yazın veya tıklayın'}
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
        <input
          type="button"
          value={path === '/en' ? 'Clear' : 'Temizle'}
          onClick={() => setInput?.('')}
        />
        <input
          type="button"
          value={path === '/en' ? 'Shuffle' : 'Karıştır'}
          onClick={() => onCLickShuffle?.()}
        />
        <input
          type="button"
          value={path === '/en' ? 'Enter' : 'Gir'}
          onClick={() => onCLickEnter?.()}
        />
      </div>
    </div>
  )
}
