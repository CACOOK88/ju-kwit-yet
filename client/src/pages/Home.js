import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import HabitSlide from '../components/HabitSlide'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <br></br>
        <HabitSlide />
        <Footer />
      </div>
    )
  }
}
