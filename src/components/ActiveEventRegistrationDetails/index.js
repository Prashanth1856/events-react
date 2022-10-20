// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props
  const {registrationStatus} = activeEvent
  let eventStatus = ''
  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="yet-to-register-image"
          />
          <p className="register-description">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button type="button" className="register-button">
            Register Here
          </button>
        </div>
      )
      break
    case 'REGISTERED':
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-image"
          />
          <h1 className="registered-heading">
            You have already registered for the event
          </h1>
        </div>
      )
      break

    default:
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registrations-closed-image"
          />
          <h1 className="registration-closed-heading">
            Registrations Are Closed Now!
          </h1>
          <p className="registration-closed-description">
            Stay tuned. We will reopen the registration soon!
          </p>
        </div>
      )
  }
  return <>{eventStatus}</>
}

export default ActiveEventRegistrationDetails
