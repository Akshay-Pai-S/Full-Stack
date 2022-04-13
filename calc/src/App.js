import './App.css';
import {useState} from 'react';


function App() {
  const[userInput,setUserInput]=useState("");
  //const[result,setResult]=useState(0);
  const[ex,setResult]=useState(0);
  /*let temp=0;*/
  {/*const obj={
    name:'Hello',
    usn: '123'
  }
    console.log(obj.name,obj.usn);
  const{name,usn}=obj;
*/}
const arr=[1,2,3,4];
const[v1,v2]=arr;
console.log(v1,v2);

  const handleChange=(event)=>{
    setUserInput(event.target.value);
    setResult(event.target.value);
    {/* TO PRINT 10* OF A GIVEN NUMBER
    const temp=parseInt(event.target.value)*10
    setResult(temp)
  */}
    {/*TO PRINT LOL FOR HELLO IN ANY CASE
    if (event.target.value.toLowerCase()==='hello')
    {
      setResult('LOL')
    }
    else
    {
      setResult(event.target.value)
    } 
  */}
  }
  return (
    <div className="App">
        <p>hi</p>
        <h1>{ex}</h1>
        <input onChange={handleChange} value={userInput}/>
        {/*<h2>{ex} X 1 = {ex *1}</h2>
        <h2>{ex} X 2 = {ex *2}</h2>
        <h2>{ex} X 3 = {ex *3}</h2>
        <h2>{ex} X 4 = {ex *4}</h2>
        <h2>{ex} X 5 = {ex *5}</h2>
        <h2>{ex} X 6 = {ex *6}</h2>
        <h2>{ex} X 7 = {ex *7}</h2>
        <h2>{ex} X 8 = {ex *8}</h2>
        <h2>{ex} X 9 = {ex *9}</h2>
        <h2>{ex} X 10 = {ex *10}</h2>
  */}
    </div>
  );
}

export default App;
