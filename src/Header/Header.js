import "./Header.css";

export default function Header(){

    return( 
        <header>

            <div class="nav-bar">
                <a onClick={(e) => window.scrollTo({
  top: 750,
  left: 0,
  behavior: "smooth",
})}><p>présentation</p> <underline></underline></a>


                <a onClick={(e) => window.scrollTo({
  top: 2250,
  left: 0,
  behavior: "smooth",
})}><p>mon parcours</p> <underline></underline></a>
                <a onClick={(e) => window.scrollTo({
  top: 5000,
  left: 0,
  behavior: "smooth",
})}><p>prendre rendez-vous</p> <underline></underline></a>
            </div>

        </header>
    );



}