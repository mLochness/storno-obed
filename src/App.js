import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import KidDetails from './KidDetails';
import NotFound from './NotFound';
import Login from './Login';
import Countdown from './Countdown';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Countdown />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/kids/:id" element={<KidDetails />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
