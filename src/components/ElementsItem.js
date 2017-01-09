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
    const { selectElement, activeElement, element } = this.props;
    return <div 
      className={ activeElement === element.index ? "elements_item elements_item--active" : "elements_item" } 
      style={ element.style }
      onClick={ ()=> selectElement(element) }
    >
      <div className="form-group">
        <h3>{ this.getLabel(element.type) }</h3>
      </div>
    </div>
  }
}

/*
  DOCS
*/

ElementsItem.propTypes = {
  element: PropTypes.object.isRequired,
  selectElement: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired
}