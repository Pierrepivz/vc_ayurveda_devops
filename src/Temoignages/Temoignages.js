import "./Temoignages.css";
import Slider from "./Slider.js";
import { useEffect, useState } from "react";

export default function Temoignages() {

    const [name,setName] = useState("Anna");
    const [num_temoignage,setTem] = useState("t_1");
    const [id_tem,Setid] = useState(1);

    

    

    function content_switch(value,name){
        
        var content = document.querySelector('.slider-content');
        content.classList.remove(num_temoignage);
        content.classList.add(value);
        setTem(value);
        setName(name);
        console.log(num_temoignage);
 
        setTimeout(()=> {

            content.classList.remove("text-transition");

        }, 900);
        
    }  

    
/*
    const button_manager = async (value,id) => {

        var content = document.querySelector('.slider-content');
        content.classList.add("text-transition");


        if(value === 1){

            if(id === 5){

                Setid(1);
                
            }else{

                Setid(id + 1);
            }
            
        }else{
 
             if(id === 1){

                 Setid(5);
                 
                
                }else{

                 Setid(id - 1);
                 
             }
             
 
        }


      


    } */ 
    
    


    function setT(value){

        if(value > 5){
            value = 1;
        }if(value < 1){
            value = 5;
        }
            

        if(value === 1){

            content_switch("t_1","Anna");
        }
        if(value == 2){

            content_switch("t_2","Brigitte");

        }
        if(value == 3){

            content_switch("t_3","Chloé");
            
        }
        if(value == 4){

            content_switch("t_4","Alice");
            
        }
        if(value == 5){

            content_switch("t_5","Joevany (1er rdv)");
            
        }

    


    };


    function defile(){

        setT(id_tem + 1);
        Setid(id_tem + 1);
    
        if(id_tem === 5){
            Setid(1);
        }
    
    }

    


    
  

return(




    <div class="Temoignages block">
        <h2>Témoignages</h2>

        <Slider class="move"/>

        <div class="temoignages_info">
        <div class="nom_client">
            <div class="nom_client_viewport">
<h3><div>Anna</div><div>Brigitte</div><div>Chloé</div><div>Alice</div><div>Joevanny (1er rdv)</div></h3>
</div>
            <div class="underline"></div>
        </div>
        
        

        </div>

        

        

    </div>
);











}
/*<div class="tem_box">

<a  onClick={(e) => button_manager(0,id_tem).then(()=> setT(id_tem - 1))}>←</a>
<a  onClick={(e) => button_manager(1,id_tem).then(()=> setT(id_tem + 1))}>→</a>

</div> */