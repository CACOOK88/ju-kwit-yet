import React from 'react'
import './navbar.css'

export default function index() {
  return (
    <div className="navbar">
      <h1>Ju Kwit Yet</h1>
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
