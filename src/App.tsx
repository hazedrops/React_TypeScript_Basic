import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
      <Button color='info' onClick={() => setAlertVisible(true)}>
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
