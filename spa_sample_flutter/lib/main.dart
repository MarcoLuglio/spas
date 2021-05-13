import 'package:flutter/material.dart';

// lazy loading using the deferred keyword
import 'Languages.dart' deferred as LanguagesLoader;



void main() {
	runApp(App());
}

class App extends StatelessWidget {

	@override
	Widget build(BuildContext context) {
		return MaterialApp(
			title: 'SpaSampleFlutter',
			theme: ThemeData(
				primarySwatch: Colors.blue,
			),
			routes: <String, WidgetBuilder>{
				/*
				FutureBuilder is used to display lazy loaded content
				Also notice how simple it is to provide alternate content
				while a module is loading
				*/
				'/languages': (BuildContext context) => FutureBuilder(
					future: LanguagesLoader.loadLibrary(),
					builder: (context, snapshot) {
						if (snapshot.connectionState == ConnectionState.done) {
							return LanguagesLoader.Languages();
						} else {
							return Text('Loading...');
						}
					},
				)
			},

			home: Text('home')
		);
	}
}

/*
class MyHomePage extends StatefulWidget {

	MyHomePage({Key key, this.title}) : super(key: key);

	final String title;

	@override
	_MyHomePageState createState() => _MyHomePageState();

}

class _MyHomePageState extends State<MyHomePage> {

	int _counter = 0;

	void _incrementCounter() {
		setState(() {
			_counter++;
		});
	}

	@override
	Widget build(BuildContext context) {

		return Scaffold(
			appBar: AppBar(
				title: Text(widget.title),
			),
			body: Center(
				child: Column(
					mainAxisAlignment: MainAxisAlignment.center,
					children: <Widget>[
						Text(
							'You have pushed the button this many times:',
						),
						Text(
							'$_counter',
							style: Theme.of(context).textTheme.headline4,
						),
					],
				),
			),
			floatingActionButton: FloatingActionButton(
				onPressed: _incrementCounter,
				tooltip: 'Increment',
				child: Icon(Icons.add),
			), // This trailing comma makes auto-formatting nicer for build methods.
		);
	}
}
*/
