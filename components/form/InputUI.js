
const InputUI = ({label, type, value, name, setValue, fullCol, options}) => {
  return (
    <div className={`input_ ${fullCol ? 'full_' : null}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} name={name} value={value} onChange={(event)=> setValue(event.target.value, name)}/>
    </div>
  )
}

export default InputUI