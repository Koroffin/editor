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
        <ElementsItem key={ element.index } {...element} />
      )}
    </div>
  }
}

Elements.propTypes = {
  els: PropTypes.array.isRequired,
  isButtonDragged: PropTypes.bool.isRequired
}