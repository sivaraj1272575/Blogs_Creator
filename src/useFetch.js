import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isLoding, setisLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok) throw Error("Couldn't Fetch the Message");
            else
            return res.json();
        }).then((data)=>{
            //console.log(data);
            setBlogs(data);
            setisLoading(false);
            setError(null);
        }).catch(err=>{
            setisLoading(false);
            setError(err.message);
        });
        
    }, [url]);
    
    return {blogs, isLoding, error};
}
 
export default useFetch;