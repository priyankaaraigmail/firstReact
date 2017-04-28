import  React from 'react'

const ShowUser = (props) => (

		<div className ="col-md-3 ">
		    <img className ="img-circle" width="304" height="236" src={props.avatar} />
		    <p className="text-center">{props.first_name}</p>
		    <p className="text-center">{props.last_name}</p>
		</div>

)

export default ShowUser
	