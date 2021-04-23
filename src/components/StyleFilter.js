import '../css-components/Bauhaus/Bauhaus.css';

const StyleFilter = ({ theme, setTheme}) => {

    return (
        <nav className={theme}>
            <ul>
                <li onClick={() => {setTheme('bauhaus')}}>
                    <span>Bauhaus</span>
                </li>
                <li onClick={() => {setTheme('on-white')}}>
                    <span>Colors on White</span>
                    </li>
                <li onClick={() => {setTheme('colorless')}}>
                    <span>Colorless</span>
                </li>
                <li onClick={() => {setTheme('glassmorphism')}}>
                    <span>Glassmorphism</span>
                </li>
                <li onClick={() => {setTheme('dark-mode')}}>
                    <span>Dark Mode</span>
                </li>
                <li onClick={() => {setTheme('immersive')}}>
                    <span>Immersive</span>
                </li>
                <li onClick={() => {setTheme('big-bold')}}>
                    <span>Big Bold Typography</span>
                </li>
                <li onClick={() => {setTheme('3d-elements')}}>
                    <span>3D Elements</span>
                </li>
            </ul>
        </nav>
    )
}

export default StyleFilter;