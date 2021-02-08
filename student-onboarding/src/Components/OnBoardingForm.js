import React from 'react';
import './Style.css';
import { Link, Redirect } from 'react-router-dom';


class OnBoardingForm extends React.Component{
    constructor(){
        super();
        this.state={
            studentName:'',
            DOB:'',
            category:'International',
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
            lastClassScore:'',

            domicileError:'',
            birthCertificateError:'',
            marksheetsError:'',
            passportError:'',
            policeClearanceError:'',
            decelarationError:''

                

            
        }
    }
    valueChange=(e)=>{
       
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.name)
        // let name=e.target.name;
        // let value=e.target.value;
        // let errors=this.state.errors;

        // switch (name) {
        //     case 'studentName':
        //         errors.studentName=value.length< 3?"Student name must be 3 characters":"";
        //         break;
        //      case 'category':
        //             errors.category=value=='category'?"Please select you category":"";
        //             break;
        
        //     default:
        //         break;
        // }
        // this.setState({
        //     errors, [name]:value
        // })
        // console.log(this.state.errors);
    }
    chkClick=(e)=>{
        var {name, checked}=e.target;
        this.setState((e)=>{
            var selectedDocument=e.documents;
            return selectedDocument[name]=checked;
        });
    }
    validate=()=>{
       let domicileError='';
        let birthCertificateError='';
       let marksheetsError='';
       let passportError='';
       let policeClearanceError='';
       let decelarationError='';
       console.log(this.state.category)
       console.log(this.state.documents.domicile);
       if(this.state.category==='International'){
           if(this.state.documents.domicile===false){
            domicileError='Domicile is mandatory';
            }
            if(this.state.documents.passport===false){
                passportError='Passport is mandatory';
            }
            if(this.state.documents.birthCertificate===false){
                birthCertificateError='Birth Certificate is mandatory';
            }
            if(this.state.documents.marksheets===false){
                marksheetsError='Marksheets are mandatory';
            }
            if(this.state.documents.decelaration===false){
                decelarationError='Decelaration is mandatory';
            }
            if(this.state.documents.policeClearance===false){
                policeClearanceError='Police Clearance is mandatory';
            }
            
           
       }else{
        if(this.state.documents.domicile===false){
            domicileError='Domicile is mandatory';
            }
          
            if(this.state.documents.birthCertificate===false){
                birthCertificateError='Birth Certificate is mandatory';
            }
            if(this.state.documents.marksheets===false){
                marksheetsError='Marksheets are mandatory';
            }
            if(this.state.documents.decelaration===false){
                decelarationError='Decelaration is mandatory';
            }
           

       }
       if(domicileError || policeClearanceError|| passportError|| decelarationError|| birthCertificateError|| marksheetsError){
           this.setState({domicileError,
        decelarationError,birthCertificateError,marksheetsError,passportError,policeClearanceError});
           return false;
       }
   
       return true;
       
    }
    submitForm=(e)=>{
        e.preventDefault();

        console.log(e);
        this.setState((prev)=>({
            DOB:prev.DOB.toString()
        }))
        const isValid=this.validate();
        if(isValid){
        fetch('http://localhost:8000/studentsData',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then(res=>res.json)
        .then(data=>{
            alert("Student added")
        })
    }}

    render(){
        console.log(this.state)
        console.log(Object.keys(this.state.documents).filter((x)=>this.state.documents[x]));
        return(
            <div className='App container'>
                <p style={{fontSize:'20px', color:"#00008B"}}>Onboarding Form </p>
                
                <form>
                    <label>Student Name</label>
                    
                    <input className='inpt' type='text' name='studentName' value={this.state.value} onChange={(e)=>this.valueChange(e)} required/>
                    
                    <label>Category</label>
                    <select name='category' value={this.state.value} onChange={(e)=>this.valueChange(e)}>
                    
                        
                       <option name='category' value='International'>International</option>
                        <option name='category' value='Domestic'>Domestic</option>
                   </select><br/>
                   
                   {this.state.category==='Domestic'?
                   <div className='form-control'>
                   <label > Documents</label>
                   <div className='ckbox'>
                   <input type='checkbox' name='domicile' onChange={this.chkClick}/>Domicile<span>*</span>
                   <span className='error'>{this.state.domicileError}</span><br/>

                   <input type='checkbox' name='birthCertificate' onChange={this.chkClick}/>Birth Certificate<span>*</span>
                   <span className='error'>{this.state.birthCertificateError}</span><br/>

                   <input type='checkbox' name='marksheets' onChange={this.chkClick}/>Marksheets<span>*</span>
                   <span className='error'>{this.state.marksheetsError}</span><br/>

                   <input type='checkbox' name='policeClearance' onChange={this.chkClick}/>Police Clearance<br/>
                   <input type='checkbox' name='passport' onChange={this.chkClick}/>Passport<br/>
                   <input type='checkbox' name='decelaration' onChange={this.chkClick}/>Decelaration<span>*</span>
                   <span className='error'>{this.state.decelarationError}</span><br/>

                   </div></div>:
                   <div className='form-control'>
                   <label > Documents</label>
                   <div className='ckbox'>
                   <input type='checkbox' name='domicile' onChange={this.chkClick}/>Domicile<span>*</span>
                   <span className='error'>{this.state.domicileError}</span><br/>

                   <input type='checkbox' name='birthCertificate' onChange={this.chkClick}/>Birth Certificate<span>*</span>
                   <span className='error'>{this.state.birthCertificateError}</span><br/>

                   <input type='checkbox' name='marksheets' onChange={this.chkClick}/>Marksheets<span>*</span>
                   <span className='error'>{this.state.marksheetsError}</span><br/>

                   <input type='checkbox' name='policeClearance' onChange={this.chkClick}/>Police Clearance<span>*</span>
                   <span className='error'>{this.state.policeClearanceError}</span><br/>

                   <input type='checkbox' name='passport' onChange={this.chkClick}/>Passport<span>*</span>
                   <span className='error'>{this.state.passportError}</span><br/>

                   <input type='checkbox' name='decelaration' onChange={this.chkClick}/>Decelaration<span>*</span>
                   <span className='error'>{this.state.decelarationError}</span><br/>

                   </div></div>
                   }
                   <label>DOB</label>
                    <input  className='inpt' type='date' name='DOB' value={this.state.value} onChange={(e)=>this.valueChange(e)} required/>
                    <label>Mother's Name</label>
                    <input className='inpt' type='text' name='fatherName' value={this.state.value} onChange={(e)=>this.valueChange(e)} required/>
                    <label>Father's Name</label>
                    <input className='inpt' type='text' name='motherName' value={this.state.value} onChange={(e)=>this.valueChange(e)} required/>
                    <label>Last Class Score</label>
                    <input className='inpt' type='Number' name='lastClassScore' value={this.state.value} onChange={(e)=>this.valueChange(e)} required/><br/><br/>
                    <center><button onClick={(e)=>this.submitForm(e)} className="btnhome">OnBoard</button></center>
                </form>
                
            </div>
        );
    }
}
export default OnBoardingForm;