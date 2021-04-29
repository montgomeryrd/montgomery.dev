import Home from '../../content/Home';
import './Colorless.css';

const Colorless = ({ theme }) => {
    const openedMarkUp = "<";
    const closedMarkUp = ">";
    const openedCodeBracket = "{";
    const closedCodeBracket = "}";

    return (
        <div className="colorless-container">
            <Home theme={theme} />
                 
            <span className="colorless-1">{openedMarkUp} main className="black-and-white" role="main" {closedMarkUp}</span>
            <span className="colorless-2">{openedMarkUp} ul id="profile-links" style={openedCodeBracket}listStyleType: "none"{closedCodeBracket} {closedMarkUp}</span>
            <span className="colorless-3">{openedMarkUp} a "https://github.com/montgomeryrd" target="_blank" rel="noreferrer" {closedMarkUp}</span>
            <span className="colorless-4">{openedMarkUp} i className="fab fa-github-alt" {closedMarkUp}</span>

            <div id="bird-1" className="birds"></div>
            <div id="bird-2" className="birds"></div>
            <div id="bird-3" className="birds"></div>
            <div id="bird-4" className="birds"></div>
            <div id="bird-5" className="birds"></div>

            <div className="colorless-image">
                <div className="head"></div>
                <div className="chest"></div>
                <div className="leg-left"></div>
                <div className="leg-right"></div>

                <div className="laptop-1">
                    <div></div>
                    <div></div>
                </div>

                <div className="laptop-2">
                    <div></div>
                    <div className="laptop-2-screen">
                        {openedMarkUp}main id="home-container" className={`${theme}-home`} 
                            role="main"{closedMarkUp}
                            {openedMarkUp}section className="home-jumbotron"{closedMarkUp}
                                {openedMarkUp}section className="home-information"{closedMarkUp}
                                    {openedMarkUp}h1{closedMarkUp}Richard Montgom{openedMarkUp}span 
                                    className="invert"{closedMarkUp}ery{openedMarkUp}/span{closedMarkUp}{openedMarkUp}/h1{closedMarkUp}
                                    {openedMarkUp}h2{closedMarkUp}Software{openedMarkUp}/h2{closedMarkUp}
                                    {openedMarkUp}h3{closedMarkUp}Developer{openedMarkUp}/h3{closedMarkUp}
                                    {openedMarkUp}a href="https://www.google.com/maps/place/
                                    Kitsap+County,+WA/@47.6866071,-123.2897091,9z/data=!4m5!
                                    3m4!1s0x54904f05579719ab:0xf361976886df6ce5!8m2!3d47.647
                                    6607!4d-122.6412583" target="_blank" rel="noreferrer"{closedMarkUp}
                                        {openedMarkUp}span className="home-location-1"{closedMarkUp}
                                        {openedMarkUp}i className="fas fa-map-marker-alt"{closedMarkUp}
                                        {openedMarkUp}/i{closedMarkUp}Kitsap Peninsula,{openedMarkUp}/span{closedMarkUp}
                                        {openedMarkUp}span className="home-location-2"{closedMarkUp}
                                        Washington{openedMarkUp}/span{closedMarkUp}
                                    {openedMarkUp}/a{closedMarkUp}
                                {openedMarkUp}/section{closedMarkUp}

                                {openedMarkUp}section className="home-contact-links"{closedMarkUp}
                                    {openedMarkUp}a href="https://github.com/montgomeryrd" 
                                    target="_blank" rel="noreferrer"{closedMarkUp}
                                        {openedMarkUp}i className="fab fa-github-alt"{closedMarkUp}{openedMarkUp}/i{closedMarkUp}
                                    {openedMarkUp}/a{closedMarkUp}
                                    {openedMarkUp}a href="https://www.linkedin.com/in/
                                    montgomeryrd/" target="_blank" rel="noreferrer"{closedMarkUp}
                                        {openedMarkUp}i className="fab fa-linkedin-in"{closedMarkUp}{openedMarkUp}/i{closedMarkUp}
                                    {openedMarkUp}/a{closedMarkUp}
                                    {openedMarkUp}a href="https://twitter.com/ReallyGreen
                                    Code" target="_blank" rel="noreferrer"{closedMarkUp}
                                        {openedMarkUp}i className="fab fa-twitter"{closedMarkUp}{openedMarkUp}/i{closedMarkUp}
                                    {openedMarkUp}/a{closedMarkUp}
                                {openedMarkUp}/section{closedMarkUp}
                    </div>
                    <div></div>
                </div>

                <div className="laptop-3">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Colorless;