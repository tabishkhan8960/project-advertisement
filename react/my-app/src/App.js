import { useState } from 'react';
import './App.css';
import Aboute from './components/Aboute';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert=(massage,type)=>
  {
   setalert({
    mas:massage,
    type:type

   }

   )
   setTimeout(() => {
    setalert(null)
   }, 3000);
  }

  const togglle  = () =>{
    if(mode==='dark')
    {
      setmode('light');
      showalert("dark disable  ","success  ")
      document.title='light mode';
    }
    else{
      setmode('dark');
      showalert("dark mode enable","success  ")
      document.title='dark mode';
    }

  }
  return (
    
   <>
   
   <Router>
          
       
<Navbar title="Color print Advertising" mode ={mode} togglle = {togglle}/>
<Alert alert={alert}/>
<div className="container my-8">
<Routes>
                <Route  exact path="/" element={<TextForm  showalert={showalert} heading="Enter the text to analyze below" mode ={mode}/>} />
                <Route exact path="/about" element={<Aboute></Aboute>} />
            </Routes>

</div>
</Router>

</>
  );
}

export default App;
