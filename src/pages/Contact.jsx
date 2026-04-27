import PagesHero from "../components/PagesHero";
import picture from "../assets/prayingteens.jpg"
import Footer from "../components/Footer";


export default function Contact(){

    return(
        <div>
            <PagesHero 
                title={"CONTACT US"}
                subtitle={"Get In Touch Today"}
                backgroundImage={picture}/>


            <Footer />
        </div>
    )
    
}