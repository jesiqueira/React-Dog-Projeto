import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
