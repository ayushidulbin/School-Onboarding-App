import React from 'react';
import './Style.css';
import FieldsDetail from './FieldDetail';
class ViewDetails extends React.Component{
    constructor(){
        super();
        this.state={
            studentDetails:null
        }
    }
    componentDidMount(){
        this.getStudentDetails();
    }
    getStudentDetails=()=>{
        const studentId=this.props.match.params.studentId;
        fetch(`http://localhost:8000/studentsData/${studentId}`)
        .then(res=>res.json()).then(data=>{
            this.setState({
                studentDetails:data
            })
        });
    }
    
    
    render(){
        return(
            <div className='App'>
            <p style={{fontSize:'20px', color:"#00008B"}}>Student Detail</p>
            {this.state.studentDetails &&
            <div className='ViewPage'>
            <FieldsDetail name="Student Name:" value={this.state.studentDetails.studentName} />
            <FieldsDetail name="Category:" value={this.state.studentDetails.category} />
             <span style={{fontSize:"20px",color:'royalblue'}}>Documents</span>
            <FieldsDetail name="1. Domicile" value={this.state.studentDetails.documents.domicile? 'Yes':'No'} />
            <FieldsDetail name="2. BirthCertificate" value={this.state.studentDetails.documents.birthCertificate? 'Yes':'No'} />
            <FieldsDetail name="3. Marksheets" value={this.state.studentDetails.documents.marksheets? 'Yes':'No'} />
            <FieldsDetail name="4. Decelaration" value={this.state.studentDetails.documents.decelaration? 'Yes':'No'} />
            <FieldsDetail name="5. Passport" value={this.state.studentDetails.documents.passport? 'Yes':'No'} />
            <FieldsDetail name="6. Police Verification" value={this.state.studentDetails.documents.policeClearance? 'Yes':'No'} />
            <FieldsDetail name="Father's Name:" value={this.state.studentDetails.fatherName} />
            <FieldsDetail name="Mother's Name:" value={this.state.studentDetails.motherName} />
            <FieldsDetail name="Last Class Score:" value={this.state.studentDetails.lastClassScore}/>
            
            </div>}
            </div>
        );
    }
}
export default ViewDetails;