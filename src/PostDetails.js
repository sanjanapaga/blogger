import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PostDetails=(props)=>{
    const[user,setUser]=useState({})
    const[post,setPost]=useState([])
    const[comments,setComments]=useState([])
    //const [data, setData] = useState([])
    const { id }=props.match.params
    console.log(id)
    useEffect(()=>{
        Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)])
    .then((values)=>{
        const[postResponse,commentResponse]=values
        setPost(postResponse.data)
        setComments(commentResponse.data)
        
    })
    .catch((err)=>{
        alert(err.message)
    })
    },[])
    useEffect(()=>{
        if(Object.keys(post).length!== 0){
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((res)=>{
                console.log("user",res.data)
                setUser(res.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }
    },[post])
    // let userName
    // user.map((ele)=>{
    //     userName=ele.name
    // })
    return (
        <div> 
           <h2>USER NAME: {user.name}</h2>
           <h3>TITLE : {post.title} </h3>
           <h3>BODY :  {post.body}</h3>

           <hr/>
              <h2>COMMENTS</h2>
           <ul>
               {
                   comments.map((ele) => {
                       return <li key={ele.id}>{ele.body}</li>
                   })
               }
           </ul>
           <p><Link to={`/users/${user.id}`}>back</Link></p>
           </div>
           )
}
export default PostDetails