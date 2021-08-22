import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {blogs, isLoding, error} = useFetch('http://localhost:8000/blogs/'+id);
    console.log(blogs);
    const history = useHistory();
    
    const deleteBlog = (id)=>{
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE',
        }).then(()=>{
            
            history.push('/');
        });
    }
    
    return ( 
        <div className="blogDetails">
            {isLoding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <article>
                <h1>{blogs.title}</h1>
                <div className="author">Written By, {blogs.author}</div>
                <div className="body" style={{"textAlign":"justify"}}>{blogs.body}</div>
                <button onClick={()=>{deleteBlog(blogs.id)}}>Delete</button>
            </article>}
        </div>
    );
}
 
export default BlogDetails;