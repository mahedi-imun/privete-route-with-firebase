import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Orders from './components/Orders/Orders';
import RequerAuth from './components/RequerAuth/RequerAuth';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/orders'
        element={
            <RequerAuth>
              <Orders></Orders>
            </RequerAuth>
        }
        >

        </Route>

      </Routes>
      
      
    </div>
  );
}

export default App;
