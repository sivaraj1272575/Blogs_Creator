
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState(null);
    const history = useHistory();
    
    const submitHandler = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        
        fetch('http://localhost:8000/blogs/',{method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(blog)}).then(()=>{
            history.push('/');
        });
    }
    
    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={submitHandler}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
                <label>Body</label>
                <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <label>Author</label>
                <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} required/>
                
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}
 
export default Create;