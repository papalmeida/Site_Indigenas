import { Route, Routes } from 'react-router-dom'
import { Container } from './components/common/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="" element={<Container />}/>
    </Routes>
  )
}

export default App
