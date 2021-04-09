export default class TimelineEntryEntity {

	constructor(name:string = '', date:number = 0) {
		this.name = name;
		this.date = date;
	}

	name:string = '';
	date:number = 0;

}
