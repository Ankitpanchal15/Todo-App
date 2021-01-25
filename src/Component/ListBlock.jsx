import React,{useState} from 'react';
import ListItemText from './ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAction from './ListItemAction';
import Grid from '@material-ui/core/Grid';

const ListBlock = (props) => {

    const [taskStatus,setTaskStatus] = useState(false);
    const taskEvent = (event)=>{
      if(taskStatus == false ){
        setTaskStatus(true);
      } else {
        setTaskStatus(false);
      }
    }

    return(
        <>
              <ListItem className={ taskStatus == true ? 'completed' : null   }>
                    
            
                <ListItemText
                title={props.title}
                text= {props.text}
                /> 
              
             
                <ListItemAction id={props.id} onDelete={props.onDelete} onEdit={props.onEdit}  pass={taskEvent}  />
               
                </ListItem>
        </>
    )
}

export default ListBlock;