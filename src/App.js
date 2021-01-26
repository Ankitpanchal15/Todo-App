import React, {useState} from 'react'
import './index.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputBlock from './Component/InputBlock';
import TodoList from './Component/TodoList';

function App() {
  const [input,setInput] = useState({
    title:"",
    text: ""
  });
  const [item,setItem] = useState([{
    title:"Buy Mango",
    text: "From Market Place"
  }
  ]);
  const [edit,setEdit] = useState({
    status:false,
    id: null
  }); 
 
  const pass = {
    input: input,
    setInput: setInput,
    item :item,
    setItem: setItem,
    edit : edit,
    setEdit: setEdit
  }



  return (
  <>
    <Container maxWidth="sm">
      <div className="todo-app">
      <Typography variant="h4" component="h2" style={{marginBottom:"20px", textAlign:'center'}}>
      Todo App
      </Typography>

      <InputBlock pass={pass} />
      <TodoList  pass={pass}   /> 
      </div>
      </Container>
      </>
  );
}

export default App;
