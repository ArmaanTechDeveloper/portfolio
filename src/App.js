import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact />} />
        <Route path={process.env.PUBLIC_URL + '/community'} element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
