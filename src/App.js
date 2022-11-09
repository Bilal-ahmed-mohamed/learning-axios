import './App.css';
import React, { useState, useEffect } from 'react';
import api from './api/Posts'
import BlogPost from './components/BlogPost';
import UpdateBlog from './pages/UpdateBlog';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import UseAxiosFetch from './hooks/UseAxiosFetch';
import Oi from './components/Oi';
import JustTrying from './components/JustTrying';




function App() {

  const [posts , setPosts] = useState([])
  const [title , setTitle] = useState('')
  const [body , setBody] = useState('')
  const [editTitle , setEditTitle] = useState('')
  const [editBody , setEditBody] = useState('')

  const  {data , loading , error} =  UseAxiosFetch('http://localhost:3500/posts')

  useEffect(() => {
    setPosts(data)
    
  },[data])

  const updateBlog = async (id) => {
    const updatePost ={id , title:editTitle , body:editBody};

    try {
      const res = await api.put(`/posts/${id}` , updatePost)
      setPosts(posts.map(post => post.id ? {...res.data} : post ))
     

    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  }

  // useEffect(() => {
  //   const fetchingPosts = async () => {
  //     try {
  //       const res = await api.get('/Posts')
  //       setPosts(res.data)
  //     } catch (error) {
  //       if (error.res) {
  //         // not in the 200 response  range 
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //       }else{
  //         console.log(`Error : ${error.message}`);
  //       }
        
        
  //     }
  //   }
  //   fetchingPosts();
    
  // },[])

  return (

    
    <div className="App">

    <BrowserRouter>

    <Routes>
      <Route  path='/' element={    <BlogPost
     posts={posts}
      setPosts={setPosts}
       title={title} 
       setTitle={setTitle}
       body={body} 
       setBody={setBody}
       editTitle={editTitle}
       setEditTitle={ setEditTitle}
       editBody ={editBody }
       setEditBody ={setEditBody}
       loading ={loading}
       error = {error}

        />}/>
         <Route path="/UpdateBlog/:id" element={<UpdateBlog 
       updateBlog={updateBlog}  posts={posts} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody}
         />}  />

         <Route path="/Oi" element={<Oi data={data} error={error} loading={loading} posts={posts}
      setPosts={setPosts} />} />
      <Route  path='/JustTrying' element={<JustTrying data={data} error={error} loading={loading}/>} />
 
    </Routes>
    </BrowserRouter>
       
      
        
       
       
       
 
    </div>
  );
}

export default App;
