import './ErrorMessage.css'

/**
 * ErrorMessage — displays an error with a retry button.
 * @param {{ message: string, onRetry: () => void }} props
 */
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error" role="alert">
      <div className="error__icon">⚠</div>
      <p className="error__message">{message}</p>
      <button className="error__retry" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}

export default ErrorMessage
