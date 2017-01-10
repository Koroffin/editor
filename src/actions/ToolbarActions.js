import { 
  CLICK_BUTTON, 
  DRAG_START_BUTTON,
  DRAG_END_BUTTON,
  SWITCH_BUTTON,
  DROP_ON_ELEMENTS_PANEL
} from '../constants/Toolbar'

function defaultAction(action, button) {
  return {
    type: action,
    payload: button
  }
}

export function clickButton(button) {
  return defaultAction(CLICK_BUTTON, button)
}

export function switchButton(button) {
  return defaultAction(SWITCH_BUTTON, button);
}

export function dragStart(button) {
  return defaultAction(DRAG_START_BUTTON, button);
}

export function dragEnd(button) {
  return defaultAction(DRAG_END_BUTTON, button);
}

export function dropOnElementsPanel(button, coordinates) {
  console.log(coordinates)
  return defaultAction(DROP_ON_ELEMENTS_PANEL, { button: button, coordinates: coordinates });
}