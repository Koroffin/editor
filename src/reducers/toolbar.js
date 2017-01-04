import { 
  CLICK_BUTTON, 
  MOUSE_DOWN_BUTTON, 
  MOUSE_UP_BUTTON, 
  MOUSE_MOVE_BUTTON 
} from '../constants/Toolbar'

import { H1, H2, H3, H4, TEXT } from '../constants/Elements'

const initialState = {
  buttons: [{
    icon: 'header',
    index: 0,
    type: H1,
    isMouseDown: false,
    children: [{
      icon: 'header',
      index: 0,
      type: H1,
      isPressed: false
    }, {
      icon: 'header',
      index: 0,
      type: H2,
      isPressed: false
    }, {
      icon: 'header',
      index: 0,
      type: H3,
      isPressed: false
    }, {
      icon: 'header',
      index: 0,
      type: H4,
      isPressed: false
    }]
  }, {
    index: 1,
    isMouseDown: false,
    isPressed: false,
    type: TEXT,
    label: 'T'
  }]
}

function buttons (state = [], action) {
  switch (action.type) {
    case CLICK_BUTTON:
      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, state[action.payload.index], {
          isPressed: !action.payload.isPressed
        }),
        ...state.slice(action.payload.index + 1)
      ];
    case MOUSE_DOWN_BUTTON:
      action.event.preventDefault();
      action.event.stopPropagation();
      console.log(action.event.pageX, action.event.pageY);
      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, state[action.payload.index], {
          isMouseDown: true,
          x: action.event.pageX,
          y: action.event.pageY
        }),
        ...state.slice(action.payload.index + 1)
      ];
    case MOUSE_UP_BUTTON:
      action.event.preventDefault();
      action.event.stopPropagation();
      console.log(action.event.pageX, action.event.pageY);
      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, state[action.payload.index], {
          isMouseDown: false
        }),
        ...state.slice(action.payload.index + 1)
      ];
    case MOUSE_MOVE_BUTTON:
      console.log(action.event.pageX, action.event.pageY);
      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, state[action.payload.index], {
          x: action.event.pageX,
          y: action.event.pageY
        }),
        ...state.slice(action.payload.index + 1)
      ];
    default:
      return state;
  }
}

export default function toolbar(state = initialState, action) {

  return {
    buttons: buttons(state.buttons, action)
  }

}