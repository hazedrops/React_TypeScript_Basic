interface Props {
  children: string
  color: string
  // Telling the TypeScript component that the color property is optional - add ?
  // color?: string
  onClick: () => void
}

// Giving Default value
// const Button = ({ children, color = "warning", onClick }: Props) => {

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
