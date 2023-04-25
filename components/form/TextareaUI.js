
const TextareaUI = ({label, name, value, fullCol, setValue}) => {
  return (
    <div className={`input_ ${fullCol ? 'full_' : null}`}>
        <label htmlFor={name}>{label}</label>
        <textarea htmlFor={name} onChange={(event)=> setValue(event.target.value, name)}/>
    </div>
  )
}

export default TextareaUI