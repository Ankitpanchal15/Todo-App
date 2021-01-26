import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListBlock from './ListBlock';

const TodoList = (props) => {
    
const {setInput,item,setItem,setEdit} = props.pass;
const DeleteItem = (id) => {
    const filter = () => {
    return item.filter((val,index)=> {
    return index !== id
    })
    };
    setItem(filter);
    setInput({
        title:"",
        text:""
    });
    setEdit({status:false})
};
const EditItem = (id) => {
    setEdit(true);
    setInput({
    title: item[id].title,
    text: item[id].text 
    });
    setEdit({
        status:true,
        id: id
    })
}
    return (
        <>
    <Grid container spacing={2}>
        <Grid item xs={12} >
          <div>
            <List>
                {
                    item.map((val,index)=> {
                     return   <ListBlock
                        key= {index}
                        id= {index}
                        title={val.title}
                        text= {val.text}
                        onDelete={DeleteItem}
                        onEdit={EditItem}
                        />
                    })
                }
            </List>
          </div>
          </Grid>
        </Grid>
        </>
    )
}

export default TodoList;