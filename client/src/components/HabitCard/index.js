import React, { Component } from 'react'
import { DatePicker } from '@y0c/react-datepicker';
import './HabitCard.css'


export default class index extends Component {

  onChange = (date) => {
    console.log(date);
  }

  render() {
    return (
      <div className="habitCard">
        <div className="habitCardContainer">
         
         <div className="leftContainer">
          <div className="exit">
            <i className="fa fa-trash-o deleteButton"></i>
          </div>

          <div className="habitNameContainer">
            <h4 className="habitName">{this.props.habit}</h4>
          </div>
          </div>

        <div className="weekHistoryContainer">
          <div className="captions weekday">
            <div className="habitText">S</div>
            <i className="fa fa-check historyBox"></i>
          </div>
            
          <div className="captions weekday">
            <div className="habitText">M</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div className="habitText">T</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div className="habitText">W</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div className="habitText">Th</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div className="habitText">F</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div className="habitText">Sa</div>
            <i className="fa fa-question historyBox"></i>
          </div>
        </div>

<div className="confirmContainer">

          <DatePicker className="calendar" locale="ko" onChange={this.onChange}/>

          <div className="completedContainer">
            <div className="captions status">
              <div className="statusText">Did It!</div>
              <i className="fa fa-check statusButton"></i>
            </div>
            
            <div className="captions status">
              <div className="statusText">Failed</div>
              <i className="fa fa-close statusButton"></i>
            </div>
          </div>

</div>
          
        </div>
      </div>
    )
  }
}
