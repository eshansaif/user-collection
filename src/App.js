import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User/User';
import fakeData from './fakeData/fakeData.json';
import { Container } from 'react-bootstrap';
import FriendsAnSalary from './components/FriendsAndSalary/FriendsAnSalary';

function App() {
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
  
  shuffle(fakeData);

  const first15 = fakeData.slice(0,15);
    
  const [users, setUsers] = useState(first15);


  const [salaryNFriends, setSalaryNFriends] = useState([]);

  const addFriendsHandler = (user) => {
    const newSalaryNFriends = [...salaryNFriends,user];
    setSalaryNFriends(newSalaryNFriends);
  }
    

  return (
    <div >
      <FriendsAnSalary salaryNFriends={salaryNFriends}></FriendsAnSalary>
      
      <Container className="main">
      
          {
            users.map(user => <User user={user} addFriendsHandler={addFriendsHandler} key={user.id}>  </User> )
          }
      </Container>
        
    </div>
  );
}

export default App;
