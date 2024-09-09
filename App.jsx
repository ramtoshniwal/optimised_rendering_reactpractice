import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'; 


function App() {
  return(

     <div>
     <RenderUpdates/>
     <Header title = " dhruv"></Header>
     </div>
  )

}

function RenderUpdates()
{
  const [title,setTitle] =useState("my name is dhruv");
  function updatetitle()
  {
    setTitle("my name is " + Math.random());
  }
  return <div>
      <button onClick={updatetitle}>update the title</button>
      <Header title = {title}></Header>
     </div>

}

function Header({title})
{
  return <div>
    {title};
  </div>
}
export default App
