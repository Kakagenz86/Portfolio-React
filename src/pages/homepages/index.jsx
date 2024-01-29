import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import AboutMe from '../../components/about';
import Project from '../../components/project';
import Contact from '../../components/Contact';
import Footer from '../../components/footer';


const HomePages = () => {
    const projectMe = [{
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'web wedding image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'company profile Utama Medical',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'olshop image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'mini portfolio image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'car rental image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'shop affiliate image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'box-model image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'react from binar image',
        link: '#'
    },
    {
        image: 'https://placeholder.com/200x200',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'web film image',
        link: '#'
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