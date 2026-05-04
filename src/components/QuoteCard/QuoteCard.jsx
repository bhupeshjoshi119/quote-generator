import TagBadge from '../TagBadge/TagBadge'
import QuoteMeta from '../QuoteMeta/QuoteMeta'
import './QuoteCard.css'

/**
 * QuoteCard — displays a single quote with author, tags, and metadata.
 * @param {{ quote: object, fadeIn: boolean }} props
 */
function QuoteCard({ quote, fadeIn }) {
  return (
    <div className={`quote-card ${fadeIn ? 'quote-card--visible' : 'quote-card--hidden'}`}>
      <div className="quote-card__mark">"</div>
      <blockquote className="quote-card__content">{quote.content}</blockquote>
      <div className="quote-card__divider" />
      <div className="quote-card__author">— {quote.author}</div>

      {quote.tags && quote.tags.length > 0 && (
        <div className="quote-card__tags">
          {quote.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}

      <QuoteMeta
        dateAdded={quote.dateAdded}
        dateModified={quote.dateModified}
        length={quote.length}
        id={quote.id}
      />
    </div>
  )
}

export default QuoteCard
