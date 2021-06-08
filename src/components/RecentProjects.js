import React from 'react'
import { useRepos } from '../utils/github-fetch'

const RecentProjects = () => {
  const { data: repos, isLoading, error } = useRepos()

  if (isLoading) return <samp>Loading recent projects...</samp>
  if (error) return <samp>Cannot load recent projects: {error.message}</samp>

  const sortedRepos = repos
    .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
    .slice(0, 3)
  const laguagesText = sortedRepos
    .map((repo) => repo.language)
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(', ')

  return (
    <main>
      <p>I code on {laguagesText}.</p>
      <h2>Projects</h2>
      <dl>
        {sortedRepos.map((repo) => (
          <React.Fragment key={repo.id}>
            <dt>
              <a
                href={repo.html_url}
                title='Open GitHub link'
                rel='nofollow noopener'
              >
                {repo.name}
              </a>{' '}
            </dt>
            <dd>{repo.description && repo.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    </main>
  )
}
export default RecentProjects
