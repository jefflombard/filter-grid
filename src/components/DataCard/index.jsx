import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataCardFront from './DataCardFront';
import DataCardBack from './DataCardBack';

import './index.css';

class DataCard extends Component {
  constructor(props){
    super(props);
    this.state = {"flipped": false};
    this.handleFlip = this.handleFlip.bind(this);
  }
  
  handleFlip(){
    this.setState({"flipped":!this.state.flipped});
  }
  
  render() {
    const {
      title,
      description,
      featured,
      image,
      tags,
      cta,
      heroId,
    } = this.props;

    return (
      <div className="data-card">
        <div className="flip-container" onClick={this.handleFlip}>
          <div className={this.state.flipped ? 'flipper flipped' : 'flipper'}>
            <div className="front">
              <DataCardFront
                title={title}
                description={description}
                featured={featured}
                image={image}
                />
            </div>
            <div className="back">
              <DataCardBack
                heroId={heroId}
                tags={tags}
                cta={cta}
                heroId={heroId}
                image={image}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
  heroId: PropTypes.string.isRequired,
};

export default DataCard;
