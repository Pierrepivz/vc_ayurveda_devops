
import './App.css';
import './Globals.css';
import Header from "./Header/Header.js";
import Presentation from "./Presentation/Presentation.js";
import Ayurveda from "./Ayurveda/Ayurveda.js";
import Offre from "./Offre/Offre.js";
import Parcours from "./Parcours/Parcours.js";
import Temoignages from "./Temoignages/Temoignages.js";
import Footer from "./Footer/Footer.js";
import Retraite from "./Retraite/Retraite.js";
import { useEffect } from "react";

function App() {

  useEffect(() => {

    
    window.location.href = "https://www.medoucine.com/consultation/paris/victor-clement/2272";

    
  });

  
 
  return (
    <div className="App">

      
         
        <Presentation/>
        <Ayurveda/>
        <Offre/>
        <Parcours/>
        <Temoignages/>
        <Footer/>
        
       
          
        
     
    </div>
  );
}

export default App;
