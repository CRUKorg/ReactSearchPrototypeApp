import React from 'react';
import ReactDOM from 'react-dom';
import {
  SearchkitManager,
  SearchkitProvider,
  MultiMatchQuery
} from 'searchkit';

/**
 * Setup vars.
 */
const sk = new SearchkitManager('https://spp.dev.cruk.org/news/')
const gtmId = 'GTM-H4B7';

/**
 * Import common styling.
 */
import './components/common/styles/common.scss';

/**
 * Import the components.
 */
import CRUKSearchInput from './components/input/Input.jsx';
import CRUKSearch from './components/search/Search.jsx';
import CRUKSearchGTM from './components/gtm/GTM.jsx';

/**
 * Render out the app to the "#root" element, which is the default one from the
 * boilerplate.
 */
ReactDOM.render(
  <SearchkitProvider searchkit={sk}>
    <div id="searchPrototypeApp" className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-push-2">

          <CRUKSearchInput
            queryBuilder={MultiMatchQuery}
            queryOptions={{
              analyzer:'cruk_standard'
            }}
            queryFields={['title', 'body:value^1.5']}
            placeholder='Search...'/>

        </div>
      </div>

      <CRUKSearch/>

      <CRUKSearchGTM gtmId={gtmId} />
    </div>
  </SearchkitProvider>,
  document.getElementById('root')
);
