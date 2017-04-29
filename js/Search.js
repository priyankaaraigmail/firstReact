import React from 'react'


const Search = React.createClass({
  getInitialState () {
      return{
        searchTerm: ""
      }
  },
  handleSearchTermChange(event) {
    const value = event.target.value
    this.props.sendFilterSearch(value)
    this.setState({searchTerm: value})
  },
  render () {

    return (
      <header>
      <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={(e)=>this.handleSearchTermChange(e)} />
      </header>
    )
  }
})

export default Search
