
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
/*<div class="presentation_text">
           <p>Médecine Traditionnelle Ayurvédique</p>
             <underline_text></underline_text>
               <p>Paris</p>
    </div>*//* <div class="logo"></div>*/

    /*<div class="retraite_block">
 <div class="retraite_text">
 <div class="logo"></div>
 <strong>Retraite Yoga & Ayurveda dans la Drôme</strong> <br/>
<italic>du 5 au 11 avril</italic><br/>
<p>Au programme : repos, détoxification du corps, méditation, nourriture revitalisante,<br/> eau de source, sauna et ballades dans la région.
  Pour apprendre en intelligence de nouvelles habitudes de vie.</p></div>
<div class="row">
 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSVMFRIclqHcwFmbRbiNax95UEconCpTd3ZRvXOkARFplPSw/viewform" target="_blank"><button class="button_rdv" id="button_retraite">Je suis intérressé.e</button></a>
 <a href="https://www.dropbox.com/scl/fi/51zk5fypc4lgor58h66br/Retraite-Yoga-Ayurv-da-Dr-me-Avril-2025-NC.pdf?rlkey=hmhiwfhgb1wraq4ex3px90uxc&e=1&st=q4h6egov&dl=0" target="_blank"><button class="button_rdv" id="button_retraite">En savoir plus</button></a></div>
 </div>   */

  
 
  return (
    <div className="App">

        
         <Header/>
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
