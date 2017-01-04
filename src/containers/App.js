import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import Elements from '../components/Elements'
import * as toolbarActions from '../actions/ToolbarActions'

class App extends Component {
  render() {
    console.log(this.props);
    const { toolbar } = this.props
    const { elements } = this.props
    const { toolbarActions } = this.props

    return <div>
      <Toolbar 
        buttons={toolbar.buttons} 
        clickButton={toolbarActions.clickButton} 
        mouseDownButton={toolbarActions.mouseDownButton} 
        mouseUpButton={toolbarActions.mouseUpButton} 
        mouseMoveButton={toolbarActions.mouseMoveButton} 
      />
      <Elements elements={elements} />
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
    toolbarActions: bindActionCreators(toolbarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)