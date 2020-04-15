import React from 'react'
import TextField from '@material-ui/core/TextField';
export default function DynamicForm({value , type ,label, onChange}) {
    return (
        <React.Fragment>
            <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            />
            <br />
            
        </React.Fragment>
    )
}
 