import React from 'react';
import createReactClass from 'create-react-class';

// ListToggle
var ListToggle = createReactClass({
  getInitialState: function() {
    return({ toggled: false })
  },
  handleClick: function() {
    if(this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true }); 
    }
    
  },
  render: function() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
});

export default ListToggle;