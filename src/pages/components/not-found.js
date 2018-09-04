import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import './generic-page.css';

class NotFound extends PureComponent {
  handleForward = () => {
    this.props.history.goForward();
  }
  handleBack = () => {
    this.props.history.goBack();
  }
  // handleRandom = () => this.props.history.go();
  handleRandom = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?=${random}`, { id: random });
  }

  render() {
    return (
      <div className="Page NotFound">
        <h1>Not Found</h1>
        <h3 className="SadFace">:(</h3>
        <h2>Not match</h2>
        <button onClick={this.handleForward} className="Button">Next page</button>
        <button onClick={this.handleBack} className="Button">Previous page</button>
        <button onClick={this.handleRandom} className="Button">Video Random</button>
      </div>
    );
  }
}
export default withRouter(NotFound);

