import "./styles.css";
import React from 'react'

export default function App() {
const [url,setUrl] = React.useState('')
const handleChange = (e) => {
e.preventDefault();
const {value} = e.target
setUrl(value)
console.log(' searching..',url)
}

const deb = (handle, delay) => {
  let timer 
  return (...args ) =>{
clearTimeout(timer)
timer = setTimeout(() => handle(...args), delay)
  }
}

  return (
    <>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    
      <input type='search' placeholder = 'search' onChange={deb(handleChange,500)}/>
     
    </>
  );
}
