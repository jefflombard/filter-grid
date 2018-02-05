import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps} from '../../actionCreators';
import DataCard from '../DataCard';
import './index.css';

class DataCardContainer extends Component {
  
  render() {
    const {
      visibleCards
    } = this.props;
    
    const cards = visibleCards.map(card => {
      const activeFilters = this.props.state.filter.activeFilters;
      const localFilters = card.tags;
      const intersection = localFilters.filter(filter => activeFilters.includes(filter));
      
      if (activeFilters.length < 1){
        return (
          <div className="data-card-flex" key={card.id + 'id'}>
            <DataCard 
              title={card.title}
              description={card.description}
              image={card.image}
              featured={card.featured}
              heroId={card.id}
              tags={card.tags}
              />
          </div>
          );
      }
      
      if (intersection.length > 0){
        return (
          <div className="data-card-flex" key={card.id + 'id'}>
            <DataCard 
              title={card.title}
              description={card.description}
              image={card.image}
              featured={card.featured}
              heroId={card.id}
              tags={card.tags}
              />
          </div>
          );
      }
      
      
    })

    return (
      <div className="data-card-container">
        {cards}
      </div>
    );
  }
}

export default connect(mapStateToProps)(DataCardContainer);
