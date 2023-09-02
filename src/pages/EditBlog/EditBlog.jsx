import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const EditBlog = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [blog, setBlog] = useState({})

  const editBlog = async(e) => {
    e.preventDefault()
    const response = await axios.put("https://64ee094a1f87218271423747.mockapi.io/blogs/" + id, blog)
    if(response.status == 200){
      navigate("/singleblog/" + id)
    }else{
      alert("something went wrong!")
    }
  }

  const fetchBlog = async() => {
    const response = await axios.get("https://64ee094a1f87218271423747.mockapi.io/blogs/" + id)
    
    console.log(response)
    if(response.status == 200) {
      setBlog(response.data)
      }else{
        alert("something is wrong!")
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <>
    <Navbar/>
    <div className="form-container">
      
      <h2 className="form-title">Edit Blog</h2>

      <form onSubmit={editBlog}>

        <input type="text" id="title"  placeholder="title" onChange={(e)=> setBlog({...blog, title:e.target.value})} value={blog.title} required/>

        <textarea id='description' type="text" name="description" rows="4" placeholder="description" onChange={(e)=> setBlog({...blog, description:e.target.value})} value={blog.description} required/>

        <input type="text" id="image" name="image" placeholder="image" onChange={(e)=> setImage({...blog, avatar:e.target.value})} value={blog.avatar} required/>

        <input type="submit" value="Edit"/>

      </form>
    </div>
    </>
  )
}

export default EditBlog