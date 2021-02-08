import React from 'react';
import './Style.css';

function FieldsDetail(props){
    return(
    <div>
        <p><span className="FieldLHS">{props.name}</span>
        
        <span className="FieldRHS">{props.value}</span></p>
    </div>
    );
}
export default FieldsDetail;