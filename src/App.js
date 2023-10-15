
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Room from "./components/pages/Room"
import Header from "./components/common/Header"
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/room' element={<Room />}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
