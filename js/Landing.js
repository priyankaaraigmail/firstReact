// import React from 'react'
// import { Link } from 'react-router'
// const LandingPage = React.createClass({
//   render () {
//     return (
//       <div className='landing'>
//         <h1>svideo</h1>
//         <input type='text' placeholder='Search' />
//         <Link to='/search'>or Browse All</Link>
//       </div>
//     )
//   }
// })
// export default LandingPage

import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import ShowUser from './ShowUser'
import Search from './Search'

const LandingPage = React.createClass({
	getInitialState () {
			return {
			ajaxData: [],
			filterItem: []
			}
		},
     componentDidMount () {
      axios.get(`https://reqres.in/api/users?page=1&per_page=10`)
    	.then((response) => {
      	console.log('response', response.data.data)
      	this.setState({ajaxData: response.data.data, filterItem: response.data.data})
    })
    .catch((error) => {
      console.error('axios error', error)
    })
	},
	_sendFilterSearch(value) {
		const filteredData = this.state.ajaxData.filter((show) => show.first_name.includes(value))
		this.setState({ filterItem : filteredData })
	},
	render() {
	
			return (
		 	<div>
		 	<Search sendFilterSearch = {this._sendFilterSearch.bind(this)}/>
		   {
		   	this.state.filterItem.map((show,index) => 
		   	  <ShowUser {...show} key={index} id={index} />
		   )
		   }
		   </div>
		)
	}
})

export default LandingPage










