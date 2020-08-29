import React from 'react';

class CardSkeleton extends React.Component {
  xFunction() {
    const x = new Array(10);
    return x;
  }
  render() {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }
}

export default CardSkeleton;
