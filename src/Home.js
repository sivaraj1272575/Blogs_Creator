import { useState, useEffect } from 'react';
import Blogs from './Blogs';
import useFetch from './useFetch';

const Home = () => {
    
    const {blogs, isLoding, error} = useFetch('http://localhost:8000/blogs');
    
    //Delete blog
    const deleteBlog = (id)=>{
        var deleted = blogs.filter((blog)=>blog.id !== id);
        //setBlogs(deleted);
    }
    
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isLoding && <div>Loading.... </div>}
            {blogs && <Blogs blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>}
        </div>
    );
}
 
export default Home;