import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Tooltip from '@material-ui/core/Tooltip';

const Input_Block = (props)=> {
const {input,setInput,item,setItem,edit,setEdit} = props.pass;

const inputEvent = (event)=> {
    event.preventDefault();
    const {name,value} = event.target;
    setInput((prevValue)=> {
      return {
          ...prevValue,
          [name]:value
      }
    })
  }
const AddItem = ()=> {
    if(input.title !== "" && input.text !== "" ) {
      setItem((prevVal)=> {
        return [...prevVal,input]
      });
      setInput({
        title:"",
        text: ""
      });
    } else {
      alert("Please Enter Text");
    }
  }

  const UpdateItem = ()=> {
    if(input.title !== "" && input.text !== "" ){
      let update = [...item];
      update[edit.id] = {
          title: input.title,
          text: input.text
      }
      setItem(update);
      setEdit({
        status:false
      });
      setInput({
        title:"",
        text: ""
      });
    }
  }

    return (
        <>
        <form  className="" noValidate autoComplete="off">

        <TextField 
        value= {input.title}
        onChange={inputEvent}
        id="title"
        name="title" 
        label="Title"
        fullWidth
        style = {{marginBottom:"20px"}}
        />
        <TextField
          value= {input.text}
          onChange={inputEvent}
          name='text'
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          style = {{marginBottom:"20px"}}
        />
      <Tooltip title="Add">
      <Button onClick={edit.status == false ? AddItem : UpdateItem } variant="contained" color="primary">
       {edit.status == false ?  <AddCircleIcon size={5}/> : <DoneAllIcon/>   } 
        </Button>
        </Tooltip>
       
        </form>     
        </>
    )
}

export default Input_Block;