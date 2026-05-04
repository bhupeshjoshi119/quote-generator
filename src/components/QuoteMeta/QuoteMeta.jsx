import './QuoteMeta.css'

/**
 * QuoteMeta — shows quote metadata: dates, character count, and ID.
 * @param {{ dateAdded: string, dateModified: string, length: number, id: number }} props
 */
function QuoteMeta({ dateAdded, dateModified, length, id }) {
  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="quote-meta">
      <div className="quote-meta__item">
        <span className="quote-meta__label">Added</span>
        <span className="quote-meta__value">{formatDate(dateAdded)}</span>
      </div>
      <div className="quote-meta__dot" />
      <div className="quote-meta__item">
        <span className="quote-meta__label">Modified</span>
        <span className="quote-meta__value">{formatDate(dateModified)}</span>
      </div>
      <div className="quote-meta__dot" />
      <div className="quote-meta__item">
        <span className="quote-meta__label">Length</span>
        <span className="quote-meta__value">{length} chars</span>
      </div>
      <div className="quote-meta__dot" />
      <div className="quote-meta__item">
        <span className="quote-meta__label">ID</span>
        <span className="quote-meta__value">#{id}</span>
      </div>
    </div>
  )
}

export default QuoteMeta
