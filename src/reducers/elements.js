import { 
  CLICK_BUTTON as TOOLBAR_CLICK_BUTTON,
  DRAG_START_BUTTON as TOOLBAR_DRAG_START_BUTTON,
  DRAG_END_BUTTON as TOOLBAR_DRAG_END_BUTTON
} from '../constants/Toolbar'

import {
  SELECT_ELEMENT, 
  UNSELECT_ALL_ELEMENTS
} from '../constants/Elements'

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