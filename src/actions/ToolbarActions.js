import { 
  CLICK_BUTTON, 
  MOUSE_DOWN_BUTTON, 
  MOUSE_UP_BUTTON, 
  MOUSE_MOVE_BUTTON 
} from '../constants/Toolbar'

export function clickButton(button) {

  return {
    type: CLICK_BUTTON,
    payload: button
  }

}

export function mouseDownButton(e, button) {

  return {
    type: MOUSE_DOWN_BUTTON,
    event: e,
    payload: button
  }

}

export function mouseUpButton(e, button) {

  return {
    type: MOUSE_UP_BUTTON,
    event: e,
    payload: button
  }

}

export function mouseMoveButton(e, button) {

  return {
    type: MOUSE_MOVE_BUTTON,
    event: e,
    payload: button
  }

}