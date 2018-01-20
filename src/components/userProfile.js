import React from 'react';
import createReactClass from 'create-react-class';
import Logo from '../logo.svg';

// User Profile
var UserProfile = createReactClass({
  render: function() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Jack Oliver</div>
          <div className="image"><img src={Logo} alt="profile" /></div>
        </div>
      </div>
    );
  }
});


export default UserProfile;