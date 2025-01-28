import "./Temoignages.css";
import Slider from "./Slider.js";
import { useState } from "react";

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


        


    }


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
  

return(




    <div class="Temoignages block">

        <Slider class="move"/>

        <div class="temoignages_info">
        <div class="nom_client">
<h1>{name}</h1>
            <div class="underline"></div>
        </div>
        
        

        </div>

        <div class="tem_box">

<a  onClick={(e) => button_manager(0,id_tem).then(()=> setT(id_tem - 1))}>←</a>
<a  onClick={(e) => button_manager(1,id_tem).then(()=> setT(id_tem + 1))}>→</a>

</div> 

        

    </div>
);









}