import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
  render() {
    return (
      <div className="Page NotFound">
        <h1>Not Found</h1>
        <h3 className="SadFace">:(</h3>
        <h2>Not match</h2>
      </div>
    );
  }
}
export default NotFound;

