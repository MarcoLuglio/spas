import { Injectable } from '@angular/core';
import { TimelineEntry } from '../entities/timeline-entry.entity';

@Injectable({
	providedIn: 'root' // TODO change to languages, see what happens
})
export class TimelineSorterService {

	constructor() {
		//
	}

	numberSorter(a:TimelineEntry, b:TimelineEntry) {
		return a.year - b.year;
	}

	stringSorter(a:TimelineEntry, b:TimelineEntry) {

		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		return 0;

	}

}
