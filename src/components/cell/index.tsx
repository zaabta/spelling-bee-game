import './style.scss'

export type CellProp = {
  children: string
  color?: string
  style?: React.CSSProperties
  onClick?: (letter: string) => void
}

export const Cell = ({ children, color, style, onClick }: CellProp) => {
  return (
    <div
      className="cell"
      style={{ backgroundColor: color || '#e6e6e6', ...style }}
      onClick={() => onClick?.(children as string)}
    >
      <span className="letter">{children}</span>
    </div>
  )
}
