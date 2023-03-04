import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';

function RoutesApp() {
    return (
      <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' component={Home} />
                    <Route path='/user' component={UserPage} />
                </Routes>
            </BrowserRouter>
      </div>
    )
  }
  export default RoutesApp;
  