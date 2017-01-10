import React, { PropTypes, Component } from 'react'

import { BUTTON as ITEMTYPE_BUTTON } from '../constants/ItemTypes'

import DraggableDivFn  from './DraggableDiv'
const DraggableDiv = DraggableDivFn(ITEMTYPE_BUTTON)

import SplitButton   from 'react-bootstrap/lib/SplitButton'
import MenuItem      from 'react-bootstrap/lib/MenuItem'
import Button        from 'react-bootstrap/lib/Button'
import ButtonGroup   from 'react-bootstrap/lib/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'

export default class Toolbar extends Component {
  getButtonProps(button) {
    return {
      onClick: ()=> {
        this.props.clickButton(button)
      },
      onSelect: (index)=> {
        this.props.switchButton(button.children[index]);
      },
      ...button.props
    }
  }
  render() {
    const props  = this.props
    return <ButtonToolbar>
      <ButtonGroup>
        {this.props.buttons.map(button =>
          <DraggableDiv 
            key={ button.index }
            componentProps={ this.getButtonProps(button) }
            component={ (button.children && button.children.length) ? SplitButton : Button }
            dragStart={()=> this.props.dragStart(button)}
            dragEnd={()=> this.props.dragEnd(button)}
            dropOnElementsPanel={(coordinates)=> this.props.dropOnElementsPanel(button, coordinates)}
          >
            {
              (button.children && button.children.length) ? (
                button.children.map((child, i)=>
                  <MenuItem key={ i } eventKey={ i }>{ child.props.title }</MenuItem>
                )
              ) : (
                button.props.title
              )
            }
          </DraggableDiv>
        )}
      </ButtonGroup>
    </ButtonToolbar>
  }
}

/*
  DOCS
*/

Toolbar.propTypes = {
  buttons: PropTypes.array.isRequired,
  clickButton: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  switchButton: PropTypes.func.isRequired,
  dropOnElementsPanel: PropTypes.func.isRequired
}