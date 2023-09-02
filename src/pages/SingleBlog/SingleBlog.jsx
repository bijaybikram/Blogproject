import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import "./SingleBlog.css"

const SingleBlog = () => {

  const navigate = useNavigate()

  // see full blog
  const {id} = useParams();
  const [blog, setBlog] = useState();

  const fetchBlog = async() => {
    const response = await axios.get("https://64ee094a1f87218271423747.mockapi.io/blogs/" + id)
    if (response.status == 200){
      setBlog(response.data)
      console.log(blog)
    } else {
      alert("something went wrong!")
    }
  }

  // delete blog
  const deleteBlog = async() => {
    const response = await axios.delete("https://64ee094a1f87218271423747.mockapi.io/blogs/" + id)
    if(response.status == 200){
      navigate("/")
    }else{
      alert("somethng went wrong!")
    }
  }
  

  useEffect (() => {
    fetchBlog()
}, [])

  return (
    <>
      <Navbar/>
      <div className='blog-post'>
        <div className='avatar'>
        <img src={blog?.avatar} alt="Author Image" />
        </div>

        <div>
          <h1 className='post-title'>{blog?.title}</h1>
          <p className='post-description'>{blog?.description}</p>
          <button onClick={deleteBlog}>Delete</button>
          <button onClick={()=> navigate("/editblog/" + blog.id)}>Edit</button>
        </div>
        
      </div>

    </>
  )
}

export default SingleBlog