import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';



const ListItemText = (props) => {
   
    return(
        <>
            <Tooltip title="Set Task Status">
        <FormControlLabel defaultChecked onChange={props.pass}   size="small" 
            control={<Switch color="primary" />}
            />
            </Tooltip>
         <div className="wrap-text ">
            <Typography variant="h6" component="h4" >
                {props.title}
            </Typography>
            <Typography variant="" component="p" >
            {props.text} 
            </Typography> 
            </div>
        </>
    )
}

export default ListItemText;