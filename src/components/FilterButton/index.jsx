import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, filter } from '../../actionCreators';
import './index.css';

class FilterButton extends Component {
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const dispatch = this.props.dispatch;
    filter(dispatch,this.props.tag);
  }
  
  render() {
    const activeFilters = this.props.state.filter.activeFilters;
    const selected = activeFilters.includes(this.props.tag);

    return (
      <div>
        <button
          className={selected ? "filter-button selected" : "filter-button"}
          onClick={this.handleClick}
          >
          {this.props.tag}</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FilterButton);
