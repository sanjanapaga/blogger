import React from "react"
import {Link,Route} from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import UserShow from "./UserShow"
import Posts from "./Posts"
import PostDetails from "./PostDetails"



const App=(props)=>{
  return (
    <div>
        <Link to="/">Home</Link>|
        <Link to="/users">Users</Link>|
        <Link to="/posts">Posts</Link>

        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={Users} exact={true}/>
        <Route path="/users/:id" component={UserShow} />
        <Route path="/posts" component={Posts}  exact={true}/>
        <Route path="/posts/:id" component={PostDetails} exact={true}/>
         
    </div>
  )
}
export default App