import Header from "../components/header/Header";
import '../css/jobs.css';
import {getAllStudies} from "../studies";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Studies(){
    const studies=getAllStudies();

    return(
        <div>
            <Header/>
            <div>
            {studies.map(studies=>

                <div key={studies.id} className="jobs">
                    <div className="jobs__title">
                        {studies.level}
                    </div>
                    <div className="jobs__info">
                        {studies.institution}
                    </div>
                    <div className="jobs__btn">
                            <Link to={`${studies.id}`}>Ver más</Link>
                    </div>
                </div>

                )}
            </div>
            <Footer/>
        </div>

    );
}

export default Studies;