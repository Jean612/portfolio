import { render, screen, fireEvent } from '@testing-library/react'
import Projects from './Projects'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

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

describe('Projects Component', () => {
  it('renders the main heading and description', () => {
    render(<Projects />)

    expect(screen.getByText('Side Projects')).toBeInTheDocument()
    expect(screen.getByText('Personal projects and experiments.')).toBeInTheDocument()
  })

  it('renders all projects', () => {
    render(<Projects />)

    expect(screen.getByText('Lynk.lat - URL Shortener SaaS')).toBeInTheDocument()
    expect(screen.getByText('High-Performance URL Shortener API')).toBeInTheDocument()
    expect(screen.getByText('Modern Pokédex App')).toBeInTheDocument()
  })

  it('renders project links with correct labels', () => {
    render(<Projects />)

    const codeLinks = screen.getAllByText(/Code/i)
    const demoLinks = screen.getAllByText(/Demo/i)

    expect(codeLinks.length).toBe(3)
    expect(demoLinks.length).toBe(3)
  })

  describe('Read more functionality', () => {
    let scrollHeightSpy: any
    let clientHeightSpy: any

    beforeEach(() => {
      // Mock scrollHeight > clientHeight to trigger "Read more"
      scrollHeightSpy = vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(100)
      clientHeightSpy = vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(50)
    })

    afterEach(() => {
      scrollHeightSpy.mockRestore()
      clientHeightSpy.mockRestore()
    })

    it('shows "Read more" button when content is truncated', async () => {
      render(<Projects />)

      // The effect runs after render
      const readMoreButtons = await screen.findAllByText('Read more')
      expect(readMoreButtons.length).toBeGreaterThan(0)
    })

    it('toggles expansion state when clicking "Read more"/"Show less"', async () => {
      render(<Projects />)

      const readMoreButtons = await screen.findAllByText('Read more')
      fireEvent.click(readMoreButtons[0])

      expect(screen.getByText('Show less')).toBeInTheDocument()

      fireEvent.click(screen.getByText('Show less'))
      expect(screen.getByText('Read more')).toBeInTheDocument()
    })
  })
})
