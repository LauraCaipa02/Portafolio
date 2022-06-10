import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Banner from '../components/banner_home/Banner';

function Home(){
    return(
        <section className="home">
            <Header/>
            <Banner/>
            <Footer/>
        </section>
    )
}

export default Home;