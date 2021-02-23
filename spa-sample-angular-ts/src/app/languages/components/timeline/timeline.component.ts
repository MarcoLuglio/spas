import { Component, Input, OnInit } from '@angular/core';
import { TimelineEntry } from '../../entities/timeline-entry.entity';
import { TimelineSorterService } from './services/timeline-sorter.service';

@Component({
	selector: 'timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

	@Input() title:string = 'Timeline';

	@Input()
	get entries():Array<TimelineEntry> { return this._entries; }

	set entries(entries:Array<TimelineEntry>) {

		let sortedEntries:Array<TimelineEntry> = [];

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

	private _entries:Array<TimelineEntry> = [];

	@Input() sortBy:string = 'year';

	constructor(
		private timelineSorterService:TimelineSorterService
		) {

	}

	ngOnInit(): void {
	}

}
