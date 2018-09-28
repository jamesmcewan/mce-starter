import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 52px auto;
`;

class App extends Component {
  render() {
    return <Container>This app yo.</Container>;
  }
}

export default App;
