import React, { PureComponent } from 'react';
import UserComponent from './UserComponent';

class StudentComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Tejas',
      userAddress: 'New York',
      prevStateSnapshot: null
    };
  }

  handleUserDataFromChild = (userName, userAddress) => {
    this.setState({ userName, userAddress });
  };

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate =
      nextState.userName !== this.state.userName ||
      nextState.userAddress !== this.state.userAddress;
    console.log('[StudentComponent] shouldComponentUpdate:', shouldUpdate);
    return shouldUpdate;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[StudentComponent] getSnapshotBeforeUpdate:', prevState);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[StudentComponent] componentDidUpdate');
    if (snapshot) {
      this.setState({ prevStateSnapshot: snapshot });
    }
  }

  componentWillUnmount() {
    console.log('[StudentComponent] componentWillUnmount');
  }

  render() {
    const { userName, userAddress } = this.state;

    return (
      <div>
        <h2>Student Component</h2>
        <p>Name: {userName}</p>
        <p>Address: {userAddress}</p>
        <UserComponent userName={userName} userAddress={userAddress} passToParent={this.handleUserDataFromChild} />
      </div>
    );
  }
}

export default StudentComponent;
