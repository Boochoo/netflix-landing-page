import React from 'react';
import createReactClass from 'create-react-class';

// Hero Button
var HeroButton = createReactClass({
  render: function() {
    return (
      <a href="" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
})

export default HeroButton;