// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, activeEvent} = props
  const {imageUrl, name, location} = eventDetails

  const onSelectEvent = () => {
    onClickEvent(eventDetails)
  }

  const activeBorder = activeEvent.id === eventDetails.id ? 'active-border' : ''

  return (
    <>
      <li className="event-item">
        <button type="button" className="event-button" onClick={onSelectEvent}>
          <img
            src={imageUrl}
            alt="event"
            className={`event-img ${activeBorder}`}
          />
        </button>
        <p className="event-title">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
