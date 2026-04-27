import PagesHero from "../components/PagesHero";
import picture from "../assets/prayingteens.jpg"

export default function About(){

    return(
        <div>
            <PagesHero 
                title={"ABOUT"}
                subtitle={"Get To Know More About Us"}
                backgroundImage={picture}/>
        </div>
    )
    
}