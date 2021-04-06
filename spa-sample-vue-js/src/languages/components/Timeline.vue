<!-- <template> is a container tag for the markup -->
<template>
	<!--
	Vue has three differet binding syntaxes
	{{property}} is for binding properties inside text nodes
	:property is for binding properties in attributes
	and @event is for binding events also in attributes
	There are longer alternate syntaxes, but why would you
	want to use them?
	-->
	<h2>{{ title }}</h2>
	<!--
	Adding or removing elements is done with directives
	such as v-if and v-for.
	https://v3.vuejs.org/guide/conditional.html
	https://v3.vuejs.org/guide/list.html
	-->
	<ul v-if='test()'>
		<li v-for='entry in sortedEntries' :key='entry.name'>
			<!-- router-link is used for internal links -->
			<router-link :to='entry.name'>
				{{ entry.name }} - {{ entry.year }}
			</router-link>
		</li>
	</ul>
</template>

<!--
Vue documentation usually puts everything in a single file
But at least they did not forbid us from separating them
like this
-->
<script src='./Timeline.js'></script>
