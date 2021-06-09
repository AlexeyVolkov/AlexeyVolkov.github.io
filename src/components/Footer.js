import React from 'react'
import { useUser } from '../utils/github-fetch'

const Footer = () => {
  const { data: user, isLoading, error } = useUser()

  if (isLoading) return <samp>Loading footer...</samp>
  if (error) return <samp>Cannot load footer: {error.message}</samp>

  return (
    <footer>
      Contacts:
      <ul>
        {user.email && (
          <li>
            📧{' '}
            <a href={`mailto:${user.email}`} itemprop='email'>
              {user.email}
            </a>
          </li>
        )}
        {user.blog && (
          <li>
            💼{' '}
            <a href={user.blog} itemprop='url'>
              Website
            </a>
          </li>
        )}
        {user.html_url && (
          <li>
            🐙{' '}
            <a href={user.blog} itemprop='url'>
              GitHub
            </a>
          </li>
        )}
      </ul>
    </footer>
  )
}
export default Footer
