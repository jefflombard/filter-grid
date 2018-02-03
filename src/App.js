import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataFromHero } from './actionCreators';

class App extends Component {
  
  componentDidMount(){
    const dispatch = this.props.dispatch;
    dispatch(loadDataFromHero(dispatch));    
  }
  
  render() {
    return (
      <div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App)
