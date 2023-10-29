import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Shared/Header';
import Footer from './Component/Shared/Footer';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
      <Route path = "/" element = {Home} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
