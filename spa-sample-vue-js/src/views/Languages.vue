<template>
	<p>languages</p>
	<Timeline :title='timelineTitle' sortBy='name' />
</template>

<script>
import Timeline from '@/components/languages/Timeline.vue'

export default {
	name: 'Languages',
	components: {
		Timeline
	},
	data() {
		return {
			timelineTitle: 'Programming languages'
		}
	}
}
</script>
