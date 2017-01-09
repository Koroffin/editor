import { 
  CLICK_BUTTON, 
  DRAG_START_BUTTON,
  DRAG_END_BUTTON,
  SWITCH_BUTTON
} from '../constants/Toolbar'

import { H1, H2, H3, H4, TEXT } from '../constants/Elements'

const initialState = {
  buttons: [{
    index: 0,
    type: H1,
    props: {
      bsStyle: 'success',
      title: 'H1',
      id: 'TOOLBAR_H1_BUTTON'
    },
    children: [{
      index: 0,
      type: H1,
      props: {
        bsStyle: 'success',
        title: 'H1',
        id: 'TOOLBAR_H1_BUTTON'
      }
    }, {
      index: 0,
      type: H2,
      props: {
        bsStyle: 'success',
        title: 'H2',
        id: 'TOOLBAR_H2_BUTTON'
      }
    }, {
      index: 0,
      type: H3,
      props: {
        bsStyle: 'success',
        title: 'H3',
        id: 'TOOLBAR_H3_BUTTON'
      }
    }]
  }, {
    index: 1,
    type: TEXT,
    props: {
      bsStyle: 'success',
      title: 'T',
      id: 'TOOLBAR_T_BUTTON'
    },
  }]
}

function buttons (state = [], action) {
  switch (action.type) {
    case SWITCH_BUTTON:
      return [
        ...state.slice(0, action.payload.index),
        Object.assign({
          children: state[action.payload.index].children
        }, action.payload),
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