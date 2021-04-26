import Home from '../../content/Home';
import './Colorless.css';

const Colorless = ({ theme }) => {
    const openedMarkUp = "<";
    const closedMarkUp = ">";
    const openedCodeBracket = "{";
    const closedCodeBracket = "}";

    return (
        <main id="colorless-container" className="one-page-flex-row" role="main">
            <span className="colorless-1">{openedMarkUp} main className="black-and-white" role="main" {closedMarkUp}</span>
            <span className="colorless-2">{openedMarkUp} ul id="profile-links" style={openedCodeBracket}listStyleType: "none"{closedCodeBracket} {closedMarkUp}</span>
            <span className="colorless-3">{openedMarkUp} a "https://github.com/montgomeryrd" target="_blank" rel="noreferrer" {closedMarkUp}</span>
            <span className="colorless-4">{openedMarkUp} i className="fab fa-github-alt" {closedMarkUp}</span>
            <Home theme={theme} />
        </main>
    )
}

export default Colorless;