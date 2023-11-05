/** @format */

import './App.css';
import { Link } from './components/Link';
import { Navigation as PillowNavigation } from './components/pill-effect/Navigation';
import { Navigation as UnderlineNavigation } from './components/underline-effect/Navigation';
import { Navigation as ActiveNavigation } from './components/with-active-element/Navigation';

function App() {
	return (
		<>
			<UnderlineNavigation />
			<PillowNavigation />
			<ActiveNavigation />
      <Link />
		</>
	);
}

export default App;
