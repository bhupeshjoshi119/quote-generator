import { useState, useEffect } from 'react'
import QuoteCard from './components/QuoteCard/QuoteCard'
import QuoteControls from './components/QuoteControls/QuoteControls'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { fetchQuotes } from './services/quoteService'
import './styles/app.css'

function App() {
  const [quotes, setQuotes] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    loadQuotes(page)
  }, [page])

  async function loadQuotes(pageNum) {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchQuotes(pageNum)
      setQuotes(result.data)
      setTotalPages(result.totalPages)
      setCurrentIndex(0)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function triggerFade(callback) {
    setFadeIn(false)
    setTimeout(() => {
      callback()
      setFadeIn(true)
    }, 250)
  }

  function handleNext() {
    triggerFade(() => {
      if (currentIndex < quotes.length - 1) {
        setCurrentIndex((i) => i + 1)
      } else if (page < totalPages) {
        setPage((p) => p + 1)
      }
    })
  }

  function handlePrev() {
    triggerFade(() => {
      if (currentIndex > 0) {
        setCurrentIndex((i) => i - 1)
      } else if (page > 1) {
        setPage((p) => p - 1)
      }
    })
  }

  function handleRandom() {
    triggerFade(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      setCurrentIndex(randomIndex)
    })
  }

  const currentQuote = quotes[currentIndex] || null
  const isFirst = page === 1 && currentIndex === 0
  const isLast = page === totalPages && currentIndex === quotes.length - 1

  return (
    <div className="app">
      <div className="app__background" />
      <div className="app__content">
        <Header />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={() => loadQuotes(page)} />}
        {!loading && !error && currentQuote && (
          <>
            <QuoteCard quote={currentQuote} fadeIn={fadeIn} />
            <QuoteControls
              onNext={handleNext}
              onPrev={handlePrev}
              onRandom={handleRandom}
              isFirst={isFirst}
              isLast={isLast}
              currentIndex={currentIndex}
              total={quotes.length}
              page={page}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App
