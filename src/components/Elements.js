import React, { PropTypes, Component } from 'react'
import { DropTarget, DragDropContext } from 'react-dnd';

import css from '../less/components/elements.less';

import ElementsPlaceholder from './ElementsPlaceholder'
import ElementsItem        from './ElementsItem'

import { 
  BUTTON as ITEMTYPE_BUTTON,
  ELEMENT as ITEMTYPE_ELEMENT 
} from '../constants/ItemTypes'

const dropTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getSourceClientOffset()

    console.log(item);
    if (item.dropOnElementsPanel) {
      item.dropOnElementsPanel(monitor.getSourceClientOffset())
    }
  }
};

class Elements extends Component {
  render() {
    const { els, isButtonDragged, connectDropTarget } = this.props;
    return connectDropTarget(<div className={ isButtonDragged ? "elements elements--active" : "elements" }>
      <ElementsPlaceholder />
      {els.map(element =>
        <ElementsItem 
          key={ element.index } 
          element={ element } 
          isSelected={ this.props.activeElement === element.index }
          selectElement={ this.props.selectElement }
          dragEnd={ this.props.dragEnd }
          dropOnElementsPanel={ this.props.dropOnElementsPanel }
        />
      )}
    </div>)
  }
}

export default DropTarget([ ITEMTYPE_BUTTON, ITEMTYPE_ELEMENT ], dropTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Elements)

/*
  DOCS
*/

Elements.propTypes = {
  els: PropTypes.array.isRequired,
  isButtonDragged: PropTypes.bool.isRequired,
  selectElement: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
  dropOnElementsPanel: PropTypes.func.isRequired
}