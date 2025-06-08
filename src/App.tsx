import { Route, Routes } from 'react-router-dom';
import Container from './components/common/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import Referencias from './components/common/Referencias';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}/>
      <Route path="/referencias" element={<Referencias />}/>
    </Routes>
  )
}

export default App
