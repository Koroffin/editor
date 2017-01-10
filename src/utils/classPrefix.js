export default function (baseClass, state) {
  let postfix = '';

  if (state.isEmpty) {
    postfix += ' ' + baseClass + '--empty'
  }
  if (state.isActive) {
    postfix += ' ' + baseClass + '--active'
  }

  return baseClass + postfix;
}