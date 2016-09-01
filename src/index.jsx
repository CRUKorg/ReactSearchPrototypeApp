import React from 'react';
import ReactDOM from 'react-dom';
import {
  SearchkitManager,
  SearchkitProvider,
  Hits,
  SearchkitComponent,
  Pagination,
  MultiMatchQuery,
  NoHits
} from 'searchkit';

/**
 * Setup vars.
 */
const sk = new SearchkitManager('https://spp.dev.cruk.org/news/')

/**
 * Import common styling.
 */
import './components/common/styles/common.scss';

/**
 * Import the components.
 */
import CRUKSearchInput from './components/input/src/Input.jsx';
import CRUKLoading from './components/loading/src/Loading.jsx';
import CRUKSearchSummary from './components/summary/src/Summary.jsx';
import CRUKSearchResult from './components/result/src/Result.jsx';
//import CRUKPaging from './components/paging/src/Paging.jsx';

/*const ULList = (props) => (
  <ul className="search-results">
    {map(hits, hit => (
      <li>
    ))}
  </ul>
)*/


/**
 * Render out the app to the "#root" element, which is the default one from the
 * boilerplate.
 */
ReactDOM.render(
  <SearchkitProvider searchkit={sk} searchOnLoad={false}>
    <div id="searchPrototypeApp" className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-push-2">

          <CRUKSearchInput
            queryBuilder={MultiMatchQuery}
            queryOptions={{
              analyzer:'cruk_standard',
              fuzziness: 'AUTO'
            }}
            queryFields={['title^1.5', 'body:value']}
            placeholder='Search...'/>

        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-push-2">

          <CRUKSearchSummary/>

          <CRUKLoading/>

          <Hits
            hitsPerPage={10}
            itemComponent={CRUKSearchResult}
            sourceFilter={['title', 'body:value', 'field_url:url', 'field_type', 'field_published']}
            mod="search-results" />

          <NoHits/>

          <Pagination
            showNumbers={true}
            pageScope={1}
            //listComponent={}
            /*translations={{
              'pagination': {
                previous: 'Prev'
              }
            }}*/ />

        </div>
      </div>
    </div>
  </SearchkitProvider>,
  document.getElementById('root')
);
