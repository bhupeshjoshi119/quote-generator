import './Loader.css'

/**
 * Loader — animated spinner shown while fetching quotes.
 */
function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading quotes">
      <div className="loader__spinner" />
      <p className="loader__text">Fetching quotes…</p>
    </div>
  )
}

export default Loader
