import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseAxiosFetch = (dataUrl) => {
    const [data , setData] = useState([]);
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();


        const fetchData = async (URL) => {
         setLoading(true)
         try {
            const res = await axios.get(URL , {
                cancelToken : source.token
            })
            if (isMounted) {
                setData(res.data)
                setError(null)
            }
         } catch (error) {
            if (isMounted) {
                setError(error.message)
                setData([])
            }
         }finally{
            isMounted &&  setLoading(false)
         }
        }
        
        fetchData(dataUrl)
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;

    }, [dataUrl])

    return {data , loading , error };
  
}

export default UseAxiosFetch