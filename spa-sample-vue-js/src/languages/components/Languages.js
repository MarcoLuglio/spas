import Timeline from './Timeline.vue'

export default {
	name: 'Languages',
	components: {
		Timeline
	},
	data() {
		return {
			timelineTitle: 'Programming languages',
			timelineEntries: [
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
			]
		}
	}
}