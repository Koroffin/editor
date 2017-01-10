import React, { PropTypes, Component } from 'react'

import { H1, H2, H3, H4, TEXT } from '../constants/Elements'

import { ELEMENT as ITEMTYPE_ELEMENT } from '../constants/ItemTypes'

import DraggableDivFn from './DraggableDiv'
const DraggableDiv = DraggableDivFn(ITEMTYPE_ELEMENT)

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
  getComponentProps() {
    const { isSelected, element } = this.props;
    return {
      className: isSelected ? "elements_item elements_item--active" : "elements_item",
      style: element.style,
      onClick: ()=> {
        this.props.selectElement(element)
      }
    }
  }
  render() {
    const { element } = this.props;
    return <DraggableDiv
      componentProps={ this.getComponentProps() }
      dragStart={ ()=> this.props.selectElement(element) }
      dragEnd={ (props)=> this.props.dragEnd(element, props) }
      dropOnElementsPanel={(coordinates)=> this.props.dropOnElementsPanel(element, coordinates)}
    >
      <div className="form-group">
        <h3>{ this.getLabel(element.type) }</h3>
      </div>
    </DraggableDiv>
  }
}

/*
  DOCS
*/

ElementsItem.propTypes = {
  element: PropTypes.object.isRequired,
  selectElement: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  dragEnd: PropTypes.func.isRequired,
  dropOnElementsPanel: PropTypes.func.isRequired
}