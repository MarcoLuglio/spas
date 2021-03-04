//import TimelineEntryEntity from '../entities/TimelineEntryEntity';
import { numberSorterService, stringSorterService } from '../services/TimelineSorterServices';



export default function Timeline(props) {

	let title = 'Timeline';

	let _entries = [];

	let sortBy = 'year';

	function setEntries(entries) {

		let sortedEntries = [];

		switch (sortBy) {
			case 'name':
				sortedEntries = entries.sort(stringSorterService);
				break;
			case 'date':
				sortedEntries = entries.sort(numberSorterService);
				break;
			default:
				sortedEntries = entries;
				break;
		}

		_entries = sortedEntries;

	}

	setEntries(props.entries);

	return (
		<>
			<h2>{title}</h2>
			{ _entries.length > 0 &&
				_entries.map((entry) =>
					<li key={entry.name}>{/* Each item in a loop must have an unique identifier */}
						{entry.name} - {entry.year}
					</li>
				)
			}
		</>
	);

}