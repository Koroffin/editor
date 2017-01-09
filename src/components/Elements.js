import React, { PropTypes, Component } from 'react'

import css from '../less/components/elements.less';

import ElementsPlaceholder from './ElementsPlaceholder'
import ElementsItem        from './ElementsItem'

export default class Elements extends Component {
  render() {
    const { els, isButtonDragged } = this.props;
    return <div className={ isButtonDragged ? "elements elements--active" : "elements" }>
      <ElementsPlaceholder />
      {els.map(element =>
        <ElementsItem 
          key={ element.index } 
          element={ element } 
          activeElement={ this.props.activeElement }
          selectElement={ this.props.selectElement }
        />
      )}
    </div>
  }
}

/*
  DOCS
*/

Elements.propTypes = {
  els: PropTypes.array.isRequired,
  isButtonDragged: PropTypes.bool.isRequired,
  selectElement: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired
}