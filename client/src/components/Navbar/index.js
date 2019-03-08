import React from 'react'
import './navbar.css'
import navLogo from'../Images/project3_white2.png'

export default function index() {
  return (
    <div className="navbar">
    <img src={navLogo} alt="Logo"></img>
      {/* <h1>Ju Kwit Yet</h1> */}
      <form>
        <label htmlFor="userName">User Name: </label>
        <input type="text" placeholder="Enter Username" name="userName" />

        <label htmlFor="password">Password:</label>
        <input type="text" placeholder="Enter Password" name="password" />

        <button>Submit</button>
      </form>
    </div>
  )
}
