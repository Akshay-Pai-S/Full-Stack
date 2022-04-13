import './App.css';
import pic from './hello.jpg';
import {useState} from 'react';

function App() {
  let[i,setI]=useState(0);
  const [userInput, setUserInput ]=useState("")
  const [result, setResult] = useState("")

  const increment=()=>
  {
    setI(i+1);
    console.log(i);
  }
  const handlechange = (event) =>
  {
    setUserInput(event.target.value)
  }
  const checkPalindrome=()=>
  {
    const temp=userInput.split("").reverse().join("");
    if(userInput === temp)
    {
      setResult("It's a Palindrome")
    }
    else{
      setResult("It's not a palindrome")
    }
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{i}</h1>
      <h1 style={{fontSize:100,color:'red'}}>{userInput}</h1>
      <h5>{result}</h5>
      <img src={pic} alt="IMG" width="20%" height="20%"></img>
      <br></br><br></br>
      <button onClick={increment}>increment</button>
      <br></br><br></br>
      <input onChange={handlechange}/>
      <br></br><br></br>
      <button onClick={checkPalindrome}>check</button>
      <br></br><br></br>
    </div>
  );
}

export default App;
{/*to start type "npm start" in terminal below*/}