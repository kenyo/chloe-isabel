import React from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'
import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import Ant from './Ant.jsx'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://antserver-blocjgjbpw.now.sh/graphql' }),
  cache: new InMemoryCache(),
})

const query = gql`{
  ants {
    name
    length
    color
    weight
  }
}
`

function wrappedFunction() {

  return new Promise((resolve, reject) => generateAntWinLikelihoodCalculator()(resolve))

  function generateAntWinLikelihoodCalculator() {
    var delay = 7000 + Math.random() * 7000;
    var likelihoodOfAntWinning = Math.random();

    return function(callback) {
      setTimeout(function() {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

}

// container (root) component
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ants: [],
      loading: false,
      iconLoading: false,
    }
  }

  generateOdds(ants) {
    return () => {
      // turn loading spinner on
      this.setState({loading: true})
      return Promise.all(this.state.ants.map(wrappedFunction))
        .then(x => {
          let antsState = this.state.ants.map((y, i) => Object.assign({}, y, {odds: x[i]}))
          // update ants state with odds data and turning loading spinner off
          this.setState({
            ants: antsState,
            loading: false,
          })
        })
    }
  }

  componentWillMount() {
    client.query({query})
      .then(({data}) => this.setState({ants: data.ants}))
  }

  render() {
    const antCards = this.state.ants.map((x, i) => <Ant stats={x} key={i}/>)
    return (
      <div>
        <h2>a day at the ant races</h2>
        <Button
          type='primary'
          loading={this.state.loading}
          onClick={this.generateOdds(this.state.ants)}>
          Generate Odds
        </Button>
        {antCards}
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
