import ListGroup from './components/ListGroup'

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  return (
    <div>
      <ListGroup items = {items} heading="Cities" /> {/* {} for the heading doen't necessary when passing the static value */}
    </div>
  )
}

export default App
