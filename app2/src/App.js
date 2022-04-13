import './App.css';
import {useState} from 'react';


function App() {
  const[userInput,setUserInput]=useState({
    name: "",
    usn:"",
    uni:"",
    gender:"",
    phno:""
  });
  const[result,setResult]=useState()
  const[shouldIshowvalue,setshouldIshowvalue]=useState(false);
  const handleNameChange=event=>
  {
  {/*const newObject=
  {
    name : event.target.value,
    usn : userInput.usn,
    uni : userInput.uni,
    gender : userInput.gender,
    phno : userInput.phno
  }
*/}

  setUserInput(newObject);
}
const handleDataVisibility=()=>
{

}




  return (
    <div className="App">
        <h1>Hello</h1>
        <input placeholder='Name' onChange={handleNameChange} value={userInput.name}/>
        {
          shouldIshowvalue
          ?
          <h1>userInput.name</h1>
          :
          null
        }
        <button onClick={handleDatavisibility}>Show Name</button>

    </div>
  );
}

export default App;
