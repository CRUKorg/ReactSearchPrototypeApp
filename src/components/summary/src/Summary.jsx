import React from 'react';
import {
  HitsStats,
  SearchkitComponent
} from "searchkit";

/**
 * Import styling.
 */
import './../styles/summary.scss';

/**
 * Define the custom callback which we use in hitstats.
 */
const customHitStats = (props) => {
  const {resultsFoundLabel, bemBlocks, hitsCount, timeTaken} = props

  /**
   * Don't output a summary if there aren't any results.
   */
  if (hitsCount < 1) {
    return null;
  }

  return (
    <div className="search-summary alert" role="alert">
      <div className={bemBlocks.container("info")} data-qa="info">
        Found {hitsCount} results!
      </div>
    </div>
  )
}

/**
 * Define the component.
 */
export default class CRUKSearchSummary extends SearchkitComponent {
  render() {
    return <HitsStats component={customHitStats} />
  }
}
