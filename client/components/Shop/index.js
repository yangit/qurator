import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { Grid, Row } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect'
import _ from 'lodash'
import { loadImages as filterAction } from 'actions/images'
import Showcase from 'components/Showcase'
import Filter from './Filter'

const selector = createStructuredSelector({
  images: state => _.toArray(state.entities.images),
})

@connect(selector, { filterImages: filterAction })
class Shop extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    filterImages: PropTypes.func,
  }

  state = {
    filter: {},
  }

  @autobind
  applyFilter(options) {
    console.log('filter: ', options)
    this.props.filterImages(options)
  }

  render() {
    const { images } = this.props

    return (
      <Grid>
        <Row>
          <div className="text-center" >
            <h3>Shop entire store</h3>
            <div>Find images you like</div>
          </div>
          <br />
          <Filter
            applyFilter={this.applyFilter}
          />
          <Showcase {...{ images } } />
        </Row>
      </Grid>
    )
  }
}

export default Shop