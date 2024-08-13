import React,{useState, useEffect} from 'react'
import { UserState } from '../types/types';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const MainPage = () => {
    const [users, setUsers] = useState<UserState[]>([]);
    
   const navigate = useNavigate()
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
        <Link to='/post'>
        <button className='text-red-500 bg-slate-500 w-[300px]'>POST</button>
        </Link>
       
        </div>
     
      </div>
    );
  };
  

export default MainPage