import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock framer-motion
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

describe('Contact Component', () => {
  beforeEach(() => {
    // Mock window.location.href
    vi.stubGlobal('location', { href: '' })
  })

  it('renders the contact section', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('does NOT expose the email address in a link (Vulnerability Fixed)', () => {
    render(<Contact />)
    const mailLink = screen.queryByRole('link')
    expect(mailLink).toBeNull()

    // Check that the text is still not plainly visible in the document if possible,
    // though it might be in the JS code if not carefully obfuscated.
    // At least it should not be in an href.
    const emailText = screen.queryByText(/diegojeanpier\.dc@gmail\.com/i)
    expect(emailText).toBeNull()
  })

  it('triggers email client on button click', () => {
    render(<Contact />)
    const button = screen.getByRole('button', { name: /Say Hello/i })

    fireEvent.click(button)

    expect(window.location.href).toBe('mailto:diegojeanpier.dc@gmail.com')
  })
})
