import './style.css'
import img from '../../assets/images/me.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer-wrapper">
                    <div className="col-md-6 col-sm-12 col-xl-3 mt-5 mb-5">
                        <p className="footer-text-wrapper">Jalan Duyung Asri Barat Gang 2 Gilimanuk, Bali, Kec.Melaya, Kab.Jembrana</p>
                        <p className="footer-text-wrapper">kakagenz86@gmail.com</p>
                        <p className="footer-text-wrapper">085-157-718-328</p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 mt-5 mb-5">
                        <h4 className='fw-bold'>About</h4>
                        <a className="footer-text-wrapper-2" href="#beranda" >Beranda</a>
                        <a className="footer-text-wrapper-2" href="#tentangsaya">Tentang Saya</a>
                        <a className="footer-text-wrapper-2" href="#project" >Project</a>
                        <a className="footer-text-wrapper-2" href="#contact" >Contact</a>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 mt-5 mb-5">
                        <p className="footer-text-wrapper">Copyright Kaka Hardiansyah 2023</p>
                        <img src={img} className='footer-logo' alt="binar-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;