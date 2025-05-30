import "./Parcours.css";


export default function Parcours(){
    

    
    
    
    function text_display(){
        
        var button_plus = document.querySelector('.button_plus');
        
   


    var second_text = document.querySelector(".second_text");
    if(second_text.classList.contains("display_none")){

        second_text.classList.remove("display_none");
        
        button_plus.innerHTML = "↑";

    }else{
        second_text.classList.add("display_none");
        
        button_plus.innerHTML = "↓";
    }
        

    }
    
        

return(

<div class="Parcours">
    <div id="parcours_photo">
        <div class="underline"></div>
        <div class="photo_vca"></div>

    </div>
    <div id="parcours_text">
        <h1>Mon Parcours</h1>
        <text>Les philosophies et sciences orientales m’ont toujours attirées. J’ai commencé
par le Bouddhisme et la méditation, en passant des années à approfondir ma
pratique méditative, passant plusieurs

 années en Inde entres autres, dans des
centres de méditations et des ashrams.<br/><br/> Les retraites silencieuses en groupe ou en
solitaire ont aussi été partie intégrante de ces années d’exploration intérieure.
En 10 années de pratique quotidienne, je cumule à présent près de 10000 heures
de méditation.





<br/><br/>

Après avoir développé puis établi une certaine stabilité mentale en mon for
intérieur, j’ai eu à cœur de comprendre les mécanismes du corps et de la santé.
Cela m’a peu à peu emmené vers l’Ayurvéda, que j’étudie depuis 8 ans
maintenant. Cette science médicale indienne m’a tout de suite parlé, de par sa

cohérence, sa limpidité et sa justesse. Grâce à mon exercice méditatif et mon
propre ressenti, je pouvais valider moi-même ses grands principes.
Quelques années plus tard, j’ai rejoint le Dr Vasant Lad, un docteur indien
réputé mondialement, pour apprendre sous son aile pendant 2 années complètes

d’études intenses et poussées.


<div class="read_more"> <h2>+</h2></div>

</text>
</div>
    
   
</div>


);
}