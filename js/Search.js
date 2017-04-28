import React from 'react'
import preloadJson from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preloadJson.shows.map((show) => {
          	return (
            <ShowCard key={show.imdbID} {...show} />
          	)
        })}
      </div>
    )
  }
})

export default Search
