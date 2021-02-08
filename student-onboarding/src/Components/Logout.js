import React from 'react';
import { Link } from 'react-router-dom'
class Logout extends React.Component{
    constructor(){
        super();
        localStorage.removeItem('username')
    }
    render(){
        return(
            <div>
            <center><h1>You have been logged out!!!</h1></center>
            <center><Link to='/'>Login Again</Link></center>
            </div>
        )
    }
}
export default Logout;