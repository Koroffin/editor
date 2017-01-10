import { 
  SELECT_ELEMENT,
  UNSELECT_ALL_ELEMENTS,
  DRAG_START_ELEMENT,
  DRAG_END_ELEMENT,
  DROP_ON_ELEMENTS_PANEL
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

export function dragEnd(element, props) {
  console.log(props);
  return defaultAction(DRAG_END_ELEMENT, { element: element, props: props });
}

export function dropOnElementsPanel(element, coordinates) {
  return defaultAction(DROP_ON_ELEMENTS_PANEL, { element: element, coordinates: coordinates });
}