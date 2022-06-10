import '../css/jobs.css';
import Header from "../components/header/Header";
import {getAllJobs} from '../jobs';
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Jobs(){
    const jobs=getAllJobs();

    return(
        <div>
            <Header/>
            <h1>Bienvenidos</h1>
            <h1>Mis Trabajos</h1>
            <div className="container__jobs">
            {jobs.map(job=>
                <div key={job.id} className="jobs">
                    <div className="jobs__title">
                        {job.company}
                    </div>
                    <div className="jobs__info">
                        {job.year}
                    </div>
                    <div className="jobs__btn">
                        <Link to={`${job.id}`}>Ver más</Link>
                    </div>
                </div>
                )}
            </div>
            <Footer/>
        </div>
);
}

export default Jobs;