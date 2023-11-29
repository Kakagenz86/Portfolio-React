import React from 'react'
import './style.css'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-sm sticky-top">
            <div className="container">
                <div className="nav-title">Kaka Hardiansyah</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas sidebar offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-white fw-bold" id="offcanvasNavbarLabel">Kaka Hardiansyah</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                        <li className="nav-item">
                            <a className="nav-link" href="#beranda">Beranda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tentangsaya">Tentang Saya</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;