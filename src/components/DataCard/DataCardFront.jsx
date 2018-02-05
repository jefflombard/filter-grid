import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DataCardFront.css';

class DataCardFront extends Component {
  render() {
    const {
      title,
      description,
      featured,
      image,
    } = this.props;
    const altTitle = `${title} background image`;
    
    if (featured){
      return (
        <div className="data-card-front">
          <div>
            <div className="data-card-front-featured">Featured</div>
            <img src={image} alt={altTitle} />
          </div>
          <div className="data-card-front-title data-card-front-text">
            {title}
          </div>
          <div className="data-card-front-description data-card-front-text">
            {description}
          </div>
        </div>
      );
    }

    return (
      <div className="data-card-front">
        <div>
          <img src={image} alt={altTitle} />
        </div>
        <div className="data-card-front-title data-card-front-text">
          {title}
        </div>
        <div className="data-card-front-description data-card-front-text">
          {description}
        </div>
      </div>
    );
  }
}

DataCardFront.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
};

export default DataCardFront;
