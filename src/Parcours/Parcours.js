
import "./Parcours.css";


export default function Parcours(){
    

    
    
    
    function text_display(){
        
        var button_plus = document.querySelector('.button_plus');
        var button_moins = document.querySelector('.button_moins');
        var parcours_text = document.querySelector('#parcours_text text');

        if(button_moins.classList.contains("display_none")){


        button_plus.classList.add("display_none");
        button_moins.classList.remove("display_none");
        parcours_text.classList.remove("smaller");
        parcours_text.classList.add("bigger");
    
    }else{

        button_moins.classList.add("display_none");
        button_plus.classList.remove("display_none");
        parcours_text.classList.add("smaller");
        parcours_text.classList.remove("bigger");

    }
        

    }
    
        

return(

<div class="Parcours block">
    <div id="parcours_photo">
        <div class="underline"></div>
        <div class="photo_vca"></div>

    </div>
    <div id="parcours_text">
        <h1>Mon Parcours</h1>
        <text class="smaller">Les philosophies et sciences orientales m’ont toujours attirées. J’ai commencé
par le Bouddhisme et la méditation, en passant des années à approfondir ma
pratique méditative, passant plusieurs

 années en Inde entres autres, dans des
centres de méditations et des ashrams. Les retraites silencieuses en groupe ou en
solitaire ont aussi été partie intégrante de ces années d’exploration intérieure.
En 10 années de pratique quotidienne, je cumule à présent près de 10000 heures
de méditation.<button class="button button_plus" onClick={text_display}>+</button><button class="button button_moins display_none" onClick={text_display}>-</button><br/>
Après avoir développé puis établi une certaine stabilité mentale en mon for
intérieur, j’ai eu à cœur de comprendre les mécanismes du corps et de la santé.
Cela m’a peu à peu emmené vers l’Ayurvéda, que j’étudie depuis 8 ans
maintenant. Cette science médicale indienne m’a tout de suite parlé, de par sa

cohérence, sa limpidité et sa justesse. Grâce à mon exercice méditatif et mon
propre ressenti, je pouvais valider moi-même ses grands principes.
Quelques années plus tard, j’ai rejoint le Dr Vasant Lad, un docteur indien
réputé mondialement, pour apprendre sous son aile pendant 2 années complètes

d’études intenses et poussées.</text>
</div>
    
   
</div>


);






}