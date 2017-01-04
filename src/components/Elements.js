import React, { PropTypes, Component } from 'react'

import { H1, H2, H3, H4, TEXT } from '../constants/Elements'

export default class Elements extends Component {
  onButtonClick(button) {
    this.props.clickButton(button)
  }
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
    const { elements } = this.props
    return <div>
      {elements.map(element =>
        <div className="form-group" key={element.index}>
          <h3>{ this.getLabel(element.type) }</h3>
        </div>
      )}
    </div>
  }
}

Elements.propTypes = {
  elements: PropTypes.array.isRequired
}