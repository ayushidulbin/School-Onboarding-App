import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
class EditDetails extends React.Component{
    constructor(){
        super();
        this.state={
            id:'',
            studentName:'',
            DOB:'',
            category:'',
            documents:{
              domicile:false,
              birthCertificate:false,
              marksheets:false,
              policeClearance:false,
              passport:false,
              decelaration:false
            },
            fatherName:'',
            motherName:'',
            lastClassScore:''
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
                studentName:data.studentName,
                DOB:data.DOB,
                category:data.category,
                documents:{
                    domicile:data.documents.domicile,
                    birthCertificate:data.documents.birthCertificate,
                    marksheets:data.documents.marksheets,
                    policeClearance:data.documents.policeClearance,
                    passport:data.documents.passport,
                    decelaration:data.documents.decelaration
                },
                fatherName:data.fatherName,
                motherName:data.motherName,
                lastClassScore:data.lastClassScore,
                id:data.id
            })
        });
    }
    valueChange=(e)=>{
        console.log(e.target.value);
         this.setState({
             [e.target.name]: e.target.value
         });
     }
     chkClick=(e)=>{
        var {name, checked}=e.target;
        this.setState((e)=>{
            var selectedDocument=e.documents;
            return selectedDocument[name]=checked;
        });
    }
    updateDetail=()=>{
        fetch('http://localhost:8000/studentsData/'+this.state.id,{
            method:'put',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(this.state)
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
            })
        })
    }
     render(){
         console.log(this.state.documents.domicile);
     
        return(
            <div className='edit container App'>
                <p style={{fontSize:'20px', color:"#00008B"}}> Edit Onboarding Form </p>
                <form>
                    <label>Student Name</label>
                    <input className='inpt' type='text' name='studentName' value={this.state.studentName} onChange={(e)=>this.valueChange(e)}/>
                    <label>Category</label>
                    <select name='category' value={this.state.category} onChange={(e)=>this.valueChange(e)}>
                        
                        <option name='category' value='International'>International</option>
                        <option name='category' value='Domestic'>Domestic</option>
                   </select><br/>
                   <div className='form-control'>
                   <label > Documents</label>
                   <div className='ckbox'>
                   <input type='checkbox' name='domicile' checked={this.state.documents.domicile} onChange={this.chkClick}/>Domicile<br/>
                   <input type='checkbox' name='birthCertificate' checked={this.state.documents.birthCertificate} onChange={this.chkClick}/>Birth Certificate<br />
                   <input type='checkbox' name='marksheets'checked={this.state.documents.marksheets} onChange={this.chkClick}/>Marksheets<br/>
                   <input type='checkbox' name='policeClearance' checked={this.state.documents.policeClearance} onChange={this.chkClick}/>Police Clearance<br/>
                   <input type='checkbox' name='passport' checked={this.state.documents.passport} onChange={this.chkClick}/>Passport<br/>
                   <input type='checkbox' name='decelaration' checked={this.state.documents.decelaration} onChange={this.chkClick}/>Decelaration<br/>
                   </div></div>
                   <label>DOB</label>
                    <input  className='inpt' type='date' name='DOB' value={this.state.DOB} onChange={(e)=>this.valueChange(e)}/>
                    <label>Mother's Name</label>
                    <input className='inpt' type='text' name='fatherName' value={this.state.fatherName} onChange={(e)=>this.valueChange(e)}/>
                    <label>Father's Name</label>
                    <input className='inpt' type='text' name='motherName' value={this.state.motherName} onChange={(e)=>this.valueChange(e)}/>
                    <label>Last Class Score</label>
                    <input className='inpt' type='Number' name='lastClassScore' value={this.state.lastClassScore} onChange={(e)=>this.valueChange(e)}/><br/>
                    <center><Link to='/home'><button onClick={(e)=>this.updateDetail(e)}>Save Changes</button></Link></center>
                </form>
            </div>
        );
    }

}
export default EditDetails;