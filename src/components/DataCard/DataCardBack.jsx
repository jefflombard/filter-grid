import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DataCardBack.css';
import DataCardBackTag from './DataCardBackTag'

class DataCardBack extends Component {
  
  render() {
    const {
      description,
      featured,
      image,
      tags,
      heroId,
    } = this.props;
    const altTitle = `${heroId} background image reversed`;
    const tagElements = tags.map(tag=>{
      return <DataCardBackTag tag={tag} />;
    });

    return (
      <div className="data-card-back" >
        <div>
          <img className="data-card-back-img" src={image} alt={altTitle} />
        </div>
        <div className="data-card-back-title data-card-back-text">
          {heroId}
        </div>
        <div>
          {tagElements}
        </div>
        <a href="http://herodigital.com" className="data-card-back-cta">
          Learn More <div className="data-card-back-cta-chevron-right"/>
        </a>
      </div>
    );
  }
}

DataCardBack.propTypes = {
  heroId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
     tag: PropTypes.string.isRequired,
   })).isRequired,
};

export default DataCardBack;
