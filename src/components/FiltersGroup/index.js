import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearchInput,
    searchInput,
    onKeyDown,
    updateCategoryId,
    updateActiveRatingId,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  const onFilterCategory = categoryId => {
    updateCategoryId(categoryId)
  }

  const onFilterRating = ratingId => {
    updateActiveRatingId(ratingId)
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="input-field"
          placeholder="Search"
          onChange={onChangeSearchInput}
          value={searchInput}
          onKeyDown={onKeyDown}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="filtering-title">Category</h1>
      <ul className="filtering-container">
        {categoryOptions.map(eachCategory => (
          <li key={eachCategory.categoryId} className="category-item">
            <button
              type="button"
              className="category-button"
              onClick={() => onFilterCategory(eachCategory.categoryId)}
            >
              <p className="category-name">{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="filtering-title">Rating</h1>
      <ul className="filtering-container">
        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId} className="rating-item">
            <button
              type="button"
              className="rating-btn"
              onClick={() => onFilterRating(eachRating.ratingId)}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-img"
              />
              <p className="rating-text">& up</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="filter-button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
