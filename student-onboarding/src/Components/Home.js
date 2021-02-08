import React from 'react';
import OnBoardingForm from './OnBoardingForm';
import ListOfStudents from "./ListOfStudents";
import { Link, Redirect } from 'react-router-dom';
import "./Style.css"
class Home extends React.Component{
    constructor(){
        super();
     
        this.state={
            isOnboardVisible:true,
        }
      
    }
    clickHandler=()=>{
        this.setState({
            isOnboardVisible: true
        })
    }
    clickHandler2=()=>{
        this.setState({
            isOnboardVisible: false
        })
    }
    viewDetails=(student)=>{
        console.log(this.props.history)
        this.props.history.push(`/viewDetail/${student.id}`);
    }
        editDetails=(id)=>{
        this.props.history.push('/editDetail/'+id)
      }

    render(){
       
       console.log(this.props.history)
        return(
            <div className='homepage'>
            <span style={{fontSize:'25px', color:"Blue"}}>On Boarding App</span>
            <Link to='/logout'><span className='lgout'>Logout</span></Link>
            <span className="usrname"> Hello  {localStorage.getItem("username")}</span>
            <br/>
            <hr className="hr"/>
            <button className="btnhome" onClick={this.clickHandler}>OnBoarding Form </button>
            <button className="btnhome"  onClick={this.clickHandler2}>List of Students</button>
           {this.state.isOnboardVisible? <OnBoardingForm/>:<ListOfStudents viewDetails={this.viewDetails} editDetails={this.editDetails}/>}
          </div>
        );

    }
}
export default Home;