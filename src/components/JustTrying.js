import React from 'react'
import UseAxiosFetch from '../hooks/UseAxiosFetch'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
const JustTrying = () => {

    const {data , loading , error} = UseAxiosFetch('https://jsonplaceholder.typicode.com/photos')
  return (
    <div> 
        {loading && <h1>LOADING JUST A SEC</h1> }
        {  error && <h2>ERROR OCCURRED</h2> }
        {
            data && data.map((photos) => (
                <div>
                    <h1>{photos.albumId}</h1>
                    <h2>{photos.id}</h2>
                    <p>{photos.title}</p>
                    <Link>{photos.url}</Link>
                </div>
            ))
        }
      
    </div>
  )
}

export default JustTrying
