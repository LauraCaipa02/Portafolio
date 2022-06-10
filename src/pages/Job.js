import {useParams} from "react-router-dom";
import Header from "../components/header/Header";
import{getJob} from '../jobs'

function Job(){
    const params=useParams();
    const job=getJob(parseInt(params.id));
    return(
        <div>
            {params.id}
            <Header/>
            <h1>Detalle de Job</h1>
            <div>
                <h1>{job.company}</h1>
                <p><strong>Cargo</strong>{job.workPosition}</p>
                <p><strong>Año</strong>{job.year}</p>
            </div>
        </div>
    );
}

export default Job;