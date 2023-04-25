import {FiCheckCircle} from 'react-icons/fi'

const CompletedSwal = ({message, sub}) => {
  return (
    <div className="swal_">
        <FiCheckCircle />
        <h4>{message}</h4>
        <p>{sub}</p>
    </div>
  )
}

export default CompletedSwal