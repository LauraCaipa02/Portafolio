import '../footer/Footer.css';

function Footer(){  
    return(
        <footer>
            <p>Developed by Laura Caipa - 2022</p>
            <div className='container__icons'>
            <p>Contact me</p>
            <div className='group__icons'>
            <a href='https://github.com/LauraCaipa02' className='item2' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github-square"></i></a>
            <a href='https://www.linkedin.com/in/lauracaipa16/' className='item2' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>           
            <a href='https://www.facebook.com/' className='item2' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-square"></i></a>
            <a href='https://www.instagram.com/' className='item2' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram-square"></i></a>
            </div>
            </div>
        </footer> 
    )
}

export default Footer;