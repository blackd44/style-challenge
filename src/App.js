import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Challengs from './pages/challenges';
import GeneralLayout from './components/generalLayout';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<GeneralLayout />}>
            <Route index element={<Home />} />
            <Route path='/challenges/*' element={<Challengs />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
