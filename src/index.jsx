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
  CRUKSearchGTM,
  CRUKDateRange,
  CRUKGeoSuggest
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
 * Override the render method on the SearchBox component to alter the markup.
 */
export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bootstrapApp: false };
    this.onClick = this.onClick.bind(this);
    this.activateApp = this.activateApp.bind(this);
    this.deactivateApp = this.deactivateApp.bind(this);
  }

  componentWillMount() {
    window.XSSSearchCRUK.activate = (flag) => {
      if (flag) {
        this.activateApp();
      } else {
        this.deactivateApp();
      }
    };
  }

  onClick() {
    this.deactivateApp();
  }

  activateApp() {
    this.setState({ bootstrapApp: true });
  }

  deactivateApp() {
    this.setState({ bootstrapApp: false });
    window.XSSSearchCRUK.unwrapAll();
  }

  render() {
    const { bootstrapApp } = this.state;

    return (
      <SearchkitProvider searchkit={sk}>
        <div id="searchPrototypeApp" className={!bootstrapApp ? 'container hidden' : 'container opened'}>
          <h2><button onClick={this.onClick}>&times;</button></h2>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-push-2">

              <CRUKSearchInput
                id="xss-q"
                queryBuilder={MultiMatchQuery}
                queryOptions={{
                  analyzer: 'cruk_standard'
                }}
                queryFields={['title', 'body:value^1.5']}
                placeholder="Search..."
              />
              <CRUKGeoSuggest
                id="xss-location"
                field="location"
              />
              <CRUKDateRange
                id="xss-darange"
                field="date_start"
              />
            </div>
          </div>

          <CRUKSearch />

          <CRUKSearchGTM gtmId={gtmId} />
        </div>
      </SearchkitProvider>
    );
  }
}

ReactDOM.render(<MainApp />, document.querySelector('#cruk-xss-search-wrapper'));
