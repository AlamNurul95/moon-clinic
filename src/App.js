import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/routes';


function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
     
    
    </div>
  );
}

export default App;
