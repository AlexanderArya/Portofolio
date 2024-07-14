import './App.css';
import Menu from './pages/menu';
import Home from './pages/home';
import Galeri from './pages/galeri';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='app-header'>
            <Menu/>

                <div className='head'>
                    <Routes>
                        <Route path='/' exact element={<Home/>}/>
                        <Route path='/galeri' exact element={<Galeri/>}/>
                    </Routes>
                </div>

        </div>
    </Router>
  );
}

export default App;
