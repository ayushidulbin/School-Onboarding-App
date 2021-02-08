import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Style.css';
class LoginForm extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            loggedIn:false
        }
    }

    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            loggedIn:true
        })
        localStorage.setItem("username",this.state.username);
        
        
    }
    render(){
        if(this.state.loggedIn===true){
            return <Redirect to="/home" />}
        
        console.log(this.state)
        return(
            <div className="Login">
            <center><p>Login School Admin</p></center>
            <form onSubmit={this.handleSubmit}>
            <input type='text' name='username' placeholder='UserName...' required onChange={this.handleChange}/><br/>
            <input type='password' name='password' placeholder='Password...' required onChange={this.handleChange}/><br/>
            <center><button onSubmit={this.handleSubmit}>Log in</button></center>
            </form>
            </div>
        )
    }
}
export default LoginForm