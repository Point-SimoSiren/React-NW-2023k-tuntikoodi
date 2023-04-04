import React, {useState} from 'react'
import './App.css'
import CustomerList from './CustomerList'
import Laskuri from './Laskuri'
import Message from './Message'
import Posts from './Posts'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserList from './UserList'


function App() {

// Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link to={'/customers'} className='nav-link'>Customers</Link>
                <Link to={'/users'} className='nav-link'>Users</Link>
                <Link to={'/laskuri'} className='nav-link'>Laskuri</Link>
                <Link to={'/posts'} className='nav-link'>Typicode posts</Link>
            </Nav>
        </Navbar>

      <h1>Northwind Traders Ltd.</h1>

      {showMessage && <Message message={message} isPositive={isPositive} />}

          <Switch>

            <Route path="/customers" >
                <CustomerList setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />
            </Route>

            <Route path="/users" >
                <UserList setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />
            </Route>
            
            <Route path="/laskuri">
                <Laskuri viesti="Hei" />
            </Route>
          
            <Route path="/posts">
                <Posts />
            </Route>

          </Switch>

      </Router>
    </div>
  )
}

export default App
