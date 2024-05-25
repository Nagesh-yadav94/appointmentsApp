// Write your code here
import './index.css'

const FILLED_STAR_URL =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
const STAR_URL =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImageUrl = isStarred ? FILLED_STAR_URL : STAR_URL

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-btn"
          type="button"
          data-testid="star"
          onClick={onClickStar}
        >
          <img src={starImageUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
