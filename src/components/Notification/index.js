// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {childern} = props

  return (
    <div className="container">
      <div className="notification-content">{childern}</div>
      <GrFormClose className="close icon" />
    </div>
  )
}
export default Notification
