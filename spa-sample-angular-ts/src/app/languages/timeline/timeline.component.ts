import { Component, Input, OnInit } from '@angular/core';
import { TimelineSorterService } from '../services/timeline-sorter.service';

@Component({
	selector: 'timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

	@Input() title:string = 'Timeline';

	@Input()
	get entries():Array<{ name: string; year:number }> { return this._entries; }

	set entries(entries:Array<{ name: string; year:number }>) {

		let sortedEntries:Array<{ name: string; year:number }> = [];

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

	private _entries:Array<{ name: string; year:number }> = [];

	@Input() sortBy:string = 'date';

	constructor(
		private timelineSorterService:TimelineSorterService
		) {

	}

	ngOnInit(): void {
	}

}
