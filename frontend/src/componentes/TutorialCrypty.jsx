import Slider from "./Slider";
import TutorialStyles from "./estilos/TutorialStyles.css";

const TutorialCrypty = () => {


    return(
        <div className="tutorial">
            <h1 className="como-usar-crypty">Como usar Crypty</h1>
            {<Slider/>}
        </div>
    );
}

export default TutorialCrypty;