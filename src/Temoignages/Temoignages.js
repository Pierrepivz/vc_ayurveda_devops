import "./Temoignages.css";
import Slider from "./Slider.js";
import { useState } from "react";

export default function Temoignages() {

    const [name,setName] = useState("");
    
    function nom_temoignage(){
     const test = new URLSearchParams("tem").toString();
     setName("fuck it"); 

    }
    
    
    
    
    
    

return(




    <div class="Temoignages block">

        <Slider class="move" onClick={nom_temoignage}/>

        <div class="temoignages_info">
        <div class="nom_client">
<h1>{name}</h1>
            <div class="underline"></div>
        </div>
        
        

        </div>

    </div>
);









}