import "./Offre.css";
import icon_bilan from "../images/icon_bilan.svg";
import icon_marma from "../images/icon_marma.svg";
export default function Presentation(){

      

return(

<div class="Offre block">

  <h2>Je vous propose :</h2> 

  <div class="detail_offre">
      <div class="cercle_logo" >
      <img id="icon_bilan" src={icon_bilan} ></img>
      </div>
      <h3>Consultation / bilan de santé</h3>
      <underline></underline>
      <text2>pour faire le point et améliorer votre
bien-être physique et mental</text2>
      </div> 

      <div class="detail_offre">
      <div class="cercle_logo">
      <img id="icon_marma" src={icon_marma} ></img>
      </div>
      <h3>Soin énergétique Marma</h3>
      <underline></underline>
      <text2>pour réactiver la circulation énergétique de
votre corps et lui rendre toute sa vitalité</text2>
<text2>Au choix :</text2><text2>- Marma Détox - Marma Anti-stress - Marma sur mesure</text2>
      </div> 

      
    
      
      

</div>


);




}