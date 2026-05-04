import './TagBadge.css'

/**
 * TagBadge — renders a single tag pill.
 * @param {{ tag: string }} props
 */
function TagBadge({ tag }) {
  return <span className="tag-badge">{tag}</span>
}

export default TagBadge
