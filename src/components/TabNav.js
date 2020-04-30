import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { handleActiveTab } from '../actions/shared'
import { connect } from 'react-redux'

class TabNav extends Component {
  constructor(){
    super();
    this.state = {
      active: 'unanswered'
    }
  }
  setActive = (e) => {
    const tabId = e.target.value;
    this.setState({
      active: tabId
    })
    this.props.dispatch(handleActiveTab(tabId))
  }
    render() {
        return (
            <div className="d-flex flex-column">
            <ButtonGroup size="lg">
              <Button 
                variant="outline-primary" 
                onClick={this.setActive} 
                active={this.state.active === 'unanswered'} 
                value="unanswered">Unanswered Questions</Button>
              <Button 
                variant="outline-primary" 
                onClick={this.setActive} 
                active={this.state.active === 'answered'} 
                value="answered">Answered Questions</Button>
            </ButtonGroup>
          </div>
        )
    }
}
function mapStateToProps ({ activeTab }) {
  return {
    activeTab
  }
}
export default connect(mapStateToProps)(TabNav)