import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton';

import './index.css';

class FilterContainer extends Component {
  
  render() {
    const filters = this.props.filters;
    const buttons = filters.map(filter => {
      return (
        <FilterButton key={filter + 'key'} tag={filter} />
      );
    });
    
    return (
      <div className="filter-container">
        {buttons}
      </div>
    );
  }
}

export default FilterContainer;
