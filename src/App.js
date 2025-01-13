import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Music from "./pages/Music";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/programming' exact Component={Programming} />
            <Route path='/music' exact Component={Music} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
