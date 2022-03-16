import Navbar from "./Navbar.js";
import React from "react"
import Main from "./Main.js";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)


    function toggle() {
        setDarkMode(prevState => !prevState)
    }



  return (
  
      <div className="container">
        <Navbar
            toggleDarkMode={toggle}
             darkMode={darkMode} 
             />
          
          <Main 
            
            darkMode={darkMode} 
            />

      </div>
     
  );
}

export default App;
