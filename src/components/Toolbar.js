import React, { PropTypes, Component } from 'react'

import Button from './Button'

export default class Toolbar extends Component {
  render() {
    const props = this.props
    return <div>
      {this.props.buttons.map(button =>
        <Button 
          button={button} 
          {...props}
          key={ button.index } 
        />
      )}
    </div>
  }
}

Toolbar.propTypes = {
  buttons: PropTypes.array.isRequired,
  clickButton: PropTypes.func.isRequired,
  mouseDownButton: PropTypes.func.isRequired,
  mouseUpButton: PropTypes.func.isRequired,
  mouseMoveButton: PropTypes.func.isRequired
}