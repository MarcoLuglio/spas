import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TimelineSorterService {

	constructor() {
		//
	}

	numberSorter(a:any, b:any) {
		return a.date - b.date;
	}

	stringSorter(a:any, b:any) {

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
