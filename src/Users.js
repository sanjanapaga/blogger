import React,{useState,useEffect} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
import logo from './comic-con-spinningwheel.gif'

const Users=(props)=>{
    const[user,setUser]=useState([ ])
    const[search,setSearch]=useState([])
    const[spinner,setSpinner]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                setUser(res.data)
                setSpinner(false)
            })
            .catch((err)=>{
                alert(err.message)
            })
        },1000)  
    },[])
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div>
        {
            spinner ?(
                <img src={logo} alt="comic-con-spinningwheel.gif"
                    width="100px" length="100px"
                />
            ):(
                <div>
                <h1>Users List-{user.length}</h1>
                 <input type="text" value={search} onChange={handleChange}/>
                <ul>
                {user.filter(user=>user.name.toLowerCase().includes(search)).map((ele)=>{
                    return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
                })}
               </ul>
                </div>
            )
        }
        </div>
    )
}
export default Users