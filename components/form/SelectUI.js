import Select from 'react-select'

const SelectUI = ({label, name, setValue, fullCol, options}) => {
  return (
    <div className={`input_ ${fullCol ? 'full_' : null}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <Select options={options} onChange={(event)=> setValue(event.value, name)} classNamePrefix="select-ui"/>
    </div>
  )
}

export default SelectUI