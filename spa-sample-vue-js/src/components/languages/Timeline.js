// https://v3.vuejs.org/guide/single-file-component.html
// to use a proper class, a TypeScript project is required
export default {

	name: 'Timeline',

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
	}

}
