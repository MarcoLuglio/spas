import { Component, Input, OnInit } from '@angular/core';
import TimelineEntryEntity from '../../entities/timeline-entry.entity';
import TimelineSorterService from '../../services/timeline-sorter.service';



// components classes must be decorated with @Component
// provide a markup tag name that uses this class
// and separated files for template and style
// or inline strings equivalents
// template: '<div>...</div>' and styles: ['div {...}', 'p {...}']
@Component({
	selector: 'timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

	// component markup attributes must be decorated with @Input
	@Input() title:string = 'Timeline';

	// for getter and setters, only one of the pair is decorated
	@Input() get entries():Array<TimelineEntryEntity> { return this._entries; }

	set entries(entries:Array<TimelineEntryEntity>) {

		let sortedEntries:Array<TimelineEntryEntity> = [];

		switch (this.sortBy) {
			case 'name':
				sortedEntries = entries.sort(this.timelineSorterService.stringSorter);
				break;
			case 'date':
				sortedEntries = entries.sort(this.timelineSorterService.numberSorter);
				break;
			default:
				sortedEntries = entries;
				break;
		}

		this._entries = sortedEntries;

	}

	@Input() sortBy:string = 'year';

	private _entries:Array<TimelineEntryEntity> = []

	constructor(
		private timelineSorterService:TimelineSorterService
		) {

	}

	// ngOnInit is part of the OnInit interface, for components lifecycle events
	ngOnInit(): void {
	}

}
