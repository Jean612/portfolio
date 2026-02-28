import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import { describe, it, expect, vi } from 'vitest'

// Mock framer-motion to avoid issues with animations during tests
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    motion: {
      div: ({ children, className }: any) => (
        <div className={className} data-testid="motion-div">
          {children}
        </div>
      )
    }
  }
})

describe('Skills Component', () => {
  it('renders the main heading and description', () => {
    render(<Skills />)

    // Check main heading
    expect(screen.getByText('Tech Stack & Arsenal')).toBeInTheDocument()

    // Check description
    expect(
      screen.getByText('The tools and technologies I use to build scalable solutions.')
    ).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)

    expect(screen.getByText(/Backend Core/i)).toBeInTheDocument()
    expect(screen.getByText(/DevOps & Infra/i)).toBeInTheDocument()
    expect(screen.getByText(/Frontend/i)).toBeInTheDocument()
    expect(screen.getByText(/Mobile/i)).toBeInTheDocument()
    expect(screen.getByText(/AI & Workflow/i)).toBeInTheDocument()
  })

  it('renders specific skills within categories', () => {
    render(<Skills />)

    // Backend
    expect(screen.getByText('Ruby on Rails 7')).toBeInTheDocument()
    expect(screen.getByText('GraphQL')).toBeInTheDocument()

    // DevOps
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('AWS Lambda')).toBeInTheDocument()

    // Frontend
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()

    // Mobile
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('Expo Router')).toBeInTheDocument()

    // AI & Workflow
    expect(screen.getByText('Windsurf IDE')).toBeInTheDocument()
    expect(screen.getByText('Claude Code')).toBeInTheDocument()
  })
})
