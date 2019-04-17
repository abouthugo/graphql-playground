import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import SongList from './components/SongList';

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Song List for Friday:</h1>
          <SongList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
