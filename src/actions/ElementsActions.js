import { 
  SELECT_ELEMENT,
  UNSELECT_ALL_ELEMENTS
} from '../constants/Elements'

function defaultAction(action, element) {
  return {
    type: action,
    payload: element
  }
}

export function selectElement(element) {
  return defaultAction(SELECT_ELEMENT, element)
}

export function clearSelection(element) {
  return defaultAction(UNSELECT_ALL_ELEMENTS, element);
}