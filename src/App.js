import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataFromHero } from './actionCreators';
import DataCard from './components/DataCard/';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDataFromHero(dispatch));
  }

  render() {
    
    // Remove this
    let listTest = ['UX','Consulting'];
    
    return (
      <div>
        <DataCard
          heroId="Salesforce"
          tags={listTest}
          image="http://herodigital.com/wp-content/uploads/2015/12/salesforce-featured.png"
          title="Re-Imagining the Digital CX for Nerium International"
          description="As Nerium International repositioned it's brand."
          featured={false}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App)
