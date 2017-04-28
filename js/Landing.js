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

const LandingPage = React.createClass({
	getInitialState () {
			return {
			ajaxData: []
			}
		},
     componentDidMount () {
      axios.get(`https://reqres.in/api/users?page=1&per_page=10`)
    	.then((response) => {
      	console.log('response', response.data.data)
      	this.setState({ajaxData: response.data.data})
    })
    .catch((error) => {
      console.error('axios error', error)
    })
	},
	render() {	
	//const { id,first_name, last_name, avatar } = this.state.ajaxData
	console.log(this.state.ajaxData)
		return (
		 	<div>
		   {
		   	this.state.ajaxData.map((show,index) => 
		   	<ShowUser {...show} key={index} id={index} />
		   )
		   }
		   </div>
		)
	}
})

export default LandingPage