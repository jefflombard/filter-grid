import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataFromHero, mapStateToProps } from './actionCreators';
import DataCardContainer from './components/DataCardContainer/';
import FilterContainer from './components/FilterContainer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDataFromHero(dispatch));
  }

  render() {
    const cards = this.props.state.data.cards;
    const filters = this.props.state.filter.tags;
    
    if (cards){
      return(
        <div>
          <FilterContainer filters={filters}/>
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

export default connect(mapStateToProps)(App)
