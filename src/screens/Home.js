import { useEffect, useState } from 'react';

import Bauhaus from '../css-components/Bauhaus/Bauhaus';
import '../css-components/Bauhaus/Bauhaus.css';
import OnWhite from '../css-components/OnWhite/OnWhite';
import '../css-components/OnWhite/OnWhite.css';
import Colorless from '../css-components/Colorless/Colorless';
import '../css-components/Colorless/Colorless.css';
import Glassmorphism from '../css-components/Glassmorphism/Glassmorphism';
import '../css-components/Glassmorphism/Glassmorphism.css';
import DarkMode from '../css-components/DarkMode/DarkMode';
import '../css-components/DarkMode/DarkMode.css';
import Immersive from '../css-components/Immersive/Immersive';
import '../css-components/Immersive/Immersive.css';
import BigBold from '../css-components/BigBold/BigBold';
import '../css-components/BigBold/BigBold.css';
import ThreeD from '../css-components/ThreeD/ThreeD';
import '../css-components/ThreeD/ThreeD.css';

const Home = ({ theme }) => {
    const [page, setPage] = useState('');

    useEffect(() => {
        switch(theme) {
            case 'bauhaus':
                setPage(<Bauhaus />);
                return;
            case 'on-white':
                setPage(<OnWhite />);
                return;
            case 'colorless':
                setPage(<Colorless />);
                return;
            case 'glassmorphism':
                setPage(<Glassmorphism />);
                return;
            case 'dark-mode':
                setPage(<DarkMode />);
                return;
            case 'immersive':
                setPage(<Immersive />);
                return;
            case 'big-bold':
                setPage(<BigBold />);
                return;
            case 'three-d-elements':
                setPage(<ThreeD />);
                return;
            default: break;
        }
    }, [theme]);

    return (
        <main id="home-container" className={theme} role="main">
            {page}
            <section className="home-jumbotron">
                <section className="home-information">
                    <h1>Richard Montgomery</h1>
                    <h2>Software</h2>
                    <h3>Developer</h3>
                    <a href="https://www.google.com/maps/place/Kitsap+County,+WA/@47.6866071,-123.2897091,9z/data=!4m5!3m4!1s0x54904f05579719ab:0xf361976886df6ce5!8m2!3d47.6476607!4d-122.6412583" target="_blank" rel="noreferrer">
                        <span className="home-location-1"><i className="fas fa-map-marker-alt"></i>Kitsap Peninsula,</span>
                        <span className="home-location-2">Washington</span>
                    </a>
                </section>

                <section className="home-contact-links">
                    <a href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com/ReallyGreenCode" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </section>

                <section className="tech-stack-container">
                    <h4 className="title">TECH STACK</h4>
                    <div className="stack">
                        <span className="item">HTML5</span>
                        <span className="item">CSS3</span>
                        <span className="item">JavaScript</span>
                        <span className="item">NodeJS</span>
                        <span className="item">MongoDB</span>
                        <span className="item">React</span>
                        <span className="item">Firebase</span>
                        <span className="item">SASS</span>
                        <span className="item">Github</span>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home;