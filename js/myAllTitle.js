import React from 'react'

const myTitles = React.createClass({
  render: function () {
  	const styles = {color: this.props.color, fontWeight: 'bold'}
    return (
      <div>
        <h1 style={styles}>{this.props.changetitle}</h1>
      </div>
    )
  }
})

export default myTitles
