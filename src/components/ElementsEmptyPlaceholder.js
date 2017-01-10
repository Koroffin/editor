import React, { Component } from 'react'

export default class ElementsEmptyPlaceholder extends Component {
  render() {
    return <div className="elements--empty_placeholder_wrapper">
      <div className="elements--empty_placeholder text-center">
        <h1>Пока что ничего нет</h1>
        <p>перетащите в эту область элемент из верхней панели</p>
      </div>
    </div>
  }
}