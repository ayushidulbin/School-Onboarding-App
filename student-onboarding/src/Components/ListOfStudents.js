import React from 'react';
import StudentCard from './StudentCard';
import './Style.css';
let clsname="studentCardCon";
class ListOfStudents extends React.Component{
   constructor(){
       super();
       this.state={
           studentsData:[],
           str:'',
           category:'All'
       }
   }
    componentDidMount(){
        this.getStudentsData();
    }
    getStudentsData=()=>{
        fetch('http://localhost:8000/studentsData')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                studentsData:data
            })
        });
    }
    valueChange=(e)=>{
       
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)}
   
    deleteStudent=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
        fetch('http://localhost:8000/studentsData/'+id,{
          method:"DELETE"
        }).then(res=>res.json)
        .then(data =>{
          this.getStudentsData();
        })
    
      }
    }
 searchBox=(e)=>{
     this.setState({
         str:e.target.value
     })
 }
    
    render(){
        console.log(this.state.studentsData)

        return(
            <div className='App'>
            <center><p style={{fontSize:'22px', color:"#00008B"}}>List of Students</p></center>
            <div className="searchbox"><input type='text' placeholder="Search student..." onChange={(e)=>this.searchBox(e)}/></div>
            <div className="searchcateg"><select name='category' value={this.state.category} onChange={(e)=>this.valueChange(e)}>
                    
                    <option name='category' value='All'>All</option>
                   <option name='category' value='International'>International</option>
                    <option name='category' value='Domestic'>Domestic</option>
               </select></div>
            <div>
           
            {this.state.studentsData.filter(item=>{
                if(this.state.str==""){
                    return item
                }else if(item.studentName.toLowerCase().includes(this.state.str.toLowerCase())){
                    return item
                }

            }).filter(item=>{
                if(this.state.category==="All"){
                    return item
                }else if(item.category.toLowerCase().includes(this.state.category.toLowerCase())){
                    return item
                }
            }).map(item=>(
                
               <div className='StudentCardCon'>
               
               <StudentCard studentName={item.studentName}
                   fatherName={item.fatherName}
                   motherName={item.motherName}
                   viewDetails={this.props.viewDetails}
                   editDetails={this.props.editDetails}
                   deleteStudent={this.deleteStudent}
                   item={item}
               />
               </div>

                
            ))} 

            
            </div>
            
            </div>
        );
    }
}
export default ListOfStudents;