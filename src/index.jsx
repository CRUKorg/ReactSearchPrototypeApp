import React from 'react';
import ReactDOM from 'react-dom';
import {
  SearchkitManager,
  SearchkitProvider,
  MultiMatchQuery
} from 'searchkit';

/**
 * Import cruk-searchkit components ans sass.
 */
import {
  CRUKSearchInput,
  CRUKSearch,
  CRUKSearchGTM
} from 'cruk-searchkit';

import './public/scss/styles.scss';

/**
 * Setup vars.
 */

const CRUKSearchConfig = typeof Drupal !== 'undefined' ? Drupal.settings.cruk_searchkit : {};

// --------------------------------------------------------
// When using this App in production please delete the below 2 lines.
CRUKSearchConfig.gtmId = 'GTM-H4B7';
CRUKSearchConfig.hostUrl = 'https://spp.dev.cruk.org/events__local_dipan/';
// --------------------------------------------------------

const sk = new SearchkitManager(CRUKSearchConfig.hostUrl);
const gtmId = CRUKSearchConfig.gtmId;


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
              analyzer: 'cruk_standard'
            }}
            queryFields={['title', 'body:value^1.5']}
            placeholder="Search..."
          />

        </div>
      </div>

      <CRUKSearch />

      <CRUKSearchGTM gtmId={gtmId} />
    </div>
  </SearchkitProvider>,
  document.getElementById('root')
);
