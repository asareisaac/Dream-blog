import {useState} from "react";
import { useHistory } from "react-router-dom";
const Create= () =>{
    const [title, setTitle] =useState('')
    const [body, setBody] =useState('')
    const [author, setAuthor] =useState('Dream')
    const [isPending, setisPending] =useState(false)
    const history = useHistory()

    const postBlog =(e)=>{
        e.preventDefault();
        const blog ={title, body, author}
        setisPending(true)


        console.log(blog)
        fetch('http://localhost:9000/blogs',{
            method: 'POST',
            headers: {'content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then (()=>{
            console.log("new data added")
            setisPending(false)
            history.push('/')
        })
    }

    return(
        <div className="create">
         <h2>Add a new Blog</h2>
         <form onSubmit={postBlog}>
             <label>Blog Title</label>
        
             <input 
             type="DEMO"
             required
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             />
             
             <label>Blog Body</label>
             <textarea
             required
             value={body}
             onChange={(e)=> setBody(e.target.value)}
            ></textarea> 
             <br></br><label>Author</label>
             <select>
                 value={author}
                 onChange={(e)=> setAuthor(e.target.value)}
                 <option value="Dream">Dream</option>
                 <option value="Isaac">Isaac</option>
             </select>
             {!isPending &&<button>Add Blog</button>}
             {isPending &&<button disabled>Adding Blog...</button>}
             
             
         </form>

        </div>
    )
}


export default Create;