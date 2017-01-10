import React, { PropTypes, Component } from 'react'
import { H1, H2, H3, H4, TEXT } from '../constants/Elements'
import { ELEMENT as ITEMTYPE_ELEMENT } from '../constants/ItemTypes'
import DraggableDivFn from './DraggableDiv'
import ElementsItemText from './ElementsItemText'
import classPrefix from '../utils/classPrefix'
import { findDOMNode } from 'react-dom';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/themes/base/resizable.css';
import 'jquery-ui-rotatable';

const DraggableDiv = DraggableDivFn(ITEMTYPE_ELEMENT)

export default class ElementsItem extends Component {
  getElement(type) {
    switch (type) {
      // case H1:
      //   return 'Заголовок';
      case TEXT:
        return ElementsItemText;
      default:
        return null;
    }
  }
  getComponentProps() {
    const { isSelected, element } = this.props;
    return {
      className: classPrefix('elements_item', { isActive: isSelected }),
      style: element.style,
      onClick: ()=> {
        this.props.selectElement(element)
      }
    }
  }
  componentDidMount() {
    const el = findDOMNode(this);
    $(el).rotatable().resizable();
  }
  render() {
    const { element } = this.props;
    const El = this.getElement(element.type);
    return <DraggableDiv
      componentProps={ this.getComponentProps() }
      dragStart={ ()=> this.props.selectElement(element) }
      dragEnd={ (props)=> this.props.dragEnd(element, props) }
      dropOnElementsPanel={(coordinates)=> this.props.dropOnElementsPanel(element, coordinates)}
    >
      <El {...element} />
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