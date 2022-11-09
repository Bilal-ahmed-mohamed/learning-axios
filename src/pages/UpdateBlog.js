import React, { useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'

const UpdateBlog = ({
       posts ,  editBody , setEditBody, editTitle , setEditTitle ,updateBlog
}) => {

    const {id} = useParams();

    const post = posts.find(post => (post.id).toString() === id )
    useEffect(() => {
           
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle , setEditBody])
  return (
    <div>
        { editTitle &&
        <div className="newPostForm" >

            
        <h1>Add a new blog</h1>
        <form action="" onSubmit={(e) => {e.preventDefault()}}>
                <input
                 placeholder='Enter the Blog Title'
                 value={editTitle}
                 onChange={(e) => {
                      setEditTitle(e.target.value)
                    
                 }}
                  
                  /> <br />
                <input
                 type="text" 
                 placeholder='Enter The Blog Body' 
                 value={editBody}
                 onChange={(e) => {
                    setEditBody(e.target.value)
                 }}
                 /> <br />
                <button onClick={() => updateBlog(post.id)} type='submit'>submit</button> 
        </form>

           
            </div>
} {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
    </div>
  )
}

export default UpdateBlog