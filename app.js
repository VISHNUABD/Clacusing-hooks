import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

const App=()=>{
  return <Calc/>
}

const Calc=()=>
{
  const[firstinput,firstinputfun]=useState("")
  const[secondinput,secondinputfun]=useState("")
  const[extra,extratextfun]=useState([])
  const[dropdown,dropdownfunction]=useState()
  const[result,resultfunction]=useState()
  const[newtextboxresult,newtextboxresultfunction]=useState("0")
  let count=0;  

  const changefunction=(event)=>{
     firstinputfun(event.target.value)
  }

  const changefunction1=(e)=>{
    secondinputfun(e.target.value)
 }

 const extratextbox=()=>{
      extratextfun([...extra,""])
      count=count+1;
      console.log(count);

 }

 const drpdwn=(en)=>{
    dropdownfunction(en.target.value)
 }

  const calcoperation=()=>{

    if(dropdown==="ADD")
    {

      resultfunction(parseInt(firstinput)+parseInt(secondinput));
      console.log(result)
      for(let i=0;i<=count;i++)
      {
      console.log("hello")
      }

    }
    else if(dropdown==="SUB")
    {
      resultfunction(parseInt(firstinput)-parseInt(secondinput));
    }
    else if(dropdown==="MODULUS")
    {
      resultfunction(parseInt(firstinput)%parseInt(secondinput))
    }
  }

    const extratxtchange=()=>
    { 
      var n=document.getElementById("n").value
      if(count===0)
      {
        newtextboxresultfunction(result)
    }
    else
    {
        newtextboxresultfunction(n+result)
    }
      

    }




  
return(
  <div className="container">
     <input type="text" onChange={changefunction}></input><br></br>
     <input type="text"  onChange={changefunction1}></input><br></br>
     
     <select onChange={drpdwn}>
       <option>CHOOSE</option>
       <option>ADD</option>
       <option >SUB</option>
       <option >MODULUS</option>
     </select><br></br>
     <button onClick={calcoperation}>SUBMIT</button>
     <br></br>
     <button onClick={extratextbox}>ADD MORE</button>
     <div>
  {
      extra.map((i,index)=>{
        return (
          <div key={index}>
          <input type="text" id="n" onChange={extratxtchange}></input>
          <h2>{index}</h2>
        </div>
        )
        
      })
     }
     <li>{newtextboxresult}</li>
     </div>
       </div>
)
}
export default App;
