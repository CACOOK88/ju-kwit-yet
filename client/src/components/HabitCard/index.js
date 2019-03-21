import React, { Component } from 'react'
import { DatePicker } from '@y0c/react-datepicker';
import moment from 'moment'
import Weekday from '../Weekday'
import './HabitCard.css'


export default class index extends Component {
  state = {
    date: moment().format('YYYYMMDD')
  }

  onChange = (date) => {
    this.setState({
      date: moment(date).format('YYYYMMDD')
    })
  }

  success = () => {
    this.props.updateRecord(this.state.date, this.props.habit, "true")
  }

  failure = () => {
    this.props.updateRecord(this.state.date, this.props.habit, "false")
  }

  delete = () => {
    this.props.deleteHabit(this.props.habit)
  }

  render() {
    let sortedHabitData = [...this.props.habitData].sort((a, b) => {
      let dateA = moment(a.date)
      let dateB = moment(b.date)

      let comparison = 0;
      if (dateA > dateB) {
        comparison = 1;
      } else if (dateA < dateB) {
        comparison = -1;
      }
      return comparison;

    })
    const lastSeven = sortedHabitData.slice(-7)
    console.log(lastSeven)
    return (
      <div className="habitCard">
        <div className="habitCardContainer">
          <div className="leftContainer">
            <div className="exit">
              <i 
                className="fa fa-trash-o deleteButton"
                onClick={this.delete}
              ></i>
            </div>

            <div className="habitNameContainer">
              <h4 className="habitName">{this.props.habit}</h4>
            </div>
          </div>

          <div className="weekHistoryContainer">
          {lastSeven 
            ?
            lastSeven.map( (record, i) => {
              return(
                <Weekday
                  key={i}
                  date={record.date}
                  success={record.success}
                  recordId={record.id}
                />
              )
            })
            :
            null
          }
          </div>

          <div className="confirmContainer">
            <DatePicker className="calendar" locale="ko" onChange={this.onChange}/>

            <div className="completedContainer">
              <div className="captions status">
                <div className="statusText">Did It!</div>
                <i className="fa fa-check statusButtonSuccess" onClick={this.success}></i>
              </div>
              
              <div className="captions status">
                <div className="statusText">Failed</div>
                <i className="fa fa-close statusButton" onClick={this.failure}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
 
  }
}
