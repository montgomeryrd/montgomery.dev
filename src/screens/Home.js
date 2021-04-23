import { useEffect, useState } from 'react';

import BauhausHome from '../css-components/Bauhaus/BauhausHome';
import '../css-components/Bauhaus/Bauhaus.css';
import OnWhiteHome from '../css-components/OnWhite/OnWhiteHome';
import ColorlessHome from '../css-components/OnWhite/OnWhiteHome';
import GlassmorphismHome from '../css-components/Glassmorphism/GlassmorphismHome';
import DarkModeHome from '../css-components/DarkMode/DarkModeHome';
import ImmersiveHome from '../css-components/Immersive/ImmersiveHome';
import BigBoldHome from '../css-components/BigBold/BigBoldHome';
import ThreeDHome from '../css-components/ThreeD/ThreeDHome';

const Home = ({ theme }) => {
    const [page, setPage] = useState(<BauhausHome />);

    useEffect(() => {
        switch(theme) {
            case 'bauhaus':
                setPage(<BauhausHome />);
                return;
            case 'on-white':
                setPage(<OnWhiteHome />);
                return;
            case 'colorless':
                setPage(<ColorlessHome />);
                return;
            case 'glassmorphism':
                setPage(<GlassmorphismHome />);
                return;
            case 'dark-mode':
                setPage(<DarkModeHome />);
                return;
            case 'immersive':
                setPage(<ImmersiveHome />);
                return;
            case 'big-bold':
                setPage(<BigBoldHome />);
                return;
            case '3d-elements':
                setPage(<ThreeDHome />);
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
                    <a href="https://twitter.com/richard04755318" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </section>

                <section className="tech-stack-container">
                    <h4 className="title">TECH STACK</h4>
                    <div className="stack">
                        <span className="item">HTML5</span>
                        <span className="item">CSS3</span>
                        <span className="item">JavaScript</span>
                        <span className="item">SASS</span>
                        <span className="item">Github</span>
                        <span className="item">NodeJS</span>
                        <span className="item">React</span>
                        <span className="item">MongoDB</span>
                        <span className="item">Firebase</span>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home;