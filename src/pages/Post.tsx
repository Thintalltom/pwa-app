import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { PostData } from '../types/types'


const Post = () => {
    const [post, setPost] = useState<PostData[]>([])
    const PostInfo = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
          const limitedData = response.data.slice(0, 10);
            console.log(limitedData);
            setPost(limitedData)
          
        } catch (error) {
          console.error('There was an error fetching the post info:', error);
        }
      };
  
      useEffect(() => {
        PostInfo();
      }, []);
  return (
    <div>Post

        <div>
        <ul>
          {post.map(post => (
            <div key={post.id} className='gap-[20px]'>
            <li >{post.email}</li>
            <li >{post.name}</li>
            </div>
            
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Post