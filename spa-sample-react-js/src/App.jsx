import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import './App.css';

// pages
const Languages = lazy(() => import('./features/languages/Languages'));

function App() {
	return (
		<>
			{/* routes are declarative */}
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path={'/:languages'}>
						<Languages />
					</Route>
				</Switch>
			</Suspense>
		</>
	);
}

export default App;
