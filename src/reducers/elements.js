import { 
  CLICK_BUTTON as TOOLBAR_CLICK_BUTTON,
  DRAG_START_BUTTON as TOOLBAR_DRAG_START_BUTTON,
  DRAG_END_BUTTON as TOOLBAR_DRAG_END_BUTTON,
  DROP_ON_ELEMENTS_PANEL as TOOLBAR_DROP_ON_ELEMENTS_PANEL
} from '../constants/Toolbar'

import {
  SELECT_ELEMENT, 
  UNSELECT_ALL_ELEMENTS,
  DRAG_END_ELEMENT,
  DROP_ON_ELEMENTS_PANEL
} from '../constants/Elements'

import { findIndex } from 'lodash'

const initialState = {
  isButtonDragged: false,
  activeElement: -1,
  els: [ ]
};

function els (state = [], action) {
  switch (action.type) {
    case TOOLBAR_CLICK_BUTTON:
      return [
        ...state,
        Object.assign({}, {
          type: action.payload.type,
          index: new Date().valueOf(),
          style: {
            top: '150px',
            left: '150px',
            height: '100px',
            width: '150px'
          },
          value: ''
        })
      ];
    case TOOLBAR_DROP_ON_ELEMENTS_PANEL:
      return [
        ...state,
        {
          type: action.payload.button.type,
          index: new Date().valueOf(),
          style: {
            top: (action.payload.coordinates.y - 35) + 'px',
            left: action.payload.coordinates.x + 'px',
            height: '100px',
            width: '150px'
          },
          value: ''
        }
      ];
    case DROP_ON_ELEMENTS_PANEL:
      const index = findIndex(state, { index: action.payload.element.index });
      console.log(index);
      return [
        ...state.slice(0, index),
        Object.assign({ }, action.payload.element, {
          style: {
            top: (action.payload.coordinates.y - 35) + 'px',
            left: action.payload.coordinates.x + 'px', 
            height: action.payload.element.style.height,
            width: action.payload.element.style.width
          }
        }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

function activeElement (state=-1, action) {
  switch (action.type) {
    case SELECT_ELEMENT:
      console.log(action.payload);
      return action.payload.index;
    default:
      return state;
  }
}

function isButtonDragged (state=false, action) {
  switch (action.type) {
    case TOOLBAR_DRAG_START_BUTTON:
      return true;
    case TOOLBAR_DRAG_END_BUTTON:
      return false;
    default:
      return state;
  }  
}

export default function toolbar(state = initialState, action) {

  return {
    isButtonDragged: isButtonDragged(state.isButtonDragged, action),
    els: els(state.els, action),
    activeElement: activeElement(state.activeElement, action)
  }

}