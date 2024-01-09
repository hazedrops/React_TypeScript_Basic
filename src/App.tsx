// import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  return (
    <div>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      <Button color='info' onClick={() => console.log('clicked')}>
        Button
      </Button>
      
      {/* Using default value */}
      {/* <Button onClick={() => console.log('clicked')}>
        Button
      </Button> */}
    </div>
  )
}

export default App
