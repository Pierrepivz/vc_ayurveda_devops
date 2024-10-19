import "./Footer.css";
import facebook from "../images/facebook.svg";
import insta from "../images/insta.svg";
import medoucine from "../images/medoucine.svg";

export default function Temoignages(){

 function redirect(){
     window.location = "https://www.medoucine.com/consultation/paris/victor-clement/2272?fbclid=IwY2xjawF-CO1leHRuA2FlbQIxMAABHU-NVR8rWbF1u26FzjfBlgO7QdtKHi4DjgDHFf2tafz4gbfsKSuNJyEGUw_aem_7D5NEyztYc6CzZ7vDh2c_w";
 }   

return(




    <div class="Footer block">

        <button class="button_rdv" onClick={redirect}>Prendre rendez-vous</button>

        <p>Victor Clément Ayurvéda<br/><br/>
victorclementayu@protonmail.com<br/><br/>

06 23 41 54 76</p>

        <div class="links">
        <a href="https://www.facebook.com/profile.php?id=100075737362989"><img src={facebook} ></img></a>
        <a href="https://www.instagram.com/clement_ayurveda/"><img src={insta}></img></a>
        <a href="https://www.medoucine.com/consultation/paris/victor-clement/2272?fbclid=IwY2xjawF-CO1leHRuA2FlbQIxMAABHU-NVR8rWbF1u26FzjfBlgO7QdtKHi4DjgDHFf2tafz4gbfsKSuNJyEGUw_aem_7D5NEyztYc6CzZ7vDh2c_w"><img src={medoucine}></img></a></div>
        
        

        

    </div>
);









}