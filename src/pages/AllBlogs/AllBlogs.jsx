import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./AllBlog.css"
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

const AllBlogs = () => {

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const blogresponse = await axios.get("https://64ee094a1f87218271423747.mockapi.io/blogs")
        if(blogresponse.status == 200){
            // console.log(blogresponse.data)
            setBlogs(blogresponse.data)
        }
    }

    useEffect(() => {
        fetchBlogs()
    },[])

  return (
    <div>
       <Navbar/> 
       <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {
            blogs.map((blog)=>{
                return (
                    <div className="card" key={blog.id}>
                        <img src={blog.avatar} alt="Avatar" width='25%'/>
                        <div className="container">
                            <h4><b>{blog.title}</b></h4>
                            <p>{blog.description}</p>
                            <p>{blog.createdAt}</p>
                        </div>
                        <p onClick={()=>navigate(`/singleblog/${blog.id}`)} style={{textAlign: "center"}}>See More</p>
                    </div>  
                    
                )
            })
        }
            
       </div>
        
    </div>
  )
}

export default AllBlogs