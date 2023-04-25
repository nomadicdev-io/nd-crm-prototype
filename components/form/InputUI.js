
const InputUI = ({label, type, value, name, setValue, fullCol}) => {
  return (
    <div className={`input_ ${fullCol ? 'full_' : null}`}>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} onChange={(event)=> setValue(event.target.value, name)}/>
    </div>
  )
}

export default InputUI