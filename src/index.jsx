import React from 'react';
import ReactDOM from 'react-dom';
import {
  SearchkitManager,
  SearchkitProvider,
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
import CRUKSearchInput from './components/input/Input.jsx';
import CRUKLoading from './components/loading/Loading.jsx';
import CRUKSearchSummary from './components/summary/Summary.jsx';
import CRUKSearchHits from './components/hits/Hits.jsx'
import CRUKPagination from './components/pagination/Pagination.jsx';
import CRUKSearchNoResultsDisplay from './components/noresults/NoResults.jsx'

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

          <CRUKSearchHits
            sourceFilter={['title', 'field_url:url', 'field_type', 'field_published']}
            CRUKHighlightFields={[
              {
                'field': 'body:value',
                'number_of_fragments': 0,
                'pre_tags': ['<strong>'],
                'post_tags': ['</strong>']
              }
            ]} />

          <NoHits
            component={CRUKSearchNoResultsDisplay}
            translations={{
              "NoHits.NoResultsFound":"No movies found were found for {query}",
              "NoHits.DidYouMean":"Search for {suggestion}",
              "NoHits.SearchWithoutFilters":"Search for {query} without filters"
            }}
            suggestionsField="title"
            mod="search-failed" />

          <CRUKPagination/>

        </div>
      </div>
    </div>
  </SearchkitProvider>,
  document.getElementById('root')
);
