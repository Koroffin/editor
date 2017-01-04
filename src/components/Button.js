import React, { PropTypes, Component } from 'react'

import {DragSource} from 'react-dnd';
import ItemTypes from '../constants/ItemTypes';

export default class Button extends Component {
  onClick() {
    this.props.clickButton(this.props.button)
  }
  getStyle() {
    let res = { };
    if (this.props.button.isMouseDown) {
      res.position = 'fixed';
      res.top      = this.props.button.y - 10;
      res.left     = this.props.button.x - 10;
    }
    return res;
  }
  renderDropdown(button) {
    return <div className="dropdown">
      <div 
        id={ "toolbar-button-" + button.index } 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
        className={ "btn btn-primary btn-success" + ((button.isPressed) ? " active" : "") }
        onClick={ ()=> this.onClick(button) }
      >
        { button.icon ? <span className={ "glyphicon glyphicon-" + button.icon }></span> : button.label }
        <span className="caret"></span>
      </div>
      <ul className="dropdown-menu" aria-labelledby={ "toolbar-button-" + button.index }>
        
      </ul>
    </div>
  }
  renderButton(button) {
    return <div 
      className={ "btn btn-primary btn-success" + ((button.isPressed) ? " active" : "") }
      onClick={ ()=> this.onClick() }
      style={ this.getStyle() }
    >
      { button.icon ? <span className={ "glyphicon glyphicon-" + button.icon }></span> : button.label }
    </div>
  }
  render() {
    const { button } = this.props
    return (button.children && button.children.length) ? this.renderDropdown(button) : this.renderButton(button)
  }
}

Button.propTypes = {
  button: PropTypes.object.isRequired,
  clickButton: PropTypes.func
}