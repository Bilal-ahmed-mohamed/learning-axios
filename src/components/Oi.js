import React from 'react'
import UseAxiosFetch from '../hooks/UseAxiosFetch'

const Oi = () => {

    const  {data , loading , error} =  UseAxiosFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
        {loading && <div>loading my guy</div> }
        {error &&  <h1>Error has Occured my Guy</h1> }
       {
        data && data.map((bilal) => (
            <div>
                <h3>{bilal.userId}</h3>
            <h1>{bilal.title}</h1>
            <p>{bilal.body}</p>
            </div>
        ))
       }
    </div>
  )
}

export default Oi