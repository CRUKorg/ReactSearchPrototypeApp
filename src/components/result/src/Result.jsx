import React from 'react';
import * as _ from "lodash";
import sanitizeHtml from 'sanitize-html-react';
import truncate from 'truncate';

export function crukPlainText(str) {

}

/**
 * Export our result component.
 */
export default class CRUKSearchResult extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Do the work to sort out the data then pass to state.
     */
    let result = props.result._source
    let sO = {allowedTags: [], allowedAttributes: []};

    this.state = {
      url: result['field_url:url'],
      title: truncate(sanitizeHtml(result['field_type'], sO), 80),
      description: truncate(sanitizeHtml(result['body:value'], sO), 160),
      type: sanitizeHtml(result['field_type'], sO),
      published: null
    };
  }

  render() {
    return (
      <li className="search-result">
        <div className="media-body">
          <h4 className="search-result__title">
            <a href="{this.state.url}">{this.state.title}</a>
          </h4>
          <ul className="search-result__meta">
            <li><strong>{this.state.type}</strong></li>
            <li><strong>Published:</strong> {this.state.published}</li>
          </ul>
          <p className="search-result__excerpt">{this.state.description}</p>
        </div>
      </li>
    )
  }
}
