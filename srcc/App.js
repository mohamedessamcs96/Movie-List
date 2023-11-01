import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';


const Person= (props)=>{
  return (
    <>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Job:{props.jop}</p>
    </>
  );
}



function App() {
  const name='Rehab'
  const is_name_showing=false;
  const [counter,setCounter]=useState(0);
  useEffect( () => {
    // counter =100; never set the value of state manually
    setCounter(100);

  },[])
  return (
    <div className="App"> 


      <button onClick={()=>setCounter((prevCounter) => prevCounter+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCounter) => prevCounter-1)}>-</button>
       
     <h1>Hello, {is_name_showing ? name : 'There'} </h1>   
      {name ?(
        <>
          {name}
        </>
        ):
      ('No name')
      } 
    
    <Person  name="John" age={26} job="TA"  />
     <Person />
    </div>

    
  );
  
}

export default App;
