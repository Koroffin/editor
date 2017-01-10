import React, { PropTypes, Component } from 'react'

export default class ElementsItem extends Component {
  static defaultStyle = {
    'font-size': '12px'
  }
  render() {
    const { elementStyle, value } = this.props;
    return <span style={ Object.assign(elementStyle, this.defaultStyle) }>{ value }</span>
  }
}

/*
  DOCS
*/

ElementsItem.propTypes = {
  elementStyle: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
}