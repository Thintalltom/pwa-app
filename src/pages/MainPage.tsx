import React,{useState, useEffect} from 'react'
import { UserState } from '../types/types';
import axios from 'axios';
const MainPage = () => {
    const [users, setUsers] = useState<UserState[]>([]);
    
   
    const usersInfo = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  
          setUsers(response.data);
        
      } catch (error) {
        console.error('There was an error fetching the user info:', error);
      }
    };

    useEffect(() => {
      usersInfo();
    }, []);
  
    return (
      <div>
        User
       
        <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        </div>
     
      </div>
    );
  };
  

export default MainPage