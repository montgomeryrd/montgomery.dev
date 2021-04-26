import StyleFilter from '../../components/StyleFilter';
import Home from '../../content/Home';
import About from '../../content/About';
import Projects from '../../content/Projects';

const Bauhaus = ({ theme, setTheme }) => {
    return (
        <main id="bauhaus-container" className="one-page-flex-row" role="main">
            <section className="bauhaus-left">
                <About theme={theme} />
            </section>
            <section className="bauhaus-center">
                <Home theme={theme} />
            </section>
            <section className="bauhaus-right">
                <StyleFilter theme={theme} setTheme={setTheme} />
                <Projects theme={theme} />
            </section>
        </main>
    )
}

export default Bauhaus;