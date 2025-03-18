import {BsFilterRight} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import './index.css'

const ProductsHeader = ({
  handleSearch,
  sortbyOptions,
  activeOptionId,
  changeSortby,
  searchFilter,
}) => {
  const onChangeSortby = event => {
    changeSortby(event.target.value)
  }

  const handleUserInput = event => {
    handleSearch(event.target.value)
  }

  const submitSearch = event => {
    if (event.key === 'Enter') {
      handleSearch(searchFilter)
    }
  }

  return (
    <div className="products-header">
      <div className="search-products">
        <input
          type="search"
          value={searchFilter}
          onChange={handleUserInput}
          onKeyDown={submitSearch}
          placeholder="Search products"
          role="searchbox"
        />
        <FaSearch onClick={() => handleSearch(searchFilter)} />
      </div>
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
