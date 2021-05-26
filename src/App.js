import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Chrished from './components/Chrished';
import Footer from './components/Footer';
import Links from './components/Links';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <Chrished />
        <Links />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
