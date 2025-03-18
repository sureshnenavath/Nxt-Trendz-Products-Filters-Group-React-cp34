import './index.css'

const FiltersGroup = ({
  categoryOptions,
  ratingsList,
  handleRating,
  handleCategory,
}) => {
  const getCategoryId = event => {
    handleCategory(event.currentTarget.value) // Use currentTarget to get button value
  }

  const getRatingId = event => {
    handleRating(event.currentTarget.value) // Use currentTarget to get button value
  }
  const clearAllTheFilter = () => {
    const val = ''
    handleCategory(val)
    handleRating(val)
  }
  return (
    <div className="filters-group-container">
      <div className="category">
        <h1>Category</h1>
        <ul>
          {categoryOptions.map(eachItem => (
            <li key={eachItem.categoryId}>
              <button
                value={eachItem.categoryId}
                onClick={getCategoryId}
                className="buttons"
              >
                {eachItem.name}
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
              <button
                value={eachItem.ratingId}
                onClick={getRatingId}
                className="buttons"
              >
                <div>
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.ratingId}
                    className="rating-img"
                  />
                  <p>&up</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="clart-filer">
        <button onClick={clearAllTheFilter}>Clear Filter</button>
      </div>
    </div>
  )
}

export default FiltersGroup
