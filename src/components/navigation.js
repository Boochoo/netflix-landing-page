import React from 'react';
import createReactClass from 'create-react-class';

// Navigation
var Navigation = createReactClass({
  render: function() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
});

export default Navigation;