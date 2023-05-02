import { FiSearch } from "react-icons/fi"
import InputUI from "../form/InputUI"
import { IconButtonSubmit } from "./Button"

const SearchUI = () => {

    const formControl = ()=> {

    }

  return (
    <form className='search_form'>
        <InputUI 
            label={null}
            name={'company_name'}
            value={''}
            placeholder={'Search'}
            type={'text'}
            setValue={formControl}
        />
        <IconButtonSubmit type={'submit'} className="primary_"><FiSearch /></IconButtonSubmit>
    </form>
  )
}

export default SearchUI