import React from 'react';
import './Style.css';
let clsName='studentCard';
class StudentCard extends React.Component{

  
    render(){
        this.props.item.category==="International" ? clsName='studentCard2': clsName='studentCard';
        return(
            <div className={clsName}>
            <center>{this.props.studentName}</center><br/>
            
          <center><span >
          <button onClick={()=>this.props.viewDetails(this.props.item)} className="btnView">View</button>
          <button onClick={()=>this.props.editDetails(this.props.item.id)} className="btnEdit">Edit</button>

          <button onClick={()=>this.props.deleteStudent(this.props.item.id)} className="btnDelete">Delete</button>
          </span>
          </center>
            </div>
        );
        
    }
}
export default StudentCard;