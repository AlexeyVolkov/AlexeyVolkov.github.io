import React from 'react'
import { useUser } from '../utils/github-fetch'

const Header = () => {
  const { data: user, isLoading, error } = useUser()

  if (isLoading) return <samp>Loading header...</samp>
  if (error) return <samp>Cannot load header: {error.message}</samp>

  const getAvatar = () =>
    user.avatar_url ? (
      <img
        src={user.avatar_url}
        alt={user.name}
        decoding='async'
        height='52'
        width='52'
        loading='lazy'
      />
    ) : (
      <i>{user.name}</i>
    )

  return (
    <header data-testid='header'>
      <h1>{user.bio}</h1>
      {getAvatar()}
    </header>
  )
}
export default Header
