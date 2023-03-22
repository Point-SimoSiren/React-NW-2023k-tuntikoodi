import './App.css'
import React, {useState, useEffect} from 'react'


const Posts = () => {
// State
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)

// UseEffect funktiota kutsutaan automaattisesti kun komponentti latautuu
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) // muutetaan json data javascript muotoon
    .then(oliot => setPosts(oliot))
 }, [])

   return (
     <>
       <h2 onClick={() => setShowPosts(!showPosts)}>Typicode Posts</h2>

       {showPosts && posts && posts.map(p => (
        
        <div className='post'>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
        </div>
       )
       )}

     </>
   )
 }
 
 export default Posts
