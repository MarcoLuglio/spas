import 'package:flutter/material.dart';
import 'package:spa_sample_flutter/SortBy.dart';
import 'package:spa_sample_flutter/Timeline.dart';
import 'package:spa_sample_flutter/entities/TimelineEntryEntity.dart';
// import 'Timeline.dart';

class Languages extends StatelessWidget {

	Languages({Key key, this.timelineTitle}) : super(key: key);

	final String timelineTitle;

	final List<TimelineEntryEntity> timelineEntries = [
		new TimelineEntryEntity(name: 'Fortran', year: 1957),
		new TimelineEntryEntity(name: 'Lisp', year: 1958),
		new TimelineEntryEntity(name: 'Algol', year: 1958),
		new TimelineEntryEntity(name: 'Cobol', year: 1959),
		new TimelineEntryEntity(name: 'Simula', year: 1962),
		new TimelineEntryEntity(name: 'Basic', year: 1964),
		new TimelineEntryEntity(name: 'Pascal', year: 1970),
		new TimelineEntryEntity(name: 'C', year: 1972),
		new TimelineEntryEntity(name: 'Smalltalk 72', year: 1972),
		new TimelineEntryEntity(name: 'Ada', year: 1980),
		new TimelineEntryEntity(name: 'Smalltalk 80', year: 1980),
		new TimelineEntryEntity(name: 'Objective-C', year: 1984),
		new TimelineEntryEntity(name: 'C++', year: 1985),
		new TimelineEntryEntity(name: 'Object Pascal', year: 1986),
		new TimelineEntryEntity(name: 'Erlang', year: 1986),
		new TimelineEntryEntity(name: 'Python', year: 1990),
		new TimelineEntryEntity(name: 'Haskell', year: 1990),
		new TimelineEntryEntity(name: 'Java', year: 1995),
		new TimelineEntryEntity(name: 'JavaScript', year: 1995),
		new TimelineEntryEntity(name: 'Php', year: 1995),
		new TimelineEntryEntity(name: 'Ruby', year: 1995),
		new TimelineEntryEntity(name: 'ActionScript', year: 1998),
		new TimelineEntryEntity(name: 'Visual Basic 6', year: 1998),
		new TimelineEntryEntity(name: 'C#', year: 2000),
		new TimelineEntryEntity(name: 'F#', year: 2005),
		new TimelineEntryEntity(name: 'Go', year: 2009),
		new TimelineEntryEntity(name: 'Rust', year: 2010),
		new TimelineEntryEntity(name: 'Kotlin', year: 2011),
		new TimelineEntryEntity(name: 'Dart', year: 2011),
		new TimelineEntryEntity(name: 'TypeScript', year: 2012),
		new TimelineEntryEntity(name: 'Swift', year: 2014)
	];

	@override
	Widget build(BuildContext context) {

		// TODO change page title

		return Scaffold(
			body: Timeline(
			title: 'Programming languages',
			entries: this.timelineEntries,
			sortBy: SortBy.name,
		));
	}

}
