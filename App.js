import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [Inputstate, setInputstate]= useState("")
  const [item, setitem] = useState([])

  const Listcomp =(props) => {
        return <li onClick={props.handleClick} style={{textDecoration:props.complete ? 'line-through': 'none'}}>{props.text}</li>
  };

  const items = (event) => {
    setInputstate(event.target.value);
  };
  
  const ListofItems = () =>{
    const itemss ={
      id: (Math.random()*10),
      value: Inputstate,
      complete: false
      }
      setitem((olditem)=>{
        return [...olditem, itemss];
      })
      setInputstate('');
      console.log(itemss);
  };

  const strike=(ids)=>{
    console.log("deleted",ids);
    
    //const a= item.filter((x)=> x.id!==ids) ------to delete the item from the list
    

  const a= item.map((x)=>{
    if(x.id===ids){
      x.complete=!x.complete;
      }
    return x;
    })
    setitem(a);
    console.log(a); 
  };

    return (
      <div>
        <div>
          <h1>TODO LIST</h1>
          <input type="text" placeholder='add items' value={Inputstate} onChange={items} />
          <button type='submit' onClick={ListofItems}>submit</button>
          <ul>
            { item.map((itemval, index)=>{
              return <Listcomp key={index} text={itemval.value} complete={itemval.complete} handleClick={()=>strike(itemval.id)} />
            })}
          </ul>
        </div>
      </div>
    );
  }

export default App;
