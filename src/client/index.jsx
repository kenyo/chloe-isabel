import React from 'react'
import {render} from 'react-dom'
import { List, Card } from 'antd'
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

// container (root) component
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ants: [],
    }
  }

  componentWillMount() {
    client.query({query})
      .then(({data}) => this.setState({ants: data.ants}))
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
