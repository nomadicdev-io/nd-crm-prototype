
const InputUI = ({label, type, value, name, setValue}) => {
  return (
    <div className="input_">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} onChange={(event)=> setValue(event.target.value, name)}/>
    </div>
  )
}

export default InputUI