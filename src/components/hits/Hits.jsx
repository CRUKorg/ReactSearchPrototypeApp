import React from 'react';
import {
  Hits
} from 'searchkit';

/**
 * Import our custom highlight accessor which won't mulch the array of objects.
 */
import CRUKHighlightAccessor from './CRUKHighlightAccessor.jsx'
/**
 * And the rest.
 */
import CRUKHitsList from './../hitsList/HitsList.jsx';
import CRUKSearchResult from './../result/Result.jsx';

/**
 * Define our class.
 */
class CRUKSearchHits extends Hits {
  constructor(props) {
    super();
  }

  componentWillMount() {
    super.componentWillMount()

    if (this.props.CRUKHighlightFields) {
      this.searchkit.addAccessor(
        new CRUKHighlightAccessor(this.props.CRUKHighlightFields))
    }
  }
}

/**
 * Alter the default props.
 */
CRUKSearchHits.defaultProps['mod'] = 'search-results';
CRUKSearchHits.defaultProps['hitsPerPage'] = 10;
CRUKSearchHits.defaultProps['itemComponent'] = CRUKSearchResult;
CRUKSearchHits.defaultProps['listComponent'] = CRUKHitsList;

/**
 * Add our new highlightfields prop to sidestep the issue of overriding an
 * existing prop which for some reason is being tricky.
 */
CRUKSearchHits.propTypes['CRUKHighlightFields'] = React.PropTypes.arrayOf(
  React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])
)

export default CRUKSearchHits
