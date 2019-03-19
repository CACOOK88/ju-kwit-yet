import React from 'react'
import moment from 'moment'

export default function index(props) {
  let day
  switch (moment(props.date).format('dddd')) {
    case "Monday":
      day = "M"
      break
    case "Tuesday":
      day = "T"
      break
    case "Wednesday":
      day = "W"
      break
    case "Thursday":
      day = "Th"
      break
    case "Friday":
      day = "F"
      break
    case "Saturday":
      day = "Sat"
      break
    case "Sunday":
      day = "Sun"
      break
    default:
      day = moment(props.date).format('dddd')
      break
  }
  
  return (
    <div className="captions weekday" data-id={props.recordId}>
      <div>{day}</div>
      <div className="habitText">{moment(props.date).format('M/DD')}</div>
      <i className={ 
        props.success === "false"
        ?
        "fa historyBox fa-close"
        : props.success === "true" 
        ? 
        "fa historyBox fa-check"
        :
        "fa historyBox fa-question"
      }></i>
    </div>
  )
}
