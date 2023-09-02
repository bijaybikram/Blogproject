import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import "./CreateBlog.css"

const CreateBlog = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")


  const createBlog = async (e) => {
    e.preventDefault()
    const data = {
      title: title,
      description : description,
      avatar : image
    }
    

    const response = await axios.post("https://64ee094a1f87218271423747.mockapi.io/blogs", data)
    console.log(response)
    if(response.status == 201) {
      navigate("/")
    }else {
      alert("error occured!")
    }
    

}

  return (
    <>    
    <Navbar/>
    <div className="form-container">
      
      <h2 className="form-title">Add Blog</h2>

      <form onSubmit={createBlog}>

        <input type="text" id="name" name="title" placeholder="title" required onChange={(e)=> setTitle(e.target.value)}/>

        <textarea id='description' type="text" name="description" rows="4" placeholder="description" required onChange={(e)=> setDescription(e.target.value)}/>

        <input type="text" id="image" name="image" placeholder="image" required onChange={(e)=> setImage(e.target.value)}/>

        <input type="submit" value="Submit"/>

      </form>
    </div>
    </>

  )
}

export default CreateBlog