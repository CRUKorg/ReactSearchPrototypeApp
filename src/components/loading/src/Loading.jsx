import React from 'react';
import {
  SearchkitComponent
} from "searchkit";

/**
 * Import the styling.
 */
import './../styles/loading.scss';

/**
 * And the component.
 */
export default class CRUKLoading extends SearchkitComponent {
  render() {
    if (!this.isLoading()) {
      return <div/>
    }

    return (<div className="search-loading">
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  </div>)
  }
}
