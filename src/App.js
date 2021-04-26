import { useEffect, useState } from 'react';

import Bauhaus from './themes/Bauhaus/Bauhaus';
import './themes/Bauhaus/Bauhaus.css';
import OnWhite from './themes/OnWhite/OnWhite';
import './themes/OnWhite/OnWhite.css';
import Colorless from './themes/Colorless/Colorless';
import './themes/Colorless/Colorless.css';
import Glassmorphism from './themes/Glassmorphism/Glassmorphism';
import './themes/Glassmorphism/Glassmorphism.css';
import DarkMode from './themes/DarkMode/DarkMode';
import './themes/DarkMode/DarkMode.css';
import Immersive from './themes/Immersive/Immersive';
import './themes/Immersive/Immersive.css';
import BigBold from './themes/BigBold/BigBold';
import './themes/BigBold/BigBold.css';
import ThreeD from './themes/ThreeD/ThreeD';
import './themes/ThreeD/ThreeD.css';

import './App.css';

function App() {
	const [theme, setTheme] = useState('colorless');
	const [page, setPage] = useState('');

    useEffect(() => {
        switch(theme) {
            case 'bauhaus':
                setPage(<Bauhaus theme={theme} setTheme={setTheme} />);
                return;
            case 'on-white':
                setPage(<OnWhite theme={theme} setTheme={setTheme} />);
                return;
            case 'colorless':
                setPage(<Colorless theme={theme} setTheme={setTheme} />);
                return;
            case 'glassmorphism':
                setPage(<Glassmorphism theme={theme} setTheme={setTheme} />);
                return;
            case 'dark-mode':
                setPage(<DarkMode theme={theme} setTheme={setTheme} />);
                return;
            case 'immersive':
                setPage(<Immersive theme={theme} setTheme={setTheme} />);
                return;
            case 'big-bold':
                setPage(<BigBold theme={theme} setTheme={setTheme} />);
                return;
            case 'three-d-elements':
                setPage(<ThreeD theme={theme} setTheme={setTheme} />);
                return;
            default: break;
        }
    }, [theme]);

	return (
		<div className="App">
			{page}
		</div>
	);
}

export default App;