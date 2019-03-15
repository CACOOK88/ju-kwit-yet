import React from 'react'
import LoginForm from '../LoginForm'
import UserGreeting from '../UserGreeting'

export default function index(props) {
  const { loggedIn, userName, password, onLoginSubmit,onRegisterSubmit, onChange, onLogout } = props
  if (loggedIn) {
    return <UserGreeting 
      userName={userName}
      onLogout={onLogout}
    />
  }
  return <LoginForm 
    onLoginSubmit={onLoginSubmit}
    onRegisterSubmit={onRegisterSubmit}
    onChange={onChange}
    userName={userName}
    password={password}
  />
}
