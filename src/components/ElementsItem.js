import React, { PropTypes, Component } from 'react'

import { H1, H2, H3, H4, TEXT } from '../constants/Elements'

export default class ElementsItem extends Component {
  getLabel(type) {
    switch (type) {
      case H1:
        return 'Заголовок';
      case TEXT:
        return 'Текст';
      default:
        return 'Нечто';
    }
  }
  render() {
    const { style, ...rest } = this.props;
    return <div className="elements_item" style={ style }>
      <div className="form-group">
        <h3>{ this.getLabel(rest.type) }</h3>
      </div>
    </div>
  }
}

ElementsItem.propTypes = {
  style: PropTypes.object.isRequired
}