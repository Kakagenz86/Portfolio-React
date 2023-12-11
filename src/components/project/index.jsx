import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card';

const Project = (props) => {
    return (
        <div id='project'>
            <div className="container">
                <div className="row">
                        <h1 className='project-title'>Project Saya</h1>
                        {props.data.map((projectMe) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
                                <Card className='project-card' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" style={{ height: '170px' }} alt={projectMe.alt} src={projectMe.image} />
                                    <Card.Body>
                                            <Card.Text>{projectMe.description}</Card.Text>
                                            <a className='btn-project' target='blank' href={projectMe.link}>Lihat Sekarang</a>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Project;