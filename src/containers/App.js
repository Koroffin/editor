import React, { Component } from 'react'
import {compose, bindActionCreators} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux'

import Toolbar from '../components/Toolbar'
import Elements from '../components/Elements'

import * as toolbarActions from '../actions/ToolbarActions'
import * as elementsActions from '../actions/ElementsActions'

class App extends Component {
  render() {
    const { toolbar } = this.props
    const { elements } = this.props
    const { toolbarActions, elementsActions } = this.props

    return <div>
      <Toolbar 
        buttons={toolbar.buttons} 
        {... toolbarActions}
      />
      <Elements {... elements} {... elementsActions } />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    toolbar: state.toolbar,
    elements: state.elements
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toolbarActions: bindActionCreators(toolbarActions, dispatch),
    elementsActions: bindActionCreators(elementsActions, dispatch)
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispatchToProps)
)(App)