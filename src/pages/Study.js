import {useParams} from "react-router-dom";
import Header from "../components/header/Header";
import {getStudy} from '../studies'

function Study(){
    const params=useParams();
    const study=getStudy(parseInt(params.id));
    return(
        <div>
            <Header/>
            <h1>Detalle de Estudios</h1>
            <div>
                <h1>{study.level}</h1>
                <p><strong>Institución </strong>{study.institution}</p>
                <p><strong>Carrera </strong>{study.degree}</p>
                <p><strong>Año </strong>{study.year}</p>
            </div>
        </div>
    );
}

export default Study;