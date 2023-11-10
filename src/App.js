
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import {Route,Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
     
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/watch-history' element={<WatchHistory/>} ></Route>
      </Routes>
      <Footer/>

      
    </div>

  );
}
  


export default App;
