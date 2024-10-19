import "./Temoignages.css";
import Slider from "./Slider.js";
import { useState , useEffect } from "react";

export default function Temoignages() {

    const [name,setName] = useState("Anna");
    const [num_temoignage,setTem] = useState("t_1");

    

    function content_switch(value,name){
        var content = document.querySelector('.slider-content');
        content.classList.remove(num_temoignage);
        content.classList.add(value);
        setTem(value);
        setName(name);
    }    
        


    
    
    
    
    
    
    
    
    
    

return(




    <div class="Temoignages block">

        <Slider class="move"/>

        <div class="temoignages_info">
        <div class="nom_client">
<h1 >{name}</h1>
            <div class="underline"></div>
        </div>
        
        

        </div>

        <div class="tem_box">

<a onClick={(e) => content_switch("t_1","Anna")}></a>
<a onClick={(e) => content_switch("t_2","Brigitte")}></a>
<a onClick={(e) => content_switch("t_3","Chloé")}></a>
<a onClick={(e) => content_switch("t_4","Alice")}></a>
<a onClick={(e) => content_switch("t_5","Joevany (1er rdv)")}></a>



</div> 

        

    </div>
);









}