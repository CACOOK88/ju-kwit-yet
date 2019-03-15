import React from 'react'
import './Jumbotron.css'
import mainLogo from'../Images/project3_white.png'

export default function index() {
  return (
    <div className="jumbotron">
      <div className="overlay"></div>
      <img src={mainLogo} alt="Logo"></img>
      <h3>The no-frills habit tracker.</h3>
    </div>
  )
}
