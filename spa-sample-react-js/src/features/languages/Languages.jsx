import React, { useEffect } from 'react';
// import { Switch, Route, Link, useRouteMatch, useParams, useLocation } from 'react-router-dom';

// redux
// import { useSelector } from 'react-redux';
// import { selectEquipment } from './equipmentSlice';

// bootstrap react
// import { Button, Form, FormControl } from 'react-bootstrap';

// page
import Timeline from './components/Timeline';
// import './Equipment.css';



export default function Languages() {

	/*let { site } = useParams();
	site = site?.toUpperCase();

	const equipmentList = useSelector(selectEquipment);*/

	let timelineTitle = 'Programming languages';

	let timelineEntries = [
		{ name: 'Fortran', year: 1957 },
		{ name: 'Lisp', year: 1958 },
		{ name: 'Algol', year: 1958 },
		{ name: 'Cobol', year: 1959 },
		{ name: 'Simula', year: 1962 },
		{ name: 'Basic', year: 1964 },
		{ name: 'Pascal', year: 1970 },
		{ name: 'C', year: 1972 },
		{ name: 'Smalltalk 72', year: 1972 },
		{ name: 'Ada', year: 1980 },
		{ name: 'Smalltalk 80', year: 1980 },
		{ name: 'Objective-C', year: 1984 },
		{ name: 'C++', year: 1985 },
		{ name: 'Object Pascal', year: 1986 },
		{ name: 'Erlang', year: 1986 },
		{ name: 'Python', year: 1990 },
		{ name: 'Haskell', year: 1990 },
		{ name: 'Java', year: 1995 },
		{ name: 'JavaScript', year: 1995 },
		{ name: 'Php', year: 1995 },
		{ name: 'Ruby', year: 1995 },
		{ name: 'ActionScript', year: 1998 },
		{ name: 'Visual Basic 6', year: 1998 },
		{ name: 'C#', year: 2000 },
		{ name: 'F#', year: 2005 },
		{ name: 'Go', year: 2009 },
		{ name: 'Rust', year: 2010 },
		{ name: 'Kotlin', year: 2011 },
		{ name: 'Dart', year: 2011 },
		{ name: 'TypeScript', year: 2012 },
		{ name: 'Swift', year: 2014 }
	];

	// component rendering side effects use the useEffect() function
	// it cannot be called coditionally, but you can still put
	// the condition inside the callback if you need to
	useEffect(() => {
		document.title = 'Languages';
	});

	return (

		<div>
			<Timeline
				title={timelineTitle}
				entries={timelineEntries}
				sortBy='name'
				></Timeline
			>
		</div>

	);

}
