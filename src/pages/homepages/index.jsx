import React from 'react'
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import AboutMe from '../../components/about';
import Project from '../../components/project';
import Contact from '../../components/Contact';
import Footer from '../../components/footer';
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import img8 from '../../assets/images/img8.png'
import img9 from '../../assets/images/img9.png'

const HomePages = () => {
    const projectMe = [{
        image: img1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://wedding-web-five.vercel.app/'
    },
    {
        image: img2,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://calcuweb.vercel.app/'
    },
    {
        image: img3,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://onlineshoes.vercel.app/'
    },
    {
        image: img4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://miniport.vercel.app/'
    },
    {
        image: img5,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://car-rental-gilt-eight.vercel.app/'
    },
    {
        image: img6,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://kandaaaff.vercel.app/'
    },
    {
        image: img7,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://boxmodel-cyan.vercel.app/'
    },
    {
        image: img8,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://cp6-react1.vercel.app/'
    },
    {
        image: img9,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        link: 'https://genz-film.vercel.app/'
    }]

    return ( 
        <div>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Project data={projectMe}/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default HomePages;