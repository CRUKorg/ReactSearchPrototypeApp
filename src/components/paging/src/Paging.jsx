import React from 'react';

/**
 * Export our result component.
 */
export default class CRUKPaging extends React.Component {
  constructor(props) {
    super(props);
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
