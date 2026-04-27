import PagesHero from "../components/PagesHero";
import picture from "../assets/prayingteens.jpg"
import Footer from "../components/Footer";


export default function Gallery(){
    
    return(
        <div>
            <PagesHero 
                title={"OUR GALLERY"}
                subtitle={"View Our Past Events"}
                backgroundImage={picture}/>

            <Footer />
        </div>
    )

}