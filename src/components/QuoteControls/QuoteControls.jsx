import './QuoteControls.css'

/**
 * QuoteControls — navigation buttons and pagination info.
 * @param {{
 *   onNext: () => void,
 *   onPrev: () => void,
 *   onRandom: () => void,
 *   isFirst: boolean,
 *   isLast: boolean,
 *   currentIndex: number,
 *   total: number,
 *   page: number,
 *   totalPages: number
 * }} props
 */
function QuoteControls({
  onNext,
  onPrev,
  onRandom,
  isFirst,
  isLast,
  currentIndex,
  total,
  page,
  totalPages,
}) {
  return (
    <div className="controls">
      <div className="controls__buttons">
        <button
          className="controls__btn controls__btn--secondary"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Previous quote"
        >
          ← Prev
        </button>

        <button
          className="controls__btn controls__btn--random"
          onClick={onRandom}
          aria-label="Random quote"
        >
          ✦ Random
        </button>

        <button
          className="controls__btn controls__btn--secondary"
          onClick={onNext}
          disabled={isLast}
          aria-label="Next quote"
        >
          Next →
        </button>
      </div>

      <p className="controls__info">
        Quote {currentIndex + 1} of {total} &nbsp;·&nbsp; Page {page} / {totalPages}
      </p>
    </div>
  )
}

export default QuoteControls
