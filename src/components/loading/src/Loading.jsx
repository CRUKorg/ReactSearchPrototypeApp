import React from 'react';
import {
  SearchkitComponent,
  InitialLoader
} from "searchkit";

/**
 * Import the styling.
 */
import './../styles/loading.scss';

/**
 * Define the callback.
 */
const InitialLoaderComponent = (props) => (
  <div className="search-loading">
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  </div>
)

/**
 * And the component.
 */
export default class CRUKLoading extends SearchkitComponent {
  render() {
    return <InitialLoader component={InitialLoaderComponent}/>
  }
}
