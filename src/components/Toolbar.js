import React, { PropTypes, Component } from 'react'

import Button from './Button'
import DraggableDiv from './DraggableDiv'

export default class Toolbar extends Component {
  render() {
    const props = this.props
    return <div className="row">
      {this.props.buttons.map(button =>
        <div className="col-md-1" key={ button.index }>
          <DraggableDiv key={ button.index }>
            <Button 
              button={button} 
              {...props}
            />
          </DraggableDiv>
        </div>
      )}
    </div>
  }
}

Toolbar.propTypes = {
  buttons: PropTypes.array.isRequired,
  clickButton: PropTypes.func.isRequired
}