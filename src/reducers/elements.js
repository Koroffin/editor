import { CLICK_BUTTON as TOOLBAR_CLICK_BUTTON } from '../constants/Toolbar'

const initialState = [ ];

export default function elements (state = [], action) {
  switch (action.type) {
    case TOOLBAR_CLICK_BUTTON:
      return [
        ...state,
        Object.assign({}, {
          type: action.payload.type,
          index: new Date().valueOf(),
          value: ''
        })
      ];
    default:
      return state;
  }
}