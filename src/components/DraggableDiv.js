import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import { findDOMNode } from 'react-dom';

class DraggableDiv extends Component {
  render() {
    const { connectDragSource, children, componentProps } = this.props;
    const C = this.props.component;
    if (C) {
      return <C
        {...componentProps}
        ref={instance => connectDragSource(findDOMNode(instance))}
      >
        { children }
      </C>
    } else {
      return <div
        {...componentProps}
        ref={instance => connectDragSource(findDOMNode(instance))}
      >
        { children }
      </div>
    }
  }
}

const draggableDivSource = {
  beginDrag(props) {
    if (props.dragStart) {
      props.dragStart();
    }
    return props;
  },
  endDrag(props) {
    if (props.dragEnd) {
      props.dragEnd();
    }
    return {};    
  }
};

export default (type)=> {
  return DragSource(type, draggableDivSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource()
  }))(DraggableDiv);
}

/*
  DOCS
*/

DraggableDiv.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object,
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func
}