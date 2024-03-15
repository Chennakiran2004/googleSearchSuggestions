import './index.css'

const SuggestionItem = props => {
  const {suggestionsListItem, updateSearchInput} = props
  const {suggestion} = suggestionsListItem

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        onClick={onClickSuggestion}
        type="button"
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
