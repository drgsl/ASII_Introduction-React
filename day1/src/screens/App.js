import Post from "../Components/Post";
import React from "react"
import { useFormik } from "formik"
import { useState, useEffect } from 'react';
import AddPostForm from "../Components/addPost";


const imgUrl = "https://cdn.hornbach.ro/cmsm/at/chke2-2b/c814de72d128b7d67c4bb08e95da74/finevo-katze-01-1200x800.jpg"
function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  useEffect(() => {
    //console.log(posts)
    if(posts.length > 0)
      localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  useEffect(() =>{
    const savedPosts = localStorage.getItem('posts')
    if(savedPosts){
      setPosts(JSON.parse(savedPosts))
    } 
  }, [])

  return (
    <div>
        <AddPostForm addPost = {addPost} />
  {
    posts.map((post, idx) => (
      <Post key = {idx} text = {post.text} imageUrl= {post.imageUrl} comments = {[]}></Post>
    ))
  }
  </div>
  )
}

export default App;
