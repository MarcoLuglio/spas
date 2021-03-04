export function numberSorterService(a, b) {
	return a.date - b.date;
}

export function stringSorterService(a, b) {

	var nameA = a.name.toUpperCase();
	var nameB = b.name.toUpperCase();
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	return 0;

}