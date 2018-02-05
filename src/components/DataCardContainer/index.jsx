import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataCard from '../DataCard';
import './index.css';

class DataCardContainer extends Component {
  
  render() {
    const {
      visibleCards
    } = this.props;
    
    const cards = visibleCards.map(card => {
      return (
        <div className="data-card-flex">
          <DataCard
            key={card.id + 'id'} 
            title={card.title}
            description={card.description}
            image={card.image}
            featured={card.featured}
            heroId={card.id}
            tags={card.tags}
            />
        </div>
        );
    })

    return (
      <div className="data-card-container">
        {cards}
      </div>
    );
  }
}

export default DataCardContainer;
