import React from 'react'
import api from '../api/Posts'
import { Link} from 'react-router-dom';

const BlogPost = ({posts,setPosts,title, setTitle,body,setBody,id,editTitle,setEditTitle,editBody,setEditBody,loading,error}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const newPost ={id , title:title , body:body};

      try {
        const res = await api.post('/posts' , newPost);
        const allPosts = [...posts , res.data]
        setPosts(allPosts)
        setTitle("")
        setBody('')


      } catch (error) {
        console.log(`Error : ${error.message}`);
      }
         
    }


    const deleteBlog =  async (id) => {
       

        try {
          await api.delete(`/posts/${id}/`)
          const blogLists = posts.filter(post => post.id !== id)
          setPosts(blogLists)
          

        } catch (error) {
          console.log(`Error : ${error.message}`);
        }
    }

    
  return (
    
    <div className='page'>
    <div className='blog-post-page'>

        { loading && <div>loadingg</div> }
        { error && <div>error ocured</div> }
      { 
        posts && posts.map((post) => (
            <div className='blogs' key={post.id}>
                <h3>{post.id}</h3>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <span>{post.datetime}</span> <br />

                <button onClick={() => deleteBlog(post.id)  } className='deleteBtn' type='submit'>DELETE</button>
                <Link className='update-Btn' to={`/UpdateBlog/${post.id}`}  > <button> update </button> </Link>
                
            </div>
        ))

        
      } 
      </div>

      <div className="newPostForm" >
        <h1>Add a new blog</h1>
        <form action="">
                <input
                 placeholder='Enter the Blog Title'
                 value={title}
                 onChange={(e) => {
                      setTitle(e.target.value)
                    
                 }}
                  
                  /> <br />
                <input
                 type="text" 
                 placeholder='Enter The Blog Body' 
                 value={body}
                 onChange={(e) => {
                    setBody(e.target.value)
                 }}
                 /> <br />
                <button onClick={handleSubmit} type='submit'>submit</button> 
        </form>

           
            </div>

             {/* <div className='editOldPost' >
              <h1>edit a Blog</h1>
             <form action="">
                <input
                 placeholder='Enter the Blog Title'
                 value={editTitle}
                onChange ={(e) => {
                  setEditTitle(e.target.value)
                }}
                 
                  
                  /> <br />
                <input
                 type="text" 
                 placeholder='Enter The Blog Body' 
                 value={editBody}
                 onChange={(e )=> {
                 setEditBody(e.target.value)
                 }}
                 
                 /> <br />
                <button onClick={() =>  updateBlog() } type='submit'>submit</button> 
        </form>


             </div> */}
    </div>
  )
}

export default BlogPost
