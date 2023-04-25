import React from 'react'
import {BiImageAdd} from 'react-icons/bi'
import {FiCheckCircle} from 'react-icons/fi'

const FileUploadUI = ({label, name, fullCol, uploadFile, isComplete}) => {
  return (
    <div className={`input_ ${fullCol ? 'full_' : null}`}>
        <label htmlFor={name}>{label}</label>
        <div className={`upload_placeholder ${isComplete ? 'success_' : null}`}>
            <div className='icon_'>
                {
                    isComplete ? <FiCheckCircle /> : <BiImageAdd />
                }
            </div>
            <input type={'file'} name={name} onChange={(event)=> uploadFile(event)} accept='image/*'/>
        </div>
    </div>
  )
}

export default FileUploadUI