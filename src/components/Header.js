import React from 'react'
import { useUser } from '../utils/user'
const username = process.env.REACT_APP_GITHUB_USERNAME

const Header = () => {
  const user = useUser(username)
  console.log(user)
  return (
    <header>
      <h1>Hi, I'm {user.name}</h1>
      <h3>{user.bio}</h3>
    </header>
  )
}
export default Header
