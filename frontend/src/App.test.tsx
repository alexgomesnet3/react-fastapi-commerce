import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import App from './App'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('renders the application name and frontend status', () => {
    vi.stubEnv('APP_NAME', 'React FastAPI Commerce')

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'React FastAPI Commerce',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Frontend foundation is running.'),
    ).toBeInTheDocument()
  })
})