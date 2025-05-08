import React, { PureComponent } from 'react';

class UserComponent extends PureComponent {
  render() {
    return (
      <div>
        <h3>User Component</h3>

        <button onClick={() => this.props.passToParent("Updated name", "Updated Address")}>
          Pass User Info to Parent
        </button>

        <p>Received Props from Parent:</p>
        <p>Name: {this.props.userName}</p>
        <p>Address: {this.props.userAddress}</p>
      </div>
    );
  }
}

export default UserComponent;
