import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EfContainer } from './StyledExcellentfood'

const mapState = state => ({
  list : state.foodlist.list.slice(0,10)
})

class Excellentfood extends Component {
  render() {
    console.log(1)
    return (
      <EfContainer>
        <div>精品好菜</div>
        <div>
          {
            this.props.list.map()
          }
        </div>
      </EfContainer>
    )
  }
}


export default connect(mapState)(Excellentfood)