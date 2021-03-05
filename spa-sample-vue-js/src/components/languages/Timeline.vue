<template>
	<p>timeline</p>
	<h2>{{ title }}</h2>
	<ul v-if='entries'>
		<li v-for='entry in entries' :key='entry.name'>
			<router-link :to='entry.name'>
				{{ entry.name }} - {{ entry.year }}
			</router-link>
		</li>
	</ul>
</template>

<script src='./Timeline.js'></script>
