import React from 'react';
import Typography from '@material-ui/core/Typography';

const ListItemText = (props) => {
   
    return(
        <>
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