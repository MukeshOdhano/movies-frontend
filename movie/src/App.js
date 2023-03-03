// MODULES
import {Router} from 'react-router-dom';
import { Routes, Route, Outlet} from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom"
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// CSS FILES
import './App.css';

// JS FILES
import MoviesList from './components/Movies-list';
import AddReview from './components/Add-review';
import Movie from './components/Movie';
import Login from './components/Login';
import React from 'react';


function App() {
  <RouterProvider router={Router} />
  const [user, setUser] = React.useState(null)

  async function login(user = null){
    setUser(user)
  }
  async function logout(){
    setUser(null)
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Movie-MKO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to={"/movies"}>Movie</Link></Nav.Link>
              <Nav.Link>
                {user ? (
                <a onClick={logout}>Logout User</a>
                ):(
                  <Link to={"/login" }onClick={login}>Login</Link>
                )}
              </Nav.Link>
            </Nav>
            <Outlet/>   
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Routes>
          <Route exact path='/movies' element={<MoviesList/>}/>
          <Route path="/movies/:id/review" render={(props)=><AddReview {...props} user={user}/>}/>
          <Route path='/movies/:id/' render={(props)=><Movie {...props} user={user}/>}/>
          <Route path="/login" 
              render={(props)=>
              <Login {...props} login={login} />
              }>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
