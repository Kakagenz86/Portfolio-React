import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <div id='contact'>
            <div className="container contact-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 text-center">
                    <h1 className='contact-title'>Hubungi Saya</h1>
                    <p className='fw-semibold'>Isi form dibawah ini untuk menghubungi saya</p>
                    </div>
                </div>
                <form className="row row-cols-md-auto g-3 align-items-center justify-content-center" method='POST' action='https://script.google.com/macros/s/AKfycbxP8rdIZKpyOVGKRY3hErmey058ri5uCOXLeIlpjJ9fq7sJy_SBGTue5VjixR3o77gk/exec' id='my-form'>
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3">
                            <input className='contact-form ps-2' type="text" id="nama" name="nama" placeholder='Nama'/>
                        </div>
                        <div className="mb-3">
                            <input className='contact-form ps-2' type="email" id="email" name="email" placeholder='Alamat Email'/>
                        </div>
                        <div className="mb-3">
                            <input className='contact-form ps-2' type="text" id="perusahaan" name="perusahaan" placeholder='Perusahaan'/>
                        </div>
                        <div className="mb-3">
                            <input className='contact-form ps-2' type="text" id="telepon" name="telepon" placeholder='Telepon'/>
                        </div>
                        <div className="mb-3">
                            <textarea className='contact-pesan ps-2 pt-2' name="pesan" id="pesan" placeholder='Pesan'/>
                        </div>
                        <button className='btn-contact'>Kirim</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;