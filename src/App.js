import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataFromHero } from './actionCreators';
import DataCardContainer from './components/DataCardContainer/';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDataFromHero(dispatch));
  }

  render() {
    const cards = this.props.state.data.cards;
    if (cards){
      return(
        <DataCardContainer visibleCards={cards}/>
      )
    }
    
    return (
      <div>
        Loading
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App)
