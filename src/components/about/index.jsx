import React from 'react'
import './style.css'
import { Instagram, Github, Linkedin, Youtube} from 'react-bootstrap-icons';

const AboutMe = () => {
    return (
        <div>
            <div className="about" id='tentangsaya'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1 className='about-title'>Tentang Saya</h1>
                            <p className='text-black fw-semibold'>Halo. Perkenalkan Nama lengkap saya adalah Muhamad Kaka Hardiansyah, saya fresh gradute SMA jurusan IPA, Sebagai lulusan SMA yang bersemangat, saya telah mengasah keterampilan saya dalam pengembangan front end dengan belajar otodidak dan mengikuti salah satu program bootcamp Front End dari Binar Academy. Saya berdedikasi di dunia pengembangan front end dengan semangat belajar yang tinggi, dan berusaha untuk menciptakan pengalaman pengguna yang menarik dan mudah digunakan. Saya telah mendalami HTML, CSS, JavaScript dan juga belajar menggunakan library ReactJS.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1 className='about-title'>Mari Berteman</h1>
                            <p className='text-black fw-semibold'>Mari Berteman untuk sharing pengalaman tentang dunia programer dan menambah relasi</p>
                            <a className='about-sosmed' href='https://www.instagram.com/kakaa_genzz/'>
                                <Instagram width="25" height="25" />
                            </a>
                            <a className='about-sosmed' href='https://github.com/Kakagenz86'>
                                <Github width="25" height="25" />
                            </a>
                            <a className='about-sosmed' href='https://www.linkedin.com/in/muhamad-kaka-hardiansyah-08535727a/'>
                                <Linkedin width="25" height="25" />
                            </a>
                            <a className='about-sosmed' href='https://www.youtube.com/channel/UCTBlZDK-nyFWzY1t2Auixlw'>
                                <Youtube width="25" height="25" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;