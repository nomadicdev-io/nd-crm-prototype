import { FiPlus } from "react-icons/fi"
import { IconButton } from "../common/Button"

const QuatationsList = () => {
  return (
    <div className="body_container">
        <div className="section_header">
            <h3>Quotations</h3>

            <IconButton href={'/'}><FiPlus /></IconButton>
        </div>

        <div className="table_">
            <table>
                <thead>
                    <tr>
                        <th width={'80px'}>#</th>
                        <th>Name</th>
                        <th width={'200px'}>Price</th>
                        <th width={'150px'}>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default QuatationsList