import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AllBlogs from "./pages/AllBlogs/AllBlogs"
import SingleBlog from "./pages/SingleBlog/SingleBlog"
import CreateBlog from "./pages/CreateBlog/CreateBlog"
import EditBlog from "./pages/EditBlog/EditBlog"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<AllBlogs/>}/>
    <Route path="test" element={<h1>Hello World!</h1>}/>
    <Route path="/createblog/" element={<CreateBlog/>}/>
    <Route path="/singleblog/:id"  element={<SingleBlog/>}/>
    <Route path="/editblog/:id" element={<EditBlog/>}/>


    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
