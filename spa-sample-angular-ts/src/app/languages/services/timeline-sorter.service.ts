import { Injectable } from '@angular/core';
import TimelineEntryEntity from '../entities/timeline-entry.entity';



// requires a class decorated with @Injectable
// to use dependency injection
@Injectable({
	providedIn: 'root' // TODO change to languages, see what happens
})
export default class TimelineSorterService {

	constructor() {
		//
	}

	numberSorter(a:TimelineEntryEntity, b:TimelineEntryEntity):number {
		return a.year - b.year;
	}

	stringSorter(a:TimelineEntryEntity, b:TimelineEntryEntity):number {

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
