import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import TimelineEntryEntity from '../entities/timeline-entry.entity';



@Component({
	selector: 'app-languages',
	templateUrl: './languages.component.html',
	styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

	timelineTitle:string = 'Programming languages';

	timelineEntries:Array<TimelineEntryEntity> = [
		new TimelineEntryEntity('Fortran', 1957),
		new TimelineEntryEntity('Lisp', 1958),
		new TimelineEntryEntity('Algol', 1958),
		new TimelineEntryEntity('Cobol', 1959),
		new TimelineEntryEntity('Simula', 1962),
		new TimelineEntryEntity('Basic', 1964),
		new TimelineEntryEntity('Pascal', 1970),
		new TimelineEntryEntity('C', 1972),
		new TimelineEntryEntity('Smalltalk 72', 1972),
		new TimelineEntryEntity('Ada', 1980),
		new TimelineEntryEntity('Smalltalk 80', 1980),
		new TimelineEntryEntity('Objective-C', 1984),
		new TimelineEntryEntity('C++', 1985),
		new TimelineEntryEntity('Object Pascal', 1986),
		new TimelineEntryEntity('Erlang', 1986),
		new TimelineEntryEntity('Python', 1990),
		new TimelineEntryEntity('Haskell', 1990),
		new TimelineEntryEntity('Java', 1995),
		new TimelineEntryEntity('JavaScript', 1995),
		new TimelineEntryEntity('Php', 1995),
		new TimelineEntryEntity('Ruby', 1995),
		new TimelineEntryEntity('ActionScript', 1998),
		new TimelineEntryEntity('Visual Basic 6', 1998),
		new TimelineEntryEntity('C#', 2000),
		new TimelineEntryEntity('F#', 2005),
		new TimelineEntryEntity('Go', 2009),
		new TimelineEntryEntity('Rust', 2010),
		new TimelineEntryEntity('Kotlin', 2011),
		new TimelineEntryEntity('Dart', 2011),
		new TimelineEntryEntity('TypeScript', 2012),
		new TimelineEntryEntity('Swift', 2014)
	];

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		// Angular has a dedicated service for changing the browser title
		// allegidly to prevent issues if running angular as a native app
		// for instance
		this.titleService.setTitle('Languages');
	}

}
