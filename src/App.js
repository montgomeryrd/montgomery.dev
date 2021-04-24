import { useState } from 'react';
import StyleFilter from './components/StyleFilter';
import Home from './screens/Home';
// import About from './screens/About';
// import Projects from './screens/Projects';
// import Education from './screens/Education';

import './App.css';

function App() {
	const [theme, setTheme] = useState('colorless');

	return (
		<div className="App">
			<StyleFilter theme={theme} setTheme={setTheme} />

			<Home theme={theme} />
			{/* <About theme={theme} />
			<Projects theme={theme} />
			<Education theme={theme} /> */}
		</div>
	);
}

export default App;