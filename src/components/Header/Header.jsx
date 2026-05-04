import './Header.css'

/**
 * Header component — displays the app title and current date.
 */
function Header() {
  const today = new Date()
  const formatted = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="header">
      <div className="header__icon">❝</div>
      <h1 className="header__title">Daily Quotes</h1>
      <p className="header__date">{formatted}</p>
    </header>
  )
}

export default Header
