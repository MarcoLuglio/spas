import { stringSorterService, numberSorterService } from '../services/TimelineSorterServices'

// https://v3.vuejs.org/guide/single-file-component.html
// to use a proper class, a TypeScript project is required
export default {

	name: 'Timeline',
	// inheritAttrs: false,

	props: {
		title: {
			required: false,
			type: String,
			default: 'Timeline'
		},
		entries: Array,
		sortBy: {
			required: false,
			type: String,
			default: 'year'
		}
	},

	/*watch: {

		entries(newEntries, oldQuestion) {

			let sortedEntries = [];

			switch (this.sortBy) {
				case 'name':
					// sortedEntries = entries.sort(stringSorterService);
					sortedEntries = newEntries;
					break;
				case 'year':
					// sortedEntries = entries.sort(numberSorterService);
					sortedEntries = newEntries;
					break;
				default:
					sortedEntries = newEntries;
					break;
			}

			this._entries = sortedEntries;

			console.log('rdvb,t');
			this.title = 'h,rhqvrtxqv';

		}

	}*/

	computed: {

		sortedEntries: {

			get() {

				console.log('got');

				let sortedEntriesTemp = [];

				switch (this.sortBy) {
					case 'name':
						sortedEntriesTemp = this.entries.sort(stringSorterService);
						break;
					case 'year':
						sortedEntriesTemp = this.entries.sort(numberSorterService);
						break;
					default:
						sortedEntriesTemp = this.entries;
						break;
				}

				return sortedEntriesTemp;
				//return [];

			}

			// creating a setter for this setter throws an error!
			// So the sorting logic needs to be called on the getter...

		}

	},

	methods: {

		test() {
			return this.entries;
		}

	}

}
