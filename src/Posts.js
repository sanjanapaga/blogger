import React,{useState,useEffect} from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import logo from './rainbow-spinner-loading.gif'

const Posts=(props)=>{
    const[posts,setPosts]=useState([])
    const[search,setSearch]=useState('')
    const[showPosts,setShowPosts]=useState(10)
    const[spinner,setSpinner]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res)=>{
                setPosts(res.data)
                setSpinner(false)
            })
            .catch((err)=>{
                alert(err.message)
            })
        },1000)
    },[])
   const handleSearch=(e)=>{
    setSearch(e.target.value.toLowerCase())
   }
    return (
        <div>
         {
            spinner ?(
                <img src={logo} alt="rainbow-spinner-loading.gif"
                    width="200px" length="200px"
                />
            ):(
                <div>
               <h1>posts-{posts.length}</h1>
               <form>
                <input type="text" placeholder="search postname" 
                value={search} onChange={handleSearch} />
               </form>
                <ol>
                {posts.filter((ele)=>{
                return ele.title.toLowerCase().includes(search)
                }).slice(0,showPosts).map((ele)=>{
                return <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                })}
              </ol>
              <button onClick={()=>{
               setShowPosts(showPosts+10)
               }}>readmore</button>
               </div>
            )
        }
        </div>
       
    )
}
export default Posts
