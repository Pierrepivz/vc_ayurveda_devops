import "./Header.css";

export default function Header(){

    function ayurveda(){
       const element = document.getElementById("ayurveda");
    element.scrollIntoView({ behavior: "smooth" });
    
    }
    function parcours(){
        const element = document.getElementById("parcours");
     element.scrollIntoView({ behavior: "smooth" });
     
     }
    

    

    return( 
        <header>

            <div class="nav-bar">
                <a onClick={ayurveda}><p>présentation</p> <underline></underline></a>


                <a onClick={parcours}><p>mon parcours</p> <underline></underline></a>


                <a href="https://www.medoucine.com/consultation/paris/victor-clement/2272"><p>prendre rendez-vous</p> <underline></underline></a>
            </div>

        </header>
    );



}