import 'package:flutter/material.dart';
import 'package:spa_sample_flutter/SortBy.dart';
import 'package:spa_sample_flutter/entities/TimelineEntryEntity.dart';
// import 'entities/TimelineEntryEntity.dart';
// import 'SortBy.dart';

class Timeline extends StatefulWidget {

	Timeline({Key key, this.title, @required this.entries, this.sortBy}) : super(key: key);

	final String title;

	final List<TimelineEntryEntity> entries;

	final SortBy sortBy;

	@override
	_TimelineState createState() => _TimelineState();

}

class _TimelineState extends State<Timeline> {

	List<TimelineEntryEntity> _sortedEntries;

	void sort() {

		var sortedEntries = this.widget.entries;

		// setStita triggers a rebuild
		setState(() {
			_sortedEntries = sortedEntries;
		});

	}

	@override
	Widget build(BuildContext context) {
		// return Text('timeline');
		return ListView.builder(
			padding: const EdgeInsets.all(8),
			itemCount: this._sortedEntries.length,
			itemBuilder: (BuildContext context, int index) {
				var entry = this._sortedEntries[index];
				// TODO cnvert to links
				return Text('${entry.name} - ${entry.year}');
			}
		);
	}

}
