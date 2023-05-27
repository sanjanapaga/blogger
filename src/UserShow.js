import React,{useState,useEffect}from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const UserShow=(props)=>{
    const[user,setUser]=useState({})
    const[posts,setPosts]=useState([])
    const{ id }=props.match.params
   
    useEffect(()=>{
        Promise.all([axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)])
        .then((values)=>{
            const[userResponse,postResponse]=values
            setUser(userResponse.data)
            setPosts(postResponse.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h1>User Name:{user.name}</h1>
            <h2>Posts Written By Users-{posts.length}</h2>
            <ul>
                {posts.map((ele)=>{
                    return <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                })}
            </ul>
        </div>
    )
}
export default UserShow