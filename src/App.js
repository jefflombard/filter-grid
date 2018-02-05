import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataFromHero } from './actionCreators';
import DataCardContainer from './components/DataCardContainer/';
import FilterContainer from './components/FilterContainer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDataFromHero(dispatch));
  }

  render() {
    const cards = this.props.state.data.cards;
    if (cards){
      return(
        <div>
          <FilterContainer />
          <DataCardContainer visibleCards={cards}/>
        </div>
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
