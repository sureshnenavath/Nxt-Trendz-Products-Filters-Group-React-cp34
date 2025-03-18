import './index.css'

const FiltersGroup = ({
  categoryOptions,
  ratingsList,
  handleRating,
  handleCategory,
  clearFilters,
}) => (
  <div className="filters-group-container">
    <div className="category">
      <h1>Category</h1>
      <ul>
        {categoryOptions.map(eachItem => (
          <li key={eachItem.categoryId}>
            <button
              type="button"
              value={eachItem.categoryId}
              className="buttons"
              onClick={() => handleCategory(eachItem.categoryId)}
            >
              <p>{eachItem.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="ratings-list">
      <h1>Rating</h1>
      <ul>
        {ratingsList.map(eachItem => (
          <li key={eachItem.ratingId}>
            <img
              src={eachItem.imageUrl}
              alt={`rating ${eachItem.ratingId}`}
              className="rating-img"
              onClick={() => handleRating(eachItem.ratingId)}
            />
          </li>
        ))}
      </ul>
    </div>
    <button type="button" onClick={clearFilters}>
      Clear Filters
    </button>
  </div>
)

export default FiltersGroup
