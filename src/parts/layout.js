import React from 'react';
import {Link} from 'react-router';
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/test">Test</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}