import React from 'react'
import {render} from 'react-dom'
import { List, Card } from 'antd'

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
]

const TodoList = (props) => (
  <div>
		<List
			grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6 }}
    	dataSource={data}
    	renderItem={item => (
				<List.Item>
					<Card title={item.title}>Card content</Card>
				</List.Item>
			)}
		/>
  </div>
)

// container (root) component
class App extends React.Component {
  render () {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

