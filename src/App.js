import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
import NamesContainer from './containers/NamesContainer';
import PostContainer from './containers/PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <hr />
        <h1>이름 목록</h1>
        <NamesContainer />
        <hr />
        <PostContainer />
      </div>
    );
  }
}

export default App;
