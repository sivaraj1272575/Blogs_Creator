import { Link } from "react-router-dom";

const Blogs = ({blogs, title, deleteBlog}) => {
    
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <Link to={'/blog/'+blog.id}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By, {blog.author}</p>
                    </div>
                </Link>
            ))}
        </div> 
    );
}
 
export default Blogs;